import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Section from "./Section";

type Day = { date: string; contributionCount: number; contributionLevel: string };

const USERNAME = "buddazahid";
const COLORS = [
  "rgb(22, 27, 34)",
  "rgb(14, 68, 41)",
  "rgb(0, 109, 50)",
  "rgb(38, 166, 65)",
  "rgb(57, 211, 83)",
];
const LEVEL: Record<string, number> = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export default function GitHubContributions() {
  const [weeks, setWeeks] = useState<Day[][] | null>(null);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://github-contributions-api.deno.dev/${USERNAME}.json`)
      .then((r) => r.json())
      .then((d) => {
        const w: Day[][] = d.contributions;
        setWeeks(w);
        setTotal(w.flat().reduce((s, x) => s + (x?.contributionCount || 0), 0));
      })
      .catch(() => setError(true));
  }, []);

  return (
    <Section id="github" eyebrow="06 — GitHub" title="GitHub Activity">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm p-6 md:p-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <Github className="h-5 w-5 text-primary" />
            <div>
              <p className="font-mono text-sm text-muted-foreground">@{USERNAME}</p>
              {weeks && <p className="text-xs text-muted-foreground/70 mt-0.5">{total} contributions in the last year</p>}
            </div>
          </div>
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary hover:opacity-80 transition"
          >
            View Profile <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {error && (
          <div className="text-center py-12 text-sm text-muted-foreground">
            Unable to load GitHub contributions.{" "}
            <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noreferrer" className="text-primary underline">
              View on GitHub
            </a>
          </div>
        )}

        {!error && !weeks && (
          <div className="text-center py-12 text-sm text-muted-foreground animate-pulse">Loading contributions…</div>
        )}

        {weeks && (
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              {/* Month labels */}
              <div className="flex gap-[3px] pl-7 mb-1">
                {weeks.map((week, i) => {
                  const first = week[0];
                  if (!first) return <div key={i} style={{ width: 11 }} />;
                  const d = new Date(first.date);
                  const showMonth = d.getDate() <= 7 && (i === 0 || new Date(weeks[i - 1][0]?.date).getMonth() !== d.getMonth());
                  return (
                    <div key={i} style={{ width: 11 }} className="text-[10px] text-muted-foreground font-mono">
                      {showMonth ? MONTHS[d.getMonth()] : ""}
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-[3px]">
                {/* Weekday labels */}
                <div className="flex flex-col gap-[3px] pr-1 text-[9px] text-muted-foreground font-mono">
                  {["", "M", "", "W", "", "F", ""].map((d, i) => (
                    <div key={i} style={{ height: 11, lineHeight: "11px" }}>{d}</div>
                  ))}
                </div>

                {weeks.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-[3px]">
                    {Array.from({ length: 7 }).map((_, di) => {
                      const day = week[di];
                      if (!day) return <div key={di} style={{ width: 11, height: 11 }} />;
                      const lvl = LEVEL[day.contributionLevel] ?? 0;
                      return (
                        <div
                          key={di}
                          title={`${day.contributionCount} contributions on ${day.date}`}
                          style={{ width: 11, height: 11, backgroundColor: COLORS[lvl], borderRadius: 2 }}
                          className="transition-transform hover:scale-125"
                        />
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center justify-end gap-2 mt-4 text-[10px] text-muted-foreground font-mono">
                <span>Less</span>
                {COLORS.map((c, i) => (
                  <div key={i} style={{ width: 11, height: 11, backgroundColor: c, borderRadius: 2 }} />
                ))}
                <span>More</span>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </Section>
  );
}
