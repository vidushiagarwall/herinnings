/* Fetches women's cricket matches from cricketdata.org (CricAPI) and writes
   them to data/live.json for the site to read. Runs in GitHub Actions on a
   schedule (see .github/workflows/update-matches.yml) with the API key
   stored as the CRICAPI_KEY repository secret — never in the code. */

import fs from "node:fs";

const key = process.env.CRICAPI_KEY;
if (!key) {
  console.log("CRICAPI_KEY secret not set — skipping update.");
  process.exit(0);
}

// The API pages 25 matches at a time — fetch several pages so fixtures
// further out aren't missed. 4 pages x 4 runs/day = 16 of 100 daily requests.
const all = [];
for (const offset of [0, 25, 50, 75]) {
  const res = await fetch(`https://api.cricapi.com/v1/matches?apikey=${key}&offset=${offset}`);
  const json = await res.json();
  if (json.status !== "success" || !Array.isArray(json.data)) {
    console.error(`CricAPI error at offset ${offset}:`, json.reason || json.status);
    if (offset === 0) process.exit(1);
    break; // keep what we have from earlier pages
  }
  all.push(...json.data);
  if (json.data.length < 25) break; // no more pages
}

const seen = new Set();
const matches = all
  .filter(m => /women/i.test(m.name || "") && Array.isArray(m.teams) && m.teams.length === 2)
  .filter(m => { const k = m.name + m.date; if (seen.has(k)) return false; seen.add(k); return true; })
  .map(({ name, matchType, status, venue, date, dateTimeGMT, teams, matchEnded }) =>
    ({ name, matchType, status, venue, date, dateTimeGMT, teams, matchEnded }));

fs.mkdirSync("data", { recursive: true });
fs.writeFileSync("data/live.json", JSON.stringify(
  { updatedAt: new Date().toISOString(), matches }, null, 2));

console.log(`Wrote data/live.json with ${matches.length} women's matches.`);
