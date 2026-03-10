import { motion } from "motion/react";

const projects = [
  {
    title: "UPP",
    year: "2025",
    description: "A cinematic web experience for a Hollywood powerhouse.",
    image: "https://picsum.photos/seed/upp/1200/800",
    tags: ["Web Design", "Agencies"],
    large: true
  },
  {
    title: "Goat Agency",
    year: "2025",
    description: "Influence everywhere: a future-ready website.",
    image: "https://picsum.photos/seed/goat/800/800",
    tags: ["Development", "SaaS"],
    large: false
  },
  {
    title: "ISI Global",
    year: "2024",
    description: "Revamping a global design agency's digital identity.",
    image: "https://picsum.photos/seed/isi/800/800",
    tags: ["Branding", "Retail"],
    large: false
  },
  {
    title: "Wogan Coffee",
    year: "2023",
    description: "Transforming the image of Bristol's finest coffee.",
    image: "https://picsum.photos/seed/coffee/1200/800",
    tags: ["E-Commerce", "Branding"],
    large: true
  }
];

export default function Work() {
  return (
    <section id="work" className="py-32 bg-brand-white text-brand-black rounded-[40px] md:rounded-[80px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold leading-none"
          >
            OUR <br />
            <span className="italic font-light">WORK</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <h3 className="text-2xl font-bold mb-4">Making brands a damn site better.</h3>
            <p className="text-black/60">
              Brands win over fans when they’re brave enough to go beyond their creative comfort zone.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group cursor-pointer ${project.large ? "md:col-span-2" : ""}`}
            >
              <div className="relative aspect-[16/9] md:aspect-auto md:h-[600px] overflow-hidden rounded-3xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div className="max-w-md">
                    <p className="text-xl font-medium mb-2">{project.description}</p>
                    <div className="flex gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <span className="text-black/40 font-mono">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="magnetic-button-outline !text-brand-black !border-black/10 hover:!border-brand-accent">
            View all projects
          </button>
        </div>
      </div>
    </section>
  );
}
