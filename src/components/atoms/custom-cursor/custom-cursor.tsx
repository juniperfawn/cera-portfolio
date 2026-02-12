import { useEffect, useRef, useState } from "react";

const DEFAULT_TEXT = "see more";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  const [hovering, setHovering] = useState(false);
  const [hoverText, setHoverText] = useState<string>(DEFAULT_TEXT);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      const el = document.elementFromPoint(
        e.clientX,
        e.clientY,
      ) as HTMLElement | null;

      const hoverEl = el?.closest("[data-hover]") as HTMLElement | null;

      if (hoverEl) {
        const value = hoverEl.dataset.hover;

        // React turns `data-hover` into "true"
        if (!value || value === "true") {
          setHoverText(DEFAULT_TEXT);
        } else {
          setHoverText(value);
        }

        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const animate = () => {
    pos.current.x += (mouse.current.x - pos.current.x) * 0.2;
    pos.current.y += (mouse.current.y - pos.current.y) * 0.2;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{ whiteSpace: "nowrap" }}
      className={`hidden z-50 fixed pointer-events-none md:flex items-center justify-center
        bg-black/20 backdrop-blur-[12px] text-black text-xs
        transition-all duration-200 ease-out
        ${
          hovering
            ? "px-4 py-2 rounded-3xl w-auto min-w-[80px] opacity-100"
            : "w-8 h-8 rounded-full opacity-100"
        }`}
    >
      {hovering && (
        <span className="font-mono uppercase text-pf-white-01 transition-all duration-200 ease-out">
          {hoverText}
        </span>
      )}
    </div>
  );
};

export default CustomCursor;
