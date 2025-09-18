import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import product1 from "@/assets/3.png";
import product2 from "@/assets/4.png";
import product3 from "@/assets/5.png";
import product4 from "@/assets/6.png";

const ProductSection = () => {
  const productImages = [product1, product2, product3, product4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <section className="py-20">
      <div className="px-24">
        <div className="grid grid-cols-1 lg:grid-cols-7 items-center gap-12 px-4">
          {/* Links: Product info en prijs */}
          <div className="lg:col-span-2 space-y-8">
            {/* Product info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-hero-foreground mb-2">
                  ACTIVECOLOR
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-cyan mb-4">
                  SPORTTAPE
                </h3>
              </div>

              <div className="space-y-4">
                <p className="text-hero-foreground/90 text-lg leading-relaxed">
                  Maximale ondersteuning voor elke sport. Onze premium sporttape
                  biedt langdurige stabiliteit en inzicht tijdens intensieve training. En warming up.
                </p>

                <div className="grid grid-cols-1 gap-3">
                
                
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
                    <span className="text-hero-foreground/80">Geschikt voor warming-up, herstel en revalidatie</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
                    <span className="text-hero-foreground/80">Eenvoudig zelf aan te brengen</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
                    <span className="text-hero-foreground/80">Huidvriendelijk materiaal (hypoallergeen, ademend, elastisch)</span>
                  </div>
                </div>
              </div>

          
            </div>

            {/* Voordelen sectie */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-hero-foreground">
                VOORDELEN VOOR DE GEBRUIKER
              </h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-hero-foreground/80">Geeft zekerheid tijdens warming-up</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-hero-foreground/80">Ondersteunt veilig en effectief herstel</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-hero-foreground/80">Vermindert kans op blessures</span>
                </div>
              
              </div>
            </div>

            <div className="space-y-6">
              <div>
                
                <div className="text-5xl md:text-6xl pt-6 font-bold text-brand-cyan mb-2">€ 7,99</div>
                <p className="text-hero-foreground/70 text-lg">Inclusief btw</p>
              </div>

              <Button
                className="w-full bg-gradient-brand hover:opacity-90 text-white py-4 text-lg font-semibold shadow-glow"
                size="lg"
              >
                In winkelwagen
              </Button>

              <div className="pt-2">
                <div className="text-hero-foreground/70 text-sm uppercase tracking-wider font-semibold">
                  TRAIN SLIMMER • VOORKOM BLESSURES
                </div>
              </div>
            </div>
          </div>

          {/* Midden: Product foto slider */}
          <div className="lg:col-span-3 flex justify-center relative">
            <div className="relative max-w-6xl mx-auto">
              <img
                src={productImages[currentImageIndex]}
                alt={`ActiveColor Sporttape foto ${currentImageIndex + 1}`}
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>

            {/* Navigation buttons - fixed position relative to container */}
            <button
              onClick={prevImage}
              className="absolute left-0 top-[250px] -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-105"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-0 top-[250px] -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-105"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentImageIndex
                      ? "bg-brand-cyan shadow-lg"
                      : "bg-white/60 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Rechts: Extra info */}
          <div className="lg:col-span-2 space-y-4 flex flex-col h-full">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-hero-foreground mb-3">
                DOORBLOEDING INDICATOR
              </h3>
              <p className="text-hero-foreground/80 text-base mb-2">
                Reageert op de warmte van je doorbloeding
              </p>
              <p className="text-hero-foreground/60 text-sm">
                Hoe beter je spieren doorbloed zijn, hoe warmer ze worden en hoe meer de tape van kleur verandert
              </p>
            </div>

            {/* Doorbloeding visualisatie */}
            <div className="flex-1 flex items-center justify-center px-20">
              <div className="relative h-full flex items-center">
                {/* Centrale kleurstaaf */}
                <div className="w-8 h-full bg-gradient-to-b from-blue-600 via-green-700 to-orange-600 rounded-full shadow-lg"></div>

                {/* Rechts: Labels */}
                <div className="absolute left-12 top-0 h-full flex flex-col justify-between py-2">
                  <div className="text-left whitespace-nowrap">
                    <span className="text-hero-foreground/70 font-semibold text-xs">SLECHTE</span>
                    <span className="text-hero-foreground/70 font-semibold text-xs block">DOORBLOEDING</span>
                  </div>
                  <div className="text-left whitespace-nowrap">
                    <span className="text-hero-foreground/70 font-semibold text-xs">GOEDE</span>
                    <span className="text-hero-foreground/70 font-semibold text-xs block">DOORBLOEDING</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;