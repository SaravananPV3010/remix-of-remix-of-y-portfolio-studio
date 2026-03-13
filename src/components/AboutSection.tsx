import { motion } from "framer-motion";

const stats = [
  { label: "Years Building", value: "8+" },
  { label: "Products Shipped", value: "12" },
  { label: "Users Impacted", value: "500K+" },
];

const techStack = [
  "TypeScript", "React", "Node.js", "Python",
  "PostgreSQL", "AWS", "Figma", "Go",
];

const reveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const slideRight = {
  hidden: { opacity: 0, x: 50, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const tagItem = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const AboutSection = () => {
  return (
    <section id="about" className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="grid md:grid-cols-12 gap-12 md:gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="md:col-span-5"
        >
          <span className="font-display text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            About
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            Obsessed with building products people love.
          </h2>
        </motion.div>

        <div className="md:col-span-7">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideRight}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8"
          >
            I'm a full-stack engineer with a passion for turning complex problems into
            elegant, scalable solutions. I've spent the last 8 years building products
            across fintech, developer tools, and consumer apps — from zero to one and
            beyond.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideRight}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-muted-foreground leading-relaxed text-base md:text-lg mb-12"
          >
            When I'm not shipping code, I'm mentoring early-stage founders and
            contributing to open source. I believe great software is built at the
            intersection of engineering rigor and design intuition.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-3 gap-6 mb-12 py-8 border-t border-b border-border"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={reveal} transition={{ duration: 0.5 }}>
                <div className="font-display text-2xl md:text-3xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="flex flex-wrap gap-2"
          >
            {techStack.map((tech) => (
              <motion.span
                key={tech}
                variants={tagItem}
                transition={{ duration: 0.3 }}
                className="px-3 py-1.5 text-xs font-display tracking-wider uppercase border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
