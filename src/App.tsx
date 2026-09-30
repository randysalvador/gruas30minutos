import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import QuickServices from "./components/QuickServices";
import HowItWorks from "./components/HowItWorks";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import StickyBottomBar from "./components/StickyBottomBar";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      {/* pb-24 en móvil: deja espacio para la barra fija inferior */}
      <div className="pb-24 sm:pb-0">
        <main>
          <HeroSection />
          <QuickServices />
          <HowItWorks />
          <WhyUs />
        </main>
        <Footer />
      </div>
      <StickyBottomBar />
    </MotionConfig>
  );
}
