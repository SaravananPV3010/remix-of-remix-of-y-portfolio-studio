import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "FinFlow",
    description:
      "Real-time payment infrastructure for emerging markets. Built the core transaction engine handling 10K+ TPS.",
    tags: ["TypeScript", "Go", "PostgreSQL"],
    note: "YC W23",
    liveHref: "https://finflow.example.com",
    githubHref: null,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "DevKit",
    description:
      "Open-source developer toolkit that simplifies API integration. 15K+ GitHub stars and 200+ contributors.",
    tags: ["React", "Node.js", "GraphQL"],
    note: "Open Source",
    liveHref: "https://devkit.example.com",
    githubHref: "https://github.com/example/devkit",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Synthwave",
    description:
      "AI-powered music production platform. From prototype to 50K MAU in 6 months with a team of 4.",
    tags: ["Python", "React", "AWS"],
    note: "Acquired",
    liveHref: "https://synthwave.example.com",
    githubHref: null,
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Metric",
    description:
      "Analytics dashboard for SaaS companies. Real-time insights with sub-second query performance.",
    tags: ["TypeScript", "ClickHouse", "React"],
    note: "Active",
    liveHref: "https://metric.example.com",
    githubHref: "https://github.com/example/metric",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-border">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16"
      >
        <h2 className="font-display text-2xl md:text-3xl font-semibold">
          Selected work
        </h2>
      </motion.div>

      <div className="space-y-0">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.liveHref}
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={reveal}
            transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
            className="group grid md:grid-cols-12 gap-4 md:gap-8 items-start py-8 border-t border-border hover:bg-secondary/30 transition-colors -mx-6 px-6 md:-mx-8 md:px-8"
          >
            <div className="md:col-span-3 hidden md:block">
              <div className="overflow-hidden aspect-[4/3] bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="md:col-span-4">
              <h3 className="font-display text-xl font-semibold flex items-center gap-1.5">
                {project.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
              </h3>
              <span className="font-mono text-xs text-muted-foreground mt-1 block">
                {project.note}
              </span>
            </div>

            <div className="md:col-span-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="md:col-span-1 flex md:flex-col items-start md:items-end gap-2">
              <div className="flex flex-wrap gap-1.5 md:justify-end">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[11px] text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              {project.githubHref && (
                <a
                  href={project.githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </motion.a>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default ProjectsSection;
