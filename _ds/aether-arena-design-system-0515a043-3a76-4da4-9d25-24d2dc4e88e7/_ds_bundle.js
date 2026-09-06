/* @ds-bundle: {"format":3,"namespace":"AetherArenaDesignSystem_0515a0","components":[],"sourceHashes":{"ui_kits/pvp_ranking/app.jsx":"fe0e1c20f7d6","ui_kits/pvp_ranking/components.jsx":"ccac9361f303","ui_kits/pvp_ranking/data.jsx":"cafcf6354de2","ui_kits/pvp_ranking/tabs.jsx":"6bb8392f9a40"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AetherArenaDesignSystem_0515a0 = window.AetherArenaDesignSystem_0515a0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/pvp_ranking/app.jsx
try { (() => {
/* Aether Arena — PVP Ranking screen */
function BattleOverlay({
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bo-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "bo-card",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "bo-spin"
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSET + 'emblem_legend.png',
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "bo-title"
  }, "Searching for Opponent\u2026"), /*#__PURE__*/React.createElement("div", {
    className: "bo-sub"
  }, "Ranked Duel \xB7 ", tierByKey(PLAYER.tier).name, " ", PLAYER.division), /*#__PURE__*/React.createElement("button", {
    className: "bo-cancel",
    onClick: onClose
  }, "Cancel")));
}
function Screen() {
  const [tab, setTab] = useState('ranking');
  const [battling, setBattling] = useState(false);
  const startBattle = () => {
    setBattling(true);
    setTimeout(() => setBattling(false), 2600);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement(SideRail, {
    tab: tab,
    setTab: setTab
  }), tab === 'ranking' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RankingTab, {
    onViewRewards: () => setTab('rewards')
  }), /*#__PURE__*/React.createElement("div", {
    className: "right"
  }, /*#__PURE__*/React.createElement(Leaderboard, null))), tab === 'rewards' && /*#__PURE__*/React.createElement(RewardsTab, null), tab === 'history' && /*#__PURE__*/React.createElement(HistoryTab, null)), /*#__PURE__*/React.createElement(ActionBar, {
    onBattle: startBattle
  }), battling && /*#__PURE__*/React.createElement(BattleOverlay, {
    onClose: () => setBattling(false)
  }));
}

/* fit 1600×900 canvas to viewport */
function fitCanvas() {
  const c = document.getElementById('canvas');
  if (!c) return;
  const s = Math.min(window.innerWidth / 1600, window.innerHeight / 900);
  c.style.transform = 'scale(' + s + ')';
}
window.addEventListener('resize', fitCanvas);
ReactDOM.createRoot(document.getElementById('canvas')).render(/*#__PURE__*/React.createElement(Screen, null));
setTimeout(fitCanvas, 30);
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pvp_ranking/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pvp_ranking/components.jsx
try { (() => {
/* Aether Arena — core chrome components */
const {
  useState
} = React;
const Icon = ({
  n,
  style
}) => /*#__PURE__*/React.createElement("i", {
  className: "ic ic-" + n,
  style: style
});

/* ---------------- TOP BAR ---------------- */
function TopBar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tb-back"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "back"
  })), /*#__PURE__*/React.createElement("div", {
    className: "tb-title"
  }, /*#__PURE__*/React.createElement("h1", null, "PVP RANKING"), /*#__PURE__*/React.createElement("div", {
    className: "tb-info"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "info"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tb-spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tb-right"
  }, CURRENCIES.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "cur-pill",
    key: i
  }, /*#__PURE__*/React.createElement("img", {
    src: CUR(c.icon),
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, c.value), /*#__PURE__*/React.createElement("span", {
    className: "cur-add"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "plus"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "tb-btn"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "medal"
  })), /*#__PURE__*/React.createElement("div", {
    className: "tb-btn"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "mail"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  })), /*#__PURE__*/React.createElement("div", {
    className: "tb-btn"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "menu"
  }))));
}

