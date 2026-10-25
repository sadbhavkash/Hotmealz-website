import { motion } from "framer-motion";
import {
  LuCheck,
  LuTimer,
  LuMicrowave,
  LuDumbbell,
  LuBackpack,
  LuShieldCheck,
  LuSoup,
} from "react-icons/lu";

const features = [
  "Self-heating technology",
  "High protein meal",
  "No preservatives added",
  "Retort processed for food safety",
  "Long shelf life – 12 months",
  "Easy to carry and store",
  "Perfect for travel, work, outdoor activities, and emergencies",
];

const highlights = [
  { icon: LuTimer, label: "Ready in 8 minutes" },
  { icon: LuMicrowave, label: "No microwave required" },
  { icon: LuDumbbell, label: "High protein nutrition" },
  { icon: LuBackpack, label: "Portable & convenient" },
  { icon: LuShieldCheck, label: "Shelf life: 12 months" },
  { icon: LuSoup, label: "Ready-to-eat anywhere" },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 },
};

export default function Section2() {
  return (
    <section id="about" className="bg-transparent py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10 items-start">
        {/* About */}
        <motion.div {...fadeUp}>
          <p className="font-display text-4xl leading-none">ABOUT</p>
          <h2 className="font-display text-7xl text-brand leading-none">
            HOTTMEALZZ
          </h2>

          <div className="flex items-center gap-3 my-5 max-w-xs">
            <span className="h-px flex-1 bg-brand/60" />
            <span className="text-brand">♨</span>
            <span className="h-px flex-1 bg-brand/60" />
          </div>

          <p className="text-gray-700 leading-relaxed">
            HOTTMEALZZ is an innovative self-heating ready-to-eat meal designed
            for consumers who want a hot, nutritious meal anytime, anywhere
            without requiring electricity, gas, or a microwave.
          </p>
        </motion.div>

        {/* Product features */}
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
          <h3 className="font-display text-4xl border-b border-brand pb-2 mb-5">
            PRODUCT FEATURES
          </h3>
          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full border-2 border-brand flex items-center justify-center">
                  <LuCheck className="text-brand" size={14} />
                </span>
                <span className="text-gray-800">{f}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Dark highlights grid */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-ink rounded-3xl p-6 grid grid-cols-2 sm:grid-cols-3 gap-y-8"
        >
          {highlights.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-3 px-2"
            >
              <Icon className="text-gold" size={44} strokeWidth={1.5} />
              <p className="text-white text-xs font-bold uppercase tracking-wide">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}