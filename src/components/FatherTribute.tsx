import { motion } from "framer-motion";
import { Sun, Snowflake, CloudRain, Heart, Star } from "lucide-react";
import Section from "./Section";

const seasons = [
  {
    icon: Sun,
    label: "Summer",
    color: "text-orange-400",
    bg: "from-orange-500/20 to-amber-500/5",
    border: "border-orange-500/30",
    text: "In the scorching heat of summer, he never stopped working even while the sun burned his skin.",
  },
  {
    icon: Snowflake,
    label: "Winter",
    color: "text-sky-300",
    bg: "from-sky-500/20 to-blue-500/5",
    border: "border-sky-500/30",
    text: "In the freezing cold of winter, he never stopped working even at 10°C.",
  },
  {
    icon: CloudRain,
    label: "Monsoon",
    color: "text-slate-300",
    bg: "from-slate-500/20 to-zinc-500/5",
    border: "border-slate-500/30",
    text: "In the heavy rains of monsoon, he never stopped working despite the storm.",
  },
];

export default function FatherTribute() {
  return (
    <Section id="tribute" eyebrow="08 — A Tribute">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[0.95]">
          He Never <span className="text-gradient">Stops</span>
        </h2>
        <p className="mt-4 text-muted-foreground font-mono uppercase tracking-[0.25em] text-xs md:text-sm flex items-center justify-center gap-2">
          In any season <Heart size={14} className="text-red-500 fill-red-500" /> for us
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5 mb-12">
        {seasons.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -6 }}
            className={`relative glass rounded-3xl p-7 overflow-hidden border ${s.border} bg-gradient-to-br ${s.bg}`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`h-12 w-12 rounded-xl bg-white/5 grid place-items-center ${s.color}`}>
                <s.icon size={22} />
              </div>
              <h3 className={`text-xl font-bold uppercase tracking-wider ${s.color}`}>{s.label}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{s.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative glass rounded-3xl p-10 md:p-14 overflow-hidden text-center"
      >
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="relative">
          <p className="text-sm md:text-base font-mono uppercase tracking-[0.3em] text-muted-foreground">
            He is the one
          </p>
          <h3 className="mt-3 text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-amber-400">
            Who Sacrifices
          </h3>
          <p className="mt-3 text-muted-foreground uppercase tracking-[0.2em] text-xs md:text-sm">
            In every season without complaint
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-amber-400">
            <Star size={14} className="fill-amber-400" />
            <Star size={14} className="fill-amber-400" />
            <Star size={14} className="fill-amber-400" />
          </div>
          <div className="mt-6 flex flex-wrap items-baseline justify-center gap-3">
            <span className="text-4xl md:text-5xl italic font-light text-foreground/80" style={{ fontFamily: "Georgia, serif" }}>
              He is
            </span>
            <span className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-gradient">
              Father.
            </span>
          </div>
          <p className="mt-6 text-amber-300/80 font-mono uppercase tracking-[0.2em] text-xs md:text-sm">
            A father's hard work today, builds our better tomorrow
          </p>
          <div className="mt-4 flex justify-center">
            <Heart size={18} className="text-red-500 fill-red-500" />
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
