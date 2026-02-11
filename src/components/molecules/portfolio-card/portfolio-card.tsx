import type { PortfolioCardProps } from "../portfolio-card/portfolio-card.types";

export default function PortfolioCard({
  title,
  tech,
  link,
  image,
  ...rest
}: PortfolioCardProps) {
  return (
    <a
      data-hover="true"
      href={link}
      rel="noopener noreferrer"
      className="relative block group overflow-hidden rounded-lg w-full h-full"
      {...rest}
    >
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300" />

      {/* Title text */}
      <div className="absolute bottom-8 left-4 right-4 text-white md:opacity-0 translate-y-4 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:transition-all md:duration-300">
        <div className="flex flex-col gap-2">
          <p className="font-mono uppercase text-sm">{tech}</p>
          <h2 className="text-4xl md:text-6xl font-semibold font-sans">
            {title}
          </h2>
        </div>
      </div>
    </a>
  );
}
