import type { ButtonProps } from "./button.types";

export const Button = ({
  title,
  backgroundColor = "bg-pf-white-01-20",
  textColor = "text-pf-white-01",
  link,
  onClick,
}: ButtonProps) => {
  const baseClasses =
    "group backdrop-blur-md uppercase inline-flex items-center text-xs rounded-3xl px-4 py-2 font-mono transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pf-red-01 motion-safe:transition-all motion-reduce:transition-none";

  const className = `${baseClasses} ${backgroundColor} ${textColor}`;

  const content = (
    <span className="relative inline-flex items-center overflow-hidden">
      <span
        aria-hidden="true"
        className="
          mr-1 opacity-0 -translate-x-1
          transition-all duration-200
          group-hover:opacity-100
          group-hover:translate-x-0
        "
      >
        •
      </span>

      <span>{title}</span>
    </span>
  );

  if (link) {
    return (
      <a
        href={link}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
};
