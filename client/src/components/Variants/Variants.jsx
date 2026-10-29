import { motion } from "framer-motion";
import { LuCheck, LuSprout, LuSoup } from "react-icons/lu";
import paneer from "../../assets/paneer.png";
import butterChicken from "../../assets/butter-chicken.png";

// Fades the photo's edges so it melts into the card.
// Remove "feather" from the <img> if you switch to transparent cutouts.
const feather = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent, black 14%, black 86%, transparent), linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)",
  maskImage:
    "linear-gradient(to right, transparent, black 14%, black 86%, transparent), linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)",
  WebkitMaskComposite: "source-in",
  maskComposite: "intersect",
};

const variants = [
  {
    name: "Paneer Tikka Masala Rice Meal",
    image: paneer,
    bg: "bg-gradient-to-br from-[#6b1a1a] to-[#3a0b0b]",
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
    <div className="flex items-center gap-3">
      <span className="inline-block bg-gold text-ink font-display text-lg sm:text-xl tracking-wide px-3 py-0.5 rounded-sm">
        {children}
      </span>
      <span className="h-px flex-1 bg-gold/40" />
    </div>
  );
}

function ProteinBadge() {
  return (
    <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-gold bg-black/30 flex flex-col items-center justify-center text-gold leading-none">
      <LuSprout size={18} />
      <span className="font-display text-xl sm:text-2xl mt-1">HIGH</span>
      <span className="text-[9px] sm:text-[10px] font-bold tracking-wider">PROTEIN</span>
    </div>
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

        <div className="grid xl:grid-cols-2 gap-8">
          {variants.map((v, i) => (
            <motion.article
              key={v.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`${v.bg} text-white rounded-3xl p-6 sm:p-8 grid sm:grid-cols-[1fr_1.25fr] gap-6 items-center overflow-hidden`}
            >
              {/* Product image */}
              <div className="relative">
                <div className="absolute inset-0 m-auto w-4/5 aspect-square rounded-full bg-white/10 blur-3xl" />
                <img
                  src={v.image}
                  alt={v.name}
                  style={feather}
                  className="relative w-full max-w-sm mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Details */}
              <div>
                <h3 className="font-display text-3xl sm:text-4xl leading-tight mb-5">
                  {v.name}
                </h3>

                <Tag>CONTENTS</Tag>
                <div className="flex items-center gap-4 mt-3 mb-5">
                  <ul className="flex-1 space-y-2 text-sm">
                    {v.contents.map((c) => (
                      <li key={c} className="flex items-center gap-2">
                        <LuSoup className="text-gold shrink-0" size={16} />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <ProteinBadge />
                </div>

                <Tag>HIGHLIGHTS</Tag>
                <ul className="mt-3 space-y-2 text-sm">
                  {v.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full border border-gold flex items-center justify-center shrink-0">
                        <LuCheck className="text-gold" size={12} />
                      </span>
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