import CESLogoSvg from "@/assets/ces-logo-white";
import KlausNameSvg from "@/assets/klaus-name";
import KlausRedDotSvg from "@/assets/klaus-red-dot";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";

export function CESDragDemo() {
  return (
    <div className="h-full w-full bg-client-blue-01 relative overflow-hidden">
      <motion.div
        drag
        dragConstraints={{ left: -120, right: 120, top: -80, bottom: 80 }}
        initial={{ x: -160, y: 120, opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          delay: 0.15,
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className="cursor-grab text-white"
      >
        <CESLogoSvg />
      </motion.div>
    </div>
  );
}

export function KlausDragDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const relativeX = e.clientX - rect.left - rect.width / 2;
    const relativeY = e.clientY - rect.top - rect.height / 2;

    x.set(relativeX);
    y.set(relativeY);
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="h-full w-full min-h-[320px] bg-pf-black-01 relative overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <KlausNameSvg />
      </div>

      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="absolute left-1/2 top-1/2 pointer-events-none"
      >
        <KlausRedDotSvg />
      </motion.div>
    </div>
  );
}

const cards = [
  "/images/arce/card-1.png",
  "/images/arce/card-2.png",
  "/images/arce/card-3.png",
];

export function ArceSwipeDemo() {
  const [index, setIndex] = useState(0);
  const total = cards.length;

  function wrap(i: number) {
    return (i + total) % total;
  }

  function handleDragEnd(_: any, info: any) {
    const threshold = 80;

    if (info.offset.x < -threshold) {
      // swipe left → next
      setIndex((i) => wrap(i + 1));
    }

    if (info.offset.x > threshold) {
      // swipe right → previous
      setIndex((i) => wrap(i - 1));
    }
  }

  return (
    <div className="relative w-full h-full min-h-[720px] overflow-hidden">
      <img
        src="/images/arce/arce-demo-background.png"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        {[-1, 0, 1].map((pos) => {
          const cardIndex = wrap(index + pos);
          const src = cards[cardIndex];

          const isCenter = pos === 0;

          return (
            <motion.div
              key={cardIndex}
              drag={isCenter ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={isCenter ? handleDragEnd : undefined}
              animate={{
                x: pos * 80,
                scale: pos === 0 ? 1 : 0.9,
                opacity: pos === 0 ? 1 : 0.6,
                zIndex: 10 - Math.abs(pos),
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="absolute w-[260px] md:w-[320px] rounded-xl shadow-2xl overflow-hidden bg-white cursor-grab active:cursor-grabbing"
            >
              <img src={src} className="w-full h-auto" draggable={false} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
