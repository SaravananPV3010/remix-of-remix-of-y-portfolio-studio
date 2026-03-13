import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TOTAL_DOTS = 10;

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 10 },
      { name: "TypeScript", level: 9 },
      { name: "CSS / Tailwind", level: 9 },
      { name: "Figma / Design", level: 7 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 9 },
      { name: "Go", level: 7 },
      { name: "Python", level: 8 },
      { name: "GraphQL / REST", level: 9 },
    ],
  },
  {
    category: "Data & Infra",
    skills: [
      { name: "PostgreSQL", level: 9 },
      { name: "ClickHouse", level: 7 },
      { name: "AWS / GCP", level: 8 },
      { name: "Docker / K8s", level: 7 },
    ],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const rowItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

interface SkillRowProps {
  name: string;
  level: number;
}

const SkillRow = ({ name, level }: SkillRowProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      variants={rowItem}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-display text-sm text-foreground tracking-wide">
          {name}
        </span>
        <span className="font-display text-xs text-muted-foreground">
          {level * 10}%
        </span>
      </div>
      <div className="flex gap-[5px]">
        {Array.from({ length: TOTAL_DOTS }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0.4, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.4, opacity: 0 }}
            transition={{ duration: 0.25, delay: i * 0.04, ease: [0.25, 0.1, 0.25, 1] }}
            className="block w-[7px] h-[7px] rounded-full"
            style={{
              backgroundColor:
                i < level ? "hsl(var(--primary))" : "hsl(var(--border))",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16"
      >
        <span className="font-display text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
          Skills
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Tools of the trade.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12 md:gap-16">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            transition={{ delay: gi * 0.1 }}
          >
            <motion.p
              variants={rowItem}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8"
            >
              {group.category}
            </motion.p>

            <div className="space-y-6">
              {group.skills.map((skill) => (
                <SkillRow key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
