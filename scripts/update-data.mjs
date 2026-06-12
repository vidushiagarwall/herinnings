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

const res = await fetch(`https://api.cricapi.com/v1/matches?apikey=${key}&offset=0`);
const json = await res.json();
if (json.status !== "success" || !Array.isArray(json.data)) {
  console.error("CricAPI error:", json.reason || json.status);
  process.exit(1);
}

const matches = json.data
  .filter(m => /women/i.test(m.name || "") && Array.isArray(m.teams) && m.teams.length === 2)
  .map(({ name, matchType, status, venue, date, dateTimeGMT, teams, matchEnded }) =>
    ({ name, matchType, status, venue, date, dateTimeGMT, teams, matchEnded }));

fs.mkdirSync("data", { recursive: true });
fs.writeFileSync("data/live.json", JSON.stringify(
  { updatedAt: new Date().toISOString(), matches }, null, 2));

console.log(`Wrote data/live.json with ${matches.length} women's matches.`);
