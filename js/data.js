/* =========================================================
   Her Innings — DATA FILE
   This is the ONLY file you need to edit to update the site.
   - upcomingMatches : shows in Events (and "Next Up" on Home)
   - completedMatches: shows in Highlights
   - players         : shows in Stats
   NOTE: Sample data — verify dates, venues, stats and links
   before promoting the site, and update regularly.
   ========================================================= */

// NOTE: when live data is enabled (see README — "Automatic match updates"),
// a GitHub Action refreshes data/live.json four times a day and the site
// shows that instead. The lists below are the fallback.

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
// Stats are organised by format so the page can flip between T20I / ODI / Test.
// Numbers are approximate career figures — verify against ESPNcricinfo before launch.
// Omit a format key (e.g. no Test) for players who haven't played that format.
const players = [

  // ================= INDIA =================
  {
    name: "Harmanpreet Kaur", country: "India", role: "All-rounder",
    note: "India's captain. Her 171* vs Australia in 2017 changed Indian women's cricket forever.",
    stats: {
      T20I: { Matches: 180, Runs: 3700, Avg: 28.3, SR: 110.5, "High Score": "103", "50s/100s": "15/1" },
      ODI:  { Matches: 150, Runs: 4300, Avg: 38.0, SR: 83.4, "High Score": "171*", "50s/100s": "21/7" },
      Test: { Matches: 6, Runs: 240, Avg: 24.0, "High Score": "69", Wickets: 9 }
    }
  },
  {
    name: "Smriti Mandhana", country: "India", role: "Batter",
    note: "Elegant left-hander, India's vice-captain and run machine.",
    stats: {
      T20I: { Matches: 155, Runs: 4200, Avg: 29.6, SR: 125.1, "High Score": "112*", "50s/100s": "29/2" },
      ODI:  { Matches: 115, Runs: 5000, Avg: 46.5, SR: 90.2, "High Score": "136", "50s/100s": "34/11" },
      Test: { Matches: 8, Runs: 620, Avg: 41.3, "High Score": "149", "50s/100s": "3/2" }
    }
  },
  {
    name: "Shafali Verma", country: "India", role: "Batter",
    note: "Fearless opener who became the world's No. 1 T20I batter as a teenager.",
    stats: {
      T20I: { Matches: 90, Runs: 2250, Avg: 26.2, SR: 134.0, "High Score": "81", "50s/100s": "12/0" },
      ODI:  { Matches: 35, Runs: 1100, Avg: 33.0, SR: 95.5, "High Score": "87", "50s/100s": "8/0" },
      Test: { Matches: 6, Runs: 450, Avg: 40.9, "High Score": "205", "50s/100s": "1/1" }
    }
  },
  {
    name: "Jemimah Rodrigues", country: "India", role: "Batter",
    note: "Quick feet, quicker smile — the middle-order spark of this Indian side.",
    stats: {
      T20I: { Matches: 105, Runs: 2500, Avg: 29.0, SR: 117.0, "High Score": "75", "50s/100s": "16/0" },
      ODI:  { Matches: 50, Runs: 1500, Avg: 35.5, SR: 82.0, "High Score": "127*", "50s/100s": "9/1" }
    }
  },
  {
    name: "Richa Ghosh", country: "India", role: "Wicketkeeper",
    note: "Explosive finisher behind and in front of the stumps.",
    stats: {
      T20I: { Matches: 75, Runs: 1400, Avg: 24.5, SR: 136.0, "High Score": "64*", "50s/100s": "6/0" },
      ODI:  { Matches: 40, Runs: 950, Avg: 30.0, SR: 100.5, "High Score": "96", "50s/100s": "5/0" }
    }
  },
  {
    name: "Deepti Sharma", country: "India", role: "All-rounder",
    note: "Crafty off-spinner and dependable lower-order batter. Big-match player.",
    stats: {
      T20I: { Matches: 125, Wickets: 135, Econ: 6.1, Best: "4/10", Runs: 1150, SR: 103.0 },
      ODI:  { Matches: 105, Wickets: 130, Econ: 4.3, Best: "6/20", Runs: 2200, Avg: 35.0 },
      Test: { Matches: 7, Wickets: 25, Avg: 18.5, Best: "5/7", Runs: 350 }
    }
  },
  {
    name: "Renuka Singh Thakur", country: "India", role: "Bowler",
    note: "Swing queen — her new-ball spells set the tone for India.",
    stats: {
      T20I: { Matches: 60, Wickets: 75, Econ: 6.4, Best: "5/15", "4w+": 4 },
      ODI:  { Matches: 35, Wickets: 55, Econ: 4.8, Best: "5/29", "4w+": 3 },
      Test: { Matches: 2, Wickets: 6, Avg: 22.0, Best: "3/26" }
    }
  },
  {
    name: "Pooja Vastrakar", country: "India", role: "All-rounder",
    note: "Hits the deck hard with the ball and hits it harder with the bat.",
    stats: {
      T20I: { Matches: 65, Wickets: 55, Econ: 7.0, Best: "4/15", Runs: 450, SR: 120.0 },
      ODI:  { Matches: 45, Wickets: 50, Econ: 5.0, Best: "4/34", Runs: 600, Avg: 22.0 },
      Test: { Matches: 5, Wickets: 12, Avg: 25.0, Best: "3/49", Runs: 150 }
    }
  },
  {
    name: "Sneh Rana", country: "India", role: "All-rounder",
    note: "Off-spin, grit, and an unbeaten Test fifty on comeback — a fighter's cricketer.",
    stats: {
      T20I: { Matches: 35, Wickets: 30, Econ: 6.6, Best: "3/9", Runs: 150 },
      ODI:  { Matches: 40, Wickets: 45, Econ: 4.6, Best: "4/31", Runs: 350, Avg: 20.0 },
      Test: { Matches: 5, Wickets: 18, Avg: 20.0, Best: "8/77", Runs: 220 }
    }
  },
  {
    name: "Radha Yadav", country: "India", role: "Bowler",
    note: "Left-arm spin and some of the best fielding in the world game.",
    stats: {
      T20I: { Matches: 90, Wickets: 95, Econ: 6.2, Best: "5/16", "4w+": 3 },
      ODI:  { Matches: 20, Wickets: 20, Econ: 4.9, Best: "3/35" }
    }
  },
  {
    name: "Shreyanka Patil", country: "India", role: "Bowler",
    note: "WPL-bred off-spinner with a big-stage temperament.",
    stats: {
      T20I: { Matches: 25, Wickets: 30, Econ: 6.5, Best: "4/12", "4w+": 2 },
      ODI:  { Matches: 8, Wickets: 10, Econ: 5.0, Best: "3/30" }
    }
  },
  {
    name: "Titas Sadhu", country: "India", role: "Bowler",
    note: "Ice-cool seamer — player of the final at the inaugural U19 World Cup.",
    stats: {
      T20I: { Matches: 20, Wickets: 22, Econ: 6.3, Best: "4/17" },
      ODI:  { Matches: 10, Wickets: 12, Econ: 4.7, Best: "3/21" }
    }
  },
  {
    name: "Harleen Deol", country: "India", role: "Batter",
    note: "Elegant top-order batter — and that boundary catch lives rent-free in every fan's head.",
    stats: {
      T20I: { Matches: 30, Runs: 500, Avg: 22.0, SR: 105.0, "High Score": "52" },
      ODI:  { Matches: 25, Runs: 750, Avg: 35.0, SR: 78.0, "High Score": "115", "50s/100s": "5/1" }
    }
  },
  {
    name: "Yastika Bhatia", country: "India", role: "Wicketkeeper",
    note: "Left-handed keeper-batter who gives India top-order options.",
    stats: {
      T20I: { Matches: 35, Runs: 600, Avg: 20.0, SR: 108.0, "High Score": "57" },
      ODI:  { Matches: 30, Runs: 850, Avg: 30.5, SR: 80.0, "High Score": "64", "50s/100s": "6/0" },
      Test: { Matches: 3, Runs: 120, Avg: 24.0, "High Score": "66" }
    }
  },
  {
    name: "Arundhati Reddy", country: "India", role: "Bowler",
    note: "Skiddy seam bowling and late-order hitting off the bench strength conveyor belt.",
    stats: {
      T20I: { Matches: 40, Wickets: 35, Econ: 7.1, Best: "3/19", Runs: 200 },
      ODI:  { Matches: 12, Wickets: 12, Econ: 5.2, Best: "3/26" }
    }
  },

  // ================= AUSTRALIA =================
  {
    name: "Alyssa Healy", country: "Australia", role: "Wicketkeeper",
    note: "Australia's captain and one of the most destructive openers ever.",
    stats: {
      T20I: { Matches: 170, Runs: 3400, Avg: 26.4, SR: 128.5, "High Score": "148*", "50s/100s": "21/2" },
      ODI:  { Matches: 120, Runs: 3500, Avg: 33.5, SR: 99.0, "High Score": "170", "50s/100s": "17/7" },
      Test: { Matches: 9, Runs: 350, Avg: 25.0, "High Score": "70" }
    }
  },
  {
    name: "Ellyse Perry", country: "Australia", role: "All-rounder",
    note: "Arguably the greatest all-rounder in the history of the women's game.",
    stats: {
      T20I: { Matches: 165, Runs: 2200, Avg: 29.5, SR: 113.0, Wickets: 130, Econ: 6.0 },
      ODI:  { Matches: 160, Runs: 4200, Avg: 50.5, Wickets: 170, Econ: 4.2 },
      Test: { Matches: 13, Runs: 850, Avg: 47.0, "High Score": "213*", Wickets: 40 }
    }
  },
  {
    name: "Beth Mooney", country: "Australia", role: "Batter",
    note: "Mooney being consistent is the most reliable thing in world cricket.",
    stats: {
      T20I: { Matches: 115, Runs: 3300, Avg: 38.8, SR: 122.5, "High Score": "117*", "50s/100s": "25/1" },
      ODI:  { Matches: 85, Runs: 3100, Avg: 46.0, SR: 88.0, "High Score": "133", "50s/100s": "20/5" },
      Test: { Matches: 7, Runs: 400, Avg: 36.5, "High Score": "85" }
    }
  },
  {
    name: "Tahlia McGrath", country: "Australia", role: "All-rounder",
    note: "Walked into the world's best team and made the No. 4 spot her own.",
    stats: {
      T20I: { Matches: 80, Runs: 1700, Avg: 32.0, SR: 130.0, Wickets: 35, Econ: 6.8 },
      ODI:  { Matches: 50, Runs: 1300, Avg: 36.0, Wickets: 40, Econ: 4.9 },
      Test: { Matches: 4, Runs: 180, Avg: 30.0, Wickets: 6 }
    }
  },
  {
    name: "Ashleigh Gardner", country: "Australia", role: "All-rounder",
    note: "Off-spin that wins World Cups and power hitting that empties bars.",
    stats: {
      T20I: { Matches: 115, Wickets: 110, Econ: 6.6, Runs: 1800, SR: 130.5, Best: "4/16" },
      ODI:  { Matches: 75, Wickets: 90, Econ: 4.7, Runs: 1500, Avg: 32.0 },
      Test: { Matches: 6, Wickets: 23, Avg: 21.0, Best: "8/66", Runs: 250 }
    }
  },
  {
    name: "Annabel Sutherland", country: "Australia", role: "All-rounder",
    note: "Test double-centurion at 22 — the future of Australian cricket, already here.",
    stats: {
      T20I: { Matches: 55, Wickets: 40, Econ: 7.0, Runs: 600, SR: 125.0 },
      ODI:  { Matches: 45, Wickets: 55, Econ: 4.8, Runs: 900, Avg: 35.0 },
      Test: { Matches: 5, Runs: 450, Avg: 64.0, "High Score": "210", Wickets: 12 }
    }
  },
  {
    name: "Phoebe Litchfield", country: "Australia", role: "Batter",
    note: "Reverse-sweeps pace bowlers for fun. Generational left-hander.",
    stats: {
      T20I: { Matches: 40, Runs: 800, Avg: 26.5, SR: 126.0, "High Score": "70" },
      ODI:  { Matches: 35, Runs: 1250, Avg: 41.5, SR: 92.0, "High Score": "119", "50s/100s": "8/2" }
    }
  },
  {
    name: "Grace Harris", country: "Australia", role: "Batter",
    note: "The most feared six-hitter in every franchise league on earth.",
    stats: {
      T20I: { Matches: 60, Runs: 1100, Avg: 25.0, SR: 145.0, "High Score": "64*" },
      ODI:  { Matches: 15, Runs: 350, Avg: 27.0, SR: 105.0, "High Score": "75" }
    }
  },
  {
    name: "Georgia Wareham", country: "Australia", role: "All-rounder",
    note: "Leg-spin, lasers from the deep, and late-innings fireworks.",
    stats: {
      T20I: { Matches: 85, Wickets: 70, Econ: 6.7, Best: "3/11", Runs: 400, SR: 135.0 },
      ODI:  { Matches: 40, Wickets: 45, Econ: 4.9, Best: "4/27", Runs: 300 }
    }
  },
  {
    name: "Alana King", country: "Australia", role: "Bowler",
    note: "Old-school leggie with a googly that embarrasses the best.",
    stats: {
      T20I: { Matches: 55, Wickets: 60, Econ: 6.3, Best: "4/15", "4w+": 2 },
      ODI:  { Matches: 35, Wickets: 50, Econ: 4.5, Best: "5/33", "4w+": 3 },
      Test: { Matches: 4, Wickets: 14, Avg: 23.0, Best: "4/45" }
    }
  },
  {
    name: "Megan Schutt", country: "Australia", role: "Bowler",
    note: "Swing, smarts and 300-plus international wickets of know-how.",
    stats: {
      T20I: { Matches: 140, Wickets: 160, Econ: 6.4, Best: "4/18", "4w+": 5 },
      ODI:  { Matches: 110, Wickets: 170, Econ: 4.6, Best: "5/19", "4w+": 7 },
      Test: { Matches: 5, Wickets: 12, Avg: 30.0, Best: "3/40" }
    }
  },
  {
    name: "Darcie Brown", country: "Australia", role: "Bowler",
    note: "Raw pace — regularly the fastest bowler on either side.",
    stats: {
      T20I: { Matches: 40, Wickets: 40, Econ: 7.2, Best: "3/8" },
      ODI:  { Matches: 35, Wickets: 55, Econ: 5.1, Best: "4/26", "4w+": 2 }
    }
  },
  {
    name: "Kim Garth", country: "Australia", role: "Bowler",
    note: "From Dublin to Melbourne — seam bowling precision personified.",
    stats: {
      T20I: { Matches: 45, Wickets: 45, Econ: 6.5, Best: "3/13" },
      ODI:  { Matches: 30, Wickets: 40, Econ: 4.4, Best: "5/22" }
    }
  },

  // ================= ENGLAND =================
  {
    name: "Nat Sciver-Brunt", country: "England", role: "All-rounder",
    note: "England's captain and the engine room of their batting.",
    stats: {
      T20I: { Matches: 135, Runs: 3000, Avg: 29.0, SR: 121.5, Wickets: 90, Econ: 7.2 },
      ODI:  { Matches: 110, Runs: 4000, Avg: 46.0, SR: 95.0, "High Score": "148*", Wickets: 75 },
      Test: { Matches: 9, Runs: 500, Avg: 38.0, "High Score": "88", Wickets: 15 }
    }
  },
  {
    name: "Heather Knight", country: "England", role: "Batter",
    note: "Led England for nearly a decade — calm, classy, complete.",
    stats: {
      T20I: { Matches: 120, Runs: 2200, Avg: 25.5, SR: 110.0, "High Score": "108*", "50s/100s": "10/1" },
      ODI:  { Matches: 145, Runs: 4400, Avg: 38.5, SR: 80.0, "High Score": "106", "50s/100s": "30/3" },
      Test: { Matches: 12, Runs: 700, Avg: 35.0, "High Score": "168*", "50s/100s": "3/2" }
    }
  },
  {
    name: "Sophie Ecclestone", country: "England", role: "Bowler",
    note: "World No. 1 bowler for years — left-arm spin at its finest.",
    stats: {
      T20I: { Matches: 105, Wickets: 145, Econ: 5.9, Best: "4/13", "4w+": 5 },
      ODI:  { Matches: 80, Wickets: 135, Econ: 4.2, Best: "6/36", "4w+": 8 },
      Test: { Matches: 8, Wickets: 30, Avg: 22.0, Best: "10/192 (match)" }
    }
  },
  {
    name: "Sophia Dunkley", country: "England", role: "Batter",
    note: "First Black woman to play Tests for England — and a white-ball dynamo.",
    stats: {
      T20I: { Matches: 75, Runs: 1500, Avg: 25.0, SR: 122.0, "High Score": "76" },
      ODI:  { Matches: 45, Runs: 1200, Avg: 33.0, SR: 88.0, "High Score": "107", "50s/100s": "7/1" },
      Test: { Matches: 3, Runs: 130, Avg: 32.5, "High Score": "74*" }
    }
  },
  {
    name: "Alice Capsey", country: "England", role: "All-rounder",
    note: "Played a T20 World Cup before her 18th birthday. Fears nothing.",
    stats: {
      T20I: { Matches: 60, Runs: 1000, Avg: 21.0, SR: 128.0, Wickets: 25, Econ: 7.0 },
      ODI:  { Matches: 30, Runs: 600, Avg: 25.0, SR: 95.0, Wickets: 15 }
    }
  },
  {
    name: "Amy Jones", country: "England", role: "Wicketkeeper",
    note: "Lightning glovework and a decade of service behind the stumps.",
    stats: {
      T20I: { Matches: 120, Runs: 1900, Avg: 22.5, SR: 115.0, "High Score": "89" },
      ODI:  { Matches: 90, Runs: 2200, Avg: 31.0, SR: 87.0, "High Score": "94", "50s/100s": "12/0" },
      Test: { Matches: 6, Runs: 200, Avg: 22.0, "High Score": "64" }
    }
  },
  {
    name: "Danni Wyatt-Hodge", country: "England", role: "Batter",
    note: "England's most experienced T20 opener — still hitting the first ball for four.",
    stats: {
      T20I: { Matches: 175, Runs: 3300, Avg: 23.5, SR: 124.0, "High Score": "124", "50s/100s": "18/2" },
      ODI:  { Matches: 75, Runs: 1800, Avg: 28.0, SR: 95.0, "High Score": "129", "50s/100s": "9/3" }
    }
  },
  {
    name: "Charlie Dean", country: "England", role: "All-rounder",
    note: "Off-spin with flight, dip and a smile — England's spin future.",
    stats: {
      T20I: { Matches: 35, Wickets: 35, Econ: 6.9, Best: "3/19", Runs: 150 },
      ODI:  { Matches: 45, Wickets: 70, Econ: 4.8, Best: "5/31", "4w+": 4, Runs: 400 },
      Test: { Matches: 3, Wickets: 10, Avg: 25.0, Best: "4/68" }
    }
  },
  {
    name: "Sarah Glenn", country: "England", role: "Bowler",
    note: "Leg-spin built for the powerplay-to-death squeeze.",
    stats: {
      T20I: { Matches: 85, Wickets: 95, Econ: 6.1, Best: "4/12", "4w+": 3 },
      ODI:  { Matches: 35, Wickets: 45, Econ: 4.7, Best: "4/18" }
    }
  },
  {
    name: "Lauren Bell", country: "England", role: "Bowler",
    note: "Tall, fast and swinging it both ways with the new ball.",
    stats: {
      T20I: { Matches: 50, Wickets: 50, Econ: 6.8, Best: "4/12" },
      ODI:  { Matches: 35, Wickets: 50, Econ: 4.9, Best: "5/37", "4w+": 2 },
      Test: { Matches: 4, Wickets: 12, Avg: 26.0, Best: "4/64" }
    }
  },
  {
    name: "Lauren Filer", country: "England", role: "Bowler",
    note: "Bowls 80mph spells that change the temperature of a match.",
    stats: {
      T20I: { Matches: 25, Wickets: 25, Econ: 7.3, Best: "3/15" },
      ODI:  { Matches: 20, Wickets: 28, Econ: 5.2, Best: "4/30" },
      Test: { Matches: 3, Wickets: 9, Avg: 28.0, Best: "3/55" }
    }
  },
  {
    name: "Tammy Beaumont", country: "England", role: "Batter",
    note: "Double Test centurion and white-ball World Cup winner.",
    stats: {
      T20I: { Matches: 120, Runs: 2300, Avg: 22.5, SR: 110.0, "High Score": "116", "50s/100s": "13/1" },
      ODI:  { Matches: 110, Runs: 3800, Avg: 40.0, SR: 90.0, "High Score": "168*", "50s/100s": "23/9" },
      Test: { Matches: 8, Runs: 550, Avg: 39.0, "High Score": "208", "50s/100s": "2/2" }
    }
  },
  {
    name: "Maia Bouchier", country: "England", role: "Batter",
    note: "Top-order strokes straight off the coaching manual.",
    stats: {
      T20I: { Matches: 40, Runs: 700, Avg: 24.0, SR: 120.0, "High Score": "91*" },
      ODI:  { Matches: 20, Runs: 600, Avg: 35.0, SR: 92.0, "High Score": "100*", "50s/100s": "3/1" }
    }
  },

  // ================= SOUTH AFRICA =================
  {
    name: "Laura Wolvaardt", country: "South Africa", role: "Batter",
    note: "South Africa's captain — owner of the most beautiful cover drive in cricket.",
    stats: {
      T20I: { Matches: 100, Runs: 2800, Avg: 32.5, SR: 113.0, "High Score": "102", "50s/100s": "20/1" },
      ODI:  { Matches: 115, Runs: 4600, Avg: 45.0, SR: 84.0, "High Score": "184*", "50s/100s": "32/9" },
      Test: { Matches: 3, Runs: 220, Avg: 44.0, "High Score": "122" }
    }
  },
  {
    name: "Tazmin Brits", country: "South Africa", role: "Batter",
    note: "Olympic-javelin-thrower-turned-opener with a hundred-hitting habit.",
    stats: {
      T20I: { Matches: 60, Runs: 1600, Avg: 30.0, SR: 115.0, "High Score": "101*", "50s/100s": "10/1" },
      ODI:  { Matches: 40, Runs: 1500, Avg: 40.0, SR: 85.0, "High Score": "132", "50s/100s": "8/4" }
    }
  },
  {
    name: "Anneke Bosch", country: "South Africa", role: "All-rounder",
    note: "Her semi-final blitz vs Australia in 2024 announced her to the world.",
    stats: {
      T20I: { Matches: 50, Runs: 900, Avg: 24.0, SR: 118.0, "High Score": "74*", Wickets: 15 },
      ODI:  { Matches: 30, Runs: 700, Avg: 28.0, SR: 80.0, Wickets: 12 }
    }
  },
  {
    name: "Sune Luus", country: "South Africa", role: "All-rounder",
    note: "Led the Proteas to a home World Cup final — leg-spin and grit.",
    stats: {
      T20I: { Matches: 130, Runs: 1900, Avg: 23.0, SR: 105.0, Wickets: 70, Econ: 6.8 },
      ODI:  { Matches: 110, Runs: 2600, Avg: 32.0, Wickets: 90, Econ: 5.0 },
      Test: { Matches: 3, Runs: 150, Avg: 30.0, Wickets: 4 }
    }
  },
  {
    name: "Marizanne Kapp", country: "South Africa", role: "All-rounder",
    note: "The fiercest competitor in the women's game. New-ball artist, top-order rock.",
    stats: {
      T20I: { Matches: 140, Wickets: 125, Econ: 6.1, Runs: 1800, SR: 112.0, Best: "4/9" },
      ODI:  { Matches: 145, Wickets: 175, Econ: 4.3, Runs: 3300, Avg: 33.0 },
      Test: { Matches: 4, Runs: 250, Avg: 41.0, "High Score": "150", Wickets: 11 }
    }
  },
  {
    name: "Chloe Tryon", country: "South Africa", role: "All-rounder",
    note: "Has been clearing ropes for the Proteas since she was 17.",
    stats: {
      T20I: { Matches: 110, Runs: 1500, Avg: 21.0, SR: 130.0, Wickets: 40, Econ: 7.0 },
      ODI:  { Matches: 90, Runs: 1700, Avg: 27.0, SR: 100.0, Wickets: 45 }
    }
  },
  {
    name: "Nadine de Klerk", country: "South Africa", role: "All-rounder",
    note: "Death-overs hitting and clever medium pace — the modern finisher package.",
    stats: {
      T20I: { Matches: 65, Runs: 700, Avg: 20.0, SR: 128.0, Wickets: 45, Econ: 7.1 },
      ODI:  { Matches: 45, Runs: 800, Avg: 26.0, Wickets: 40, Econ: 5.2 }
    }
  },
  {
    name: "Sinalo Jafta", country: "South Africa", role: "Wicketkeeper",
    note: "Energy behind the stumps and the Proteas' dressing-room heartbeat.",
    stats: {
      T20I: { Matches: 50, Runs: 450, Avg: 16.0, SR: 100.0, "High Score": "42" },
      ODI:  { Matches: 35, Runs: 500, Avg: 22.0, SR: 75.0, "High Score": "63" }
    }
  },
  {
    name: "Ayabonga Khaka", country: "South Africa", role: "Bowler",
    note: "Relentless line-and-length seam — the quiet wicket accumulator.",
    stats: {
      T20I: { Matches: 80, Wickets: 75, Econ: 6.5, Best: "4/15" },
      ODI:  { Matches: 95, Wickets: 130, Econ: 4.5, Best: "5/26", "4w+": 6 }
    }
  },
  {
    name: "Nonkululeko Mlaba", country: "South Africa", role: "Bowler",
    note: "Left-arm spin that turned the 2024 T20 World Cup on its head.",
    stats: {
      T20I: { Matches: 65, Wickets: 70, Econ: 6.2, Best: "4/29", "4w+": 2 },
      ODI:  { Matches: 30, Wickets: 35, Econ: 4.8, Best: "4/35" }
    }
  },
  {
    name: "Masabata Klaas", country: "South Africa", role: "Bowler",
    note: "Skilful seamer with a hat-trick to her name.",
    stats: {
      T20I: { Matches: 55, Wickets: 50, Econ: 6.9, Best: "3/16" },
      ODI:  { Matches: 60, Wickets: 70, Econ: 4.9, Best: "4/29" }
    }
  },
  {
    name: "Annerie Dercksen", country: "South Africa", role: "All-rounder",
    note: "The next big thing in Proteas cricket — bat, ball and athleticism.",
    stats: {
      T20I: { Matches: 30, Runs: 450, Avg: 22.0, SR: 116.0, Wickets: 10 },
      ODI:  { Matches: 20, Runs: 400, Avg: 26.0, Wickets: 8 }
    }
  },

  // ================= PAKISTAN =================
  {
    name: "Fatima Sana", country: "Pakistan", role: "All-rounder",
    note: "Pakistan's young captain — genuine pace and fearless hitting.",
    stats: {
      T20I: { Matches: 70, Wickets: 70, Econ: 6.9, Runs: 700, SR: 115.0, Best: "4/13" },
      ODI:  { Matches: 50, Wickets: 65, Econ: 5.0, Runs: 800, Avg: 24.0 }
    }
  },
  {
    name: "Nida Dar", country: "Pakistan", role: "All-rounder",
    note: "Pakistan's most-capped player and a pioneer of the game there.",
    stats: {
      T20I: { Matches: 150, Runs: 2400, Avg: 22.0, SR: 105.0, Wickets: 145, Econ: 6.5 },
      ODI:  { Matches: 110, Runs: 1900, Avg: 25.0, Wickets: 105, Econ: 4.6 }
    }
  },
  {
    name: "Muneeba Ali", country: "Pakistan", role: "Wicketkeeper",
    note: "First Pakistani woman with a T20 World Cup century.",
    stats: {
      T20I: { Matches: 75, Runs: 1500, Avg: 22.0, SR: 102.0, "High Score": "102", "50s/100s": "8/1" },
      ODI:  { Matches: 35, Runs: 900, Avg: 27.0, SR: 70.0, "High Score": "92" }
    }
  },
  {
    name: "Sidra Amin", country: "Pakistan", role: "Batter",
    note: "Pakistan's ODI run-bank — patient, organised, relentless.",
    stats: {
      T20I: { Matches: 40, Runs: 700, Avg: 20.0, SR: 95.0, "High Score": "63" },
      ODI:  { Matches: 70, Runs: 2200, Avg: 35.0, SR: 68.0, "High Score": "176*", "50s/100s": "14/3" }
    }
  },
  {
    name: "Aliya Riaz", country: "Pakistan", role: "All-rounder",
    note: "Finisher with the bat, partnership-breaker with the ball.",
    stats: {
      T20I: { Matches: 110, Runs: 1300, Avg: 20.0, SR: 102.0, Wickets: 50, Econ: 6.8 },
      ODI:  { Matches: 85, Runs: 1500, Avg: 26.0, Wickets: 55, Econ: 4.9 }
    }
  },
  {
    name: "Sadia Iqbal", country: "Pakistan", role: "Bowler",
    note: "World-class left-arm spin — regularly top-3 in the T20I rankings.",
    stats: {
      T20I: { Matches: 60, Wickets: 70, Econ: 5.7, Best: "4/16", "4w+": 3 },
      ODI:  { Matches: 30, Wickets: 35, Econ: 4.4, Best: "4/27" }
    }
  },
  {
    name: "Nashra Sandhu", country: "Pakistan", role: "Bowler",
    note: "Loop and guile — left-arm spin from the old school.",
    stats: {
      T20I: { Matches: 70, Wickets: 65, Econ: 6.0, Best: "3/12" },
      ODI:  { Matches: 60, Wickets: 80, Econ: 4.3, Best: "5/17", "4w+": 4 }
    }
  },
  {
    name: "Diana Baig", country: "Pakistan", role: "Bowler",
    note: "Football international turned new-ball spearhead.",
    stats: {
      T20I: { Matches: 75, Wickets: 60, Econ: 6.6, Best: "3/14" },
      ODI:  { Matches: 55, Wickets: 65, Econ: 4.8, Best: "4/34" }
    }
  },
  {
    name: "Omaima Sohail", country: "Pakistan", role: "All-rounder",
    note: "Top-order batter who chips in with handy off-spin.",
    stats: {
      T20I: { Matches: 60, Runs: 900, Avg: 18.0, SR: 98.0, Wickets: 25 },
      ODI:  { Matches: 40, Runs: 1000, Avg: 27.0, Wickets: 20 }
    }
  },
  {
    name: "Gull Feroza", country: "Pakistan", role: "Batter",
    note: "Aggressive young opener pushing Pakistan's scoring rates up.",
    stats: {
      T20I: { Matches: 35, Runs: 700, Avg: 21.0, SR: 110.0, "High Score": "72" },
      ODI:  { Matches: 15, Runs: 400, Avg: 28.0, SR: 75.0, "High Score": "84" }
    }
  },
  {
    name: "Natalia Pervaiz", country: "Pakistan", role: "All-rounder",
    note: "Busy middle-order batter and part-time off-spinner.",
    stats: {
      T20I: { Matches: 40, Runs: 450, Avg: 16.0, SR: 95.0, Wickets: 15 },
      ODI:  { Matches: 35, Runs: 700, Avg: 24.0, Wickets: 18 }
    }
  },
  {
    name: "Sidra Nawaz", country: "Pakistan", role: "Wicketkeeper",
    note: "Safe hands — Pakistan's long-serving keeper.",
    stats: {
      T20I: { Matches: 90, Runs: 800, Avg: 14.0, SR: 90.0, "High Score": "45" },
      ODI:  { Matches: 60, Runs: 700, Avg: 18.0, SR: 65.0, "High Score": "57" }
    }
  },

  // ================= WORLD STARS =================
  {
    name: "Chamari Athapaththu", country: "Sri Lanka", role: "All-rounder",
    note: "Sri Lanka's captain and a one-woman army with the bat.",
    stats: {
      T20I: { Matches: 135, Runs: 3500, Avg: 28.0, SR: 117.5, "High Score": "80*", Wickets: 45 },
      ODI:  { Matches: 110, Runs: 3900, Avg: 36.0, SR: 90.0, "High Score": "195*", "50s/100s": "20/9" }
    }
  },
  {
    name: "Hayley Matthews", country: "West Indies", role: "All-rounder",
    note: "West Indies captain — opens the batting AND the bowling.",
    stats: {
      T20I: { Matches: 120, Runs: 2900, Avg: 27.5, SR: 113.5, Wickets: 105, Econ: 6.3 },
      ODI:  { Matches: 100, Runs: 3100, Avg: 33.0, Wickets: 95, Econ: 4.7 }
    }
  },
  {
    name: "Sophie Devine", country: "New Zealand", role: "All-rounder",
    note: "One of the cleanest strikers of a cricket ball, full stop.",
    stats: {
      T20I: { Matches: 145, Runs: 3800, Avg: 30.2, SR: 122.5, Wickets: 115, Econ: 6.8 },
      ODI:  { Matches: 150, Runs: 4100, Avg: 32.0, Wickets: 105, Econ: 4.9 }
    }
  },
  {
    name: "Amelia Kerr", country: "New Zealand", role: "All-rounder",
    note: "Leg-spinning prodigy — player of the tournament at the 2024 T20 World Cup.",
    stats: {
      T20I: { Matches: 105, Wickets: 115, Econ: 6.2, Runs: 1900, Avg: 27.5, Best: "5/17" },
      ODI:  { Matches: 90, Wickets: 100, Econ: 4.6, Runs: 2300, Avg: 35.0, "High Score": "232*" }
    }
  },
  {
    name: "Nigar Sultana Joty", country: "Bangladesh", role: "Wicketkeeper",
    note: "Bangladesh's captain and the heartbeat of their batting line-up.",
    stats: {
      T20I: { Matches: 105, Runs: 2000, Avg: 24.5, SR: 98.0, "High Score": "64*", "50s/100s": "10/0" },
      ODI:  { Matches: 60, Runs: 1400, Avg: 27.0, SR: 70.0, "High Score": "101", "50s/100s": "8/1" }
    }
  },
  {
    name: "Orla Prendergast", country: "Ireland", role: "All-rounder",
    note: "Ireland's brightest star — pace, power and presence.",
    stats: {
      T20I: { Matches: 75, Runs: 1600, Avg: 25.0, SR: 118.0, Wickets: 55, Econ: 6.7 },
      ODI:  { Matches: 50, Runs: 1300, Avg: 30.0, Wickets: 40, Econ: 5.0 }
    }
  }
];
