# Aether Arena — Design System

A design system for the **PVP Ranking** experience of *Aether Arena*, a mobile-first
anime-fantasy **auto-battler** with PC widescreen support. The visual target is a
**bright, cozy, elegant fantasy** live-service UI: soft sky-blue skies, white and cream
panels, gold engraved accents and a crystalline purple rank emblem. Relaxing, highly
readable, premium — explicitly *not* a dark, oppressive esports look.

> **Scope.** This system was built from an art kit + two AAA concept renders, not a
> running codebase or Figma file. It codifies the look into reusable tokens, icons and a
> high-fidelity HTML/JSX recreation of the PVP Ranking screen across three tabs
> (Ranking · Rewards · History) plus mobile and widescreen layouts.

---

## Sources provided

These were the raw inputs (originals preserved in `uploads/`, working copies in `assets/`):

| Source | What it is | Where it lives |
|---|---|---|
| `concept_light.png` | **Primary target** — AAA light-theme concept render of the PVP screen | `assets/reference/` |
| `concept_dark.png` | Alternate dark-theme concept render (for reference / "dark mode" cues) | `assets/reference/` |
| `wireframe.png` | Early greybox layout blockout of the same screen | `assets/reference/` |
| `Icon_Symbol_General` | 39 white-silhouette UI icons (home, gear, gift, swords, mail…) | `assets/icons/general/` (sliced) |
| `Icon_Symbol_Stat` | 14 white stat icons (HP, ATK, DEF, M.ATK, crit, speed…) | `assets/icons/stat/` (sliced) |
| `Icon_Symbol_Currency` | 16 painted comic/halftone reward & currency icons | `assets/icons/currency_sheet.png` |
| `UI_BG_1 / _2` | Rounded panel sprites (peach + white, soft drop shadow) | `assets/ui/` |
| `UI_Button_1/2/3`, `UI_MainButton`, `UI_SmallButton` | Button base sprites (arch tab, D-tab, circle bases) | `assets/ui/` |
| `UI_PowerBar` | Purple pill power/progress bar with crossed-swords emblem | `assets/ui/powerbar.png` |
| `Ui_profile` / `_back` | Round avatar (frog mascot) + plain avatar backing disc | `assets/avatars/` |
| `Ui_Sticker_type_01/02` | Decorative fire (red) + water (teal) splat stickers | `assets/stickers/` |

No font files, codebase, or Figma URL were supplied — see the font substitution note below.

---

## CONTENT FUNDAMENTALS

How copy is written across the UI.

- **Voice:** confident, warm, lightly heroic — "live-service premium" without shouting.
  Short noun phrases over sentences. No marketing fluff inside the HUD.
- **Person:** addresses the player as **"you"** implicitly; the player's own row is labelled
  **"My Rank"** (possessive, personal). Other players are shown by handle only.
- **Casing:**
  - **ALL-CAPS** for ranks, season titles, tab labels and the primary CTA
    (`LEGEND I`, `CELESTIAL ASCENT`, `RANKING`, `BATTLE`). This is the engraved-serif register.
  - **Title Case** for section headers and nouns (`Season Rewards Preview`, `Leaderboard`, `My Rank`).
  - **Sentence case** for helper/status lines (`Reach 3,500 to advance to Legend`,
    `Leaderboard updates in 10m 45s`, `Season ends on 2025/06/12 23:59 (UTC+7)`).
- **Numbers:** tabular, grouped with commas (`12,345`, `3,876`). Multipliers use a lowercase
  ×: `×1,000`, `×2,000`. Counts read `5/5`, `3/3`. Timers are compact: `12D 14H`, `10m 45s`.
- **Season naming:** `Season <n>` + an evocative two-word title (`Celestial Ascent`,
  `Fey Ancient`). Seasons are numbered and reset quarterly.
- **Tone examples (verbatim from concept):** "SEASON 12 / CELESTIAL ASCENT", "Reach 3,500 to
  advance to Legend", "Season Rewards Preview", "My Rank", "Remaining: 5/5", "VIEW ALL".
- **Emoji:** none. The interface uses painted icons and engraved type, never emoji or
  unicode glyphs as iconography.
- **Microcopy length:** tight. Buttons are one word (`BATTLE`, `SHOP`, `DEFENSE`); status
  strings stay under ~6 words.

---

## VISUAL FOUNDATIONS

**Overall mood.** Daylight cathedral / sky-temple. Everything floats on a luminous blue
sky with a soft white glow behind the central emblem. Cozy, airy, generous negative space.

**Color.** Soft periwinkle→white sky gradient as the world; **white and faint-blue panels**
carry content; **gold** is reserved for the hero emblem frame, the primary CTA and earned
values; **crystalline purple** is the rank/magic signature color. Cream/ivory is a warm
secondary surface inherited from the art kit. Semantic green (win) / coral-red (loss).
Tier colors run bronze → silver → gold → platinum(teal) → diamond(blue) → master(purple) →
grandmaster(rose) → champion(prismatic gold). See `colors_and_type.css`.

**Typography.** Two families:
- **Cinzel** (engraved high-contrast serif caps) — rank names, season titles, the BATTLE CTA.
  Carries all the "fantasy" weight. Gold-gradient text-fill on hero titles.
- **Mali** (rounded Thai+Latin sans, Cadson Demak) — every functional label, player name,
  number and helper line. The **self-hosted brand font**; its cozy looped letterforms give
  the UI its warm, welcoming character at high readability. SemiBold supplied (`fonts/`).

