import type { ProjectProps } from "@/components/templates/project/project.types";

export const projects: ProjectProps[] = [
  {
    slug: "haga-direct",
    title: "HagaDirect",
    year: 2025,
    techStack: ["Next.js", "TypeScript", "Storyblok"],
    roles: ["Frontend Development"],
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque leo eros, tristique eu venenatis et, aliquam eu dolor. Ut ac massa mattis, rhoncus ante vel, lobortis tortor. Vestibulum et nibh sit amet lectus iaculis varius. Proin in augue libero. Mauris sit amet viverra arcu, ac cursus magna. Sed in bibendum mauris. Praesent at dui neque. Praesent nec ultricies diam, a bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis ante vitae justo pretium, a iaculis neque malesuada. Nunc euismod metus sed sodales pulvinar.",
    liveUrl: "https://hagadirect.nl/",
    buttonColor:"bg-client-green-01",
    buttonTextColor: "text-pf-black-01",
    headerImage: "/images/haga/haga-cover.png",
    projectGallery: [
      {
        type: "image",
        src: "/images/haga/haga-phone-mockup-01.jpeg",
      },
      {
        type: "image",
        src: "/images/haga/haga-logo.gif",
      },
      {
        type: "video",
        src: "/images/haga/haga-video.mp4",
        loop: true,
        autoPlay: true,
      }
    ],
  },
    {
      slug: "colorado-energy-systems",
      title: "Colorado Energy Systems",
      year: 2026,
      techStack: ["Figma", "Framer"],
      roles: ["Design", "Development"],
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque leo eros, tristique eu venenatis et, aliquam eu dolor. Ut ac massa mattis, rhoncus ante vel, lobortis tortor. Vestibulum et nibh sit amet lectus iaculis varius. Proin in augue libero. Mauris sit amet viverra arcu, ac cursus magna. Sed in bibendum mauris. Praesent at dui neque. Praesent nec ultricies diam, a bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis ante vitae justo pretium, a iaculis neque malesuada. Nunc euismod metus sed sodales pulvinar.",
      liveUrl: "https://coloradoenergysystems.com/",
      buttonColor:"bg-client-blue-01",
      headerImage: "/images/ces/ces-cover.png",
      projectGallery: [
        {
          type: "custom",
          block: "ces-drag-demo"
        },
        {
          type: "image",
          src: "/images/ces/ces-phone-mockup.png",
        },
        {
          type: "image",
          src: "/images/ces/ces-laptop-mockup.png",
        }
      ],
    },
    {
      slug: "klaus-kocher-fotograf",
      title: "Klaus Kocher Fotograf",
      year: 2025,
      techStack: ["Figma", "Framer"],
      roles: ["Design", "Development"],
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque leo eros, tristique eu venenatis et, aliquam eu dolor. Ut ac massa mattis, rhoncus ante vel, lobortis tortor. Vestibulum et nibh sit amet lectus iaculis varius. Proin in augue libero. Mauris sit amet viverra arcu, ac cursus magna. Sed in bibendum mauris. Praesent at dui neque. Praesent nec ultricies diam, a bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis ante vitae justo pretium, a iaculis neque malesuada. Nunc euismod metus sed sodales pulvinar.",
      liveUrl: "https://klauskocherfotograf.com/",
      buttonColor:"bg-client-red-01",
      headerImage: "/images/klaus/klaus-cover.png",
      projectGallery: [
        {
          type: "custom",
          block: "klaus-drag-demo"
        },
        {
          type: "image",
          src: "/images/klaus/klaus-demo.gif",
        },
        {
          type: "image",
          src: "/images/klaus/klaus-laptop-mockup.png",
        }
      ],
    },
    {
      slug: "arce-studios",
      title: "arcé studios",
      year: 2025,
      techStack: ["Figma", "Framer", "Shopify E-Commerce"],
      roles: ["Design", "Art Direction", "Development"],
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque leo eros, tristique eu venenatis et, aliquam eu dolor. Ut ac massa mattis, rhoncus ante vel, lobortis tortor. Vestibulum et nibh sit amet lectus iaculis varius. Proin in augue libero. Mauris sit amet viverra arcu, ac cursus magna. Sed in bibendum mauris. Praesent at dui neque. Praesent nec ultricies diam, a bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis ante vitae justo pretium, a iaculis neque malesuada. Nunc euismod metus sed sodales pulvinar.",
      liveUrl: "https://www.arcestudios.co/",
      buttonColor:"bg-client-gray-01",
      headerImage: "/images/arce/arce-cover.png",
      projectGallery: [
        {
          type: "video",
          src: "/images/arce/arce-demo.mp4",
          loop: true,
          autoPlay: true,
        },
        {
          type: "custom",
          block: "arce-swipe-demo"
        },
        {
          type: "image",
          src: "/images/arce/arce-website-scroll.gif",
        }
      ],
    },
    // {
    //   slug: "deb-shannan-photography",
    //   title: "DB Shannan Photography",
    //   year: 2026,
    //   techStack: ["Figma", "Framer"],
    //   roles: ["Design", "Development"],
    //   caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque leo eros, tristique eu venenatis et, aliquam eu dolor. Ut ac massa mattis, rhoncus ante vel, lobortis tortor. Vestibulum et nibh sit amet lectus iaculis varius. Proin in augue libero. Mauris sit amet viverra arcu, ac cursus magna. Sed in bibendum mauris. Praesent at dui neque. Praesent nec ultricies diam, a bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis ante vitae justo pretium, a iaculis neque malesuada. Nunc euismod metus sed sodales pulvinar.",
    //   liveUrl: "https://hagadirect.com",
    //   buttonColor:"bg-client-blue-02",
    //   headerImage: "/images/deb/deb-cover.png",
    //   projectGallery: [
    //     {
    //       type: "image",
    //       src: "/images/ces/ces-cover.png",
    //     },
    //     {
    //       type: "image",
    //       src: "/images/ces/ces-cover.png",
    //     },
    //     {
    //       type: "image",
    //       src: "/images/ces/ces-cover.png",
    //     }
    //   ],
    //   cardImage: "/images/deb/deb-cover.png",
    // }
  ];