import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const ResumeSection = () => {
  return (
    <section id="resume" className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="border border-border rounded-sm p-10 md:p-14 bg-card/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
      >
        <div className="flex items-start gap-5">
          <div className="p-3 border border-primary/20 rounded-sm bg-primary/5">
            <FileText className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
              Download my resume
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Get a comprehensive overview of my experience, skills, and achievements in a clean PDF format.
            </p>
          </div>
        </div>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display font-medium text-sm tracking-wide hover:opacity-90 transition-opacity rounded-sm shrink-0"
        >
          <Download className="w-4 h-4" />
          Download CV
        </a>
      </motion.div>
    </section>
  );
};

export default ResumeSection;
