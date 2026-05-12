import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, Mail, Github, Linkedin, ArrowDown } from "lucide-react";
import profile from "@/assets/zahid.jpg";

const titles = ["SOFTWARE ENGINEER", "ANDROID DEVELOPER", "FULL STACK BUILDER"];

export default function Hero() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = titles[i];
    const speed = del ? 50 : 110;
    const t = setTimeout(() => {
      if (!del && text === current) { setTimeout(() => setDel(true), 1400); return; }
      if (del && text === "") { setDel(false); setI((i + 1) % titles.length); return; }
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-28 pb-20">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative mx-auto mb-8 w-36 h-36 md:w-44 md:h-44"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-secondary to-primary blur-2xl opacity-60 animate-pulse" />
          <div className="relative h-full w-full rounded-full p-[3px] bg-gradient-to-tr from-primary via-secondary to-primary">
            <img
              src={profile}
              alt="Mohammed Zahid"
              className="h-full w-full rounded-full object-cover bg-background"
            />
          </div>
          <span className="absolute bottom-2 right-2 h-5 w-5 rounded-full bg-emerald-400 ring-4 ring-background" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-muted-foreground mb-6 uppercase tracking-widest"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          AVAILABLE FOR OPPORTUNITIES
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] uppercase tracking-tight"
        >
          MOHAMMED <span className="text-gradient">ZAHID</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-xl md:text-2xl font-mono text-muted-foreground h-8 uppercase tracking-widest"
        >
          <span className="cursor-blink">{text}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Motivated Software Engineer passionate about Android, Full Stack, and scalable application development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-widest text-muted-foreground"
        >
          <span>📍 Mangalore, India</span>
          <span className="hidden sm:inline opacity-40">/</span>
          <span>BCA · 2026</span>
          <span className="hidden sm:inline opacity-40">/</span>
          <span>Open to Remote & Onsite</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://drive.google.com/uc?export=download&id=1T7pCctw4f06MpT2d_JO3LMImX1HveIVR"
            target="_blank"
            rel="noreferrer"
            download="Mohammed-Zahid-Resume.pdf"
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold uppercase tracking-wider text-sm glow-shadow hover:scale-105 transition-transform"
          >
            <Download size={18} /> DOWNLOAD RESUME
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10 font-semibold uppercase tracking-wider text-sm transition"
          >
            <Mail size={18} /> CONTACT ME
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-10 flex justify-center gap-4"
        >
          {[
            { Icon: Github, href: "https://github.com/buddazahid", label: "GitHub" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/mohammed-zahid-budda", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:zahidsiddiqb@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
              className="h-11 w-11 grid place-items-center rounded-full glass hover:text-primary hover:scale-110 transition">
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-16 flex justify-center text-muted-foreground"
        >
          <ArrowDown className="float" />
        </motion.div>
      </div>
    </section>
  );
}
