/* =========================================================
   HerPitch — DATA FILE
   This is the ONLY file you need to edit to update the site.
   - upcomingMatches : shows in Events (and "Next Up" on Home)
   - completedMatches: shows in Highlights
   - players         : shows in Stats
   NOTE: Sample data — verify dates, venues, stats and links
   before promoting the site, and update regularly.
   ========================================================= */

// ---------- UPCOMING EVENTS ----------
// countries: list every team involved, so country search works.
// involvesIndia: true puts it in the India tab (and highlights the card).
const upcomingMatches = [
  {
    tournament: "ICC Women's T20 World Cup 2026",
    teamA: "England", teamB: "Sri Lanka",
    countries: ["England", "Sri Lanka"],
    involvesIndia: false,
    date: "2026-06-12", time: "11:00 PM IST",
    venue: "Edgbaston, Birmingham",
    format: "T20I",
    watch: [
      { platform: "JioHotstar (India)", url: "https://www.hotstar.com" },
      { platform: "ICC.tv", url: "https://www.icc.tv" }
    ]
  },
  {
    tournament: "ICC Women's T20 World Cup 2026",
    teamA: "India", teamB: "Pakistan",
    countries: ["India", "Pakistan"],
    involvesIndia: true,
    date: "2026-06-14", time: "07:30 PM IST",
    venue: "Edgbaston, Birmingham",
    format: "T20I",
    watch: [
      { platform: "JioHotstar", url: "https://www.hotstar.com" },
      { platform: "Star Sports", url: "https://www.starsports.com" }
    ]
  },
  {
    tournament: "ICC Women's T20 World Cup 2026",
    teamA: "Australia", teamB: "New Zealand",
    countries: ["Australia", "New Zealand"],
    involvesIndia: false,
    date: "2026-06-15", time: "03:30 PM IST",
    venue: "Old Trafford, Manchester",
    format: "T20I",
    watch: [
      { platform: "JioHotstar (India)", url: "https://www.hotstar.com" },
      { platform: "ICC.tv", url: "https://www.icc.tv" }
    ]
  },
  {
    tournament: "ICC Women's T20 World Cup 2026",
    teamA: "India", teamB: "England",
    countries: ["India", "England"],
    involvesIndia: true,
    date: "2026-06-18", time: "11:00 PM IST",
    venue: "Lord's, London",
    format: "T20I",
    watch: [
      { platform: "JioHotstar", url: "https://www.hotstar.com" },
      { platform: "Star Sports", url: "https://www.starsports.com" }
    ]
  },
  {
    tournament: "ICC Women's T20 World Cup 2026",
    teamA: "South Africa", teamB: "West Indies",
    countries: ["South Africa", "West Indies"],
    involvesIndia: false,
    date: "2026-06-19", time: "07:30 PM IST",
    venue: "Headingley, Leeds",
    format: "T20I",
    watch: [
      { platform: "JioHotstar (India)", url: "https://www.hotstar.com" },
      { platform: "ICC.tv", url: "https://www.icc.tv" }
    ]
  },
  {
    tournament: "ICC Women's T20 World Cup 2026",
    teamA: "India", teamB: "Australia",
    countries: ["India", "Australia"],
    involvesIndia: true,
    date: "2026-06-22", time: "07:30 PM IST",
    venue: "The Oval, London",
    format: "T20I",
    watch: [
      { platform: "JioHotstar", url: "https://www.hotstar.com" },
      { platform: "Star Sports", url: "https://www.starsports.com" }
    ]
  },
  {
    tournament: "ICC Women's T20 World Cup 2026",
    teamA: "Bangladesh", teamB: "Sri Lanka",
    countries: ["Bangladesh", "Sri Lanka"],
    involvesIndia: false,
    date: "2026-06-24", time: "03:30 PM IST",
    venue: "Bristol County Ground, Bristol",
    format: "T20I",
    watch: [
      { platform: "ICC.tv", url: "https://www.icc.tv" }
    ]
  },
  {
    tournament: "India Women tour of Sri Lanka — 1st ODI",
    teamA: "Sri Lanka", teamB: "India",
    countries: ["Sri Lanka", "India"],
    involvesIndia: true,
    date: "2026-07-08", time: "02:30 PM IST",
    venue: "R. Premadasa Stadium, Colombo",
    format: "ODI",
    watch: [
      { platform: "JioHotstar", url: "https://www.hotstar.com" },
      { platform: "Star Sports", url: "https://www.starsports.com" }
    ]
  },
  {
    tournament: "Australia Women tour of England — 1st ODI",
    teamA: "England", teamB: "Australia",
    countries: ["England", "Australia"],
    involvesIndia: false,
    date: "2026-07-20", time: "03:30 PM IST",
    venue: "Lord's, London",
    format: "ODI",
    watch: [
      { platform: "Sky Sports (UK)", url: "https://www.skysports.com" },
      { platform: "FanCode (India)", url: "https://www.fancode.com" }
    ]
  },
  {
    tournament: "Australia Women tour of England — One-off Test",
    teamA: "England", teamB: "Australia",
    countries: ["England", "Australia"],
    involvesIndia: false,
    date: "2026-07-30", time: "03:30 PM IST",
    venue: "Trent Bridge, Nottingham",
    format: "Test",
    watch: [
      { platform: "Sky Sports (UK)", url: "https://www.skysports.com" },
      { platform: "FanCode (India)", url: "https://www.fancode.com" }
    ]
  },
  {
    tournament: "Australia Women tour of India — One-off Test",
    teamA: "India", teamB: "Australia",
    countries: ["India", "Australia"],
    involvesIndia: true,
    date: "2026-09-17", time: "09:30 AM IST",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    format: "Test",
    watch: [
      { platform: "JioHotstar", url: "https://www.hotstar.com" },
      { platform: "Star Sports", url: "https://www.starsports.com" }
    ]
  },
  {
    tournament: "The Hundred Women 2026",
    teamA: "Oval Invincibles", teamB: "London Spirit",
    countries: ["England"],
    involvesIndia: false,
    date: "2026-08-05", time: "07:30 PM IST",
    venue: "The Oval, London",
    format: "The Hundred",
    watch: [
      { platform: "FanCode (India)", url: "https://www.fancode.com" },
      { platform: "Sky Sports (UK)", url: "https://www.skysports.com" }
    ]
  },
  {
    tournament: "Women's Caribbean Premier League 2026",
    teamA: "Barbados Royals", teamB: "Trinbago Knight Riders",
    countries: ["West Indies"],
    involvesIndia: false,
    date: "2026-08-21", time: "04:30 AM IST",
    venue: "Kensington Oval, Barbados",
    format: "T20",
    watch: [
      { platform: "FanCode (India)", url: "https://www.fancode.com" }
    ]
  },
  {
    tournament: "Women's Big Bash League 2026",
    teamA: "Sydney Sixers", teamB: "Melbourne Stars",
    countries: ["Australia"],
    involvesIndia: false,
    date: "2026-11-01", time: "01:30 PM IST",
    venue: "North Sydney Oval, Sydney",
    format: "T20",
    watch: [
      { platform: "Cricket.com.au", url: "https://www.cricket.com.au" },
      { platform: "Sony LIV (India)", url: "https://www.sonyliv.com" }
    ]
  }
];

