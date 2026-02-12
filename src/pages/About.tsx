import { Button } from "@/components/atoms/button/button";
import Nav from "@/components/organisms/nav";
import CustomCursor from "@/components/atoms/custom-cursor/custom-cursor";
import Stat from "@/components/atoms/stat/stat";
import Reveal from "@/components/motion/reveal";

import { motion } from "framer-motion";
import { pageFade, fadeUp, stagger, navEntrance } from "@/utils/motion";

export default function About() {
  return (
    <motion.main
      className="relative"
      variants={pageFade}
      initial="hidden"
      animate="show"
    >
      <CustomCursor />

      {/* Navbar */}
      <motion.div
        {...navEntrance}
        className="absolute top-0 z-40 w-full px-2 lg:px-12"
      >
        <Nav />
      </motion.div>

      <div className="lg:flex lg:min-h-screen box-border">
        {/* Profile Image */}
        <Reveal className="lg:w-1/2 h-auto pb-6 lg:pb-0">
          <img
            src="/images/profile.png"
            alt="Cera standing in London"
            className="p-2 w-full lg:h-full lg:w-full object-cover rounded-2xl"
          />
        </Reveal>

        {/* Info + Buttons */}
        <motion.div
          className="lg:w-1/2 flex flex-col-reverse lg:flex-col justify-end gap-8 px-6 lg:px-12 pb-10"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Buttons */}
          <motion.div
            className="flex justify-center lg:justify-normal flex-wrap gap-6"
            variants={fadeUp}
          >
            <Button
              title="Linkedin"
              link="https://www.linkedin.com/in/cera-kocher"
              textColor="text-pf-white-01"
              backgroundColor="bg-client-blue-01"
              target="_blank"
            />
            <Button
              title="CV Resume"
              link="/cera-kocher-resume.pdf"
              textColor="text-pf-white-01"
              backgroundColor="bg-client-blue-01"
              target="_blank"
            />
            <Button
              title="Contact"
              link="mailto:cerackocher@gmail.com"
              textColor="text-pf-white-01"
              backgroundColor="bg-client-blue-01"
            />
          </motion.div>

          {/* About Text */}
          <motion.div
            className="text-pf-black-01 font-sans text-start max-w-xl"
            variants={fadeUp}
          >
            <h2 className="font-bold text-2xl pb-3">Cera Contesse Kocher</h2>
            <p className="text-sm text-pf-black-01/70">
              I’m a Swiss American creative developer & designer originally from
              Colorado, USA, but currently based between the Netherlands and the
              USA.
              <br />
              <br />
              My design journey has taken me through graphic design, 3D
              modeling, photography, web design, web development, animation, the
              list keeps growing. This same curiosity and sense of exploration
              fuels my personal adventures. I’ve been a certified white-water
              raft guide, competed in martial arts, traveled the world solo, and
              even moved abroad on my own.
              <br />
              <br /> I’ve always been one to explore concepts, skills, and even
              places that have interested me and help me grow as a person. I
              believe pushing my personal and creative boundaries will always be
              a core part of who I am.
            </p>

            {/* Stats */}
            <div className="flex flex-col gap-8 pt-8 text-sm">
              {[
                // { title: "Year", stats: ["2026"] },
                {
                  title: "Tech Stack",
                  stats: [
                    "Javascript",
                    "Typescript",
                    "React",
                    "Next.js",
                    "Figma",
                    "Framer",
                    "Adobe Creative Suite",
                  ],
                },
                { title: "Role", stats: ["Designer", "Developer"] },
              ].map((item, index) => (
                <Reveal key={index}>
                  <Stat title={item.title} stats={item.stats} />
                </Reveal>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}
