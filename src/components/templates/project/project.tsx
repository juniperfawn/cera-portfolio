import type { ProjectProps } from "./project.types";
import { Button } from "@/components/atoms/button/button";
import Stat from "@/components/atoms/stat/stat";
import Nav from "@/components/organisms/nav";
import Footer from "@/components/organisms/footer";
import CustomCursor from "@/components/atoms/custom-cursor/custom-cursor";
import { renderGalleryBlock } from "./project-gallery/gallery-renderer";
import Reveal from "@/components/motion/reveal";

import { motion } from "framer-motion";
import { pageFade, fadeUp, stagger, navEntrance } from "@/utils/motion";

export default function ProjectTemplate({
  title,
  year,
  techStack,
  roles,
  caption,
  liveUrl,
  buttonColor,
  buttonTextColor,
  headerImage,
  projectGallery,
}: ProjectProps) {
  return (
    <>
      <motion.section
        className="relative"
        variants={pageFade}
        initial="hidden"
        animate="show"
      >
        <CustomCursor />

        {/* Navbar */}
        <motion.div
          {...navEntrance}
          className="fixed top-0 left-0 right-0 z-50"
        >
          <Nav />
        </motion.div>

        {/* Project header */}
        <header className="relative">
          <div className="absolute inset-1 bg-black/10 rounded-2xl z-10" />

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="absolute w-full flex items-center justify-center text-white text-4xl md:text-6xl lg:text-8xl font-sans font-bold top-[33%] md:top-[25%] z-20"
          >
            {title}
          </motion.h1>

          <Reveal>
            <img
              src={headerImage}
              alt={`${title} header`}
              className="w-full rounded-2xl object-cover p-1 lg:h-[640px]"
            />
          </Reveal>
        </header>

        {/* Project stats + description */}
        <motion.section
          className="flex flex-col-reverse gap-10 px-6 py-8 lg:gap-0 lg:py-16 lg:items-center lg:flex-row"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Project stats */}
          <motion.aside
            variants={fadeUp}
            className="flex justify-between flex-wrap flex-col gap-8 text-sm lg:items-start lg:w-1/3"
          >
            <Stat title="year" stats={[year]} />
            <Stat title="role" stats={roles} />
            <Stat title="tech stack" stats={techStack} />
          </motion.aside>

          {/* Project description */}
          <motion.div variants={fadeUp} className="lg:w-2/3 flex">
            <div className="hidden lg:block w-[2px] bg-pf-black-01 mr-8"></div>
            <div className="text-pf-black-01 flex flex-col gap-4 items-start text-left">
              <div>
                <p className="uppercase text-sm font-mono text-pf-gray-01">
                  About
                </p>
                <h1 className="text-2xl font-bold">{title}</h1>
              </div>
              <p className="text-sm lg:w-10/12">{caption}</p>
              <div data-hover="true">
                <Button
                  title="View Live Site"
                  link={liveUrl}
                  backgroundColor={buttonColor}
                  textColor={buttonTextColor}
                  target="_blank"
                />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Project gallery */}
        <section className="grid md:grid-cols-2 gap-1 p-1 lg:gap-2 lg:pt-2 lg:px-2">
          {projectGallery?.map((item, index) => {
            const isLast = index === projectGallery.length - 1;

            return (
              <Reveal
                key={index}
                className={`w-full rounded-lg overflow-hidden ${
                  isLast ? "md:col-span-2" : "max-h-[1000px]"
                }`}
              >
                {item.type === "image" && (
                  <img
                    src={item.src}
                    alt={item.alt ?? `${title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}

                {item.type === "video" && (
                  <video
                    src={item.src}
                    poster={item.poster}
                    autoPlay={item.autoPlay}
                    loop={item.loop}
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}

                {item.type === "custom" && (
                  <div
                    data-hover="interact with me"
                    className="w-full h-full relative"
                  >
                    <p className="text-pf-white-01 font-mono text-sm md:hidden absolute inset-0 z-50 top-8 pointer-events-none">
                      INTERACT WITH ME
                    </p>
                    {renderGalleryBlock(item.block)}
                  </div>
                )}
              </Reveal>
            );
          })}
        </section>
      </motion.section>
      <Footer />
    </>
  );
}
