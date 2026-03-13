import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    date: "Mar 2025",
    title: "Why I Stopped Chasing Product-Market Fit",
    description: "The counterintuitive lesson I learned after 3 failed startups: stop searching and start listening.",
    tag: "Startups",
    href: "#",
  },
  {
    date: "Feb 2025",
    title: "Building a Payment Engine at 10K TPS",
    description: "A deep dive into the architecture decisions behind FinFlow's transaction pipeline.",
    tag: "Engineering",
    href: "#",
  },
  {
    date: "Jan 2025",
    title: "The Case for Boring Technology",
    description: "How choosing PostgreSQL over the latest distributed database saved us 6 months.",
    tag: "Engineering",
    href: "#",
  },
  {
    date: "Dec 2024",
    title: "Open Source as a Growth Strategy",
    description: "How DevKit grew from a side project to 15K stars by treating contributors like co-founders.",
    tag: "Open Source",
    href: "#",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const BlogSection = () => {
  return (
    <section id="writing" className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-border">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16"
      >
        <h2 className="font-display text-2xl md:text-3xl font-semibold">
          Writing
        </h2>
      </motion.div>

      <div className="space-y-0">
        {posts.map((post, index) => (
          <motion.a
            key={post.title}
            href={post.href}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={reveal}
            transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
            className="group grid grid-cols-12 gap-4 py-6 border-t border-border hover:bg-secondary/30 transition-colors -mx-6 px-6 md:-mx-8 md:px-8 items-start"
          >
            <div className="col-span-3 md:col-span-2">
              <span className="font-mono text-xs text-muted-foreground">
                {post.date}
              </span>
            </div>
            <div className="col-span-9 md:col-span-4">
              <h3 className="font-display text-base font-semibold leading-snug flex items-start gap-1.5">
                {post.title}
                <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
              </h3>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-7">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {post.description}
              </p>
            </div>
            <div className="col-span-12 md:col-span-1 md:col-start-12 hidden md:block">
              <span className="font-mono text-[11px] text-muted-foreground">
                {post.tag}
              </span>
            </div>
          </motion.a>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default BlogSection;
