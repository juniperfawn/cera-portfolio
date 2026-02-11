import CustomCursor from "@/components/atoms/custom-cursor/custom-cursor";
import PortfolioCard from "@/components/molecules/portfolio-card/portfolio-card";
import ShortCutCard from "@/components/molecules/short-cut-card/short-cut-card";
import Nav from "@/components/organisms/nav";
import Footer from "@/components/organisms/footer";
import Reveal from "@/components/motion/reveal";

import { projects } from "@/data/projects";
import { shortCuts } from "@/data/short-cuts";

import { motion } from "framer-motion";
import { pageFade, fadeUp, stagger, navEntrance } from "@/utils/motion";

export default function Home() {
  return (
    <>
      <motion.main
        variants={pageFade}
        initial="hidden"
        animate="show"
        className="relative z-0"
      >
        <CustomCursor />

        {/* Navbar */}
        <motion.div {...navEntrance} className="sticky top-0 z-40">
          <Nav />
        </motion.div>

        {/* Quick Links Section */}
        <motion.section
          className="flex flex-col md:flex-row md:justify-between px-2 py-[100px]"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Left Title */}
          <motion.div
            className="flex justify-center pb-2 md:pb-0 md:justify-between md:w-1/3"
            variants={fadeUp}
          >
            <h2 className="font-sans font-semibold text-pf-black-01">
              Quick Links
            </h2>
            <div className="hidden md:block w-[2px] h-full bg-pf-black-01 mr-8"></div>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="flex gap-2 flex-col md:grid grid-cols-2 grid-rows-2 md:gap-3 md:w-2/3"
            variants={stagger}
          >
            {shortCuts.map((card, index) => (
              <motion.div key={index} variants={fadeUp}>
                <ShortCutCard
                  title={card.title}
                  subtitle={card.subtitle}
                  link={card.link}
                  image={card.image}
                  cta={card.cta}
                  target={card.target}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Portfolio Section */}
        <section id="work" className="flex flex-col gap-2 px-2">
          <h2 className="md:hidden font-sans font-semibold text-pf-black-01">
            Select Works
          </h2>

          {projects.map((project) => (
            <Reveal key={project.slug} className="h-[300px] lg:h-[600px]">
              <PortfolioCard
                title={project.title}
                tech={project.techStack.join(", ")}
                link={`/projects/${project.slug}`}
                image={project.headerImage}
              />
            </Reveal>
          ))}
        </section>
      </motion.main>
      <Footer />
    </>
  );
}
