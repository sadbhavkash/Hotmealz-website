import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuFlame, LuRotateCw } from "react-icons/lu";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

// [country, dial code]. Add more as needed.
const countries = [
  ["India", "+91"], ["United States", "+1"], ["United Kingdom", "+44"],
  ["United Arab Emirates", "+971"], ["Saudi Arabia", "+966"], ["Qatar", "+974"],
  ["Oman", "+968"], ["Kuwait", "+965"], ["Bahrain", "+973"], ["Singapore", "+65"],
  ["Malaysia", "+60"], ["Australia", "+61"], ["New Zealand", "+64"], ["Canada", "+1"],
  ["Germany", "+49"], ["France", "+33"], ["Italy", "+39"], ["Netherlands", "+31"],
  ["Japan", "+81"], ["South Korea", "+82"], ["Sri Lanka", "+94"], ["Nepal", "+977"],
  ["Bangladesh", "+880"], ["South Africa", "+27"], ["Kenya", "+254"], ["Nigeria", "+234"],
];
const dialCodes = [...new Set(countries.map((c) => c[1]))];

const teasers = [
  "What if a hot meal needed no fire?",
  "No microwave. No electricity. No cooking.",
  "Just one twist.",
  "Eight minutes later… steam.",
  "Ready to see how?",
];

export default function UnlockGate({ onUnlock }) {
  const [i, setI] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "India",
    dial: "+91",
    phone: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // rotate teaser lines
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % teasers.length), 2800);
    return () => clearInterval(t);
  }, []);

  // lock page scroll while gate is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onCountry = (e) => {
    const country = e.target.value;
    const dial = countries.find((c) => c[0] === country)?.[1] || form.dial;
    setForm({ ...form, country, dial });
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    const digits = form.phone.replace(/\D/g, "");
    if (form.name.trim().length < 2) return setError("Please enter your name.");
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return setError("Please enter a valid email.");
    if (digits.length < 6 || digits.length > 14) return setError("Please enter a valid phone number.");

    setLoading(true);
    try {
      const res = await fetch(`${API}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, phone: digits }),
      });
      if (!res.ok) throw new Error();
      localStorage.setItem("hm_unlocked", "1");
      onUnlock();
    } catch {
      setError("Couldn't unlock right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const input =
    "rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 backdrop-blur-sm p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg bg-cream rounded-3xl p-6 sm:p-8 shadow-2xl"
      >
        {/* Teaser */}
        <div className="text-center">
          <motion.div
            animate={{ y: [0, -6, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex w-14 h-14 rounded-full bg-brand/10 items-center justify-center mb-3"
          >
            <LuFlame className="text-brand" size={30} />
          </motion.div>

          <p className="font-display text-brand tracking-widest text-lg">
            SOMETHING HOT IS BEHIND THIS DOOR
          </p>

          <div className="h-20 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="font-display text-4xl sm:text-5xl leading-none"
              >
                {teasers[i]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <p className="text-sm text-gray-600 mt-1">
            Enter your details to unlock the full HOTTMEALZZ experience.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="mt-6 space-y-3">
        <input
  className={`${input} w-full`}
  placeholder="Full name"
  value={form.name}
  onChange={set("name")}
/>
<input
  className={`${input} w-full`}
  type="email"
  placeholder="Email address"
  value={form.email}
  onChange={set("email")}
/>

<select className={`${input} w-full`} value={form.country} onChange={onCountry}>
  {countries.map(([name]) => (
    <option key={name} value={name}>{name}</option>
  ))}
</select>

<div className="flex gap-2">
  <select
    className={`${input} w-28 shrink-0`}
    value={form.dial}
    onChange={set("dial")}
  >
    {dialCodes.map((d) => (
      <option key={d} value={d}>{d}</option>
    ))}
  </select>
  <input
    className={`${input} min-w-0 flex-1`}
    type="tel"
    inputMode="numeric"
    placeholder="Phone number"
    value={form.phone}
    onChange={set("phone")}
  />
</div>
          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="group w-full bg-brand hover:bg-brand-dark disabled:opacity-60 text-white font-display text-2xl tracking-wide py-3 rounded-xl flex items-center justify-center gap-3 transition-colors"
          >
            <LuRotateCw className="transition-transform duration-500 group-hover:rotate-180" />
            {loading ? "UNLOCKING..." : "TWIST TO UNLOCK"}
          </button>

          <p className="text-[11px] text-gray-500 text-center">
            We'll only use your details to share HOTTMEALZZ product and partnership updates.
          </p>
        </form>
      </motion.div>
    </div>
  );
}