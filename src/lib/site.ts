// Everything the pages say about the app and who publishes it, in one place.
export const site = {
  name: "StageScroll",
  tagline: "Chord sheets for the stage",
  description:
    "StageScroll is an iPad app for guitar chord sheets: hands-free scrolling with a page-turner pedal, auto-scroll, setlists, chord diagrams and band sync.",
  url: "https://stagescroll.com",
  contactEmail: "stagescroll@neuralpulselabs.com",
  // The publisher: the developer name on the App Store, and the legal name for the
  // copyright line and the privacy policy.
  publisher: "NeuralPulse Labs",
  publisherLegalName: "NeuralPulse Labs, LLC",
  copyrightYear: 2026,
  // The one-time in-app purchase. Keep this in step with what the app's `Unlock.isUnlocked`
  // gates and with the App Store listing. Set `price` to null to leave the price out.
  unlock: {
    price: "$4.99" as string | null,
    features: [
      { name: "Band sync", detail: "Lead your bandmates' iPads, or follow the leader's." },
      { name: "Sound pads", detail: "Up to four sounds per song, played from the pedal." },
      { name: "Import many songs at once", detail: "Whole folders, zips and StageScroll backups, sounds included." },
    ],
  },
  // Set this to the App Store URL once the app is live; until then the page says "Coming soon".
  // Then use Apple's official "Download on the App Store" badge for the button
  // (developer.apple.com/app-store/marketing/guidelines).
  appStoreUrl: null as string | null,
  // The date the privacy policy took effect. Change it whenever the policy changes.
  privacyEffectiveDate: "November 3, 2026",
} as const;