**Spacing & layout.** 4px base scale. Panels are widely padded (24–32px) with comfortable
gaps; the screen breathes. Two fixed layout zones: a **hero column** (emblem + season +
rewards) on the left and a **leaderboard panel** on the right; top utility bar pinned, and
a bottom action row centered on the BATTLE button. Mobile collapses these into a single
scroll column with the CTA pinned to the bottom.

**Backgrounds.** A single full-bleed sky **gradient** (no photographic texture), brightened
by a radial glow at ~38% height. Faint blurred fantasy architecture sits behind the hero in
the concept art — recreated as soft low-contrast shapes, never competing with content.

**Corner radii.** Soft and generous: panels ~24–32px, inset cells ~16–18px, chips/pills
fully rounded. Nothing sharp. Matches the rounded panel sprites in `assets/ui/`.

**Cards & panels.** White (or faint-blue) fills, **no hard borders** — separation comes from
**soft cool-tinted drop shadows** (`--sh-card`, `--sh-soft`) plus an optional 1px top inset
highlight. Inset cells (reward slots, stat tiles) use `--surface-2` with a hairline.
The "My Rank" row is tinted blue (`--row-highlight`) and ringed, not bordered hard.

**Gold treatments.** The BATTLE button and emblem frame use a vertical gold gradient
(`--grad-gold`) with a brighter rim, an inner highlight and a warm drop shadow — beveled,
tactile, slightly raised. Gold text uses a clipped gradient.

**Transparency & blur.** Used sparingly: the top utility bar and tab strips sit on
**translucent white with backdrop-blur**; the hero glow uses soft radial alpha. Avoid heavy
glassmorphism elsewhere.

**Elevation system.** Three steps — `--sh-soft` (chips, small controls) → `--sh-card`
(panels, rows) → `--sh-float` (modals, the BATTLE button, focused emblem). Crystal glow
(`--glow-crystal`) is decorative-only, on the emblem.

**Borders.** Almost none. Where a line is needed it's a 1px **hairline** (`--hairline`)
divider between leaderboard rows, never a colored accent border. No left-border-accent cards.

**Motion.** Gentle and floaty. Easing `cubic-bezier(.22,.61,.36,1)` (ease-out) for entrances;
emblem does a slow 4s breathing float + glow pulse; stars pop in with a small overshoot
(bounce) when earned; numbers count up. Hover = slight lift + brighten; press = scale down to
~0.96 + shadow shrink. Nothing fast or aggressive; no particle storms.

**Imagery vibe.** Warm-cool fantasy: lavender + gold key light, airy highlights, soft focus.
Avatars are round, ringed in tier color. The mascot art (frog) is flat-shaded and friendly.

---

## ICONOGRAPHY

Three distinct icon registers, all shipped as real PNG assets (never hand-drawn SVG or emoji):

1. **General UI set** (`assets/icons/general/00–38.png`) — flat **white silhouettes**, bold
   and chunky with rounded terminals. Used for navigation and actions. Because they're
   white-on-transparent they double as **CSS masks**: `assets/icons.css` exposes each as a
   recolorable class (`<i class="ic ic-home">`), so a single asset tints to ink, gold, or
   white per context. Stroke style is solid-fill (not outline), medium-heavy weight.
2. **Stat set** (`assets/icons/stat/00–13.png`) — same white-silhouette language, themed for
   combat stats (HP, ATK, DEF, M.ATK/DEF, crit, speed, fire). `%` variants exist for
   percentage modifiers. Also recolorable via `icons.css`.
3. **Currency / reward set** (`assets/icons/currency_sheet.png`) — fully **painted,
   comic-book / halftone** illustrated items (tickets, diamond, gem shards, energy cells,
   coins, lootboxes). High-detail, multi-color, used at larger sizes inside reward slots —
   *not* recolorable; placed as-is. This is the only colorful icon register.

**Rules of thumb.** UI chrome → general set, tinted. Combat/stat readouts → stat set.
Rewards & currencies → painted currency set at 40px+. Never mix registers within one control.
No emoji, no unicode-as-icon, no third-party icon font — the game ships its own art.

> The sliced general/stat PNGs were auto-segmented from the source sheets via alpha
> projection. Index→name mapping is encoded in `assets/icons.css`.

---

## Index — what's in this system

| File / folder | Purpose |
|---|---|
| `README.md` | This document. |
| `SKILL.md` | Agent Skill manifest (for use in Claude Code). |
| `colors_and_type.css` | All design tokens: color, type scale, radii, spacing, shadows. |
| `assets/icons.css` | Recolorable icon classes (general + stat sets). |
| `assets/` | All visual assets: `icons/`, `ui/`, `avatars/`, `stickers/`, `reference/`. |
| `preview/` | Design-system cards (the Design System tab). |
| `ui_kits/pvp_ranking/` | High-fidelity HTML/JSX recreation of the PVP Ranking screen. |

### Font substitution & self-hosting
**Mali** (Cadson Demak) is the **self-hosted brand UI font** — supplied as
`fonts/Mali-SemiBold.ttf`, wired via `@font-face` in `colors_and_type.css` and used for all
UI, body, names and numbers (`--font-ui`). Only the SemiBold weight was supplied, so heavier
weights synthesize; drop additional Mali weights into `fonts/` for crisper bolds.
**Cinzel** (engraved fantasy serif for titles / ranks / the BATTLE CTA) is still a Google
Fonts **substitution** — no source file supplied. If Aether Arena licenses a specific display
serif, add it to `fonts/` and update `--font-display`.