// ---------- COMPLETED MATCHES (Highlights tab) ----------
const completedMatches = [
  {
    tournament: "Women's Premier League 2026 — Final",
    teamA: "Mumbai Indians", teamB: "Delhi Capitals",
    result: "Mumbai Indians won by 8 runs",
    date: "2026-03-15",
    venue: "Brabourne Stadium, Mumbai",
    highlightUrl: "https://www.jiocinema.com",
    source: "JioHotstar"
  },
  {
    tournament: "India Women tour of England — 3rd ODI",
    teamA: "England", teamB: "India",
    result: "India won by 5 wickets",
    date: "2026-05-28",
    venue: "County Ground, Taunton",
    highlightUrl: "https://www.youtube.com/@englandcricket",
    source: "England Cricket — YouTube"
  },
  {
    tournament: "India Women tour of England — 2nd ODI",
    teamA: "England", teamB: "India",
    result: "England won by 23 runs",
    date: "2026-05-25",
    venue: "Lord's, London",
    highlightUrl: "https://www.youtube.com/@englandcricket",
    source: "England Cricket — YouTube"
  },
  {
    tournament: "Australia Women tour of South Africa — 1st T20I",
    teamA: "South Africa", teamB: "Australia",
    result: "Australia won by 6 wickets",
    date: "2026-05-18",
    venue: "Newlands, Cape Town",
    highlightUrl: "https://www.youtube.com/@cricketcomau",
    source: "Cricket Australia — YouTube"
  },
  {
    tournament: "Women's Premier League 2026 — Eliminator",
    teamA: "Royal Challengers Bengaluru", teamB: "UP Warriorz",
    result: "RCB won by 4 wickets",
    date: "2026-03-13",
    venue: "Brabourne Stadium, Mumbai",
    highlightUrl: "https://www.jiocinema.com",
    source: "JioHotstar"
  },
  {
    tournament: "ICC Women's World Cup 2025 — Final",
    teamA: "India", teamB: "South Africa",
    result: "India won — World Champions",
    date: "2025-11-02",
    venue: "DY Patil Stadium, Navi Mumbai",
    highlightUrl: "https://www.icc-cricket.com/videos",
    source: "ICC"
  }
];

