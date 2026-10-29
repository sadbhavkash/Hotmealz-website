import { motion } from "framer-motion";
import lifestyle from "../../assets/banner_img.png";
import {
  LuTimer,
  LuZap,
  LuDumbbell,
  LuBackpack,
  LuShieldCheck,
  LuSoup,
} from "react-icons/lu";
import bottle from "../../assets/hotmealz.png";

const features = [
  { icon: LuTimer, label: "Ready in 8 minutes" },
  { icon: LuZap, label: "No microwave required" },
  { icon: LuDumbbell, label: "High protein nutrition" },
  { icon: LuBackpack, label: "Portable & convenient" },
  { icon: LuShieldCheck, label: "Shelf life: 12 months" },
  { icon: LuSoup, label: "Ready-to-eat anywhere" },
];

export default function Section1() {
  return (
    <section id="home" className="pt-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-display text-7xl sm:text-8xl lg:text-9xl leading-none text-brand">
            HOTTMEALZZ
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2">
            Self-Heating Protein Meals
          </h2>

          <div className="flex items-center gap-4 my-6 max-w-md">
            <span className="h-px flex-1 bg-brand/60" />
            <span className="text-brand text-xl">♨</span>
            <span className="h-px flex-1 bg-brand/60" />
          </div>

          <p className="text-3xl sm:text-4xl font-bold">
            <span className="text-brand">Hot Meals.</span> Anytime.{" "}
            <span className="text-brand">Anywhere.</span>
          </p>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="relative flex justify-center"
>
  {/* warm glow behind the product */}
  <div className="absolute inset-0 m-auto w-[85%] aspect-square rounded-full bg-gradient-to-br from-brand/40 via-gold/30 to-transparent blur-3xl" />

  <motion.img
    src={bottle}
    alt="HOTTMEALZZ self-heating meal"
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    className="relative w-full max-w-xl rounded-3xl"
    style={{
      WebkitMaskImage:
        "linear-gradient(to right, transparent, black 10%, black 90%, transparent), linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
      maskImage:
        "linear-gradient(to right, transparent, black 10%, black 90%, transparent), linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
      WebkitMaskComposite: "source-in",
      maskComposite: "intersect",
    }}
  />
</motion.div>
      </div>

                  <div className="mt-12 flex w-full font-display text-3xl sm:text-5xl lg:text-6xl">
        <div className="flex-1 flex items-center justify-center whitespace-nowrap bg-brand text-white px-4 sm:px-8 py-4 sm:py-6 [clip-path:polygon(0_0,100%_0,94%_100%,0_100%)]">
          JUST TWIST.
        </div>
        <div className="flex-1 flex items-center justify-center whitespace-nowrap bg-ink text-white px-4 sm:px-8 py-4 sm:py-6 -ml-[3%] [clip-path:polygon(6%_0,100%_0,94%_100%,0_100%)]">
          WAIT.
        </div>
        <div className="flex-1 flex items-center justify-center whitespace-nowrap bg-gold text-ink px-4 sm:px-8 py-4 sm:py-6 -ml-[3%] [clip-path:polygon(6%_0,100%_0,100%_100%,0_100%)]">
          ENJOY.
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="overflow-x-auto"
      >
        <img
          src={lifestyle}
          alt="Perfect for travelers, office professionals, students, campers, truck drivers and fitness enthusiasts"
          className="block w-full min-w-[900px]"
        />
      </motion.div>
    </section>
  );
}