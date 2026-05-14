import { motion } from "framer-motion";
import { Trophy, Target, Flame, Crown, Sparkles, Mountain } from "lucide-react";
import Section from "./Section";
import excellenceImg from "@/assets/excellence.jpg";

const quotes = [
  {
    icon: Mountain,
    text: "Do not chase success; pursue excellence relentlessly, and success will follow naturally.",
  },
  {
    icon: Target,
    text: "Excellence is a discipline — master it daily, and success becomes inevitable.",
  },
  {
    icon: Crown,
    text: "Focus on becoming exceptional, not successful; results will speak for themselves.",
  },
  {
    icon: Flame,
    text: "Commit to excellence in every action, and success will no longer need to be chased.",
  },
  {
    icon: Trophy,
    text: "Success is a byproduct of consistent excellence, not the goal itself.",
  },
];

export default function ExcellenceTribute() {
  return (
    <Section id="excellence" eyebrow="12 — A Tribute">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="font-mono uppercase tracking-[0.3em] text-xs md:text-sm text-muted-foreground">
          Don't Run Behind Success
        </p>
        <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight leading-[0.95]">
          Run Behind <span className="text-amber-400">Excellence.</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-8 items-center mb-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 relative glass rounded-3xl overflow-hidden group"
        >
          <img
            src={excellenceImg}
            alt="Run behind excellence — success will follow"
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        <div className="lg:col-span-3 space-y-4">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ x: 6 }}
              className="glass rounded-2xl p-5 border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-transparent to-yellow-500/5 flex gap-4 items-start"
            >
              <div className="h-11 w-11 rounded-xl bg-amber-500/15 grid place-items-center text-amber-300 shrink-0">
                <q.icon size={20} />
              </div>
              <p className="text-foreground/85 leading-relaxed text-sm md:text-base italic" style={{ fontFamily: "Georgia, serif" }}>
                "{q.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative glass rounded-3xl p-10 md:p-14 overflow-hidden text-center"
      >
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-yellow-500/20 blur-3xl" />
        <div className="relative">
          <Sparkles className="mx-auto text-amber-400 mb-4" size={32} />
          <p className="font-mono uppercase tracking-[0.3em] text-xs md:text-sm text-muted-foreground">
            Master the Craft
          </p>
          <h3 className="mt-4 text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-gradient">
            Excellence First.
          </h3>
          <p className="mt-6 font-mono uppercase tracking-[0.25em] text-xs md:text-sm text-amber-300/80">
            Success Will Follow Automatically
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
