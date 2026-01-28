import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Hover detection
  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.dataset.hover === "true") setHovering(true);
    };
    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.dataset.hover === "true") setHovering(false);
    };
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  // Smooth cursor animation
  const animate = () => {
    pos.current.x += (mouse.current.x - pos.current.x) * 0.2; // 0.2 = lag speed
    pos.current.y += (mouse.current.y - pos.current.y) * 0.2;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{ whiteSpace: "nowrap" }}
      className={`z-10 fixed pointer-events-none flex items-center justify-center
        bg-white/20 backdrop-blur-[px] text-black text-xs
        transition-all duration-200 ease-out
        ${
          hovering
            ? "px-4 py-2 rounded-3xl w-auto min-w-[80px] opacity-100"
            : "w-8 h-8 rounded-full opacity-100"
        }`}
    >
      {hovering && (
        <span className="font-mono uppercase font-semibold text-pf-white-01 transition-all duration-200 ease-out">
          see case
        </span>
      )}
    </div>
  );
};

export default CustomCursor;
