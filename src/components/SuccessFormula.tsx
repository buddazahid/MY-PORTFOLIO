import { motion } from "framer-motion";
import { Hammer, Hourglass, HandHeart, BookOpen, Shield, Mountain, Lightbulb, Star, Clock, Brain, Target, Sprout, HeartHandshake, Smile, CheckCircle2, Moon } from "lucide-react";
import successImg from "@/assets/formula-success.png";

const pillars = [
  {
    num: "01",
    title: "Hard Work",
    subtitle: "The Fuel",
    color: "amber",
    icon: Hammer,
    points: [
      { icon: Target, text: "Consistent effort towards your goal every day" },
      { icon: BookOpen, text: "Builds skills, knowledge, and experience" },
      { icon: Shield, text: "Requires discipline, not just motivation" },
      { icon: Mountain, text: "Helps overcome challenges and competition" },
      { icon: Lightbulb, text: "Turns ideas into real results" },
      { icon: Star, text: "Without hard work, talent has no value" },
    ],
  },
  {
    num: "02",
    title: "Patience",
    subtitle: "The Power",
    color: "sky",
    icon: Hourglass,
    points: [
      { icon: Clock, text: "Ability to wait calmly for results" },
      { icon: Hourglass, text: "Accepting that success takes time" },
      { icon: Shield, text: "Staying strong during failures and delays" },
      { icon: Brain, text: "Avoiding frustration and negative thinking" },
      { icon: Target, text: "Helps maintain focus on long-term goals" },
      { icon: Sprout, text: "Prevents giving up too early" },
    ],
  },
  {
    num: "03",
    title: "Tawakkul",
    subtitle: "Trust in Allah · The Peace",
    color: "emerald",
    icon: HandHeart,
    points: [
      { icon: HeartHandshake, text: "Having full faith in Allah after giving your best effort" },
      { icon: Star, text: "Believing that Allah's plan is always better" },
      { icon: Shield, text: "Reduces stress, fear, and overthinking" },
      { icon: Smile, text: "Helps you stay positive in all situations" },
      { icon: CheckCircle2, text: "Accepting results with peace, whether success or failure" },
      { icon: Moon, text: "Strengthens inner confidence and spiritual balance" },
    ],
  },
];

const colorMap: Record<string, { text: string; bg: string; border: string; ring: string }> = {
  amber: { text: "text-amber-300", bg: "from-amber-500/15 to-orange-500/5", border: "border-amber-500/30", ring: "bg-amber-500/15" },
  sky: { text: "text-sky-300", bg: "from-sky-500/15 to-blue-500/5", border: "border-sky-500/30", ring: "bg-sky-500/15" },
  emerald: { text: "text-emerald-300", bg: "from-emerald-500/15 to-teal-500/5", border: "border-emerald-500/30", ring: "bg-emerald-500/15" },
};

export default function SuccessFormula() {
  return (
    <div className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="font-mono uppercase tracking-[0.3em] text-xs md:text-sm text-muted-foreground">
          The Formula of
        </p>
        <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight leading-[0.95]">
          True <span className="text-amber-400">Success.</span>
        </h2>
        <p className="mt-4 font-mono uppercase tracking-[0.25em] text-xs md:text-sm text-muted-foreground">
          Effort <span className="text-amber-400">+</span> Patience <span className="text-amber-400">+</span> Trust in Allah <span className="text-amber-400">=</span> True Success
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative glass rounded-3xl overflow-hidden max-w-3xl mx-auto"
      >
        <img src={successImg} alt="The Formula of Success — Effort, Patience, Trust in Allah" loading="lazy" className="w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5">
        {pillars.map((p, i) => {
          const c = colorMap[p.color];
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`glass rounded-3xl p-6 border ${c.border} bg-gradient-to-br ${c.bg}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`h-12 w-12 rounded-xl ${c.ring} grid place-items-center ${c.text}`}>
                  <p.icon size={22} />
                </div>
                <span className="font-mono text-xs text-muted-foreground tracking-widest">{p.num}</span>
              </div>
              <h3 className={`text-2xl font-bold uppercase tracking-wider ${c.text}`}>{p.title}</h3>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mt-1 mb-5">— {p.subtitle} —</p>
              <ul className="space-y-3">
                {p.points.map((pt, j) => (
                  <li key={j} className="flex gap-3 items-start text-sm text-muted-foreground leading-relaxed">
                    <span className={`shrink-0 mt-0.5 ${c.text}`}>
                      <pt.icon size={15} />
                    </span>
                    <span>{pt.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative glass rounded-3xl p-10 md:p-14 overflow-hidden text-center"
      >
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="relative">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            <span className="text-amber-300">Work Hard.</span>
            <span className="text-sky-300">Stay Patient.</span>
            <span className="text-emerald-300">Trust Allah.</span>
          </div>
          <p className="mt-6 text-lg md:text-2xl italic font-light max-w-2xl mx-auto text-foreground/85" style={{ fontFamily: "Georgia, serif" }}>
            "And put your trust in Allah, and sufficient is Allah as Disposer of affairs."
          </p>
          <p className="mt-3 font-mono uppercase tracking-[0.3em] text-xs text-amber-300/80">— Quran 33:3 —</p>
        </div>
      </motion.div>
    </div>
  );
}
