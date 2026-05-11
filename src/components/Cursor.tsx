import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    document.documentElement.style.cursor = "none";
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[data-hover]"));
    };
    window.addEventListener("mousemove", move);
    return () => { window.removeEventListener("mousemove", move); document.documentElement.style.cursor = ""; };
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-[100] rounded-full mix-blend-difference transition-[width,height] duration-200"
        style={{
          left: pos.x, top: pos.y, transform: "translate(-50%,-50%)",
          width: hover ? 40 : 12, height: hover ? 40 : 12,
          background: "white",
        }}
      />
      <div
        className="fixed pointer-events-none z-[99] rounded-full transition-transform duration-300"
        style={{
          left: pos.x, top: pos.y, transform: "translate(-50%,-50%)",
          width: 200, height: 200,
          background: "radial-gradient(circle, oklch(0.65 0.22 280 / 0.15), transparent 60%)",
        }}
      />
    </>
  );
}
