import { motion } from "framer-motion";
import Section from "./Section";
import { Smartphone, Server, Layout, Zap } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "ANDROID DEVELOPMENT",
    desc: "Native Android apps with Java & Kotlin — clean Material UI, Firebase backend, and production-ready architecture.",
  },
  {
    icon: Server,
    title: "BACKEND & APIS",
    desc: "Scalable backend services, REST APIs, real-time databases, authentication and secure data flows.",
  },
  {
    icon: Layout,
    title: "FULL STACK WEB",
    desc: "End-to-end web applications using modern JavaScript, responsive design and performant interfaces.",
  },
  {
    icon: Zap,
    title: "PERFORMANCE & DEBUGGING",
    desc: "Profiling, refactoring, and optimization for faster, more reliable applications.",
  },
];

export default function Services() {
  return (
    <Section id="services" eyebrow="02 — Services" title="What I do">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative glass rounded-2xl p-6 overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary to-secondary grid place-items-center glow-shadow">
                <s.icon className="text-primary-foreground" size={20} />
              </div>
              <h3 className="mt-5 text-sm font-bold uppercase tracking-wider">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
