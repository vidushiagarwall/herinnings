/* =========================================================
   Her Innings — LIVE DATA via cricketdata.org (CricAPI)
   Runs only when CRICAPI_KEY is set in js/data.js.
   - Fetches current/upcoming matches, keeps women's games only,
     converts them to the site's match shape and re-renders.
   - Finished matches feed the Highlights tab (with a YouTube
     highlights search link).
   - Any failure -> the manual lists in data.js stay in place.
   - Responses are cached in localStorage for 6 hours so the
     free tier (100 requests/day) isn't burned by page reloads.
   ========================================================= */

(async function liveData() {
  if (typeof CRICAPI_KEY === "undefined" || !CRICAPI_KEY) return;

  const CACHE_KEY = "herinnings-live-v1";
  const CACHE_HOURS = 6;

  async function getMatches() {
    try {
      const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
      if (cached && Date.now() - cached.at < CACHE_HOURS * 3600 * 1000) return cached.data;
    } catch (e) { /* corrupt cache — refetch */ }
    const res = await fetch(`https://api.cricapi.com/v1/matches?apikey=${CRICAPI_KEY}&offset=0`);
    const json = await res.json();
    if (json.status !== "success" || !Array.isArray(json.data)) {
      throw new Error("CricAPI: " + (json.reason || json.status));
    }
    localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data: json.data }));
    return json.data;
  }

  const cleanTeam = (t) => (t || "").replace(/\s*women\s*$/i, "").trim();
  const isWomens = (m) => /women/i.test(m.name || "") && Array.isArray(m.teams) && m.teams.length === 2;

  function istDate(m) {
    const d = new Date((m.dateTimeGMT || m.date) + (String(m.dateTimeGMT || "").endsWith("Z") ? "" : "Z"));
    if (isNaN(d)) return { date: m.date || "", time: "" };
    return {
      date: d.toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" }),
      time: d.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit", timeZone: "Asia/Kolkata" }) + " IST"
    };
  }

  function format(m, a, b) {
    const t = (m.matchType || "").toLowerCase();
    if (t === "odi") return "ODI";
    if (t === "test") return "Test";
    // t20 between two national sides = T20I, otherwise a league game
    const national = (x) => x === "West Indies" || !!flagCodes[x];
    return national(a) && national(b) ? "T20I" : "T20";
  }

  // The API doesn't say who streams a match, so link to a search.
  function watchLinks(m, india) {
    const links = [];
    if (india) links.push({ platform: "JioHotstar", url: "https://www.hotstar.com" });
    links.push({
      platform: "Find the stream",
      url: "https://www.google.com/search?q=" + encodeURIComponent(m.name + " live streaming")
    });
    return links;
  }

  function toUpcoming(m) {
    const a = cleanTeam(m.teams[0]), b = cleanTeam(m.teams[1]);
    const india = a === "India" || b === "India";
    const when = istDate(m);
    const series = (m.name || "").split(",").slice(1).join(",").trim();
    return {
      tournament: series || (m.matchType || "match").toUpperCase(),
      teamA: a, teamB: b,
      countries: [a, b],
      involvesIndia: india,
      date: when.date, time: when.time,
      venue: m.venue || "Venue TBC",
      format: format(m, a, b),
      watch: watchLinks(m, india)
    };
  }

  function toCompleted(m) {
    const a = cleanTeam(m.teams[0]), b = cleanTeam(m.teams[1]);
    return {
      tournament: (m.name || "").split(",").slice(1).join(",").trim() || (m.matchType || "").toUpperCase(),
      teamA: a, teamB: b,
      result: m.status || "Result unavailable",
      date: istDate(m).date,
      venue: m.venue || "",
      highlightUrl: "https://www.youtube.com/results?search_query=" + encodeURIComponent(m.name + " highlights"),
      source: "YouTube"
    };
  }

  try {
    const data = (await getMatches()).filter(isWomens);

    const upcoming = data.filter(m => !m.matchEnded).map(toUpcoming).filter(m => m.date);
    const completed = data.filter(m => m.matchEnded && /won|tied|draw/i.test(m.status || ""))
                          .map(toCompleted).filter(m => m.date);

    if (upcoming.length) {
      upcomingMatches.length = 0;
      upcomingMatches.push(...upcoming);
      renderHome();
      renderEvents();
    }
    if (completed.length) {
      completedMatches.length = 0;
      completedMatches.push(...completed);
      renderHighlights();
    }
    console.log(`Her Innings: live data loaded — ${upcoming.length} upcoming, ${completed.length} completed.`);
  } catch (err) {
    console.warn("Her Innings: live data unavailable, using manual data.", err);
  }
})();
