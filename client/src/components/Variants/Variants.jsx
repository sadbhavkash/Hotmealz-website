import { motion } from "framer-motion";
import { LuCheck, LuSprout } from "react-icons/lu";

import paneer from "../../assets/paneer.png";
import butterChicken from "../../assets/butter-chicken.png";

const variants = [
  {
    name: "Paneer Tikka Masala Rice Meal",
    image: paneer,
    bg: "bg-gradient-to-br from-[#5a1414] to-[#3a0b0b]",
    contents: ["Steamed Rice", "Paneer Tikka Masala Gravy", "High Protein Vegetarian Meal"],
    highlights: ["Rich Indian Flavour", "Vegetarian", "Balanced Nutrition", "Convenient Meal Solution"],
  },
  {
    name: "Butter Chicken Rice Meal",
    image: butterChicken,
    bg: "bg-gradient-to-br from-brand to-[#b8430a]",
    contents: ["Steamed Rice", "Butter Chicken Gravy", "High Protein Chicken Meal"],
    highlights: ["Premium Chicken Protein", "Authentic Indian Taste", "Rich Butter Chicken Gravy", "Convenient Meal Solution"],
  },
];

function Tag({ children }) {
  return (
    <span className="inline-block bg-gold text-ink font-display text-xl tracking-wide px-4 py-1 rounded-sm">
      {children}
    </span>
  );
}

export default function Variants() {
  return (
    <section id="products" className="bg-transparent pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-10">
          <span className="h-px flex-1 bg-brand/60" />
          <h2 className="font-display text-5xl">AVAILABLE VARIANTS</h2>
          <span className="h-px flex-1 bg-brand/60" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {variants.map((v, i) => (
            <motion.article
              key={v.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`${v.bg} text-white rounded-3xl p-6 sm:p-8 grid sm:grid-cols-2 gap-6 items-center overflow-hidden`}
            >
              <img
                src={v.image}
                alt={v.name}
                className="w-full max-w-xs mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />

              <div className="relative">
                <h3 className="font-display text-4xl leading-tight mb-4">{v.name}</h3>

                <div className="absolute top-0 right-0 w-20 h-20 rounded-full border-2 border-gold bg-black/40 flex flex-col items-center justify-center text-gold text-center leading-none">
                  <LuSprout size={16} />
                  <span className="font-display text-lg mt-1">HIGH</span>
                  <span className="text-[10px] font-bold">PROTEIN</span>
                </div>

                <Tag>CONTENTS</Tag>
                <ul className="mt-3 mb-5 space-y-1.5 text-sm">
                  {v.contents.map((c) => (
                    <li key={c}>• {c}</li>
                  ))}
                </ul>

                <Tag>HIGHLIGHTS</Tag>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {v.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <LuCheck className="text-gold shrink-0" size={16} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}