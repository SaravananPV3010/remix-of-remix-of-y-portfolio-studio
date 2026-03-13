import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024",
    title: "Lead Engineer — ScaleUp",
    description: "Leading a team of 8 engineers building the next-gen cloud infrastructure platform.",
  },
  {
    year: "2023",
    title: "Co-founder — FinFlow (YC W23)",
    description: "Built real-time payment infrastructure for emerging markets. Raised $4M seed round.",
  },
  {
    year: "2021",
    title: "Senior Engineer — Stripe",
    description: "Worked on the Payments Core team, optimizing transaction throughput by 3x.",
  },
  {
    year: "2019",
    title: "Software Engineer — Meta",
    description: "Built internal tools for the Ads platform serving 10M+ advertisers globally.",
  },
  {
    year: "2017",
    title: "B.S. Computer Science — MIT",
    description: "Graduated with honors. Research focus on distributed systems and ML.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const TimelineSection = () => {
  return (
    <section id="timeline" className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-border">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16"
      >
        <h2 className="font-display text-2xl md:text-3xl font-semibold">
          Timeline
        </h2>
      </motion.div>

      <div className="space-y-0">
        {timeline.map((item, i) => (
          <motion.div
            key={item.year + item.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={reveal}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-12 gap-4 py-6 border-t border-border"
          >
            <div className="col-span-2 md:col-span-1">
              <span className="font-mono text-sm text-muted-foreground">
                {item.year}
              </span>
            </div>
            <div className="col-span-10 md:col-span-4">
              <h3 className="font-display text-base font-semibold">
                {item.title}
              </h3>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default TimelineSection;
