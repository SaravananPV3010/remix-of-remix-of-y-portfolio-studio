import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024",
    title: "Lead Engineer — ScaleUp",
    description: "Leading a team of 8 engineers building the next-gen cloud infrastructure platform.",
    highlight: true,
  },
  {
    year: "2023",
    title: "Co-founder — FinFlow (YC W23)",
    description: "Built real-time payment infrastructure for emerging markets. Raised $4M seed round.",
    highlight: false,
  },
  {
    year: "2021",
    title: "Senior Engineer — Stripe",
    description: "Worked on the Payments Core team, optimizing transaction throughput by 3x.",
    highlight: false,
  },
  {
    year: "2019",
    title: "Software Engineer — Meta",
    description: "Built internal tools for the Ads platform serving 10M+ advertisers globally.",
    highlight: false,
  },
  {
    year: "2017",
    title: "B.S. Computer Science — MIT",
    description: "Graduated with honors. Research focus on distributed systems and ML.",
    highlight: false,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const itemReveal = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const TimelineSection = () => {
  return (
    <section id="timeline" className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16"
      >
        <span className="font-display text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
          Timeline
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          The journey so far.
        </h2>
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-border" />

        <div className="space-y-0">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year + item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={itemReveal}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative pl-14 md:pl-16 pb-12 last:pb-0 group"
            >
              {/* Dot */}
              <div
                className={`absolute left-3 md:left-4 top-1.5 w-3 h-3 rounded-full border-2 transition-colors ${
                  item.highlight
                    ? "bg-primary border-primary shadow-[0_0_12px_hsl(24_100%_50%/0.4)]"
                    : "bg-background border-muted-foreground/30 group-hover:border-primary/50"
                }`}
              />

              <span className="font-display text-xs uppercase tracking-[0.2em] text-primary mb-2 block">
                {item.year}
              </span>
              <h3 className="font-display text-lg md:text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
