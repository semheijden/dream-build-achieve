import voetbalImage from "@/assets/football.jpeg";
import hockeyImage from "@/assets/field-hockey-portrait.png";
import padelImage from "@/assets/padel-portrait.png";
import tennisImage from "@/assets/tennis-portrait.png";
import hardlopenImage from "@/assets/running-action.jpg";

const sportsData = [
  { name: "VOETBAL", image: voetbalImage },
  { name: "PADEL", image: padelImage },
  { name: "HOCKEY", image: hockeyImage },
  { name: "TENNIS", image: tennisImage },
  { name: "HARDLOPEN", image: hardlopenImage },
];

const SportsSection = () => {
  return (
    <section className="py-20 px-4 h-screen">
      <div className="mx-auto px-24 h-full">
        
        <div className="flex flex-col items-start">
          <span className="text-sm text-white/80 -mb-1">INSTRUCTIES</span>
          <h2 className="text-6xl font-bold text-hero-foreground flex-shrink-0">
            KIES JE SPORT
          </h2>
          </div>
          <div className="text-white/90 text-xl mb-4 leading-relaxed max-w-2xl pt-2">
            <p className="">
              Ontdek hoe ActiveColor jou kan helpen
            </p>
          </div>
        
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-1 rounded-sm h-[70%] align-bottom">
          {sportsData.map((sport, index) => (
            <div
              key={sport.name}
              className="group relative overflow-hidden h-full cursor-pointer rounded-lg"
            >
              <img
                src={sport.image}
                alt={sport.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-lg tracking-wider">
                  {sport.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsSection;