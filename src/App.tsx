/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-[40px] overflow-hidden group"
            >
              <img 
                src="https://picsum.photos/seed/studio/1920/1080" 
                alt="Studio" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-accent/20 mix-blend-multiply opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-24 h-24 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                >
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-brand-black border-b-[10px] border-b-transparent ml-1" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <Services />
        
        <Work />
        
        <Stats />

        {/* Ethos Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div>
                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-7xl font-bold mb-12"
                >
                  BRAND-LED. <br />
                  <span className="text-white/30">STRATEGICALLY BUILT.</span>
                </motion.h2>
                
                <div className="space-y-12">
                  {[
                    { num: "01", title: "Design with guts.", desc: "We build immersive, brand-led digital experiences that wow and work hard." },
                    { num: "02", title: "Nail the process.", desc: "We’re collaborative, decisive, and clear from day one. You’ll feel the momentum." },
                    { num: "03", title: "Build to flex.", desc: "We’re ready for your growth. We make sure your digital presence is set up to flex with you." }
                  ].map((item, i) => (
                    <motion.div
                      key={item.num}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-8"
                    >
                      <span className="text-brand-accent font-mono font-bold">{item.num} /</span>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-white/50 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, rotate: 5 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  className="aspect-[3/4] rounded-3xl overflow-hidden"
                >
                  <img 
                    src="https://picsum.photos/seed/ethos/800/1200" 
                    alt="Ethos" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-accent rounded-2xl -z-10 rotate-12" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-brand-accent overflow-hidden relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          </div>
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-6xl md:text-9xl font-extrabold text-white mb-12 tracking-tighter"
            >
              START YOUR <br /> PROJECT
            </motion.h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-white text-brand-accent rounded-full text-xl font-bold shadow-2xl hover:bg-brand-white transition-colors"
            >
              Get in touch
            </motion.button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
