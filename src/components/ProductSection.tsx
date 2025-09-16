import { Button } from "@/components/ui/button";
import productImage from "@/assets/product-package.jpg";

const ProductSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          
          {/* Product Info */}
          <div className="lg:w-1/2">
            <div className="bg-gradient-card rounded-2xl p-8 border border-brand-blue/30 shadow-card max-w-md mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-brand-cyan mb-2">
                  prijs
                </h3>
                <div className="text-6xl font-bold text-hero-foreground mb-2">
                  7,99
                </div>
                <p className="text-hero-foreground/70 text-lg">
                  Kost 7,99
                </p>
              </div>
              
              <Button 
                className="w-full bg-gradient-brand hover:opacity-90 text-white py-4 text-lg font-semibold shadow-glow"
                size="lg"
              >
                IN WINKELWAGEN
              </Button>
              
              <div className="mt-6 text-center">
                <p className="text-hero-foreground/80 text-sm">
                  <strong>ActiveColor Sporttape.</strong> Sterke ondersteuning. Waterbestendig.
                </p>
              </div>
            </div>
          </div>
          
          {/* Product Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src={productImage}
                alt="ActiveColor Sporttape package"
                className="w-full max-w-md mx-auto rounded-lg"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-brand-blue/20 to-brand-cyan/20 pointer-events-none" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProductSection;