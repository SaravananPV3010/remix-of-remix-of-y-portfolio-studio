import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "One of the most talented engineers I've worked with. Ships at an incredible pace without compromising quality.",
    name: "Sarah Chen",
    role: "CTO at TechVentures",
  },
  {
    quote:
      "Transformed our product vision into reality in record time. Their technical depth and design sensibility is rare.",
    name: "Marcus Rivera",
    role: "Founder at LaunchPad",
  },
  {
    quote:
      "A true full-stack talent — from database architecture to pixel-perfect UI. Essential to our YC batch success.",
    name: "Aisha Patel",
    role: "CEO at DataStack",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-border">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16"
      >
        <h2 className="font-display text-2xl md:text-3xl font-semibold">
          What people say
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={t.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={reveal}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-display text-base leading-[1.7] mb-6 italic">
              "{t.quote}"
            </p>
            <footer>
              <p className="font-body text-sm font-medium">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
