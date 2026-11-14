import type { Metadata } from "next";
import Link from "next/link";
import { WindowFrame } from "@/components/window-frame";
import { site } from "@/lib/site";
import editorLight from "@/assets/screenshots/windows-editor-light.jpg";
import sectionsDark from "@/assets/screenshots/windows-sections-dark.jpg";
import setlistLight from "@/assets/screenshots/windows-setlist-light.jpg";
import songDark from "@/assets/screenshots/windows-song-dark.jpg";
import versionsDark from "@/assets/screenshots/windows-versions-dark.jpg";

export const metadata: Metadata = {
  title: "StageScroll for Windows",
  description: site.windows.description,
  alternates: { canonical: "/windows" },
};

// The grid shows these in two or three columns, so a multiple of six fills every row.
// Only what the Windows app does today: nothing here is promised for later.
const features: { title: string; body: string }[] = [
  {
    title: "Big, clear and lined up",
    body: "Lyrics, chords and tab in a monospaced font that never wraps, so every chord stays over its word. Chords are bold and coloured. Ctrl+Plus and Ctrl+Minus change the text size, and light or dark follows Windows, or your choice.",
  },
  {
    title: "Scroll your way",
    body: "Page Up, Page Down, the arrow keys and the mouse wheel move the sheet. Or click play and the song scrolls by itself at a speed saved with the song; a press of a scroll key pauses it. Click a song's tempo for a click that flashes on the beat.",
  },
  {
    title: "Jump to any section",
    body: "Verses, choruses and bridges get a bar above the sheet. Click one to go straight there; the part you're playing is highlighted.",
  },
  {
    title: "Transpose, capo and diagrams",
    body: "Move a song up or down and the chords, the key and the tab follow, a note that would go below the nut moving down a string as you'd play it. Move the capo and keep the pitch. Show a diagram, with fingerings, for every chord.",
  },
  {
    title: "A version for every player",
    body: "Keep a guitar chord sheet, a bass tab and a keys chart for the same song. Tell StageScroll what you play and it opens your version; switch to another from the badge under the title.",
  },
  {
    title: "Setlists and your own songs",
    body: "Put songs in order and step through the set with the arrows. Write a new song or edit one in a form with the title, capo, tuning, key, tempo and the sheet. Unsaved changes are never lost without asking.",
  },
];

const screenshots = [
  {
    image: setlistLight,
    title: "Setlists",
    caption: "Each song shows its place in the set, and the arrows step to the next one.",
    alt: "StageScroll for Windows in light mode showing Oh! Susanna, song 2 of 6 in the setlist Saturday at the Grange",
  },
  {
    image: sectionsDark,
    title: "Jump to a section",
    caption: "Click a verse or chorus in the bar above the sheet. The one you're reading stays highlighted.",
    alt: "StageScroll for Windows in dark mode with the Chorus 1 section chip highlighted and the chorus of Home on the Range on screen",
  },
  {
    image: versionsDark,
    title: "One song, every instrument",
    caption: "A file for each instrument: guitar, bass, keys, ukulele, vocals and drums.",
    alt: "StageScroll for Windows in dark mode with the instrument menu open, listing Guitar, Bass, Keys, Ukulele, Vocals and Drums",
  },
  {
    image: editorLight,
    title: "Edit or write a song",
    caption: "Title, capo, tuning, key, tempo and the chord sheet, in the same layout as the iPad.",
    alt: "The Edit Song form in StageScroll for Windows, with fields for title, artist, instrument, capo, tuning, key, tempo and the chord sheet",
  },
];

// What the Windows version doesn't have, said plainly so nobody buys a PC for it.
const leftOut = [
  "A tuner",
  "Band sync and iCloud sync",
  "Sound pads",
  "Pedal and MIDI settings",
  "Importing PDFs or many songs at once",
  "Pasting in or importing chord sheets, and exporting songs",
];

