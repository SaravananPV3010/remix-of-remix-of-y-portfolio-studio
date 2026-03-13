import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large gradient orb */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[100px]"
      />

      {/* Small accent circle */}
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute top-1/4 left-[10%] w-48 h-48 rounded-full border border-primary/[0.05]"
      />

      {/* Grid dots */}
      <motion.div
        style={{ y: y3, opacity }}
        className="absolute top-[15%] right-[15%] grid grid-cols-4 gap-6"
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-muted-foreground/[0.08]" />
        ))}
      </motion.div>

      {/* Diagonal line */}
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute top-[40%] left-[5%] w-px h-40 bg-gradient-to-b from-transparent via-primary/10 to-transparent rotate-[20deg]"
      />
    </div>
  );
};

export default ParallaxBackground;
