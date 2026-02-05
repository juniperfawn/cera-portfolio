import CustomCursor from "../components/atoms/custom-cursor/custom-cursor";
import PortfolioCard from "../components/molecules/portfolio-card/portfolio-card";
import ShortCutCard from "../components/molecules/short-cut-card/short-cut-card";
import Nav from "../components/organisms/nav";
import { projects } from "../data/projects";
import { shortCuts } from "../data/short-cuts";
import { motion } from "framer-motion";

// Animation variants
const pageVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

export default function Home() {
  return (
    <motion.main
      variants={pageVariants}
      initial="hidden"
      animate="show"
      className="relative z-0"
    >
      <CustomCursor />

      {/* Navbar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="sticky top-0 z-40"
      >
        <Nav />
      </motion.div>

      {/* Quick Links Section */}
      <motion.div
        className="flex flex-col md:flex-row md:justify-between px-2 py-[100px]"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="flex justify-center pb-2 md:pb-0 md:justify-between md:w-1/3"
          variants={fadeUp}
        >
          <h2 className="font-sans font-semibold text-pf-black-01">
            Quick Links
          </h2>
          <div className="hidden md:block w-[2px] h-full bg-pf-black-01 mr-8"></div>
        </motion.div>

        <motion.div
          className="flex gap-2 flex-col md:grid grid-cols-2 grid-rows-2 md:gap-3 md:w-2/3"
          variants={staggerContainer}
        >
          {shortCuts.map((card, index) => (
            <motion.div key={index} variants={fadeUp}>
              <ShortCutCard
                title={card.title}
                subtitle={card.subtitle}
                link={card.link}
                image={card.image}
                cta={card.cta}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Portfolio Section */}
      <div className="flex flex-col gap-2 px-2">
        <h2 className="md:hidden font-sans font-semibold text-pf-black-01">
          Select Works
        </h2>

        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            className="h-[300px] lg:h-[600px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: index * 0.1,
            }}
          >
            <PortfolioCard
              title={project.title}
              tech={project.techStack.join(", ")}
              link={`/projects/${project.slug}`}
              image={project.cardImage}
            />
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}
