import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [blueOpacity, setBlueOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxDistance = 200; // px to reach full blue
      const progress = Math.min(Math.max(window.scrollY / maxDistance, 0), 1);
      setBlueOpacity(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="mx-12 px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-4xl font-semibold text-hero-foreground">
              ACTIVE
              <span className="relative inline-block align-baseline">
                <span className="text-hero-foreground">COLOR</span>
                <span
                  aria-hidden
                  className="absolute inset-0 text-brand-blue"
                  style={{ opacity: blueOpacity, transition: "opacity 100ms linear" }}
                >
                  COLOR
                </span>
              </span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-hero-foreground hover:text-brand-blue transition-colors">
              Over ActiveColor
            </a>
            <a href="#" className="text-hero-foreground hover:text-brand-blue transition-colors">
              Instructies
            </a>
            <a href="#" className="text-hero-foreground hover:text-brand-blue transition-colors">
              Product
            </a>
            <a href="#" className="text-hero-foreground hover:text-brand-blue transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;