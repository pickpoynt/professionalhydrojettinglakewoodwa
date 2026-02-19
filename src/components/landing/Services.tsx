import { ArrowRight, Drill, Zap, Camera, Waves } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-indigo-600">Repiping Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Puyallup property owners trust us for master-grade whole-home repiping and precision system restoration. We provide specialized care for Pierce County.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Zap,
              title: "Copper Repiping",
              description: "We utilize premium L-type copper to restore your home's water distribution, ensuring maximum pressure and lifetime reliability in Puyallup.",
              link: "#contact"
            },
            {
              icon: Drill,
              title: "PEX-A Installation",
              description: "Specialized residential PEX-A restoration that provides a flexible, freeze-resistant alternative for modern Washington home plumbing.",
              link: "#contact"
            },
            {
              icon: Camera,
              title: "System Diagnostics",
              description: "Technical plumbing mapping designed to identify pipe degradation and structural compromises specifically in the Pacific Northwest area.",
              link: "#contact"
            },
            {
              icon: Waves,
              title: "Technical Mapping",
              description: "High-precision layout engineering to ensure your new repiping system is optimized for flow and efficiency throughout your property.",
              link: "#contact"
            }
          ].map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <a href={service.link}>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <service.icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
