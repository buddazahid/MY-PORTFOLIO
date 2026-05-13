import { motion } from "framer-motion";
import { Utensils, HeartPulse, Moon, Clock, GraduationCap, HandHeart, Baby, Heart } from "lucide-react";
import Section from "./Section";

const items = [
  { icon: Utensils, title: "Who stayed hungry", text: "so we could eat." },
  { icon: HeartPulse, title: "Who sacrificed her health", text: "so we could live better." },
  { icon: Moon, title: "Who lost her sleep", text: "just to watch over us." },
  { icon: Clock, title: "Who gave her time,", text: "comfort, and peace for our future." },
  { icon: GraduationCap, title: "Who endured pain silently", text: "and became our first teacher in life." },
  { icon: HandHeart, title: "Who became everything", text: "for us before we even understood life itself." },
  { icon: Baby, title: "Who carried us through", text: "the most painful moments to bring us into this world." },
];

export default function MotherTribute() {
  return (
    <Section id="mother" eyebrow="09 — A Tribute">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="font-mono uppercase tracking-[0.3em] text-xs md:text-sm text-muted-foreground">
          Behind Every Success
        </p>
        <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight leading-[0.95]">
          There is a <span className="text-gradient italic" style={{ fontFamily: "Georgia, serif" }}>Mother.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4 mb-12">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group relative glass rounded-2xl p-5 flex items-start gap-4 border border-rose-500/20 bg-gradient-to-br from-rose-500/10 to-amber-500/5"
          >
            <div className="h-12 w-12 rounded-full bg-rose-500/15 grid place-items-center shrink-0 text-rose-300 group-hover:scale-110 transition-transform">
              <it.icon size={20} />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold text-rose-300">{it.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-1">{it.text}</p>
            </div>
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
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-rose-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="relative">
          <p className="font-mono uppercase tracking-[0.3em] text-xs md:text-sm text-muted-foreground">
            That extraordinary person is called
          </p>
          <h3 className="mt-4 text-6xl md:text-8xl font-extrabold italic text-gradient" style={{ fontFamily: "Georgia, serif" }}>
            Mother.
          </h3>
          <div className="mt-6 flex items-center justify-center gap-2">
            <Heart size={20} className="text-rose-500 fill-rose-500" />
          </div>
          <p className="mt-6 font-mono uppercase tracking-[0.25em] text-xs md:text-sm text-rose-300/80">
            Her Love · Her Sacrifice · Our Life
          </p>
          <p className="mt-2 font-mono uppercase tracking-[0.4em] text-[10px] md:text-xs text-muted-foreground">
            Respect | Love | Thanks
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
