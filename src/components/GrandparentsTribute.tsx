import { motion } from "framer-motion";
import { BookOpen, Sparkles, Home, Users, Heart, Star } from "lucide-react";
import Section from "./Section";

const memories = [
  {
    icon: BookOpen,
    title: "Storytellers of Wisdom",
    text: "Their bedtime stories were lessons of courage, kindness, and the values that shaped who we are today.",
    color: "text-amber-300",
    bg: "from-amber-500/15 to-orange-500/5",
    border: "border-amber-500/25",
  },
  {
    icon: Home,
    title: "The Heart of Home",
    text: "Their house was never just walls — it was warmth, laughter, and the smell of food made with love.",
    color: "text-rose-300",
    bg: "from-rose-500/15 to-pink-500/5",
    border: "border-rose-500/25",
  },
  {
    icon: Sparkles,
    title: "Endless Blessings",
    text: "Every prayer they whispered, every blessing they gave, still walks quietly with us through life.",
    color: "text-violet-300",
    bg: "from-violet-500/15 to-indigo-500/5",
    border: "border-violet-500/25",
  },
  {
    icon: Users,
    title: "Roots of Our Family",
    text: "They are the roots from which our entire family grew — strong, deep, and unshakable.",
    color: "text-emerald-300",
    bg: "from-emerald-500/15 to-teal-500/5",
    border: "border-emerald-500/25",
  },
];

export default function GrandparentsTribute() {
  return (
    <Section id="grandparents" eyebrow="11 — A Tribute">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="font-mono uppercase tracking-[0.3em] text-xs md:text-sm text-muted-foreground">
          Wrinkled Hands · Golden Hearts
        </p>
        <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight leading-[0.95]">
          Our <span className="text-gradient italic" style={{ fontFamily: "Georgia, serif" }}>Grandparents.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5 mb-12">
        {memories.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className={`relative glass rounded-3xl p-7 overflow-hidden border ${m.border} bg-gradient-to-br ${m.bg}`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`h-12 w-12 rounded-xl bg-white/5 grid place-items-center ${m.color}`}>
                <m.icon size={22} />
              </div>
              <h3 className={`text-xl font-bold uppercase tracking-wider ${m.color}`}>{m.title}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{m.text}</p>
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
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-rose-500/20 blur-3xl" />
        <div className="relative">
          <p className="font-mono uppercase tracking-[0.3em] text-xs md:text-sm text-muted-foreground">
            They are not just elders
          </p>
          <h3 className="mt-4 text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-amber-400">
            They are Legacy.
          </h3>
          <p className="mt-6 text-xl md:text-2xl italic font-light max-w-2xl mx-auto text-foreground/85" style={{ fontFamily: "Georgia, serif" }}>
            "A grandparent's love is the bridge between the past and the future — it never fades, it only grows."
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-amber-400">
            <Star size={14} className="fill-amber-400" />
            <Star size={14} className="fill-amber-400" />
            <Star size={14} className="fill-amber-400" />
          </div>
          <div className="mt-4 flex justify-center">
            <Heart size={20} className="text-rose-500 fill-rose-500" />
          </div>
          <p className="mt-4 font-mono uppercase tracking-[0.25em] text-xs md:text-sm text-rose-300/80">
            Forever in our Hearts · Forever in our Prayers
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
