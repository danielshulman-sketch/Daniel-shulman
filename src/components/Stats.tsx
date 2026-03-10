import { motion } from "motion/react";

const stats = [
  { label: "Engaged sessions per user", value: "67.6%", context: "after 1 month" },
  { label: "Increase in engagement time", value: "70.8%", context: "after 3 months" },
  { label: "Increase in online sales", value: "83.1%", context: "after 1 year" },
  { label: "Organic traffic growth", value: "104.9%", context: "after 1 month" },
];

export default function Stats() {
  return (
    <section className="py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col"
            >
              <span className="text-6xl md:text-7xl font-extrabold font-display text-gradient mb-4">
                {stat.value}
              </span>
              <h4 className="text-lg font-bold mb-2">{stat.label}</h4>
              <p className="text-sm text-white/40 uppercase tracking-widest font-medium">{stat.context}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
