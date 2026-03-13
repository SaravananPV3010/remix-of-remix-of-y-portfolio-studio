import { motion } from "framer-motion";

const experiences = [
  {
    company: "Acme Corp",
    role: "Senior Software Engineer",
    period: "2022 — Present",
    description:
      "Led a team of 6 engineers building the core payments infrastructure. Reduced transaction latency by 40% and scaled the platform to handle 10M+ daily transactions.",
    tags: ["React", "Go", "PostgreSQL", "Kubernetes"],
  },
  {
    company: "Launchpad (YC S20)",
    role: "Founding Engineer",
    period: "2020 — 2022",
    description:
      "Joined as employee #3. Built the product from scratch alongside the founders, grew from 0 to 50K users in 12 months, and helped raise a $4M seed round.",
    tags: ["TypeScript", "Node.js", "React", "AWS"],
  },
  {
    company: "Stripe",
    role: "Software Engineer",
    period: "2018 — 2020",
    description:
      "Worked on the Developer Experience team, shipping improvements to the Stripe Dashboard and public APIs used by millions of developers worldwide.",
    tags: ["Ruby", "React", "Python", "APIs"],
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2016 — 2018",
    description:
      "Designed and built web applications for early-stage startups and agencies across e-commerce, SaaS, and media verticals.",
    tags: ["React", "Node.js", "Figma"],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-border">
      <div className="grid md:grid-cols-12 gap-12 md:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="md:col-span-4 md:sticky md:top-32 self-start"
        >
          <h2 className="font-display text-2xl md:text-3xl font-semibold leading-snug">
            Experience
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            8+ years across startups, scale-ups, and world-class engineering teams.
          </p>
        </motion.div>

        <div className="md:col-span-8">
          <div className="flex flex-col">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={reveal}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className="py-8 border-t border-border first:border-t-0 first:pt-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold leading-tight">
                      {exp.role}
                    </h3>
                    <span className="font-body text-sm text-accent">
                      {exp.company}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground shrink-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-[1.7] mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
