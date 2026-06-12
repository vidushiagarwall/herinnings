/* =========================================================
   Her Innings — app logic (nav menu, rendering, search)
   One script for all pages: each section only renders when
   its elements exist on the current page.
   ========================================================= */

// ---------- helpers ----------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
}

function isToday(iso) {
  const today = new Date();
  const d = new Date(iso + "T00:00:00");
  return d.toDateString() === today.toDateString();
}

function initials(name) {
  return name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
}

// ---------- flags ----------
// ISO codes for flagcdn.com — franchise teams simply get no flag.
const flagCodes = {
  "India": "in", "Australia": "au", "England": "gb-eng", "New Zealand": "nz",
  "South Africa": "za", "Sri Lanka": "lk", "Pakistan": "pk", "Bangladesh": "bd",
  "Ireland": "ie", "Scotland": "gb-sct", "Zimbabwe": "zw", "Thailand": "th",
  "Netherlands": "nl", "USA": "us", "UAE": "ae"
};

function flagHTML(team) {
  if (team === "West Indies") return `<span class="flag flag-wi">WI</span>`;
  const code = flagCodes[team];
  if (!code) return "";
  return `<img class="flag" src="https://flagcdn.com/48x36/${code}.png" alt="" loading="lazy">`;
}

// ---------- nav menu ----------
// highlight the page we're on
const currentPage = location.pathname.split("/").pop() || "index.html";
$$(".nav-links a").forEach(a =>
  a.classList.toggle("active", a.getAttribute("href") === currentPage));

$("#navToggle").addEventListener("click", (e) => {
  e.stopPropagation();
  $("#navLinks").classList.toggle("open");
});

// clicking anywhere outside the menu closes it
document.addEventListener("click", (e) => {
  if (!e.target.closest("#navLinks")) $("#navLinks").classList.remove("open");
});

// ---------- match card rendering ----------
function matchCardHTML(m) {
  const todayBadge = isToday(m.date) ? `<span class="badge badge-today">Today</span>` : "";
  const links = m.watch.map(w =>
    `<a class="watch-link" href="${w.url}" target="_blank" rel="noopener">Watch live — ${w.platform}</a>`
  ).join("");
  return `
    <article class="match-card ${m.involvesIndia ? "india-match" : ""}">
      <div class="match-top">
        <p class="match-tournament">${m.tournament}</p>
        <span class="badge badge-format">${m.format}</span>
      </div>
      <p class="match-teams">${flagHTML(m.teamA)}${m.teamA} <span class="vs">vs</span> ${flagHTML(m.teamB)}${m.teamB}</p>
      <div class="match-meta">
        <span>${formatDate(m.date)} · ${m.time} ${todayBadge}</span>
        <span class="match-venue">${m.venue}</span>
      </div>
      <div class="match-watch">${links}</div>
    </article>`;
}

// ---------- HOME (index.html) ----------
function renderHome() {
  if (!$("#homeUpcoming")) return;
  const sorted = [...upcomingMatches].sort((a, b) => a.date.localeCompare(b.date));
  $("#homeUpcoming").innerHTML = sorted.slice(0, 3).map(matchCardHTML).join("");

  const next = sorted.find(m => m.involvesIndia) || sorted[0];
  if (next) {
    $("#homeTicker").innerHTML =
      `<span class="dot"></span> Next big match: <strong>&nbsp;${next.teamA} vs ${next.teamB}</strong>&nbsp;· ${formatDate(next.date)} · ${next.tournament}`;
  }
}

// ---------- EVENTS (events.html) ----------
let eventsTab = "india";
let formatTab = "all";

// formats that count as international cricket; everything else is a league
const intlFormats = ["T20I", "ODI", "Test"];

function renderEvents() {
  if (!$("#eventsGrid")) return;
  const query = ($("#countrySearch").value || "").trim().toLowerCase();
  const sorted = [...upcomingMatches].sort((a, b) => a.date.localeCompare(b.date));

  let list;
  if (eventsTab === "india") {
    list = sorted.filter(m => m.involvesIndia);
  } else {
    list = sorted.filter(m => !m.involvesIndia);
    if (query) {
      list = list.filter(m =>
        m.countries.some(c => c.toLowerCase().includes(query)) ||
        m.teamA.toLowerCase().includes(query) ||
        m.teamB.toLowerCase().includes(query) ||
        m.tournament.toLowerCase().includes(query)
      );
    }
  }

  if (formatTab === "leagues") {
    list = list.filter(m => !intlFormats.includes(m.format));
  } else if (formatTab !== "all") {
    list = list.filter(m => m.format === formatTab);
  }

  $("#eventsGrid").innerHTML = list.map(matchCardHTML).join("");
  $("#eventsEmpty").hidden = list.length > 0;
}

