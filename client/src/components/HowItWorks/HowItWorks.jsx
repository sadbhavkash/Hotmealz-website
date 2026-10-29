import { motion } from "framer-motion";
import twistImg from "../../assets/twist.png";
import waitImg from "../../assets/wait.png";
import enjoyImg from "../../assets/enjoy.png";
import {
  LuRotateCw,
  LuTimer,
  LuSoup,
  LuPlane,
  LuBriefcase,
  LuGraduationCap,
  LuTent,
  LuTruck,
  LuDumbbell,
  LuFactory,
  LuShieldPlus,
  LuClock,
  LuPlug,
  LuZap,
  LuBackpack,
  LuShieldCheck,
  LuThermometer,
  LuCookingPot,
} from "react-icons/lu";


// fades the image's left and top edges so it melts into the white card
const fadeLeftTop = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent, black 35%), linear-gradient(to bottom, transparent, black 30%)",
  maskImage:
    "linear-gradient(to right, transparent, black 35%), linear-gradient(to bottom, transparent, black 30%)",
  WebkitMaskComposite: "source-in",
  maskComposite: "intersect",
};

const steps = [
    {
    icon: LuRotateCw,
    title: "TWIST",
    sub: "THE BOTTOM",
    text: "Rotate the base of the container to activate the self-heating system.",
    image: twistImg,
  },
    {
    icon: LuTimer,
    title: "WAIT",
    sub: "8 MINUTES",
    text: "The self-heating technology automatically heats the meal to serving temperature.",
    image: waitImg,
  },
    {
    icon: LuSoup,
    title: "ENJOY",
    sub: "YOUR HOT MEAL",
    text: "Open the lid and enjoy a delicious hot protein meal anywhere.",
    image: enjoyImg,
  },
];

const perfectFor = [
  { icon: LuPlane, label: "Travelers" },
  { icon: LuBriefcase, label: "Office Professionals" },
  { icon: LuGraduationCap, label: "Students" },
  { icon: LuTent, label: "Campers & Trekkers" },
  { icon: LuTruck, label: "Truck Drivers" },
  { icon: LuDumbbell, label: "Fitness Enthusiasts" },
  { icon: LuFactory, label: "Industrial Workers" },
  { icon: LuShieldPlus, label: "Emergency Preparedness" },
];

const whyChoose = [
  { icon: LuClock, label: "Hot meal in just 8 minutes" },
  { icon: LuBackpack, label: "Portable & convenient" },
  { icon: LuPlug, label: "No electricity required" },
  { icon: LuDumbbell, label: "High protein nutrition" },
  { icon: LuZap, label: "No microwave required" },
  { icon: LuShieldCheck, label: "Long shelf life (12 months)" },
  { icon: LuCookingPot, label: "No cooking required" },
  { icon: LuThermometer, label: "Safe self-heating technology" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay },
});

export default function HowItWorks() {
  return (
    <section id="how" className="bg-transparent pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-10">
          <span className="h-px flex-1 bg-brand/60" />
          <h2 className="font-display text-5xl sm:text-6xl">
            HOW <span className="text-brand">HOTTMEALZZ</span> WORKS
          </h2>
          <span className="h-px flex-1 bg-brand/60" />
        </div>

        {/* 3 steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, sub, text, image }, i) => (
  <motion.div
    key={title}
    {...fadeUp(i * 0.15)}
    className="relative bg-white rounded-3xl border border-black/5 shadow-sm p-6 overflow-hidden min-h-[340px]"
  >
    <span className="w-12 h-12 rounded-full bg-brand text-white font-display text-3xl flex items-center justify-center">
      {i + 1}
    </span>
    <h3 className="font-display text-4xl text-brand mt-4 leading-none">
      {title}
    </h3>
    <p className="font-display text-3xl leading-none mt-1">{sub}</p>
    <div className="h-px w-10 bg-brand my-4" />
    <p className="relative z-10 text-gray-700 max-w-[55%]">{text}</p>

    {image ? (
      <img
        src={image}
        alt={`${title} ${sub}`}
        style={fadeLeftTop}
        className="absolute right-0 bottom-0 w-[56%] origin-bottom-right hover:scale-105 transition-transform duration-500"
      />
    ) : (
      <Icon
        className="absolute -right-4 -bottom-4 text-brand/10"
        size={150}
        strokeWidth={1.2}
      />
    )}
  </motion.div>
))}
        </div>

        {/* Perfect for + Why choose */}
        <div className="grid lg:grid-cols-2 gap-6 mt-10">
          <motion.div {...fadeUp()} className="rounded-2xl overflow-hidden border border-black/5 bg-white">
            <div className="bg-brand text-white text-center font-display text-3xl py-3">
              PERFECT FOR
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 p-6">
              {perfectFor.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center gap-2">
                  <Icon className="text-brand" size={40} strokeWidth={1.6} />
                  <p className="text-xs font-bold uppercase tracking-wide">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="rounded-2xl overflow-hidden border border-black/5 bg-white">
            <div className="bg-ink text-white text-center font-display text-3xl py-3">
              WHY CHOOSE <span className="text-brand">HOTTMEALZZ?</span>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4 p-6">
              {whyChoose.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 border-b border-dashed border-black/10 pb-3">
                  <span className="shrink-0 w-10 h-10 rounded-full border-2 border-brand flex items-center justify-center">
                    <Icon className="text-brand" size={18} />
                  </span>
                  <span className="text-sm">{label}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <p className="text-center text-sm text-gray-600 mt-8">
          ⚠ Heating time may vary slightly depending on ambient conditions. Follow
          instructions provided on pack.{" "}
          <span className="text-brand">Product may become hot during activation.</span>
        </p>
      </div>
    </section>
  );
}