# Her Innings 🏏 — The Home of Women's Cricket

A fan website that puts women's cricket front and centre: upcoming events,
where to watch live, player stats, and match highlights — for India and the world.

## How to open the site

Just double-click `index.html` — it opens in your browser. No installation needed.

## How to update the site (important!)

**Everything lives in one file: `js/data.js`.** Open it in any text editor.

- **Add an upcoming match** → copy one block in `upcomingMatches`, change the
  teams, date, venue and streaming links. Set `involvesIndia: true` if India
  is playing (this puts it in the India tab). The `format` field drives the
  format tabs on the Events page: use `"T20I"`, `"ODI"` or `"Test"` for
  internationals — anything else (e.g. `"T20"`, `"The Hundred"`) lands in
  the Leagues tab.
- **A match finished?** → add it to `completedMatches` with the result and a
  link to the official highlights (YouTube/JioHotstar/ICC), and delete it
  from `upcomingMatches`.
- **Update player stats** → edit the numbers in `players`.
- **After any edit** → bump the `?v=` number on the css/js links in
  `index.html` (v=3 → v=4) so visitors' browsers pick up the new files.

⚠️ The current data is **sample data** — double-check all dates, stats and
links against ESPNcricinfo / ICC before promoting the site.

## How to put it online (free)

1. Create an account on [netlify.com](https://www.netlify.com) (or GitHub Pages).
2. Drag and drop this whole folder onto Netlify's "Deploy" page.
3. You get a live link you can share. Re-drag the folder whenever you update data.

## Ideas for later

- Live scores via a cricket API (e.g. CricAPI / ESPNcricinfo feeds)
- A news section and player profile pages
- Fan polls and a newsletter signup
