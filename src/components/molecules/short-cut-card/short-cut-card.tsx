import type { ShortCutCardProps } from "../short-cut-card/short-cut-card.types";

export default function ShortCutCard({
  title,
  subtitle,
  cta,
  link,
  image,
}: ShortCutCardProps) {
  return (
    <a
      data-hover="true"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-2 text-black text-left group
                   focus:outline-none focus-visible:ring-2
                   focus-visible:ring-black focus-visible:ring-offset-2"
    >
      <div className="relative overflow-hidden rounded-md w-full md:w-[180px] h-[180px]">
        <img
          src={image}
          alt={`${title} preview`}
          width={180}
          height={180}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-semibold font-sans">{title}</h3>
          <p className="text-pf-gray-01 text-xs pt-2">{subtitle}</p>
        </div>

        <span className="font-semibold font-mono uppercase text-xs hidden md:block">
          {cta}
        </span>
      </div>
    </a>
  );
}
