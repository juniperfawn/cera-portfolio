import type { AnchorHTMLAttributes } from "react";

export type PortfolioCardProps = {
  title: string;
  tech: string;
  link: string;
  image: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;
