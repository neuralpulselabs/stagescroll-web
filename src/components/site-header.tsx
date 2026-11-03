import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-stage-line/60 bg-stage/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/app-icon.png"
            alt=""
            width={36}
            height={36}
            className="rounded-[9px]"
            loading="eager"
          />
          <span className="font-display text-lg font-semibold tracking-tight">{site.name}</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm text-cream-dim sm:gap-7">
          <Link href="/#features" className="hidden transition-colors hover:text-cream sm:inline">
            Features
          </Link>
          <Link href="/#screenshots" className="hidden transition-colors hover:text-cream md:inline">
            Screenshots
          </Link>
          <Link href="/#support" className="transition-colors hover:text-cream">
            Support
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-cream">
            Privacy
          </Link>
        </nav>
      </div>
    </header>
  );
}
