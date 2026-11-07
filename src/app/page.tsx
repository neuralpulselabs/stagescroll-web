import Link from "next/link";
import { DeviceFrame } from "@/components/device-frame";
import { site } from "@/lib/site";
import autoScroll from "@/assets/screenshots/auto-scroll.jpg";
import bandFollower from "@/assets/screenshots/band-follower.jpg";
import bandLeader from "@/assets/screenshots/band-leader.jpg";
import setlistLight from "@/assets/screenshots/setlist-light.jpg";
import songDark from "@/assets/screenshots/song-dark.jpg";

// The grid shows these in two or three columns, so a multiple of six fills every row; any
// other count leaves a grey gap at the end. The unlock ones go last.
const features: { title: string; body: string; unlock?: boolean }[] = [
  {
    title: "Turn pages with your foot",
    body: "A Bluetooth page-turner pedal scrolls a screen, or a few lines, at a time, so your hands stay on the strings. Pick any keys, or use a MIDI pedal over USB, Bluetooth or the network.",
  },
  {
    title: "Auto-scroll at your pace",
    body: "Tap play and the song scrolls by itself. Set the speed once and it's saved with the song. A press of the pedal pauses it.",
  },
  {
    title: "Setlists for the whole show",
    body: "Put songs in order and step through the set. With the pedal option on, a press past the end of a song opens the next one. If iPadOS closes the app in the background, it opens again where you were.",
  },
  {
    title: "Jump to any section",
    body: "Verses, choruses and bridges get a bar above the sheet. Tap one to go straight there; the part you're playing is highlighted.",
  },
  {
    title: "Every chord has a diagram",
    body: "Show a diagram for every chord in a guitar sheet, with fingerings. Transpose, or move the capo, and the diagrams follow.",
  },
  {
    title: "Tab that transposes",
    body: "Guitar and bass tab is recognized anywhere in a sheet. Transpose and the frets move with the chords, every row stays lined up, and a note that would go below the nut moves down a string, as you'd play it.",
  },
  {
    title: "A version for every player",
    body: "Keep a guitar chord sheet, a bass tab and a keys chart for the same song. Tell StageScroll what you play and it opens your version; switch to another from the badge under the title and you land in the same section.",
  },
  {
    title: "Tuner and metronome built in",
    body: "The tuner knows the song's tuning, standard or E♭, with or without the capo, and tunes bass and ukulele too. Tap a song's tempo for a click that flashes on the beat.",
  },
  {
    title: "Bring your songs in, take them out",
    body: "Paste a chord sheet from anywhere, or open a PDF (scans too) or a ChordPro file, from the app or another app's share sheet. Share a song or a whole songbook as a PDF, ChordPro or song files.",
  },
  {
    title: "Play in sync with your band",
    body: "One iPad leads and the rest follow its songs, scrolling, transposition and metronome, over Wi-Fi or Bluetooth with no internet needed. Each player reads their own part, kept on the same verse, and gets any song or part they're missing from the leader.",
    unlock: true,
  },
  {
    title: "Your library on every iPad",
    body: "Turn on iCloud sync and your songs, setlists and sounds stay the same on all your iPads. Each iPad keeps its own full copy, so everything opens with no network, and syncing waits while you play.",
    unlock: true,
  },
  {
    title: "Sound pads",
    body: "Give a song up to four sounds, such as an intro, a drone or a loop, and fire them from the pedal, with an optional count-in.",
    unlock: true,
  },
];

const screenshots = [
  {
    image: setlistLight,
    title: "Setlists",
    caption: "Each song shows its place in the set, and the arrows step to the next one.",
    alt: "StageScroll in light mode showing Oh! Susanna, song 2 of 6 in the setlist Saturday at the Grange",
  },
  {
    image: autoScroll,
    title: "Auto-scroll",
    caption: "The sheet moves at the song's own speed. Faster, slower or pause from the controls or the pedal.",
    alt: "StageScroll in dark mode auto-scrolling Home on the Range at 0.4 lines per second",
  },
  {
    image: bandLeader,
    title: "Lead the band",
    caption: "The leader's iPad shows a code. Everyone who joins is listed as they follow along.",
    alt: "The Band panel on the leader's iPad, showing the code 1234 and two bandmates, Keys and Bass, following",
  },
  {
    image: bandFollower,
    title: "Follow in your own part",
    caption: "The bassist's iPad mini follows the leader's chord sheet in a bass tab of the same song, sent over from the leader's iPad.",
    alt: "A bassist's iPad mini following Lead Guitar, showing the bass tab version of Home on the Range with a Bass badge and Intro, Verse and Chorus sections",
  },
];