/* ---------------- LEFT RAIL ---------------- */
const RAIL_TABS = [{
  key: 'ranking',
  label: 'Ranking',
  icon: 'medal'
}, {
  key: 'rewards',
  label: 'Rewards',
  icon: 'gift'
}, {
  key: 'history',
  label: 'History',
  icon: 'refresh'
}];
function SideRail({
  tab,
  setTab
}) {
  const sh = PLAYER.seasonHigh;
  const t = tierByKey(sh.tier);
  return /*#__PURE__*/React.createElement("div", {
    className: "rail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tabs"
  }, RAIL_TABS.map(rt => /*#__PURE__*/React.createElement("div", {
    key: rt.key,
    className: "tab" + (tab === rt.key ? " on" : ""),
    onClick: () => setTab(rt.key)
  }, /*#__PURE__*/React.createElement(Icon, {
    n: rt.icon
  }), rt.label))), /*#__PURE__*/React.createElement("div", {
    className: "rail-spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "shcard"
  }, /*#__PURE__*/React.createElement("img", {
    className: "emb",
    src: ASSET + 'emblem_legend.png',
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, "Season Highest"), /*#__PURE__*/React.createElement("div", {
    className: "rk"
  }, t.name, " ", sh.division), /*#__PURE__*/React.createElement("div", {
    className: "tp"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "medal"
  }), sh.points.toLocaleString()), /*#__PURE__*/React.createElement("div", {
    className: "shrow"
  }, /*#__PURE__*/React.createElement("span", null, "Win Rate"), /*#__PURE__*/React.createElement("span", null, PLAYER.winRate, "%")), /*#__PURE__*/React.createElement("div", {
    className: "shrow"
  }, /*#__PURE__*/React.createElement("span", null, "Total Battles"), /*#__PURE__*/React.createElement("span", null, PLAYER.totalBattles))));
}

/* ---------------- TIER BADGE ---------------- */
function TierBadge({
  tierKey,
  size = 42
}) {
  const t = tierByKey(tierKey);
  return /*#__PURE__*/React.createElement("div", {
    className: "ltier",
    style: {
      background: `linear-gradient(160deg,${t.c1},${t.c2})`,
      width: size,
      height: size,
      borderRadius: size * 0.26
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: t.icon
  }));
}

/* ---------------- LEADERBOARD ---------------- */
function LeaderRow({
  e,
  mine
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "lrow" + (mine ? " mine" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "lrank"
  }, mine && /*#__PURE__*/React.createElement("span", {
    className: "mytag"
  }, "My Rank"), e.rank <= 3 ? /*#__PURE__*/React.createElement("div", {
    className: "medal g" + e.rank
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, e.rank)) : /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, e.rank)), /*#__PURE__*/React.createElement("img", {
    className: "lav",
    src: AV,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "lwho"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lname"
  }, e.name), /*#__PURE__*/React.createElement("div", {
    className: "lguild"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: e.gIcon,
    style: {
      color: 'var(--crystal)'
    }
  }), e.guild)), /*#__PURE__*/React.createElement("div", {
    className: "lpts"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "medal"
  }), e.points.toLocaleString()), /*#__PURE__*/React.createElement(TierBadge, {
    tierKey: e.tier
  }));
}
function Leaderboard() {
  const [view, setView] = useState('leaderboard');
  const list = view === 'leaderboard' ? LEADERBOARD : FRIENDS;
  const me = {
    rank: PLAYER.rank,
    name: PLAYER.name,
    guild: PLAYER.guild,
    points: PLAYER.points,
    tier: PLAYER.tier,
    gIcon: 'ic-crit'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lb-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "seg"
  }, /*#__PURE__*/React.createElement("button", {
    className: view === 'leaderboard' ? 'on' : '',
    onClick: () => setView('leaderboard')
  }, "Leaderboard"), /*#__PURE__*/React.createElement("button", {
    className: view === 'friends' ? 'on' : '',
    onClick: () => setView('friends')
  }, "Friends")), /*#__PURE__*/React.createElement("span", {
    className: "lb-myrank"
  }, "My Rank \xB7 #", PLAYER.rank)), /*#__PURE__*/React.createElement("div", {
    className: "lb-list"
  }, list.map(e => /*#__PURE__*/React.createElement(LeaderRow, {
    key: e.rank,
    e: e
  })), /*#__PURE__*/React.createElement(LeaderRow, {
    e: me,
    mine: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "lb-foot"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "refresh"
  }), "Leaderboard updates in 10m 45s"));
}

