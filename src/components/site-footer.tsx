import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-stage-line/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div className="space-y-1">
          <p className="text-cream-dim">
            {site.name} is made by {site.publisher}.
          </p>
          <p>
            © {site.copyrightYear} {site.publisherLegalName}. iPad, iPadOS and App Store are
            trademarks of Apple Inc.
          </p>
        </div>
        <nav className="flex shrink-0 gap-6">
          <Link href="/privacy" className="hover:text-cream">
            Privacy Policy
          </Link>
          <a href={`mailto:${site.contactEmail}`} className="hover:text-cream">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
