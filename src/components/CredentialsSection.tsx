import { motion } from "framer-motion";

const credentials = [
  {
    category: "Education",
    items: [
      { title: "B.S. Computer Science", org: "MIT", year: "2017" },
      { title: "Machine Learning Specialization", org: "Stanford Online", year: "2020" },
    ],
  },
  {
    category: "Certifications",
    items: [
      { title: "AWS Solutions Architect — Professional", org: "Amazon Web Services", year: "2022" },
      { title: "Google Cloud Professional Data Engineer", org: "Google Cloud", year: "2021" },
    ],
  },
  {
    category: "Recognition",
    items: [
      { title: "Top 10 — TechCrunch Disrupt", org: "FinFlow", year: "2023" },
      { title: "Open Source Contributor of the Year", org: "GitHub Universe", year: "2022" },
    ],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const CredentialsSection = () => {
  return (
    <section id="credentials" className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-border">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16"
      >
        <h2 className="font-display text-2xl md:text-3xl font-semibold">
          Education & recognition
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12 md:gap-20">
        {credentials.map((group, i) => (
          <motion.div
            key={group.category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={reveal}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-body text-sm text-muted-foreground mb-6">
              {group.category}
            </p>
            <div className="space-y-5">
              {group.items.map((item) => (
                <div key={item.title}>
                  <p className="font-display text-base font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {item.org} · <span className="font-mono text-xs">{item.year}</span>
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