const faqs = [
  {
    q: "What do I need?",
    a: "An iPad with iPadOS 16 or later. Any Bluetooth page-turner pedal that types keyboard keys works, and so do MIDI pedals and controllers.",
  },
  {
    q: "Is it free?",
    a: `StageScroll is free to download, and everything except the items in the unlock is free to use, with no ads and no time limit. A one-time in-app purchase${site.unlock.price ? ` of ${site.unlock.price}` : ""} adds iCloud sync, band sync, sound pads and importing many songs at once. With Family Sharing, one purchase covers your family.`,
  },
  {
    q: "I play bass, keys or ukulele. Is it for me?",
    a: "Yes. Choose what you play when you first open the app, or later in the ⋯ menu under I Play. A song can have a version for guitar, bass, keys, ukulele, vocals or drums, and StageScroll opens yours, or the guitar version if there isn't one for you. Bass tab transposes like guitar tab, and the tuner tunes bass and ukulele strings.",
  },
  {
    q: "Does it work on iPhone or Mac?",
    a: "No. StageScroll is made for the iPad's screen, so a whole verse and its chords fit at a size you can read from a music stand.",
  },
  {
    q: "How do I bring in songs from somewhere else?",
    a: "Copy a chord sheet from a web page, a document or a note and paste it into the app: it works out the title, capo and sections. PDFs and ChordPro files import too, from the + menu or by choosing StageScroll in another app's share sheet. A PDF that's a scan or a picture of a sheet is read with text recognition, on the iPad.",
  },
  {
    q: "Where are my songs kept?",
    a: "On your iPad, as plain-text files you can see in the Files app under On My iPad › StageScroll. Copy files in or out through Files or Finder at any time. With iCloud sync on, each iPad keeps its own copy and the library is also in iCloud Drive › StageScroll.",
  },
  {
    q: "Do I need an account or an internet connection?",
    a: "No. There's no sign-up, and StageScroll works offline, so it keeps going at venues with bad Wi-Fi. Band sync connects the iPads directly. iCloud sync uses your own iCloud account and catches up when you're back online.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="spotlight pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-[1fr_0.95fr] lg:pb-28">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-spot/40 bg-spot/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-spot-bright">
              For iPad
            </p>
            <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Your chord sheets, <span className="text-spot-bright">ready for the stage.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-dim text-pretty">
              StageScroll keeps lyrics, chords and tab big, clear and lined up, then scrolls them for you:
              by pedal, by auto-scroll or in step with your band. Keep your eyes up and your hands on your
              instrument.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              {site.appStoreUrl ? (
                <a
                  href={site.appStoreUrl}
                  className="rounded-full bg-cream px-6 py-3 font-semibold text-stage transition hover:bg-white"
                >
                  Download on the App Store
                </a>
              ) : (
                <span className="rounded-full bg-cream px-6 py-3 font-semibold text-stage">
                  Coming soon to the App Store
                </span>
              )}
              <Link href="#features" className="px-2 py-3 font-medium text-cream-dim hover:text-cream">
                See what it does ↓
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted">Free to download. No account, no ads, and it works offline.</p>
          </div>
          <DeviceFrame
            src={songDark}
            alt="StageScroll in dark mode showing Home on the Range, with its chord diagrams, strumming pattern and section bar"
            sizes="(min-width: 1024px) 520px, (min-width: 640px) 80vw, 92vw"
            size="lg"
            eager
            className="mx-auto w-full max-w-[520px] shadow-[0_40px_120px_-30px_rgba(200,116,42,0.5)]"
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-20 border-t border-stage-line/60 bg-stage-raised/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Everything you reach for mid-song, one tap or one stomp away.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-stage-line bg-stage-line sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="bg-stage p-7">
                <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-xl font-semibold tracking-tight">
                  {f.title}
                  {f.unlock && (
                    <span className="rounded-full border border-spot/50 px-2 py-0.5 font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-spot-bright">
                      Unlock
                    </span>
                  )}
                </h3>
                <p className="mt-2.5 leading-relaxed text-cream-dim">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section id="screenshots" className="scroll-mt-20 border-t border-stage-line/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Light or dark, solo or with the band.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cream-dim">
            These are the app as it is, on iPad Pro and iPad mini, with songs old enough to be free for
            anyone to sing.
          </p>
          <div className="mt-12 grid items-start gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {screenshots.map((s) => (
              <figure key={s.title} className="min-w-0">
                <a
                  href={s.image.src}
                  target="_blank"
                  rel="noopener"
                  className="block rounded-[1.4rem] transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-spot-bright"
                >
                  <DeviceFrame src={s.image} alt={s.alt} sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 92vw" />
                </a>
                <figcaption className="mt-4">
                  <span className="font-display text-lg font-semibold">{s.title}</span>
                  <span className="mt-1 block leading-relaxed text-cream-dim">{s.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* The unlock */}
      <section className="border-t border-stage-line/60 bg-stage-raised/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Free to play. One purchase for the band.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-cream-dim">
              Pedal scrolling, auto-scroll, setlists, chord diagrams, tab, a version for every instrument,
              the tuner and the metronome, importing and sharing are all free, for good. A one-time unlock adds the rest. No subscription.
            </p>
          </div>
          <div className="rounded-2xl border border-spot/40 bg-stage p-7 sm:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-display text-xl font-semibold">The unlock</span>
              {site.unlock.price && (
                <span className="font-display text-2xl font-bold text-spot-bright">
                  {site.unlock.price}
                  <span className="ml-1.5 font-sans text-sm font-medium text-muted">once</span>
                </span>
              )}
            </div>
            <ul className="mt-6 space-y-4">
              {site.unlock.features.map((f) => (
                <li key={f.name} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-spot-bright" />
                  <span>
                    <span className="font-semibold">{f.name}</span>
                    <span className="block leading-relaxed text-cream-dim">{f.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-10 rounded-3xl border border-spot/30 bg-gradient-to-br from-spot/15 to-transparent p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Your songs stay yours.</h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-cream-dim">
              StageScroll collects nothing: no account, no ads, no analytics, no tracking. Your library is a
              folder of plain-text files on your iPad, so it&apos;s never locked inside the app.
            </p>
            <Link href="/privacy" className="mt-6 inline-block font-medium text-spot-bright hover:text-cream">
              Read the privacy policy →
            </Link>
          </div>
          <pre
            aria-label="An example song file"
            className="min-w-0 overflow-x-auto rounded-xl border border-stage-line bg-stage p-5 font-mono text-[12px] leading-relaxed text-cream-dim sm:text-[13px]"
          >
            <span className="text-muted">Traditional - Home on the Range.txt</span>
            {"\n\n"}Title: Home on the Range{"\n"}Artist: Traditional{"\n"}Instrument: Guitar{"\n"}Key: G{"\n"}Tempo: 100{"\n"}---{"\n"}
            <span className="text-spot-bright">[Verse 1]</span>
            {"\n"}
            <span className="font-bold text-spot-bright">{"    G         G7             C       Cm"}</span>
            {"\n"}Oh, give me a home where the buffalo roam,
          </pre>
        </div>
      </section>

      {/* Support */}
      <section id="support" className="scroll-mt-20 border-t border-stage-line/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Support</h2>
            <p className="mt-4 leading-relaxed text-cream-dim">
              A question, a bug, or a pedal that won&apos;t pair? Email {site.publisher} and you&apos;ll get a
              reply from the people who make {site.name}.
            </p>
            <a
              href={`mailto:${site.contactEmail}`}
              className="mt-6 inline-block max-w-full break-all rounded-full border border-cream/30 px-5 py-2.5 font-medium transition hover:border-cream hover:bg-cream hover:text-stage"
            >
              {site.contactEmail}
            </a>
          </div>
          <dl className="divide-y divide-stage-line border-y border-stage-line">
            {faqs.map((f) => (
              <div key={f.q} className="py-5">
                <dt className="font-display text-lg font-semibold">{f.q}</dt>
                <dd className="mt-1.5 leading-relaxed text-cream-dim">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
