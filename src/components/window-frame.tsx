import Image, { type StaticImageData } from "next/image";

// A screenshot of the Windows app, under a title bar like the one Windows draws for it.
// The screenshots are of the app's own window contents; the bar is decoration.
export function WindowFrame({
  src,
  alt,
  sizes,
  eager = false,
  className = "",
}: {
  src: StaticImageData;
  alt: string;
  sizes: string;
  /** Load at once, for the image at the top of the page. */
  eager?: boolean;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-xl bg-[#202020] ring-1 ring-stage-line ${className}`}>
      <div aria-hidden className="flex h-8 items-center justify-between bg-[#202020] pl-3 text-[0.7rem] text-[#e6e6e6]">
        <span className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element -- a 16px decoration, nothing to optimise */}
          <img src="/app-icon.png" alt="" width={14} height={14} className="rounded-[3px]" />
          StageScroll
        </span>
        <span className="flex h-full text-[#e6e6e6]">
          <svg viewBox="0 0 46 32" className="h-8 w-[46px]" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M18 16h10" />
          </svg>
          <svg viewBox="0 0 46 32" className="h-8 w-[46px]" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="18.5" y="11.5" width="9" height="9" />
          </svg>
          <svg viewBox="0 0 46 32" className="h-8 w-[46px]" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M18 11l10 10M28 11L18 21" />
          </svg>
        </span>
      </div>
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        placeholder="blur"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className="block h-auto w-full"
      />
    </div>
  );
}
