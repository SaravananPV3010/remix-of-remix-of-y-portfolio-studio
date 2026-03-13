import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "GitHub", href: "https://github.com" },
  { label: "Twitter / X", href: "https://x.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:hello@example.com" },
];

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const ContactSection = () => {
  return (
    <section id="contact" className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-border">
      <div className="grid md:grid-cols-12 gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="md:col-span-7"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1]">
            Let's build
            <br />
            something great.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="md:col-span-5 flex flex-col justify-end"
        >
          <div className="space-y-0">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-border hover:border-foreground/30 transition-colors"
              >
                <span className="font-body text-sm">
                  {link.label}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={reveal}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-24 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
      >
        <span className="font-body text-xs text-muted-foreground">
          © 2025
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          Built with care
        </span>
      </motion.div>
    </section>
  );
};

export default ContactSection;
