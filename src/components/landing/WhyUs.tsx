import { Shield, Microscope, MapPin, Building2, ClipboardCheck, Wind, Award, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Nashville's IAQ Leaders",
    description: "We are the leading specialists for molecular air purification in Nashville, serving Music City with surgical precision for over 15 years."
  },
  {
    icon: Microscope,
    title: "Molecular Scent Analysis",
    description: "Every Nashville project begins with a professional air quality assessment, identifying the exact chemical composition of the lingering odors."
  },
  {
    icon: Sparkles,
    title: "Eco-Friendly Chemistry",
    description: "We use botanical-based neutralizers and advanced physics (not heavy perfumes) to ensure your Nashville home is safe for immediate occupancy."
  },
  {
    icon: ClipboardCheck,
    title: "Certified & Local",
    description: "Our Nashville team is IICRC certified in odor control and smoke restoration, ensuring all work meets the highest national safety standards."
  },
  {
    icon: Shield,
    title: "Zero-Scent Guarantee",
    description: "We don't just reduce smells; we eliminate them. If the smoke odor returns within 30 days, we'll return to your Nashville property at zero cost."
  },
  {
    icon: MapPin,
    title: "Music City Heritage",
    description: "From the Ryman to East Nashville bungalows, we understand how to treat Tennessee's historic building materials without causing harm."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Nashville's Choice for Pure Air
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the restoration team that Nashville property owners trust. We specialize in turning a smoke-damaged environment into a fresh, healthy home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;




