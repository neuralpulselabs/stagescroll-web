# stagescroll-web

The website for StageScroll, the iPad chord sheet app published by NeuralPulse Labs: a
one-page overview at `/` and the privacy policy the App Store listing links to at
`/privacy`. Next.js (App Router), TypeScript and Tailwind CSS 4.

```sh
npm install
npm run dev     # http://localhost:3000
npm run build   # production build; every page is static
npm run lint
```

## Where things are

- `src/lib/site.ts`: the app name, publisher, contact email, domain, the unlock's price and
  features, the App Store link and the privacy policy's effective date. Set `appStoreUrl`
  once the app is live, and change `privacyEffectiveDate` whenever the policy changes.
- `src/app/page.tsx`: the landing page (hero, features, screenshots, the unlock, privacy
  summary, support and FAQ). Features in the unlock are marked `unlock: true`.
- `src/app/privacy/page.tsx`: the privacy policy. Keep it in step with the app's
  `PrivacyInfo.xcprivacy` and its App Privacy answers ("Data Not Collected"), and update it
  before shipping anything that collects data, adds a network service or a new permission.
- `src/assets/screenshots/`: screenshots from the iPad simulator, shown with
  `src/components/device-frame.tsx`.
- `src/app/icon.png`, `apple-icon.png` and `public/app-icon.png`: copies of the app icon.
- Colours (from the icon) and fonts are in `src/app/globals.css` and `src/app/layout.tsx`.

## Screenshots

Taken on the iPad Pro 13-inch simulator (and an iPad mini for the band follower) from a
Debug build, with a library of public-domain songs only, and saved as JPEG (quality 88):

- Status bar: `xcrun simctl status_bar <udid> override --time 9:41 --batteryState charged --batteryLevel 100 --wifiBars 3`
- Song view: launch with `-appearance dark -SelectSong "Home on the Range" -showsChordDiagrams YES`.
- Band: launch the leader with `-BandLead YES -bandName "Lead Guitar"` and the followers with
  `-BandJoin 1234 -bandName Bass` (and `Keys`), then open the Band panel from the toolbar badge.
- `-appearance light` and `-sidebar setlists` give the light setlist shot; open a setlist and a song.

Never use songs from the owner's own library: they're copyrighted.

## App Store Connect URLs

- Privacy Policy URL: `https://stagescroll.com/privacy`
- Support URL: `https://stagescroll.com/#support`
- Marketing URL (optional): `https://stagescroll.com`
