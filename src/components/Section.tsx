import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Section({ id, eyebrow, title, children }: { id: string; eyebrow?: string; title?: string; children: ReactNode }) {
  return (
    <section id={id} className="relative py-24 md:py-32 px-4">
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16"
          >
            {eyebrow && (
              <div className="inline-flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
                {eyebrow}
              </div>
            )}
            {title && <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
