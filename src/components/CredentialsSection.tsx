import { motion } from "framer-motion";
import { Award, GraduationCap, Shield } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    category: "Education",
    items: [
      { title: "B.S. Computer Science", org: "MIT", year: "2017" },
      { title: "Machine Learning Specialization", org: "Stanford Online", year: "2020" },
    ],
  },
  {
    icon: Shield,
    category: "Certifications",
    items: [
      { title: "AWS Solutions Architect — Professional", org: "Amazon Web Services", year: "2022" },
      { title: "Google Cloud Professional Data Engineer", org: "Google Cloud", year: "2021" },
    ],
  },
  {
    icon: Award,
    category: "Awards",
    items: [
      { title: "Top 10 — TechCrunch Disrupt", org: "FinFlow", year: "2023" },
      { title: "Open Source Contributor of the Year", org: "GitHub Universe", year: "2022" },
    ],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const cardReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const CredentialsSection = () => {
  return (
    <section id="credentials" className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16"
      >
        <span className="font-display text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
          Credentials
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Education & recognition.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {credentials.map((group, i) => (
          <motion.div
            key={group.category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardReveal}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="border border-border rounded-sm p-8 bg-card/50 hover:border-primary/30 transition-colors"
          >
            <group.icon className="w-6 h-6 text-primary mb-6" />
            <h3 className="font-display text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
              {group.category}
            </h3>
            <div className="space-y-6">
              {group.items.map((item) => (
                <div key={item.title}>
                  <p className="font-display text-sm font-semibold">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.org} · {item.year}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CredentialsSection;
