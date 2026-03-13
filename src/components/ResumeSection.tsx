import { motion } from "framer-motion";
import { Download } from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const ResumeSection = () => {
  return (
    <section id="resume" className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-border">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2">
            Resume
          </h2>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            A comprehensive overview of my experience, skills, and achievements.
          </p>
        </div>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-body text-sm font-medium hover:opacity-85 transition-opacity shrink-0"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </a>
      </motion.div>
    </section>
  );
};

export default ResumeSection;
