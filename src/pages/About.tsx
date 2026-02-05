import { Button } from "../components/atoms/button/button";
import Nav from "../components/organisms/nav";
import CustomCursor from "../components/atoms/custom-cursor/custom-cursor";
import Stat from "../components/atoms/stat/stat";
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

export default function About() {
  return (
    <motion.div
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
        transition={{ delay: 0.4, duration: 0.5 }}
        className="absolute top-0 z-40 w-full px-2 lg:px-12"
      >
        <Nav />
      </motion.div>

      <div className="lg:flex lg:min-h-screen box-border">
        {/* Profile Image */}
        <motion.div
          className="lg:w-1/2 h-auto pb-6 lg:pb-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src="/images/profile.jpg"
            alt="Cera standing in London"
            className="p-2 w-full lg:h-full lg:w-full object-cover rounded-2xl"
          />
        </motion.div>

        {/* Info + Buttons */}
        <motion.div
          className="lg:w-1/2 flex flex-col-reverse lg:flex-col justify-end gap-8 px-6 lg:px-12 pb-10"
          variants={staggerContainer}
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
            />
            <Button
              title="CV Resume"
              link=""
              textColor="text-pf-white-01"
              backgroundColor="bg-client-blue-01"
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
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vitae laoreet nisl, non lacinia lorem. Nunc dictum urna ut massa
              auctor malesuada. Ut iaculis vestibulum sem at tempus. Sed laoreet
              magna sit amet vulputate efficitur. Vivamus mattis dapibus nulla
              vel interdum. Integer sit amet ultricies magna. Fusce ac varius
              magna. Nunc rutrum aliquet rhoncus.
            </p>

            {/* Stats with scroll-triggered animation */}
            <div className="flex flex-col gap-8 pt-8 text-sm">
              {[
                { title: "Year", stats: ["2026"] },
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: index * 0.15,
                  }}
                >
                  <Stat title={item.title} stats={item.stats} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
