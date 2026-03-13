import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <motion.section
      ref={ref}
      variants={container}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-16 lg:px-24 relative overflow-hidden"
    >
      <motion.div style={{ y: textY, opacity: textOpacity }}>
        <motion.p
          variants={item}
          className="font-body text-sm text-muted-foreground mb-6 tracking-wide"
        >
          Full-stack engineer & founder
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-700 leading-[1.05] tracking-[-0.02em] max-w-4xl"
        >
          I build things that
          <br />
          people actually use.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 text-base md:text-lg text-muted-foreground max-w-lg font-body leading-[1.7]"
        >
          I ship fast, iterate faster, and obsess over craft. 
          Previously building at startups backed by Y Combinator.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex gap-5 items-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-body font-medium text-sm hover:opacity-85 transition-opacity"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 decoration-border hover:decoration-foreground"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
