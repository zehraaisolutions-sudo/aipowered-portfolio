import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

/** Brand loading animation shown on first paint. */
export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="gradient-surface size-14 rounded-2xl"
            animate={{ rotate: [0, 90, 180, 270, 360], borderRadius: ["30%", "50%", "30%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <p className="mt-6 font-display text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Zehra AI
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