// ---------- PLAYERS (Stats tab) ----------
// statsNote: career T20I stats (approximate — update before launch).
// For batters: matches / runs / average / strike rate / high score
// For bowlers: matches / wickets / economy / best bowling
const players = [
  {
    name: "Smriti Mandhana", country: "India", role: "Batter",
    note: "Elegant left-hander, India's vice-captain and run machine.",
    stats: { Matches: 150, Runs: 4100, Avg: 29.5, SR: 124.8, "High Score": "112*", "50s/100s": "28/2" }
  },
  {
    name: "Harmanpreet Kaur", country: "India", role: "All-rounder",
    note: "India's captain. Her 171* vs Australia in 2017 changed Indian women's cricket forever.",
    stats: { Matches: 175, Runs: 3600, Avg: 28.1, SR: 110.2, "High Score": "103", "50s/100s": "14/1" }
  },
  {
    name: "Shafali Verma", country: "India", role: "Batter",
    note: "Fearless opener who became the world's No. 1 T20I batter as a teenager.",
    stats: { Matches: 85, Runs: 2100, Avg: 26.0, SR: 133.5, "High Score": "81", "50s/100s": "11/0" }
  },
  {
    name: "Deepti Sharma", country: "India", role: "All-rounder",
    note: "Crafty off-spinner and dependable lower-order batter. Big-match player.",
    stats: { Matches: 120, Wickets: 130, Econ: 6.1, Best: "4/10", Runs: 1100, SR: 102.0 }
  },
  {
    name: "Jemimah Rodrigues", country: "India", role: "Batter",
    note: "Quick feet, quicker smile — the middle-order spark of this Indian side.",
    stats: { Matches: 100, Runs: 2400, Avg: 28.9, SR: 116.4, "High Score": "75", "50s/100s": "15/0" }
  },
  {
    name: "Richa Ghosh", country: "India", role: "Wicketkeeper",
    note: "Explosive finisher behind and in front of the stumps.",
    stats: { Matches: 70, Runs: 1300, Avg: 24.0, SR: 135.8, "High Score": "64*", "50s/100s": "5/0" }
  },
  {
    name: "Renuka Singh Thakur", country: "India", role: "Bowler",
    note: "Swing queen — her new-ball spells set the tone for India.",
    stats: { Matches: 55, Wickets: 70, Econ: 6.4, Best: "5/15", "4w+": 4, Runs: 30 }
  },
  {
    name: "Alyssa Healy", country: "Australia", role: "Wicketkeeper",
    note: "Australia's captain and one of the most destructive openers ever.",
    stats: { Matches: 165, Runs: 3300, Avg: 26.2, SR: 128.0, "High Score": "148*", "50s/100s": "20/2" }
  },
  {
    name: "Ellyse Perry", country: "Australia", role: "All-rounder",
    note: "Arguably the greatest all-rounder in the history of the women's game.",
    stats: { Matches: 160, Runs: 2100, Avg: 29.0, SR: 112.5, Wickets: 125, Econ: 6.0 }
  },
  {
    name: "Beth Mooney", country: "Australia", role: "Batter",
    note: "Mooney being consistent is the most reliable thing in world cricket.",
    stats: { Matches: 110, Runs: 3200, Avg: 38.5, SR: 122.0, "High Score": "117*", "50s/100s": "24/1" }
  },
  {
    name: "Nat Sciver-Brunt", country: "England", role: "All-rounder",
    note: "England's captain and the engine room of their batting.",
    stats: { Matches: 130, Runs: 2900, Avg: 28.7, SR: 121.0, Wickets: 85, Econ: 7.2 }
  },
  {
    name: "Sophie Ecclestone", country: "England", role: "Bowler",
    note: "World No. 1 T20I bowler for years — left-arm spin at its finest.",
    stats: { Matches: 100, Wickets: 140, Econ: 5.9, Best: "4/13", "4w+": 5, Runs: 200 }
  },
  {
    name: "Laura Wolvaardt", country: "South Africa", role: "Batter",
    note: "South Africa's captain — owner of the most beautiful cover drive in cricket.",
    stats: { Matches: 95, Runs: 2700, Avg: 32.0, SR: 112.8, "High Score": "102", "50s/100s": "19/1" }
  },
  {
    name: "Chamari Athapaththu", country: "Sri Lanka", role: "All-rounder",
    note: "Sri Lanka's captain and a one-woman army with the bat.",
    stats: { Matches: 130, Runs: 3400, Avg: 27.9, SR: 117.0, "High Score": "80*", Wickets: 45 }
  },
  {
    name: "Hayley Matthews", country: "West Indies", role: "All-rounder",
    note: "West Indies captain — opens the batting AND the bowling.",
    stats: { Matches: 115, Runs: 2800, Avg: 27.0, SR: 113.4, Wickets: 100, Econ: 6.3 }
  },
  {
    name: "Sophie Devine", country: "New Zealand", role: "All-rounder",
    note: "One of the cleanest strikers of a cricket ball, full stop.",
    stats: { Matches: 140, Runs: 3700, Avg: 30.1, SR: 122.5, Wickets: 110, Econ: 6.8 }
  },
  {
    name: "Amelia Kerr", country: "New Zealand", role: "All-rounder",
    note: "Leg-spinning prodigy — player of the tournament at the 2024 T20 World Cup.",
    stats: { Matches: 100, Wickets: 110, Econ: 6.2, Best: "5/17", Runs: 1800, Avg: 27.5 }
  },
  {
    name: "Nida Dar", country: "Pakistan", role: "All-rounder",
    note: "Pakistan's most-capped player and a pioneer of the game there.",
    stats: { Matches: 145, Runs: 2300, Avg: 22.0, SR: 105.0, Wickets: 140, Econ: 6.5 }
  },
  {
    name: "Nigar Sultana Joty", country: "Bangladesh", role: "Wicketkeeper",
    note: "Bangladesh's captain and the heartbeat of their batting line-up.",
    stats: { Matches: 100, Runs: 1900, Avg: 24.5, SR: 98.0, "High Score": "64*", "50s/100s": "9/0" }
  },
  {
    name: "Orla Prendergast", country: "Ireland", role: "All-rounder",
    note: "Ireland's brightest star — pace, power and presence.",
    stats: { Matches: 70, Runs: 1500, Avg: 25.0, SR: 118.0, Wickets: 55, Econ: 6.7 }
  }
];
