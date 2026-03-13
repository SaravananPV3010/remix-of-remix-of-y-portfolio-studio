import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AboutSection = () => {
  return (
    <section id="about" className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-border">
      <div className="grid md:grid-cols-12 gap-12 md:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="md:col-span-4"
        >
          <h2 className="font-display text-2xl md:text-3xl font-semibold leading-snug">
            About
          </h2>
        </motion.div>

        <div className="md:col-span-8">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-muted-foreground leading-[1.8] text-base md:text-lg mb-6"
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
            variants={reveal}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-muted-foreground leading-[1.8] text-base md:text-lg mb-10"
          >
            When I'm not shipping code, I'm mentoring early-stage founders and
            contributing to open source. I believe great software is built at the
            intersection of engineering rigor and design intuition.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={reveal}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-12 pt-8 border-t border-border"
          >
            {[
              { value: "8+", label: "Years" },
              { value: "12", label: "Products" },
              { value: "500K+", label: "Users" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-semibold">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
