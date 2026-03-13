import { motion } from "framer-motion";

const experiences = [
  {
    company: "Acme Corp",
    role: "Senior Software Engineer",
    period: "2022 — Present",
    location: "San Francisco, CA",
    description:
      "Led a team of 6 engineers building the core payments infrastructure. Reduced transaction latency by 40% and scaled the platform to handle 10M+ daily transactions.",
    tags: ["React", "Go", "PostgreSQL", "Kubernetes"],
  },
  {
    company: "Launchpad (YC S20)",
    role: "Founding Engineer",
    period: "2020 — 2022",
    location: "Remote",
    description:
      "Joined as employee #3. Built the product from scratch alongside the founders, grew from 0 to 50K users in 12 months, and helped raise a $4M seed round.",
    tags: ["TypeScript", "Node.js", "React", "AWS"],
  },
  {
    company: "Stripe",
    role: "Software Engineer",
    period: "2018 — 2020",
    location: "San Francisco, CA",
    description:
      "Worked on the Developer Experience team, shipping improvements to the Stripe Dashboard and public APIs used by millions of developers worldwide.",
    tags: ["Ruby", "React", "Python", "APIs"],
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2016 — 2018",
    location: "Remote",
    description:
      "Designed and built web applications for early-stage startups and agencies across e-commerce, SaaS, and media verticals.",
    tags: ["React", "Node.js", "Figma"],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="grid md:grid-cols-12 gap-12 md:gap-16">
        {/* Sticky heading column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="md:col-span-4 md:sticky md:top-32 self-start"
        >
          <span className="font-display text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Experience
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            Where I've worked.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            8+ years across startups, scale-ups, and world-class engineering teams.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="md:col-span-8 relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="flex flex-col gap-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={reveal}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative md:pl-10 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-4.5px] top-2 w-2.5 h-2.5 rounded-full border-2 border-primary bg-background hidden md:block group-hover:bg-primary transition-colors duration-300" />

                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                      {exp.role}
                    </h3>
                    <span className="font-display text-sm text-primary font-medium">
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-0.5 shrink-0">
                    <span className="font-display text-xs text-muted-foreground tracking-wider">
                      {exp.period}
                    </span>
                    <span className="font-display text-xs text-muted-foreground/70">
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-display tracking-wider uppercase border border-border rounded-sm text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider between items */}
                {i < experiences.length - 1 && (
                  <div className="mt-12 border-b border-border/50 md:hidden" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
