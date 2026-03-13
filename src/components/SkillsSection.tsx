import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React / Next.js", "TypeScript", "CSS / Tailwind", "Figma"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Go", "Python", "GraphQL / REST"],
  },
  {
    category: "Infrastructure",
    skills: ["PostgreSQL", "ClickHouse", "AWS / GCP", "Docker / K8s"],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-border">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16"
      >
        <h2 className="font-display text-2xl md:text-3xl font-semibold">
          Tools & technologies
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12 md:gap-20">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={reveal}
            transition={{ duration: 0.6, delay: gi * 0.08 }}
          >
            <p className="font-body text-sm text-muted-foreground mb-6">
              {group.category}
            </p>
            <ul className="space-y-3">
              {group.skills.map((skill) => (
                <li key={skill} className="font-display text-base font-medium">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
