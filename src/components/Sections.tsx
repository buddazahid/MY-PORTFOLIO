import { motion } from "framer-motion";
import Section from "./Section";
import {
  Briefcase, Smartphone, Wrench, GraduationCap, Mail, Phone, Github, Linkedin,
  Code2, Database, Globe, Brain, ExternalLink, Sparkles
} from "lucide-react";

export function About() {
  return (
    <Section id="about" eyebrow="01 — About">
      <div className="grid md:grid-cols-5 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Crafting <span className="text-gradient">elegant</span> software, one line at a time.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-3 space-y-5 text-muted-foreground text-lg leading-relaxed"
        >
          <p>
            Motivated Computer Applications graduate with a strong foundation in software development
            and problem-solving. Focused on continuous learning, adaptability, and building efficient
            scalable applications.
          </p>
          <p>
            Interested in <span className="text-foreground">Android</span> and{" "}
            <span className="text-foreground">backend development</span> with hands-on internship experience.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { k: "5+", v: "Projects" },
              { k: "10+", v: "Technologies" },
              { k: "2026", v: "BCA Grad" },
            ].map(s => (
              <div key={s.v} className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gradient">{s.k}</div>
                <div className="text-xs font-mono text-muted-foreground mt-1 uppercase tracking-wider">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="03 — Experience" title="Where I've worked">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="relative glass rounded-3xl p-8 md:p-10 overflow-hidden group"
      >
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/20 blur-3xl group-hover:bg-primary/30 transition" />
        <div className="relative flex flex-col md:flex-row md:items-start gap-6">
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-secondary grid place-items-center shrink-0 glow-shadow">
            <Briefcase className="text-primary-foreground" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-2xl font-bold">Software Development Engineer Intern</h3>
              <span className="text-sm font-mono text-muted-foreground">Feb 2026 – Mar 2026</span>
            </div>
            <p className="mt-1 text-primary font-medium">Bluestock Fintech</p>
            <ul className="mt-5 space-y-3">
              {[
                "Worked on real-world application development",
                "Improved application performance and debugging",
                "Collaborated with team members on project tasks",
                "Gained exposure to software development lifecycle",
              ].map(r => (
                <li key={r} className="flex gap-3 text-muted-foreground">
                  <Sparkles size={16} className="text-primary mt-1 shrink-0" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

const projects = [
  {
    title: "Bus Timing & Availability App",
    description: "Android app for real-time bus timings and route availability with Firebase realtime database integration and a clean, user-friendly mobile UI.",
    stack: ["Java", "Firebase", "Android Studio", "XML"],
    icon: Smartphone,
  },
  {
    title: "FindMe Pro – Service Marketplace",
    description: "Android marketplace connecting users with nearby service providers. Features authentication, booking, provider availability, and request management.",
    stack: ["Java/Kotlin", "Firebase", "Android Studio", "GitHub"],
    icon: Globe,
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="04 — Projects" title="Selected work">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative glass rounded-3xl p-7 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
            <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary grid place-items-center">
                  <p.icon className="text-primary-foreground" size={20} />
                </div>
                <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition" />
              </div>
              <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map(t => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

const skillGroups = [
  { title: "Programming", icon: Code2, items: ["Java", "Python", "JavaScript"] },
  { title: "Web", icon: Globe, items: ["HTML", "CSS"] },
  { title: "Database", icon: Database, items: ["SQL", "Firebase"] },
  { title: "Tools", icon: Wrench, items: ["Git", "GitHub", "Android Studio", "VS Code"] },
  { title: "Core Concepts", icon: Brain, items: ["OOP", "Data Structures", "DBMS"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="05 — Skills" title="Technologies I work with">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-6 hover:border-primary/40 transition"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 grid place-items-center text-primary">
                <g.icon size={18} />
              </div>
              <h3 className="font-bold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map(item => (
                <span key={item} className="px-3 py-1.5 rounded-lg text-sm bg-white/5 border border-white/10 hover:border-primary/40 hover:text-primary transition">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" eyebrow="05 — Education">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="relative glass rounded-3xl p-10 overflow-hidden"
      >
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-secondary/20 blur-3xl" />
        <div className="relative flex flex-col md:flex-row md:items-center gap-6">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-secondary to-primary grid place-items-center glow-shadow">
            <GraduationCap className="text-primary-foreground" size={28} />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold">Bachelor of Computer Applications</h3>
            <p className="mt-2 text-lg text-muted-foreground">Mangalore University</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-gradient font-mono">2026</div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Graduation</div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

export function Contact() {
  const items = [
    { Icon: Mail, label: "Email", value: "zahidsiddiqb@gmail.com", href: "mailto:zahidsiddiqb@gmail.com" },
    { Icon: Phone, label: "Phone", value: "+91 8310500530", href: "tel:+918310500530" },
    { Icon: Linkedin, label: "LinkedIn", value: "mohammed-zahid-budda", href: "https://www.linkedin.com/in/mohammed-zahid-budda" },
    { Icon: Github, label: "GitHub", value: "buddazahid", href: "https://github.com/buddazahid" },
  ];
  return (
    <Section id="contact" eyebrow="06 — Contact">
      <div className="text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Let's build <span className="text-gradient">something great</span>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-muted-foreground text-lg"
        >
          Open to internships, full-time roles, and collaborations.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }}
          href="mailto:zahidsiddiqb@gmail.com"
          className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium glow-shadow hover:scale-105 transition-transform"
        >
          <Mail size={18} /> Say hello
        </motion.a>
      </div>
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <motion.a
            key={it.label}
            href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-5 group"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 grid place-items-center text-primary group-hover:scale-110 transition">
                <it.Icon size={18} />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{it.label}</div>
                <div className="text-sm font-medium truncate">{it.value}</div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-4">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Mohammed Zahid. Built with passion.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/buddazahid" target="_blank" rel="noreferrer" className="hover:text-primary transition"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/mohammed-zahid-budda" target="_blank" rel="noreferrer" className="hover:text-primary transition"><Linkedin size={18} /></a>
          <a href="mailto:zahidsiddiqb@gmail.com" className="hover:text-primary transition"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