/* ---------------- ACTION BAR ---------------- */
function ActionBar({
  onBattle
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "act"
  }, /*#__PURE__*/React.createElement("div", {
    className: "act-btn"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "shop"
  })), /*#__PURE__*/React.createElement("span", {
    className: "act-lab"
  }, "Shop")), /*#__PURE__*/React.createElement("button", {
    className: "battle",
    onClick: onBattle
  }, /*#__PURE__*/React.createElement("span", {
    className: "bt-main"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "swords"
  }), /*#__PURE__*/React.createElement("span", null, "Battle")), /*#__PURE__*/React.createElement("span", {
    className: "bt-sub"
  }, "Remaining: ", PLAYER.battlesLeft, "/", PLAYER.battlesMax, /*#__PURE__*/React.createElement("span", {
    className: "add"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "plus"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "act"
  }, /*#__PURE__*/React.createElement("div", {
    className: "act-btn"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "medal"
  })), /*#__PURE__*/React.createElement("span", {
    className: "act-lab"
  }, "Ranks")));
}
Object.assign(window, {
  Icon,
  TopBar,
  SideRail,
  TierBadge,
  Leaderboard,
  ActionBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pvp_ranking/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pvp_ranking/data.jsx
try { (() => {
/* Aether Arena — PVP mock data */
const ASSET = '../../assets/';
const CUR = n => ASSET + 'icons/currency/' + String(n).padStart(2, '0') + '.png';
const AV = ASSET + 'avatars/frog.png';

/* tier ramp — token names match colors_and_type.css */
const TIERS = [{
  key: 'bronze',
  name: 'Bronze',
  c1: 'var(--tier-bronze-1)',
  c2: 'var(--tier-bronze-2)',
  icon: 'ic-def'
}, {
  key: 'silver',
  name: 'Silver',
  c1: 'var(--tier-silver-1)',
  c2: 'var(--tier-silver-2)',
  icon: 'ic-def'
}, {
  key: 'gold',
  name: 'Gold',
  c1: 'var(--tier-gold-1)',
  c2: 'var(--tier-gold-2)',
  icon: 'ic-def'
}, {
  key: 'plat',
  name: 'Platinum',
  c1: 'var(--tier-plat-1)',
  c2: 'var(--tier-plat-2)',
  icon: 'ic-def'
}, {
  key: 'diamond',
  name: 'Diamond',
  c1: 'var(--tier-diamond-1)',
  c2: 'var(--tier-diamond-2)',
  icon: 'ic-def'
}, {
  key: 'master',
  name: 'Master',
  c1: 'var(--tier-master-1)',
  c2: 'var(--tier-master-2)',
  icon: 'ic-def'
}, {
  key: 'grand',
  name: 'Grandmaster',
  c1: 'var(--tier-grand-1)',
  c2: 'var(--tier-grand-2)',
  icon: 'ic-def'
}, {
  key: 'champ',
  name: 'Champion',
  c1: 'var(--tier-champ-1)',
  c2: 'var(--tier-champ-2)',
  icon: 'ic-crit'
}];
const tierByKey = k => TIERS.find(t => t.key === k);
const PLAYER = {
  name: 'YourName',
  guild: 'Dreamwalkers',
  rank: 12,
  points: 3250,
  tier: 'master',
  division: 'I',
  stars: 3,
  starsNeeded: 5,
  promoCur: 250,
  promoMax: 300,
  nextTier: 'Grandmaster',
  winRate: 62,
  totalBattles: 128,
  seasonHigh: {
    tier: 'master',
    division: 'I',
    points: 3250
  },
  battlesLeft: 5,
  battlesMax: 5
};
const LEADERBOARD = [{
  rank: 1,
  name: 'Aetherion',
  guild: 'Celestial',
  points: 3876,
  tier: 'champ',
  gIcon: 'ic-crit'
}, {
  rank: 2,
  name: 'Skybound',
  guild: 'Nova Order',
  points: 3654,
  tier: 'champ',
  gIcon: 'ic-gem'
}, {
  rank: 3,
  name: 'EchoValen',
  guild: 'Starfall',
  points: 3498,
  tier: 'grand',
  gIcon: 'ic-crit'
}, {
  rank: 4,
  name: 'Mooncake',
  guild: 'Lunaris',
  points: 3210,
  tier: 'grand',
  gIcon: 'ic-portal'
}, {
  rank: 5,
  name: 'Artemis',
  guild: 'Eclipse',
  points: 3102,
  tier: 'grand',
  gIcon: 'ic-crit'
}, {
  rank: 6,
  name: 'Solaire',
  guild: 'Dawnbreak',
  points: 2980,
  tier: 'master',
  gIcon: 'ic-fire'
}, {
  rank: 7,
  name: 'Vesper',
  guild: 'Nightingale',
  points: 2874,
  tier: 'master',
  gIcon: 'ic-gem'
}, {
  rank: 8,
  name: 'Lyra',
  guild: 'Harmonic',
  points: 2790,
  tier: 'master',
  gIcon: 'ic-crit'
}];
const FRIENDS = [{
  rank: 23,
  name: 'Pingu',
  guild: 'Cozy Club',
  points: 2410,
  tier: 'master',
  gIcon: 'ic-crit'
}, {
  rank: 58,
  name: 'Bunbun',
  guild: 'Carrot Co',
  points: 2050,
  tier: 'diamond',
  gIcon: 'ic-gem'
}, {
  rank: 104,
  name: 'Tamtam',
  guild: 'Dreamwalkers',
  points: 1830,
  tier: 'diamond',
  gIcon: 'ic-portal'
}, {
  rank: 212,
  name: 'Kohaku',
  guild: 'Sunset',
  points: 1540,
  tier: 'plat',
  gIcon: 'ic-fire'
}];

/* season rewards by tier (currency icon index + qty) */
const SEASON_REWARDS = [{
  tier: 'bronze',
  state: 'done',
  rewards: [[10, 500], [0, 1]]
}, {
  tier: 'silver',
  state: 'done',
  rewards: [[10, 800], [6, 300]]
}, {
  tier: 'gold',
  state: 'done',
  rewards: [[10, 1200], [6, 500], [2, 1]]
}, {
  tier: 'plat',
  state: 'done',
  rewards: [[6, 700], [2, 2], [0, 2]]
}, {
  tier: 'diamond',
  state: 'ready',
  rewards: [[6, 900], [2, 3], [1, 2]]
}, {
  tier: 'master',
  state: 'current',
  rewards: [[6, 1000], [2, 1], [0, 1], [10, 2000]]
}, {
  tier: 'grand',
  state: 'locked',
  rewards: [[6, 1500], [2, 5], [1, 3]]
}, {
  tier: 'champ',
  state: 'locked',
  rewards: [[15, 1], [6, 3000], [2, 10]]
}];
const HISTORY = [{
  result: 'win',
  mode: 'Ranked Duel',
  opp: 'Skybound',
  delta: +1,
  time: '2m ago'
}, {
  result: 'win',
  mode: 'Ranked Duel',
  opp: 'Vesper',
  delta: +1,
  time: '18m ago'
}, {
  result: 'loss',
  mode: 'Ranked Duel',
  opp: 'Aetherion',
  delta: -1,
  time: '41m ago'
}, {
  result: 'win',
  mode: 'Ranked Duel',
  opp: 'Lyra',
  delta: +1,
  time: '1h ago'
}, {
  result: 'win',
  mode: 'Ranked Duel',
  opp: 'Mooncake',
  delta: +1,
  time: '1h ago'
}, {
  result: 'loss',
  mode: 'Ranked Duel',
  opp: 'Solaire',
  delta: -1,
  time: '2h ago'
}, {
  result: 'win',
  mode: 'Promotion',
  opp: 'EchoValen',
  delta: +1,
  time: '3h ago'
}, {
  result: 'win',
  mode: 'Ranked Duel',
  opp: 'Artemis',
  delta: +1,
  time: '5h ago'
}];
const CURRENCIES = [{
  icon: 6,
  value: '12,345'
},
// gem
{
  icon: 0,
  value: '3/3'
} // ticket
];
Object.assign(window, {
  ASSET,
  CUR,
  AV,
  TIERS,
  tierByKey,
  PLAYER,
  LEADERBOARD,
  FRIENDS,
  SEASON_REWARDS,
  HISTORY,
  CURRENCIES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pvp_ranking/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pvp_ranking/tabs.jsx
try { (() => {
/* Aether Arena — tab bodies */

function Stars({
  on,
  total
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "stars"
  }, Array.from({
    length: total
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "star" + (i < on ? " on" : "")
  })));
}

/* ---------- reward slot (hero preview) ---------- */
function Slot({
  icon,
  qty,
  tier
}) {
  if (tier) {
    const t = tierByKey(tier);
    return /*#__PURE__*/React.createElement("div", {
      className: "slot tier"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ltier",
      style: {
        background: `linear-gradient(160deg,${t.c1},${t.c2})`,
        width: 54,
        height: 54,
        borderRadius: 14
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ic " + t.icon,
      style: {
        ['--sz']: '28px',
        color: '#fff'
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "qty"
    }, t.name, " ", PLAYER.division));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "slot"
  }, /*#__PURE__*/React.createElement("img", {
    src: CUR(icon),
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "qty"
  }, "\xD7", qty.toLocaleString()));
}

/* ================= RANKING TAB ================= */
function RankingTab({
  onViewRewards
}) {
  const t = tierByKey(PLAYER.tier);
  const rewards = SEASON_REWARDS.find(r => r.tier === PLAYER.tier).rewards;
  const pct = Math.round(PLAYER.promoCur / PLAYER.promoMax * 100);
  return /*#__PURE__*/React.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "season-kicker"
  }, "Season 12"), /*#__PURE__*/React.createElement("div", {
    className: "season-title gold-text"
  }, "Celestial Ascent"), /*#__PURE__*/React.createElement("div", {
    className: "timer"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "refresh"
  }), "12D 14H"), /*#__PURE__*/React.createElement("div", {
    className: "season-end"
  }, "Season ends on 2025/06/12 23:59 (UTC+7)"), /*#__PURE__*/React.createElement("div", {
    className: "hero-emblem"
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSET + 'emblem_legend.png',
    alt: "Rank emblem"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-rank"
  }, t.name, " ", PLAYER.division), /*#__PURE__*/React.createElement(Stars, {
    on: PLAYER.stars,
    total: PLAYER.starsNeeded
  }), /*#__PURE__*/React.createElement("div", {
    className: "promo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fill",
    style: {
      width: pct + '%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "pmeta"
  }, PLAYER.stars, " / ", PLAYER.starsNeeded, " stars \xB7 ", PLAYER.promoCur, "/", PLAYER.promoMax, " pts"), /*#__PURE__*/React.createElement("div", {
    className: "pcap"
  }, "Win 2 more to promote to ", PLAYER.nextTier)), /*#__PURE__*/React.createElement("div", {
    className: "rwprev"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rwprev-h"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "gift"
  }), /*#__PURE__*/React.createElement("span", null, "Season Rewards Preview")), /*#__PURE__*/React.createElement("div", {
    className: "rwrow"
  }, /*#__PURE__*/React.createElement(Slot, {
    tier: PLAYER.tier
  }), rewards.map((r, i) => /*#__PURE__*/React.createElement(Slot, {
    key: i,
    icon: r[0],
    qty: r[1]
  })), /*#__PURE__*/React.createElement("div", {
    className: "viewall",
    onClick: onViewRewards
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "next"
  }), "View", /*#__PURE__*/React.createElement("br", null), "All"))));
}

/* ================= REWARDS TAB ================= */
function ClaimBtn({
  state
}) {
  if (state === 'ready') return /*#__PURE__*/React.createElement("button", {
    className: "claim ready"
  }, "Claim");
  if (state === 'done') return /*#__PURE__*/React.createElement("button", {
    className: "claim done"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "check"
  }), "Claimed");
  if (state === 'current') return /*#__PURE__*/React.createElement("button", {
    className: "claim locked"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "lock"
  }), "In Progress");
  return /*#__PURE__*/React.createElement("button", {
    className: "claim locked"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "lock"
  }), "Locked");
}
function RewardsTab() {
  return /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "gift"
  }), "Season Rewards \xB7 Celestial Ascent"), /*#__PURE__*/React.createElement("div", {
    className: "rewards-full"
  }, SEASON_REWARDS.map(block => {
    const t = tierByKey(block.tier);
    const isCur = block.state === 'current';
    return /*#__PURE__*/React.createElement("div", {
      className: "tier-block" + (block.state === 'done' ? ' claimed' : ''),
      key: block.tier,
      style: isCur ? {
        boxShadow: 'var(--sh-card), inset 0 0 0 2px #d9c8f5'
      } : null
    }, /*#__PURE__*/React.createElement("div", {
      className: "tb-emb",
      style: {
        background: `linear-gradient(160deg,${t.c1},${t.c2})`
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ic " + t.icon,
      style: {
        ['--sz']: '30px',
        color: '#fff'
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "tb-name"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nm"
    }, t.name), /*#__PURE__*/React.createElement("div", {
      className: "rq"
    }, isCur ? 'Current tier' : block.state === 'locked' ? 'Reach to unlock' : 'Earned')), /*#__PURE__*/React.createElement("div", {
      className: "tb-rewards"
    }, block.rewards.map((r, i) => /*#__PURE__*/React.createElement("div", {
      className: "mini-slot",
      key: i
    }, /*#__PURE__*/React.createElement("img", {
      src: CUR(r[0]),
      alt: ""
    }), /*#__PURE__*/React.createElement("div", {
      className: "q"
    }, "\xD7", r[1].toLocaleString())))), /*#__PURE__*/React.createElement(ClaimBtn, {
      state: block.state
    }));
  })));
}

