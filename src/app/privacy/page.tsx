import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} handles your information: it doesn't collect any.`,
  alternates: { canonical: "/privacy" },
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-stage-line pt-8">
      <h2 className="font-display text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-cream-dim [&_strong]:font-semibold [&_strong]:text-cream [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  const email = (
    <a href={`mailto:${site.contactEmail}`} className="text-spot-bright underline-offset-4 hover:underline">
      {site.contactEmail}
    </a>
  );

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-sm font-medium uppercase tracking-widest text-spot-bright">Privacy Policy</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        {site.name} doesn&apos;t collect your data.
      </h1>
      <p className="mt-4 text-sm text-muted">Effective {site.privacyEffectiveDate}</p>

      <div className="mt-8 rounded-2xl border border-spot/30 bg-spot/10 p-6 leading-relaxed">
        <strong className="font-semibold">In short:</strong> {site.name} has no accounts, no ads, no
        analytics and no tracking. Your songs, setlists and settings are kept on your iPad.{" "}
        {site.publisher} never receives them, or anything else about you or how you use the app.
      </div>

      <div className="mt-12 space-y-10">
        <Section title="Who we are">
          <p>
            {site.name} is an iPad app made and published by {site.publisherLegalName}{" "}
            <span className="whitespace-nowrap">(&ldquo;{site.publisher}&rdquo;,</span> &ldquo;we&rdquo;,
            &ldquo;us&rdquo;). This policy explains what happens to information when you use the app and
            this website.
          </p>
        </Section>

        <Section title="Information we collect">
          <p>
            <strong>None.</strong> {site.name} does not collect, store, sell or share personal information.
            The app has no sign-up, contains no advertising or analytics code, and doesn&apos;t track you
            across other companies&apos; apps or websites. It doesn&apos;t connect to any server of ours.
          </p>
        </Section>

        <Section title="Your songs and settings">
          <p>
            Songs, setlists, sound pad audio and chord sheets you import are saved as files in the
            app&apos;s folder on your iPad, which you can see in the Files app under{" "}
            <strong>On My iPad › {site.name}</strong>. Settings such as your pedal keys are stored on the
            iPad too. They are included in your iPad&apos;s own backups, which Apple handles under its
            privacy policy, and they are deleted when you delete the app.
          </p>
          <p>
            When you share or export songs (as a PDF, ChordPro or zip file), they go wherever you send
            them using iPadOS&apos;s share sheet. We don&apos;t see them.
          </p>
        </Section>

        <Section title="Permissions the app asks for">
          <p>iPadOS asks before the app can use any of these, and you can change your answer later in Settings.</p>
          <ul>
            <li>
              <strong>Microphone:</strong> used only by the tuner, and only while it&apos;s open. The sound is
              analysed live on the iPad to find the pitch, and is never recorded, saved or sent anywhere.
            </li>
            <li>
              <strong>Local Network:</strong> used only for band sync, to find bandmates&apos; iPads nearby.
              Song details, scroll position and the metronome go directly between the iPads in the
              session over an encrypted connection, never through the internet or through us. Songs a
              bandmate is missing are sent to them so they can follow along.
            </li>
            <li>
              <strong>Bluetooth:</strong> used only to connect Bluetooth MIDI pedals that you choose in the
              pedal settings.
            </li>
          </ul>
        </Section>

        <Section title="iCloud">
          <p>
            If a version of {site.name} offers iCloud sync and you turn it on, your library is stored in
            your own iCloud Drive and synced between your devices by Apple. We have no access to your
            iCloud account or its contents. Apple&apos;s privacy policy covers iCloud.
          </p>
        </Section>

        <Section title="Purchases">
          <p>
            Any in-app purchases are handled entirely by Apple through the App Store. We never receive
            your name, payment details or Apple Account information. The app checks with the App Store
            on your device whether a purchase has been made.
          </p>
        </Section>

        <Section title="Crash reports and App Store data">
          <p>
            If you choose to share analytics with app developers in your iPad&apos;s settings, Apple may
            send us anonymous crash reports and usage statistics, as described in Apple&apos;s privacy
            policy. Apple also gives developers aggregated, anonymous App Store figures such as download
            counts. None of this identifies you.
          </p>
        </Section>

        <Section title="This website">
          <p>
            This website doesn&apos;t use cookies, analytics or tracking scripts, and has no forms. Our
            hosting provider may keep standard server logs, such as IP addresses and the pages
            requested, for security and to keep the site running. If you email us, we use your
            message and address only to reply to you, and we&apos;ll delete them if you ask.
          </p>
        </Section>

        <Section title="Children">
          <p>
            {site.name} is suitable for all ages. Because it collects no personal information, it collects
            none from children under 13 or any other age.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            If the app ever starts handling information differently, we&apos;ll update this page and its
            effective date before that version is released.
          </p>
        </Section>

        <Section title="Contact">
          <p>Questions about this policy or your privacy? Email {email}.</p>
        </Section>
      </div>
    </main>
  );
}
