import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-accent/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-accent-light/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium mb-8"
          >
            <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] mb-8"
          >
            REBEL AGAINST <br />
            <span className="text-gradient italic">BORING.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-white/60 leading-relaxed mb-12 max-w-2xl"
          >
            We’re a creative web design and branding agency that crafts beautiful work for brands who refuse to blend in.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-6"
          >
            <button className="magnetic-button group">
              Start your project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="magnetic-button-outline group">
              View our work
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Logos Placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-0 w-full"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          {["Clutch", "Awwwards", "CSSDA", "Behance", "Dribbble"].map((logo) => (
            <span key={logo} className="text-sm font-bold tracking-widest uppercase">{logo}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
