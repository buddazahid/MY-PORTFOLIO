import { motion } from "framer-motion";
import { Quote, Compass, Coins, ShieldCheck } from "lucide-react";
import Section from "./Section";
import rightPath from "@/assets/right-path.jpg";

export default function IntegrityTribute() {
  return (
    <Section id="integrity" eyebrow="10 — A Tribute">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="font-mono uppercase tracking-[0.3em] text-xs md:text-sm text-muted-foreground">
          In Today's World
        </p>
        <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight leading-[0.95]">
          Respect Often Follows <span className="text-amber-400">Wealth.</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative glass rounded-3xl overflow-hidden group"
        >
          <img
            src={rightPath}
            alt="Choosing the right path with integrity"
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        <div className="space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 border border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent flex gap-4"
          >
            <div className="h-12 w-12 rounded-xl bg-red-500/15 grid place-items-center text-red-400 shrink-0">
              <Coins size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-red-300">"Who are you?"</h3>
              <p className="text-muted-foreground mt-1">
                When you don't have money — no one bothers to ask.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-6 border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent flex gap-4"
          >
            <div className="h-12 w-12 rounded-xl bg-emerald-500/15 grid place-items-center text-emerald-400 shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-emerald-300">"How are you?"</h3>
              <p className="text-muted-foreground mt-1">
                When you have money — suddenly, everyone cares.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-6 border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-transparent flex gap-4"
          >
            <div className="h-12 w-12 rounded-xl bg-amber-500/15 grid place-items-center text-amber-400 shrink-0">
              <Compass size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-amber-300">The Right Path</h3>
              <p className="text-muted-foreground mt-1">
                The true challenge is not earning money — it is staying on the right path with integrity while doing so.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative glass rounded-3xl p-10 md:p-14 mt-10 overflow-hidden text-center"
      >
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="relative">
          <Quote className="mx-auto text-amber-400 mb-4" size={36} />
          <p className="text-xl md:text-3xl font-light italic max-w-3xl mx-auto leading-relaxed text-foreground/90" style={{ fontFamily: "Georgia, serif" }}>
            "In today's world, respect often follows wealth — people ask{" "}
            <span className="text-emerald-300 not-italic font-semibold">'How are you?'</span> when you have money, and{" "}
            <span className="text-red-300 not-italic font-semibold">'Who are you?'</span> when you don't. But the true challenge is not earning money; it is staying on the{" "}
            <span className="text-amber-400 not-italic font-semibold">right path with integrity</span> while doing so."
          </p>
          <div className="mt-8">
            <p className="font-mono uppercase tracking-[0.3em] text-xs md:text-sm text-amber-400">
              Wealth Comes and Goes
            </p>
            <h3 className="mt-3 text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-gradient">
              Character Stays.
            </h3>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
