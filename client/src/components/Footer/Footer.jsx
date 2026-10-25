import { LuZap, LuPlug, LuMapPin, LuShieldCheck, LuCalendarDays, LuDumbbell } from "react-icons/lu";

const badges = [
  { icon: LuZap, label: "No Microwave Required" },
  { icon: LuPlug, label: "No Electricity Required" },
  { icon: LuMapPin, label: "Ready Anywhere" },
  { icon: LuShieldCheck, label: "Safe Self-Heating Technology" },
  { icon: LuCalendarDays, label: "Shelf Life: 12 Months" },
  { icon: LuDumbbell, label: "High Protein Nutrition" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-[1fr_2fr] gap-8 items-center">
        <div>
          <p className="font-display text-6xl text-brand leading-none">HOTTMEALZZ</p>
          <p className="font-display text-2xl mt-1">SELF-HEATING PROTEIN MEALS</p>
          <p className="font-display text-2xl text-brand tracking-wide">
            TWIST • WAIT • ENJOY
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2">
              <Icon className="text-gold" size={34} strokeWidth={1.5} />
              <p className="text-[11px] font-bold uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 text-center text-xs text-white/70 py-4 px-6">
        ⚠ Heating time may vary slightly depending on ambient conditions. Follow
        instructions provided on pack.{" "}
        <span className="text-brand">Product may become hot during activation.</span>
        <p className="mt-2">© {new Date().getFullYear()} Soham Industries Global. All rights reserved.</p>
      </div>
    </footer>
  );
}