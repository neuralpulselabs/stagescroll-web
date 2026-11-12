# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

The marketing site for StageScroll, an iPad chord sheet app published by NeuralPulse Labs: a one-page overview at `/` and the privacy policy the App Store listing links to at `/privacy` (`https://stagescroll.com/privacy`; the App Store support URL is `/#support`). Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4. Deployed on Vercel from GitHub.

## Commands

```sh
npm run dev     # http://localhost:3000
npm run build   # production build; every page should prerender as static
npm run lint    # ESLint 9 flat config (next core-web-vitals + typescript)
```

There is no test suite. Verify changes with `npm run build` (type-checks and confirms pages stay static) and `npm run lint`.

## Architecture

- **`src/lib/site.ts` is the single source of truth** for everything the pages say about the app and publisher: name, tagline, description, contact email, publisher/legal name, copyright year, the one-time unlock (price and features), `appStoreUrl` and `privacyEffectiveDate`. The layout metadata, header, footer, landing page and privacy policy all read from it, so change facts there rather than in page copy.
  - `appStoreUrl: null` makes the page show "Coming soon". Once set, the button should use Apple's official "Download on the App Store" badge.
  - `unlock` must stay in step with what the app's `Unlock.isUnlocked` gates and the App Store listing. `price: null` hides the price.
- **`src/app/page.tsx`** holds the landing page's content as local data arrays (`features`, `screenshots`, `faqs`) rendered into sections. Features behind the in-app purchase are marked `unlock: true` and go last. Keep the number of `features` a multiple of six: the grid is two or three columns wide, and a short last row shows a grey gap. Section ids `features`, `screenshots` and `support` are linked from `src/components/site-header.tsx` (`/#features` etc.), so keep them in sync if renamed.
- **`src/app/privacy/page.tsx`** must match the iOS app's `PrivacyInfo.xcprivacy` and its App Store "Data Not Collected" answers. Update it (and bump `privacyEffectiveDate`) before the app ships anything that collects data, adds a network service or requests a new permission.
- **Layout and theme:** `src/app/layout.tsx` wraps every page in `SiteHeader`/`SiteFooter` and loads fonts via `next/font/google` (Geist → `font-sans`, Bricolage Grotesque → `font-display`, JetBrains Mono → `font-mono`). The site is dark-only. Colours come from the app icon and are Tailwind theme tokens in `src/app/globals.css` (`stage`, `stage-raised`, `stage-line`, `spot`, `spot-bright`, `cream`, `cream-dim`, `muted`); use these classes rather than raw hex values. `.spotlight` there is the hero's cone gradient.
- **Screenshots** are static JPEG imports from `src/assets/screenshots/`, rendered through `DeviceFrame` (`src/components/device-frame.tsx`), which uses `next/image` with blur placeholders; pass `eager` only for the above-the-fold image.
- **App icon** exists in three copies that must stay identical: `src/app/icon.png`, `src/app/apple-icon.png` (file-convention favicons) and `public/app-icon.png` (header logo and Open Graph image).
- `next.config.ts` enables `cacheComponents` and `partialPrefetching`, and wires Tailwind through the `@tailwindcss/turbopack` CSS loader rather than PostCSS.

## Screenshots

Taken on the iPad Pro 13-inch simulator (iPad mini for the band follower) from a Debug build of the app, saved as JPEG quality 88. **Only use public-domain songs; never songs from the owner's own library (copyrighted).**

- Status bar: `xcrun simctl status_bar <udid> override --time 9:41 --batteryState charged --batteryLevel 100 --wifiBars 3`
- Song view: launch with `-appearance dark -SelectSong "Home on the Range" -showsChordDiagrams YES`.
- Band: leader with `-BandLead YES -bandName "Lead Guitar"`, followers with `-BandJoin 1234 -bandName Bass` (and `Keys`), then open the Band panel from the toolbar badge.
- Band follower (`band-follower.jpg`, a bassist in their own part): launch the leader once with `-didShowWelcome YES` so it imports the sample songs, copy `screenshot-songs/Traditional - Home on the Range (Bass).txt` (an original bass line for the public-domain song) into its Documents, relaunch it with `-BandLead YES -bandName "Lead Guitar" -instrument guitar -SelectSong "Home on the Range" -appearance dark`, and launch a fresh iPad mini install with `-BandJoin 1234 -bandName Bass -instrument bass`. The follower receives the bass part from the leader and shows it.
- Light setlist shot: `-appearance light -sidebar setlists`, then open a setlist and a song.
