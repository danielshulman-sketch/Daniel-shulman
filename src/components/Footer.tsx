import { motion } from "motion/react";
import { Instagram, Linkedin, Twitter, Facebook, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-32 pb-12 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-32">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold mb-8"
            >
              LET'S BUILD <br />
              <span className="text-gradient">SOMETHING GREAT.</span>
            </motion.h2>
            <a 
              href="mailto:hello@lumina.creative" 
              className="text-2xl md:text-4xl font-display font-medium hover:text-brand-accent transition-colors underline underline-offset-8 decoration-white/10"
            >
              hello@lumina.creative
            </a>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-white/40 mb-6">Explore</h4>
              <ul className="flex flex-col gap-4">
                {["Work", "Services", "Agency", "Culture", "Blog", "Contact"].map(item => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="hover:text-brand-accent transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-white/40 mb-6">Sectors</h4>
              <ul className="flex flex-col gap-4 text-white/60">
                {["Agencies", "SaaS & Tech", "Healthcare", "Retail", "Media"].map(item => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <div className="flex items-center gap-8">
            <motion.a
              href="/"
              className="text-xl font-extrabold font-display tracking-tighter"
            >
              LUMINA
            </motion.a>
            <p className="text-sm text-white/40">© 2026 Lumina Creative. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            {[Linkedin, Instagram, Twitter, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center hover:bg-brand-accent-light transition-colors ml-4"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
