import type { ProjectProps } from "./project.types";
import { Button } from "../../atoms/button/button";
import Stat from "../../atoms/stat/stat";
import Nav from "../../organisms/nav";
import CustomCursor from "../../atoms/custom-cursor/custom-cursor";
import { delay, motion } from "framer-motion";

// Animation variants
const pageVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.6, duration: 0.6, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

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
  projectImages,
}: ProjectProps) {
  return (
    <motion.section
      className="relative"
      variants={pageVariants}
      initial="hidden"
      animate="show"
    >
      <CustomCursor />

      {/* Navbar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
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
        <motion.img
          src={headerImage}
          alt={`${title} header`}
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full rounded-2xl object-cover p-1 lg:h-[640px]"
        />
      </header>

      {/* Project stats + description */}
      <motion.section
        className="flex flex-col-reverse gap-10 px-6 py-8 lg:gap-0 lg:py-16 lg:items-center lg:flex-row"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
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
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Project gallery */}
      <section className="grid md:grid-cols-2 gap-1 p-1 lg:gap-2 lg:p-2">
        {projectImages.map((image, index) => {
          const isLast = index === projectImages.length - 1;

          return (
            <motion.img
              key={index}
              src={image}
              alt={`${title} screenshot ${index + 1}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`w-full rounded-lg object-cover ${
                isLast ? "md:col-span-2" : ""
              }`}
            />
          );
        })}
      </section>
    </motion.section>
  );
}
