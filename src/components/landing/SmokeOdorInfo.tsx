import { Wind, ShieldCheck, Zap, Thermometer, ShieldAlert, Sparkles, Filter, Music } from "lucide-react";

const infoData = [
    {
        icon: Thermometer,
        title: "Thermal Fogging Tech",
        description: "Nashville's humid climate can trap smoke particles deep in porous surfaces. Our thermal fogging mimics the behavior of smoke, penetrating deep into Tennessee hardwood to neutralize odors at the source.",
    },
    {
        icon: Music,
        title: "Music Venue Restoration",
        description: "From historic Broadway honky-tonks to private home studios, we specialize in removing years of cigarette and tobacco smoke without damaging sensitive acoustic treatments or instruments.",
    },
    {
        icon: Sparkles,
        title: "Hydroxyl Generation",
        description: "Safe for use around Nashville families and pets. Hydroxyl generators use UV light to create atmospheric cleaners that safely dismantle the molecular structure of smoke and char odor.",
    },
];

const benefitsData = [
    "Restores indoor air quality (IAQ)",
    "Neutralizes deep cigarette toxins",
    "Prevents 'ghost' odors in summer",
    "Increases Nashville property value",
    "Safe for antiques & instruments",
    "Certified eco-friendly chemistry",
];

const SmokeOdorInfo = () => {
    return (
        <section id="smoke-odor-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-4 text-center">
                        Nashville Air Quality Purists
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                        The Science of Nashville Scent Restoration
                    </h2>
                    <p className="text-slate-300 text-lg">
                        Smoke is not just a smell; it's a microscopic residue. In Nashville's varied architecture—from historic East Nashville cottages to modern Gulch condos—effective removal requires molecular intervention.
                    </p>
                </div>

                {/* Info Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {infoData.map((info, index) => (
                        <div
                            key={index}
                            className="bg-slate-900 rounded-xl p-8 shadow-lg border border-slate-800 hover:border-blue-500/30 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                                <info.icon className="w-7 h-7 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-white mb-3">
                                {info.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {info.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Two Column Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-slate-900 rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-800">
                        <div className="flex items-center gap-3 mb-6 font-center justify-center">
                            <Filter className="w-8 h-8 text-blue-400" />
                            <h3 className="text-2xl font-heading font-bold text-white">
                                HEPA-Air Scrubbing
                            </h3>
                        </div>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            We deploy industrial-grade HEPA 500 air scrubbers across the Nashville service area to pull 99.97% of airborne particles out of your living space during the deodorization process.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            This ensures that once we neutralize the physical surfaces of your Tennessee home, the air remains crisp, clean, and free of re-contaminating soot or tar particles.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-white mb-6">
                            Total Scent Neutralization
                        </h3>
                        <ul className="space-y-4">
                            {benefitsData.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                                        <Sparkles className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-blue-50 text-lg">
                                        {benefit}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-full px-8 py-4 border border-white/10">
                        <ShieldCheck className="w-6 h-6 text-blue-400" />
                        <span className="text-white font-medium text-lg">
                            Nashville's Clean Air Hotline: (380) 266-0944.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SmokeOdorInfo;
