import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import Section from "./Section";
import bluestock from "@/assets/cert-bluestock.jpg";
import naandi from "@/assets/cert-naandi.jpg";
import msdc from "@/assets/cert-msdc.jpg";

const certs = [
  {
    img: bluestock,
    title: "Software Development Engineer Internship",
    issuer: "Bluestock Fintech",
    date: "Feb 2026 – Mar 2026",
    desc: "Completed SDE internship under the guidance of Mr. Yash Kale. Worked on real-world application development, debugging, and performance improvements.",
    id: "BFSD249283",
  },
  {
    img: naandi,
    title: "Employability Skill Training Programme",
    issuer: "Mahindra Pride Classroom · Naandi Foundation",
    date: "2025 – 2026",
    desc: "Successfully completed the Employability Skill Training Programme conducted by Mahindra Pride Classroom in partnership with Naandi Foundation.",
    id: "Bearys First Grade College, Kodi",
  },
  {
    img: msdc,
    title: "Internship on Data Science",
    issuer: "Manipal Skill Development Centre (MSDC) · School of IT Skills",
    date: "27 Apr 2026 – 16 May 2026",
    desc: "Completed an internship on Data Science at the School of IT Skills, Manipal Skill Development Centre — an NSDC Approved Training Provider. Conduct and performance recognized as satisfactory.",
    id: "MSDC/IT/INT-1/051/2026",
  },
];

export default function Certificates() {
  return (
    <Section id="certificates" eyebrow="06 — Certifications" title="Certifications & Achievements">
      <div className="grid md:grid-cols-2 gap-6">
        {certs.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative glass rounded-3xl overflow-hidden"
          >
            <a href={c.img} target="_blank" rel="noreferrer" className="block relative overflow-hidden">
              <div className="aspect-[4/3] bg-white/5 overflow-hidden">
                <img
                  src={c.img}
                  alt={`${c.title} certificate`}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute top-3 right-3 h-9 w-9 rounded-full glass grid place-items-center opacity-0 group-hover:opacity-100 transition">
                <ExternalLink size={16} />
              </div>
            </a>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-secondary grid place-items-center shrink-0">
                  <Award size={18} className="text-primary-foreground" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  {c.date}
                </span>
              </div>
              <h3 className="text-lg font-bold leading-snug">{c.title}</h3>
              <p className="mt-1 text-sm text-primary font-medium">{c.issuer}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              <p className="mt-3 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                Ref · {c.id}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
