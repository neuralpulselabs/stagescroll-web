import Image, { type StaticImageData } from "next/image";

// A screenshot from the iPad simulator, in a plain dark bezel like the iPad's own.
export function DeviceFrame({
  src,
  alt,
  sizes,
  eager = false,
  size = "md",
  className = "",
}: {
  src: StaticImageData;
  alt: string;
  sizes: string;
  /** Load at once, for the image at the top of the page. */
  eager?: boolean;
  size?: "md" | "lg";
  className?: string;
}) {
  const bezel = size === "lg" ? "rounded-[2rem] p-3 sm:p-3.5" : "rounded-[1.4rem] p-2";
  const screen = size === "lg" ? "rounded-[1.35rem]" : "rounded-[0.95rem]";
  return (
    <div className={`bg-[#0b0a0b] ring-1 ring-stage-line ${bezel} ${className}`}>
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        placeholder="blur"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className={`block h-auto w-full ${screen}`}
      />
    </div>
  );
}