const faqs = [
  {
    q: "What do I need?",
    a: "A 64-bit Windows PC. StageScroll keeps your songs in a folder you choose, so there's nothing to sign in to.",
  },
  {
    q: "Can I use the songs from my iPad?",
    a: "Yes. The songs are the same plain-text files in both apps, with setlists in a Setlists folder. Copy your StageScroll folder across from the Files app or Finder and choose it as your library folder.",
  },
  {
    q: "Where are my songs kept?",
    a: "In the folder you choose, as plain-text files you can open in any editor. StageScroll never moves or renames them when it reads the folder, and a song you delete goes to the Recycle Bin.",
  },
  {
    q: "Do I need an account or an internet connection?",
    a: "No. There's no sign-up, and StageScroll works offline.",
  },
  {
    q: "Is it the same app as the iPad one?",
    a: "It's made to feel like it: the same layout, the same words, the same song rules for chords, tab and transposing. The iPad app is built for a music stand and a page-turner pedal, and has the band, sync and sound features the Windows version leaves out.",
  },
];

export default function WindowsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="spotlight pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pt-20 lg:pb-28">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-spot/40 bg-spot/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-spot-bright">
              For Windows
            </p>
            <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Your chord sheets, <span className="text-spot-bright">on your PC.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-dim text-pretty">
              StageScroll for Windows shows lyrics, chords and tab big, clear and lined up, and scrolls them
              for you. It reads the same song files as the iPad app, so your library goes where you do.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              {site.windows.downloadUrl ? (
                <a
                  href={site.windows.downloadUrl}
                  className="rounded-full bg-cream px-6 py-3 font-semibold text-stage transition hover:bg-white"
                >
                  Download for Windows
                </a>
              ) : (
                <>
                  <span className="rounded-full bg-cream px-6 py-3 font-semibold text-stage">
                    Coming soon for Windows
                  </span>
                  <a
                    href={`mailto:${site.contactEmail}?subject=${encodeURIComponent("StageScroll for Windows")}`}
                    className="px-2 py-3 font-medium text-cream-dim hover:text-cream"
                  >
                    Email to hear when it&apos;s ready →
                  </a>
                </>
              )}
            </div>
            <p className="mt-6 text-sm text-muted">{site.windows.downloadUrl ? `Version ${site.windows.version} for 64-bit Windows, about 140 MB. The installer is not code-signed yet, so Windows may ask you to choose "More info", then "Run anyway". No account, and it works offline.` : "No account, and it works offline."}</p>
          </div>
          <WindowFrame
            src={songDark}
            alt="StageScroll for Windows in dark mode showing Home on the Range transposed up 2, with its strumming pattern, chord diagrams and section bar"
            sizes="(min-width: 1152px) 1088px, 92vw"
            eager
            className="mt-14 w-full shadow-[0_40px_120px_-30px_rgba(200,116,42,0.5)]"
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-20 border-t border-stage-line/60 bg-stage-raised/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            The reading and playing tools, with a keyboard and a mouse.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-stage-line bg-stage-line sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="bg-stage p-7">
                <h3 className="font-display text-xl font-semibold tracking-tight">{f.title}</h3>
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
            Light or dark, the same as on the iPad.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cream-dim">
            These are the Windows app as it is, with songs old enough to be free for anyone to sing.
          </p>
          <div className="mt-12 grid items-start gap-x-8 gap-y-14 md:grid-cols-2">
            {screenshots.map((s) => (
              <figure key={s.title} className="min-w-0">
                <a
                  href={s.image.src}
                  target="_blank"
                  rel="noopener"
                  className="block rounded-xl transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-spot-bright"
                >
                  <WindowFrame src={s.image} alt={s.alt} sizes="(min-width: 1152px) 540px, (min-width: 768px) 45vw, 92vw" />
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

      {/* What's left out */}
      <section className="border-t border-stage-line/60 bg-stage-raised/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              What the first Windows version leaves out.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-cream-dim">
              The iPad app is made for a music stand and a pedal. The Windows version is for reading,
              playing from and editing a library at a keyboard, so these stay on the iPad for now. They are
              never shown greyed out: if a button is there, it works.
            </p>
            <p className="mt-4 text-cream-dim">
              Looking for the iPad app?{" "}
              <Link href="/" className="font-medium text-spot-bright hover:text-cream">
                See what it does →
              </Link>
            </p>
          </div>
          <div className="rounded-2xl border border-stage-line bg-stage p-7 sm:p-8">
            <ul className="space-y-4">
              {leftOut.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                  <span className="leading-relaxed text-cream-dim">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="questions" className="scroll-mt-20 border-t border-stage-line/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Questions</h2>
            <p className="mt-4 leading-relaxed text-cream-dim">
              Something not answered here? Email {site.publisher} and you&apos;ll get a reply from the people
              who make {site.name}.
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
