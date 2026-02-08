import { Wind, Shield, Sparkles, AlertTriangle, Zap, Activity, Filter, Thermometer, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Thermometer,
    title: "Thermal Fogging",
    description: "Neutralizing odors in Nashville cottage insulation and drywall. We use super-heated deodorizers that go exactly where the smoke went.",
    link: "#smoke-odor-info"
  },
  {
    icon: Sparkles,
    title: "Hydroxyl Neutralization",
    description: "Molecular air scrubbing that's safe for occupancy. Ideal for Nashville music studios and homes with sensitive electronics.",
    link: "#smoke-odor-info"
  },
  {
    icon: Wind,
    title: "Cigarette Odor Removal",
    description: "Deep nicotine extraction from walls and ceilings. We eliminate years of yellowing and stale scents with industrial-grade solvents.",
    link: "#smoke-odor-info"
  },
  {
    icon: Activity,
    title: "HVAC System Fogging",
    description: "Preventing odor re-circulation. We treat your Nashville home's entire duct network to stop stale scents every time the AC kicks in.",
    link: "#smoke-odor-info"
  },
  {
    icon: Shield,
    title: "Ozone Shock Treatment",
    description: "Unmatched power for severe fire damage. We use high-output ozone generators to shatter carbon molecules in unoccupied spaces.",
    link: "#smoke-odor-info"
  },
  {
    icon: Filter,
    title: "HEPA Air Scrubbing",
    description: "Removing the soot you can't see. We pull 99.9% of Nashville's airborne indoor contaminants into medical-grade filtration units.",
    link: "#smoke-odor-info"
  },
  {
    icon: AlertTriangle,
    title: "Emergency Fire Deodorization",
    description: "Rapid response after Nashville kitchen fires or furnace puffs. We stop the scent before it permanently sets into your furniture.",
    link: "#smoke-odor-info"
  },
  {
    icon: ShieldCheck,
    title: "Final Scent Certification",
    description: "Nashville's only certified zero-odor guarantee. We verify our results with professional IAQ sensors before we leave the site.",
    link: "#smoke-odor-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Nashville's Molecular Scent Restoration
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't just mask odors with sprays. Our Nashville team uses industrial physics to dismantle smoke molecules, leaving your air pure and your property healthy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <a href={service.link}>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;


