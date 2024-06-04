import "./App.css";
import CTASection from "./components/CTAsection/CTASection";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import KeyProblemSolved from "./components/KeyProblemSection/KeyProblemSolved";
import ReviewSection from "./components/ReviewSection/ReviewSection";

function App() {
  return (
    <div>
      <HeroSection />
      <KeyProblemSolved />
      <ReviewSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
