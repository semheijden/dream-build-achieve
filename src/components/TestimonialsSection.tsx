import emilyImage from "@/assets/emily-degroot.jpg";

const testimonials = [
  {
    quote: "Ik zie direct wanneer ik warm ben om te trainen.",
    author: "Emily de Groot",
    role: "Atleet",
    image: emilyImage
  },
  {
    quote: "Het geeft me vertrouwen en stabiliteit bij elke beweging",
    author: "Emily de Groot", 
    role: "Atleet",
    image: emilyImage
  },
  {
    quote: "Onmisbaar tijdens mijn trainingen, en echte gamechanger!",
    author: "Emily de Groot",
    role: "Atleet", 
    image: emilyImage
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-brand-blue mb-4">
            Ervaringen
          </h2>
          <p className="text-3xl text-dark-card-foreground">
            Wat ervaren sporters zeggen
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-card rounded-2xl p-6 border border-brand-blue/20 hover:border-brand-blue/40 transition-colors duration-300"
            >
              <div className="mb-6">
                <p className="text-dark-card-foreground text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-blue/30"
                />
                <div>
                  <h4 className="text-dark-card-foreground font-semibold">
                    {testimonial.author}
                  </h4>
                  <p className="text-dark-card-foreground/70 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;