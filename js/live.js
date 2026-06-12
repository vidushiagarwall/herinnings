/* =========================================================
   Her Innings — LIVE DATA
   Reads data/live.json, which a scheduled GitHub Action
   (.github/workflows/update-matches.yml) refreshes four times
   a day from cricketdata.org. The API key lives in a GitHub
   Secret — it never appears in this site's code.
   If the file is missing or empty, the manual lists in
   js/data.js stay in place.
   ========================================================= */

(async function liveData() {
  const cleanTeam = (t) => (t || "").replace(/\s*women\s*$/i, "").trim();

  function istDate(m) {
    const d = new Date((m.dateTimeGMT || m.date) + (String(m.dateTimeGMT || "").endsWith("Z") ? "" : "Z"));
    if (isNaN(d)) return { date: m.date || "", time: "" };
    return {
      date: d.toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" }),
      time: d.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit", timeZone: "Asia/Kolkata" }) + " IST"
    };
  }

  function format(m, a, b) {
    // The API often omits or mislabels matchType, so trust the match name
    // first ("3rd ODI", "One-off Test", ...), then fall back to matchType.
    const name = m.name || "";
    const t = (m.matchType || "").toLowerCase();
    if (/\bODI\b/i.test(name) || t === "odi") return "ODI";
    if (/\bTest\b/i.test(name) || t === "test") return "Test";
    // T20 between two national sides = T20I, otherwise a league game
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
    const res = await fetch("data/live.json?t=" + Date.now());
    if (!res.ok) return; // no live data yet — manual lists stay
    const json = await res.json();
    const data = (json.matches || []).filter(m => Array.isArray(m.teams) && m.teams.length === 2);

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
    console.log(`Her Innings: live data (${json.updatedAt}) — ${upcoming.length} upcoming, ${completed.length} completed.`);
  } catch (err) {
    console.warn("Her Innings: live data unavailable, using manual data.", err);
  }
})();
