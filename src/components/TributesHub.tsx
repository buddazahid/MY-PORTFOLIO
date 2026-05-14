import { useState, type ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Users, Compass, Trophy, Flame, ArrowUpRight, X } from "lucide-react";
import Section from "./Section";
import FatherTribute from "./FatherTribute";
import MotherTribute from "./MotherTribute";
import IntegrityTribute from "./IntegrityTribute";
import GrandparentsTribute from "./GrandparentsTribute";
import ExcellenceTribute from "./ExcellenceTribute";
import SuccessFormula from "./SuccessFormula";

type TributeKey = "father" | "mother" | "integrity" | "grandparents" | "excellence" | "success";

const tributes: {
  key: TributeKey;
  num: string;
  title: string;
  subtitle: string;
  icon: typeof Heart;
  color: string;
  bg: string;
  border: string;
  preview: string;
}[] = [
  {
    key: "father",
    num: "01",
    title: "Father",
    subtitle: "He Never Stops",
    icon: Flame,
    color: "text-amber-300",
    bg: "from-amber-500/15 to-orange-500/5",
    border: "border-amber-500/30",
    preview: "In every season — summer, winter, monsoon — he sacrifices without complaint.",
  },
  {
    key: "mother",
    num: "02",
    title: "Mother",
    subtitle: "Behind Every Success",
    icon: Heart,
    color: "text-rose-300",
    bg: "from-rose-500/15 to-pink-500/5",
    border: "border-rose-500/30",
    preview: "She stayed hungry, lost sleep, and gave everything so we could live.",
  },
  {
    key: "integrity",
    num: "03",
    title: "Integrity",
    subtitle: "The Right Path",
    icon: Compass,
    color: "text-emerald-300",
    bg: "from-emerald-500/15 to-teal-500/5",
    border: "border-emerald-500/30",
    preview: "Wealth comes and goes — character stays. Walk the right path with integrity.",
  },
  {
    key: "grandparents",
    num: "04",
    title: "Grandparents",
    subtitle: "Roots of Our Family",
    icon: Users,
    color: "text-violet-300",
    bg: "from-violet-500/15 to-indigo-500/5",
    border: "border-violet-500/30",
    preview: "Wrinkled hands, golden hearts — storytellers of wisdom and endless blessings.",
  },
  {
    key: "excellence",
    num: "05",
    title: "Excellence",
    subtitle: "Don't Run Behind Success",
    icon: Trophy,
    color: "text-yellow-300",
    bg: "from-yellow-500/15 to-amber-500/5",
    border: "border-yellow-500/30",
    preview: "Run behind excellence — success will follow you automatically.",
  },
  {
    key: "success",
    num: "06",
    title: "Formula of Success",
    subtitle: "Effort + Patience + Tawakkul",
    icon: Sparkles,
    color: "text-sky-300",
    bg: "from-sky-500/15 to-blue-500/5",
    border: "border-sky-500/30",
    preview: "Work hard. Stay patient. Trust Allah. The complete formula of true success.",
  },
];

const renderMap: Record<TributeKey, () => ReactElement> = {
  father: () => <FatherTribute />,
  mother: () => <MotherTribute />,
  integrity: () => <IntegrityTribute />,
  grandparents: () => <GrandparentsTribute />,
  excellence: () => <ExcellenceTribute />,
  success: () => <SuccessFormula />,
};

export default function TributesHub() {
  const [active, setActive] = useState<TributeKey | null>(null);

  return (
    <Section id="tributes" eyebrow="08 — A Tribute Module">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="font-mono uppercase tracking-[0.3em] text-xs md:text-sm text-muted-foreground">
          Words I Live By
        </p>
        <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight leading-[0.95]">
          A <span className="text-gradient italic" style={{ fontFamily: "Georgia, serif" }}>Tribute</span> Collection
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Tap any card to read the full tribute.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tributes.map((t, i) => (
          <motion.button
            key={t.key}
            type="button"
            onClick={() => setActive(t.key)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className={`group relative text-left glass rounded-3xl p-6 overflow-hidden border ${t.border} bg-gradient-to-br ${t.bg} focus:outline-none focus:ring-2 focus:ring-primary/50`}
          >
            <div className="flex items-center justify-between mb-5">
              <div className={`h-12 w-12 rounded-xl bg-white/5 grid place-items-center ${t.color}`}>
                <t.icon size={22} />
              </div>
              <span className="font-mono text-xs text-muted-foreground tracking-widest">{t.num}</span>
            </div>
            <h3 className={`text-xl font-bold uppercase tracking-wider ${t.color}`}>{t.title}</h3>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mt-1">— {t.subtitle} —</p>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{t.preview}</p>
            <div className="mt-6 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Read Tribute</span>
              <ArrowUpRight size={18} className={`${t.color} transition-transform group-hover:translate-x-1 group-hover:-translate-y-1`} />
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative max-w-5xl mx-auto my-10 px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close tribute"
                className="sticky top-4 ml-auto flex items-center gap-2 glass rounded-full px-4 py-2 text-sm hover:bg-white/10 transition-colors z-10"
              >
                <X size={16} /> Close
              </button>
              <div className="mt-2">{renderMap[active]()}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
