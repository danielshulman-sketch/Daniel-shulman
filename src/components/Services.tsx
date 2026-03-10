import { motion } from "motion/react";
import { Code, Palette, Megaphone, Layout, Globe, Sparkles } from "lucide-react";

const services = [
  {
    title: "Web Design & Development",
    description: "Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential.",
    icon: Layout,
    tags: ["Creative Design", "Webflow", "React", "E-Commerce"],
    color: "from-blue-500/20 to-brand-accent/20"
  },
  {
    title: "Branding & Identity",
    description: "It all starts with your brand. We use sound strategic thinking to create or elevate your brand identity.",
    icon: Palette,
    tags: ["Strategy", "Visual Identity", "Voice", "Logo Design"],
    color: "from-brand-accent/20 to-brand-accent-light/20"
  },
  {
    title: "Digital Marketing",
    description: "Delivering eye-catching campaigns that earn attention, spark emotion and increase conversions.",
    icon: Megaphone,
    tags: ["SEO", "PPC", "Content", "Social Media"],
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Motion Graphics",
    description: "Bringing your brand to life with high-end animation and cinematic storytelling.",
    icon: Sparkles,
    tags: ["2D/3D Animation", "Explainer Videos", "UI Motion"],
    color: "from-emerald-500/20 to-teal-500/20"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              OUR <br />
              <span className="text-gradient">SERVICES</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/50 max-w-sm"
          >
            We combine strategy, design, and technology to build digital products that people love to use.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-10 group relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-7 h-7 text-brand-accent-light" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-white/10 bg-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center text-sm font-bold group/btn">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
