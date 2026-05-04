import type { ProjectProps } from "@/components/templates/project/project.types";

export const projects: ProjectProps[] = [
  {
    slug: "haga-direct",
    title: "HagaDirect",
    year: 2025,
    techStack: ["Next.js", "TypeScript", "Tailwind", "Storyblok"],
    roles: ["Frontend Development"],
    caption: "HagaDirect is a new center for planned, low-complexity care from HagaZiekenhuis in The Hague. The project focused on creating a strong, recognizable brand and an accessible website that combines the speed and convenience of a clinic with the reliability of a hospital. Developed through close collaboration and stakeholder workshops, the result is a clear identity and digital experience for both patients and referring physicians. \n\n Accessibility and ease of use were central to the design. Patients can quickly find treatments through intuitive categorization and an interactive body overview, while referring physicians can easily access care options, referral criteria, and current waiting times. Features such as automated translations, screen reader support, and transparent waiting times help ensure the platform is usable, inclusive, and trustworthy.\n\n As one of two developers on a cross-functional team, I helped build the site on a modern headless CMS with a focus on performance, accessibility, and scalability - creating a reliable foundation that supports HagaDirect’s growth and long-term usability.",
    liveUrl: "https://hagadirect.nl/",
    buttonColor:"bg-client-green-01" ,
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
      caption: "Colorado Energy Systems is a Roaring Fork Valley–based company specializing in generators, solar power, and energy storage for homes and businesses near Aspen, Colorado. They needed a website that would establish their credibility as a trusted local partner for both existing and prospective customers.\n\n During the project, the scope expanded to include recruitment as an additional goal. Beyond serving current and future clients, the website was designed to support hiring efforts by showcasing CES as a reliable and attractive employer. I created a dedicated careers experience to give potential employees insight into the company, its work, and its values.\n\n To reinforce their strong local presence, the visual direction leans heavily into Colorado’s landscape and outdoor lifestyle. Nature-focused photography and a design language inspired by the region help the brand feel grounded, authentic, and connected to the communities it serves while also reflecting CES’s expertise in off-grid living and energy independence.",
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
      caption: "Klaus Kocher is a photojournalist and adjunct professor at the Isaacson School of Colorado Mountain College. He wanted a website that not only showcases his black-and-white film photojournalism but also highlights his unique services, including film development - one of the few local professionals offering this expertise.\n\n For the design, I aimed to keep the interface clean, straightforward, and intuitive, while adding subtle, clever details that nod to his Swiss heritage. Hover states, interactive elements, and small highlights echo the color of the Swiss passport. Another playful Easter egg is a red dot that follows the user’s cursor, inspired by Leica’s iconic branding.\n\n Even the gallery pages reinforce the film aesthetic: smaller image sections are arranged like film strips, creating a visual connection to Klaus’s medium. The final site balances a striking showcase of his photography with easy access to his services and other key pages, making it both functional and memorable.",
      liveUrl: "https://klauskocherfotograf.com/" , 
      buttonColor:"bg-client-red-01" ,
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
      caption: "arcé is a fashion design studio founded in The Netherlands in 2024, focused on creating intentional, small-batch wardrobes led by fashion designer Robbert Redert. The brand embraces the philosophy of owning less, but loving what you own.\n\n As a co-founder and lead in media design, I’ve contributed to graphic design, creative direction, photo and styling shoots, social media assets, and overall art direction.\n\n I designed and developed the current arcé studios website using Figma, Framer (CMS), and Shopify E-commerce. The site is heavily photography-driven, showcasing the craftsmanship of each collection while maintaining a refined, minimal aesthetic inspired by Japanese and Scandinavian design.",
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
  ];