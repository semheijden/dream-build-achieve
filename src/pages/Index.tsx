import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SportsSection from "@/components/SportsSection";
import ProductSection from "@/components/ProductSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import backgroundGradient from "@/assets/background-gradient.svg"

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="relative z-50">
        <Navigation />
        <HeroSection />
      </div>      
      <div className="relative overflow-hidden bg-[#101A23]"> 
        <img
          src={backgroundGradient}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 top-0 w-full h-full object-cover z-0 origin-center rotate-[80deg] scale-125"
        />
        <div className="relative z-10">
          <SportsSection />
          <ProductSection />
          <TestimonialsSection />
        </div>
      </div>
      
      <div className="relative z-50">
        <Footer />
      </div>
    </div>
  );
};

export default Index;