import { useEffect, useState } from "react";

/** Glowing cursor follower. Disabled on touch / reduced-motion devices. */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const move = (e: PointerEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement | null;
      setActive(Boolean(el?.closest("a, button, [role='button'], input, textarea")));
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[70] hidden md:block"
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
    >
      <div
        className="gradient-surface -translate-x-1/2 -translate-y-1/2 rounded-full blur-[2px] transition-all duration-200 ease-out"
        style={{
          width: active ? 44 : 18,
          height: active ? 44 : 18,
          opacity: active ? 0.45 : 0.75,
        }}
      />
    </div>
  );
}