if ($("#eventsGrid")) {
  $$("[data-format-tab]").forEach(btn => {
    btn.addEventListener("click", () => {
      formatTab = btn.dataset.formatTab;
      $$("[data-format-tab]").forEach(b => b.classList.toggle("active", b === btn));
      renderEvents();
    });
  });

  $$("[data-events-tab]").forEach(btn => {
    btn.addEventListener("click", () => {
      eventsTab = btn.dataset.eventsTab;
      $$("[data-events-tab]").forEach(b => b.classList.toggle("active", b === btn));
      $("#worldSearchRow").hidden = eventsTab !== "world";
      renderEvents();
    });
  });

  $("#countrySearch").addEventListener("input", renderEvents);
}

// ---------- STATS (stats.html) ----------
function playerCardHTML(p) {
  const statEntries = Object.entries(p.stats).slice(0, 6);
  const statsHTML = statEntries.map(([label, val]) =>
    `<div class="stat"><div class="stat-val">${val}</div><div class="stat-label">${label}</div></div>`
  ).join("");
  return `
    <article class="player-card">
      <div class="player-head">
        <div class="player-avatar">${initials(p.name)}</div>
        <div>
          <p class="player-name">${p.name}</p>
          <p class="player-sub">${flagHTML(p.country)}${p.country} · ${p.role}</p>
        </div>
      </div>
      <div class="player-stats">${statsHTML}</div>
      <p class="player-note">${p.note}</p>
    </article>`;
}

function renderPlayers() {
  if (!$("#playerGrid")) return;
  const q = ($("#playerSearch").value || "").trim().toLowerCase();
  const country = $("#countryFilter").value;
  const role = $("#roleFilter").value;

  const list = players.filter(p =>
    (country === "all" || p.country === country) &&
    (role === "all" || p.role === role) &&
    (!q || p.name.toLowerCase().includes(q) || p.country.toLowerCase().includes(q))
  );

  $("#playerGrid").innerHTML = list.map(playerCardHTML).join("");
  $("#playersEmpty").hidden = list.length > 0;
}

if ($("#playerGrid")) {
  const countries = [...new Set(players.map(p => p.country))].sort();
  countries.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    $("#countryFilter").appendChild(opt);
  });

  $("#playerSearch").addEventListener("input", renderPlayers);
  $("#countryFilter").addEventListener("change", renderPlayers);
  $("#roleFilter").addEventListener("change", renderPlayers);
}

// ---------- HIGHLIGHTS (highlights.html) ----------
function highlightCardHTML(m) {
  return `
    <article class="highlight-card">
      <div class="highlight-info">
        <p class="match-tournament">${m.tournament}</p>
        <p class="match-teams">${flagHTML(m.teamA)}${m.teamA} <span class="vs">vs</span> ${flagHTML(m.teamB)}${m.teamB}</p>
        <p class="highlight-result">${m.result}</p>
        <p class="highlight-meta">${formatDate(m.date)} · ${m.venue}</p>
      </div>
      <a class="watch-link" href="${m.highlightUrl}" target="_blank" rel="noopener">Watch highlights — ${m.source}</a>
    </article>`;
}

function renderHighlights() {
  if (!$("#highlightList")) return;
  const q = ($("#highlightSearch").value || "").trim().toLowerCase();
  const sorted = [...completedMatches].sort((a, b) => b.date.localeCompare(a.date));
  const list = !q ? sorted : sorted.filter(m =>
    m.teamA.toLowerCase().includes(q) ||
    m.teamB.toLowerCase().includes(q) ||
    m.tournament.toLowerCase().includes(q)
  );
  $("#highlightList").innerHTML = list.map(highlightCardHTML).join("");
  $("#highlightsEmpty").hidden = list.length > 0;
}

if ($("#highlightSearch")) {
  $("#highlightSearch").addEventListener("input", renderHighlights);
}

// ---------- init ----------
renderHome();
renderEvents();
renderPlayers();
renderHighlights();
