import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Variants from "./components/Variants/Variants";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Company from "./components/Company/Company";
import Footer from "./components/Footer/Footer";
import UnlockGate from "./components/UnlockGate/UnlockGate";

const SCROLL_TRIGGER = 800; // px scrolled before the gate appears

export default function App() {
  const [unlocked, setUnlocked] = useState(
    () => localStorage.getItem("hm_unlocked") === "1"
  );
  const [gateOpen, setGateOpen] = useState(false);

  useEffect(() => {
    if (unlocked || gateOpen) return;

    const open = () => setGateOpen(true);

    const onScroll = () => {
      if (window.scrollY > SCROLL_TRIGGER) open();
    };

    const onClick = (e) => {
      e.preventDefault(); // stop the link or button from doing its normal action
      e.stopPropagation();
      open();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick, true);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick, true);
    };
  }, [unlocked, gateOpen]);

  const showGate = gateOpen && !unlocked;

  return (
    <>
      <div
        className={`transition duration-500 ${
          showGate ? "blur-md pointer-events-none select-none" : ""
        }`}
      >
        <Navbar />
        <Section1 />
        <Section2 />
        <Variants />
        <HowItWorks />
        <Company />
        <Footer />
      </div>

      {showGate && <UnlockGate onUnlock={() => setUnlocked(true)} />}
    </>
  );
}