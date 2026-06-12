/* Fetches career stats for the players listed in js/data.js from
   cricketdata.org (CricAPI) and writes them to data/player-stats.json.
   Runs daily in GitHub Actions (update-stats.yml) with the CRICAPI_KEY
   secret. Stays within a strict call budget so the free tier
   (100 requests/day) is never exhausted; players it can't reach today
   are picked up on the next run. Player ids are cached in
   data/player-ids.json so lookups only cost one call ever. */

import fs from "node:fs";

const key = process.env.CRICAPI_KEY;
if (!key) {
  console.log("CRICAPI_KEY secret not set — skipping update.");
  process.exit(0);
}

// The matches workflow uses up to 16 calls/day; 80 here keeps the
// daily total safely under the free tier's 100.
const MAX_CALLS = 80;
let calls = 0;

async function api(path, params) {
  if (calls >= MAX_CALLS) throw new Error("daily call budget reached");
  calls++;
  const url = `https://api.cricapi.com/v1/${path}?apikey=${key}&` + new URLSearchParams(params);
  const res = await fetch(url);
  const json = await res.json();
  if (json.status !== "success") throw new Error(`${path}: ${json.reason || json.status}`);
  return json.data;
}

// Roster comes straight from js/data.js so there's no second list to maintain.
const src = fs.readFileSync("js/data.js", "utf8");
const roster = [...src.matchAll(/name: "([^"]+)", country: "([^"]+)", role: "([^"]+)"/g)]
  .map(m => ({ name: m[1], country: m[2], role: m[3] }));
console.log(`Roster: ${roster.length} players.`);

// Names the API knows by a different spelling.
const aliases = {
  "Danni Wyatt-Hodge": "Danielle Wyatt",
  "Nat Sciver-Brunt": "Natalie Sciver-Brunt",
  "Renuka Singh Thakur": "Renuka Singh",
  "Nigar Sultana Joty": "Nigar Sultana"
};

const idsPath = "data/player-ids.json";
const statsPath = "data/player-stats.json";
const ids = fs.existsSync(idsPath) ? JSON.parse(fs.readFileSync(idsPath, "utf8")) : {};
const out = fs.existsSync(statsPath) ? JSON.parse(fs.readFileSync(statsPath, "utf8")) : { players: {} };

function fmtOf(matchtype) {
  const t = (matchtype || "").toLowerCase();
  if (t.includes("test")) return "Test";
  if (t === "odi") return "ODI";
  if (t === "t20i" || t === "t20") return "T20I";
  return null; // ignore franchise/other types
}

// Turn the API's flat stat rows into the site's per-format blocks.
function buildBlocks(statsArr, role) {
  const raw = {};
  for (const s of statsArr || []) {
    const fmt = fmtOf(s.matchtype);
    if (!fmt) continue;
    const fn = (s.fn || "").toLowerCase();
    const k = (s.stat || "").trim().toLowerCase();
    ((raw[fmt] ||= {})[fn] ||= {})[k] = s.value;
  }
  const num = v => { const n = parseFloat(String(v).replace(/,/g, "")); return isNaN(n) ? v : n; };
  const blocks = {};
  for (const [fmt, fns] of Object.entries(raw)) {
    const bat = fns.batting || {}, bowl = fns.bowling || {};
    const b = {};
    const matches = bat.m ?? bat.mat ?? bowl.m ?? bowl.mat;
    if (matches) b.Matches = num(matches);
    const allRounder = role === "All-rounder";
    if (role !== "Bowler") {
      if (bat.runs) b.Runs = num(bat.runs);
      if (bat.avg) b.Avg = num(bat.avg);
      if (bat.sr) b.SR = num(bat.sr);
      // all-rounders trade these two slots for Wickets/Econ (cards show 6 stats)
      if (!allRounder) {
        if (bat.hs) b["High Score"] = String(bat.hs);
        const fifty = bat["50s"] ?? bat["50"], hundred = bat["100s"] ?? bat["100"];
        if (fifty !== undefined || hundred !== undefined) b["50s/100s"] = `${fifty ?? 0}/${hundred ?? 0}`;
      }
    }
    if (role === "Bowler" || allRounder) {
      const wkts = bowl.wkts ?? bowl.w, econ = bowl.econ ?? bowl.eco;
      if (wkts) b.Wickets = num(wkts);
      if (econ) b.Econ = num(econ);
      if (role === "Bowler") {
        if (bowl.bbi) b.Best = String(bowl.bbi);
        if (bowl.avg) b.Avg = num(bowl.avg);
      }
    }
    if (Object.keys(b).length >= 3) blocks[fmt] = b; // skip near-empty blocks
  }
  return blocks;
}

let updated = 0, resolved = 0, skipped = 0;
try {
  for (const p of roster) {
    if (!ids[p.name]) {
      const candidates = await api("players", { offset: 0, search: aliases[p.name] || p.name });
      const match = (candidates || []).find(c =>
        (c.country || "").toLowerCase() === p.country.toLowerCase()) || (candidates || [])[0];
      if (!match) {
        console.log(`No API record for ${p.name} — keeping manual stats.`);
        ids[p.name] = "NOT_FOUND";
        continue;
      }
      ids[p.name] = match.id;
      resolved++;
    }
    if (ids[p.name] === "NOT_FOUND") { skipped++; continue; }
    const info = await api("players_info", { id: ids[p.name] });
    const blocks = buildBlocks(info && info.stats, p.role);
    if (Object.keys(blocks).length) {
      out.players[p.name] = blocks;
      updated++;
    } else {
      console.log(`API has no usable stats for ${p.name} — keeping manual stats.`);
    }
  }
} catch (err) {
  console.log(`Stopped early (${err.message}) — progress so far is saved; next run continues.`);
}

out.updatedAt = new Date().toISOString();
fs.mkdirSync("data", { recursive: true });
fs.writeFileSync(statsPath, JSON.stringify(out, null, 2));
fs.writeFileSync(idsPath, JSON.stringify(ids, null, 2));
console.log(`Player stats: ${updated} refreshed, ${resolved} new ids, ${skipped} not on API, ${calls} API calls used.`);