/* ================= HISTORY TAB ================= */
function HistoryTab() {
  return /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "refresh"
  }), "Match History"), /*#__PURE__*/React.createElement("div", {
    className: "history-full"
  }, HISTORY.map((m, i) => /*#__PURE__*/React.createElement("div", {
    className: "hcard",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "hres " + m.result
  }, m.result === 'win' ? 'W' : 'L'), /*#__PURE__*/React.createElement("div", {
    className: "hmid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hmode"
  }, m.mode), /*#__PURE__*/React.createElement("div", {
    className: "hopp"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "swords",
    style: {
      ['--sz']: '13px',
      color: 'var(--ink-3)'
    }
  }), "vs ", m.opp)), /*#__PURE__*/React.createElement("div", {
    className: "hstars " + (m.delta > 0 ? 'up' : 'down')
  }, /*#__PURE__*/React.createElement("div", {
    className: "star-ico",
    style: {
      background: m.delta > 0 ? 'linear-gradient(180deg,#ffe07a,#f0b32f)' : 'var(--star-off)'
    }
  }), m.delta > 0 ? '+' : '', m.delta, " star"), /*#__PURE__*/React.createElement("div", {
    className: "htime"
  }, m.time)))));
}
Object.assign(window, {
  Stars,
  Slot,
  RankingTab,
  RewardsTab,
  HistoryTab
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pvp_ranking/tabs.jsx", error: String((e && e.message) || e) }); }

})();
