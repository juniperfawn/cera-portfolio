import { Button } from "../atoms/button/button";
import { motion, useReducedMotion } from "framer-motion";

const Footer = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.footer
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="px-2 py-1"
    >
      <div className="bg-pf-red-01 rounded-lg">
        <div className="flex flex-col gap-4 p-12 lg:p-36 text-client-red-01">
          <p className="font-mono uppercase text-sm tracking-wide">
            Next.js · TypeScript · Storyblok
          </p>

          <h2 className="text-4xl lg:text-6xl font-semibold font-sans leading-tight">
            Creative Web Developer
          </h2>
          <div>
            <Button
              title="let's get in touch"
              link="mailto:cerackocher@gmail.com"
            />
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
