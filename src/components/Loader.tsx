import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => { const t = setTimeout(() => setShow(false), 1300); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[200] grid place-items-center bg-background"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="font-display text-5xl font-bold text-gradient"
            >
              MZ
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-4 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
            />
            <p className="mt-3 text-xs font-mono text-muted-foreground tracking-widest">LOADING PORTFOLIO</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
