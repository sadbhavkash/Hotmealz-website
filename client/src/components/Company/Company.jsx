import { motion } from "framer-motion";
import {
  LuGlobe,
  LuSoup,
  LuDumbbell,
  LuUtensils,
  LuTruck,
  LuFlaskConical,
  LuCheck,
  LuBuilding2,
  LuMapPin,
  LuBriefcase,
  LuTag,
  LuMail,
  LuPhone,
} from "react-icons/lu";

const focusAreas = [
  { icon: LuGlobe, label: "Global Food Innovation" },
  { icon: LuSoup, label: "Self-Heating Meal Technologies" },
  { icon: LuDumbbell, label: "High Protein Nutrition Solutions" },
  { icon: LuUtensils, label: "Ready-to-Eat Convenience Foods" },
  { icon: LuTruck, label: "Export & International Distribution" },
  { icon: LuFlaskConical, label: "Food Research & Product Development" },
];

const whyPartner = [
  "Innovative Self-Heating Technology",
  "Premium Quality Standards",
  "Export-Focused Product Development",
  "Consumer-Centric Innovation",
  "Scalable Manufacturing Solutions",
  "Global Market Vision",
];

const corporate = [
  { icon: LuBuilding2, label: "Company Name", value: "SOHAM INDUSTRIES GLOBAL" },
  { icon: LuMapPin, label: "Headquarters", value: "Pune, Maharashtra, India" },
  {
    icon: LuBriefcase,
    label: "Business Focus",
    value: "Self-Heating Protein Meals & Ready-to-Eat Food Solutions",
  },
  { icon: LuTag, label: "Brand", value: "HOTTMEALZZ" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay },
});

export default function Company() {
  return (
    <section id="company" className="bg-transparent pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-display text-5xl">ABOUT THE COMPANY</h2>
          <span className="h-px flex-1 bg-brand/60" />
        </div>

        {/* Intro */}
        <motion.div {...fadeUp()} className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-950 to-indigo-600 flex items-center justify-center text-white font-display text-4xl">
                S
              </div>
              <p className="font-serif text-3xl leading-tight">
                SOHAM INDUSTRIES
                <br />
                GLOBAL
              </p>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl">
              <span className="text-brand">INNOVATING THE FUTURE OF</span>{" "}
              CONVENIENT NUTRITION
            </h3>

            <p className="text-gray-700 leading-relaxed mt-4">
              Soham Industries Global is an India-based food innovation company
              focused on developing premium ready-to-eat and self-heating meal
              solutions for consumers worldwide.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              We are committed to delivering convenient, nutritious, and
              high-quality food products that meet the evolving needs of modern
              lifestyles. Our mission is to make hot meals accessible anytime,
              anywhere through innovative food technology and premium product
              development.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-ink to-[#2a2a2a] min-h-[260px] flex items-center justify-center p-8">
            <div className="text-center">
              <p className="font-display text-gold text-2xl tracking-widest">
                GLOBAL VISION
              </p>
              <LuGlobe className="text-gold mx-auto my-3" size={80} strokeWidth={1.2} />
              <p className="font-display text-gold text-2xl tracking-widest">
                QUALITY & TRUST
              </p>
            </div>
          </div>
        </motion.div>

        {/* 4 cards */}
        <div className="grid lg:grid-cols-4 gap-6 mt-12">
          {/* Focus areas */}
          <motion.div {...fadeUp()} className="rounded-2xl border border-black/5 bg-white overflow-hidden">
            <div className="bg-brand text-white text-center font-display text-2xl py-3">
              OUR FOCUS AREAS
            </div>
            <ul className="p-5 space-y-4">
              {focusAreas.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm">
                  <Icon className="text-brand shrink-0" size={22} />
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Why partner */}
          <motion.div {...fadeUp(0.1)} className="rounded-2xl border border-black/5 bg-white overflow-hidden">
            <div className="bg-ink text-white text-center font-display text-2xl py-3">
              WHY PARTNER WITH US
            </div>
            <ul className="p-5 space-y-4">
              {whyPartner.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm">
                  <span className="shrink-0 w-6 h-6 rounded-full border-2 border-brand flex items-center justify-center">
                    <LuCheck className="text-brand" size={13} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Corporate info */}
          <motion.div {...fadeUp(0.2)} className="rounded-2xl border border-black/5 bg-white p-5">
            <h3 className="font-display text-2xl border-b border-brand pb-2 mb-4">
              CORPORATE INFORMATION
            </h3>
            <ul className="space-y-4">
              {corporate.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex gap-3">
                  <Icon className="text-brand shrink-0 mt-0.5" size={22} />
                  <div>
                    <p className="text-brand text-sm font-semibold">{label}:</p>
                    <p className="text-sm font-semibold">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            id="contact"
            {...fadeUp(0.3)}
            className="rounded-2xl bg-ink text-white p-5 scroll-mt-24"
          >
            <h3 className="font-display text-2xl border-b border-brand pb-2 mb-4">
              CONTACT US
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <LuMapPin className="text-brand shrink-0 mt-0.5" size={22} />
                <span>Pune, Maharashtra, India</span>
              </li>
              <li className="flex gap-3">
                <LuMail className="text-brand shrink-0 mt-0.5" size={22} />
                <a href="mailto:sohamindustries.office@gmail.com" className="break-all hover:text-gold">
                  sohamindustries.office@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <LuPhone className="text-brand shrink-0 mt-0.5" size={22} />
                <a href="tel:+919545871794" className="hover:text-gold">
                  +91 95458 71794
                </a>
              </li>
              <li className="flex gap-3">
                <LuGlobe className="text-brand shrink-0 mt-0.5" size={22} />
                <span>Global Food Innovation & Export Solutions</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}