import { motion } from "framer-motion";
import { revealOnScroll } from "@/utils/motion";

export default function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div {...revealOnScroll} className={className}>
      {children}
    </motion.div>
  );
}
