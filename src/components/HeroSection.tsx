import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero.png";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center px-12 bg-hero"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="px-4 text-center w-1/2">
        <div className="w-full flex flex-col text-left justify-start items-start">
          <h1 className="text-5xl md:text-[8rem] lg:text-[8rem] 2xl:text-[10rem] font-bold text-hero-foreground mb-6 leading-tight">
            TRAIN MET VERTROUWEN
          </h1>
      
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="blue" 
            size="xl"
            className="backdrop-blur-sm px-8 py-3 text-lg font-semibold"
          >
            JOIN NOW
          </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;