import type { ShortCutCardProps } from "@/components/molecules/short-cut-card/short-cut-card.types";


export const shortCuts: (ShortCutCardProps)[] = [
    {
        title: "portfolio site",
        subtitle: "React, Typescript, Tailwind",
        link: "https://github.com/juniperfawn/cera-portfolio",
        target: "_blank",
        image: "/images/quick-link-github.png",
        cta: "see repo"
    },
    {
        title: "HagaDirect",
        subtitle: "Next.js, Typscript, Storyblok",
        link: "/projects/haga-direct",
        image: "/images/haga/haga-cover.png",
        cta: "see more"
    },
    {
        title: "arcé studios",
        subtitle: "Figma, Framer",
        link: "/projects/arce-studios",
        image: "/images/arce/arce-cover.png",
        cta: "see more"
    },
    {
        title: "about",
        subtitle: "Get to know me",
        link: "/about",
        image: "/images/quick-link-about-01.png",
        cta: "see more"
    }
  ];
  