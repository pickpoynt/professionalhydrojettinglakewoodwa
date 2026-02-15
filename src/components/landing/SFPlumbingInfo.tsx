import { Wrench, Shield, CheckCircle2, Building2 } from "lucide-react";

const sfFactors = [
    {
        icon: Building2,
        title: "Historic SF Core Expertise",
        description: "San Francisco's aging infrastructure requires specialists. We handle Victorian and Edwardian era plumbing including knob-and-tube adjacent systems and galvanized pipe restoration."
    },
    {
        icon: Wrench,
        title: "Seismic-Ready Plumbing",
        description: "We install earthquake shut-off valves and flexible gas lines to ensure your home's plumbing and gas systems are resilient against Bay Area seismic activity."
    },
    {
        icon: Shield,
        title: "Multi-Unit Building Pros",
        description: "From Pacific Heights estates to Mission District multi-unit apartments, we understand the complexities of shared stacks and high-density residential plumbing."
    },
    {
        icon: CheckCircle2,
        title: "Bay Area Compliance",
        description: "We work directly with SFDBI officials to ensure every repair meets the strict San Francisco plumbing and building codes."
    }
];

const plumbingBenefits = [
    {
        title: "Master SF Technicians",
        description: "Our plumbers are local experts who understand the unique geography and architectural challenges of San Francisco hill-side plumbing."
    },
    {
        title: "Dust-Free Operations",
        description: "Historic homes deserve respect. We prioritize clean work environments with HEPA air filtration and comprehensive surface protection."
    },
    {
        title: "Transparent Pricing",
        description: "No hidden surcharges for hill-routes or parking. You receive a clear pricing assessment before any work begins."
    },
    {
        title: "24/7 Rapid Dispatch",
        description: "When a pipe bursts in the Fog City, every second counts. Our technicians are strategically stationed for the fastest response times."
    }
];

const SFPlumbingInfo = () => {
    return (
        <section id="sf-plumbing" className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80')] opacity-5 mix-blend-overlay bg-cover bg-center"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold mb-4 backdrop-blur-sm uppercase tracking-widest">
                        San Francisco Local Experts
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 italic">
                        Precision Plumbing for the City by the Bay
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        San Francisco's unique vertical geography and historic building stock require more than just basic plumbing.
                        We specialize in the high-pressure systems and vintage piping common in the Bay Area's iconic neighborhoods.
                    </p>
                </div>

                {/* Factors Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {sfFactors.map((factor, index) => {
                        const IconComponent = factor.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-indigo-400/30 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent className="w-7 h-7 text-indigo-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{factor.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{factor.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Benefits Section */}
                <div className="bg-slate-950/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-indigo-300">
                                Serving the Seven Hills & Beyond
                            </h3>
                            <p className="text-slate-300 mb-8 text-lg">
                                From the Outer Sunset to Nob Hill, we've spent years masterfully navigating SF's terrain to provide
                                industry-leading residential plumbing services. Our commitment is to the longevity and safety of your home's infrastructure.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {plumbingBenefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">{benefit.title}</h4>
                                            <p className="text-slate-400 text-xs mt-1">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80"
                                alt="San Francisco Plumbing Infrastructure"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-indigo-900/40 mix-blend-multiply"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <span className="text-white font-bold text-lg italic uppercase tracking-wider text-sm">Bay Area Master Craftsmanship</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Areas & Regional Links */}
                <div className="mt-20">
                    <h4 className="text-center text-slate-500 text-sm uppercase tracking-widest font-semibold mb-8">
                        Our Priority Service Zones
                    </h4>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Pacific Heights", "The Marina", "Nob Hill", "Russian Hill", "Seacliff", "St. Francis Wood", "Ashbury Heights", "Dallas Plumbing", "San Antonio Plumbing"].map((area) => {
                            let link = "#contact";
                            if (area === "Dallas Plumbing") link = "https://dallasplumber.vercel.app";
                            if (area === "San Antonio Plumbing") link = "https://sanantonioplumbing.vercel.app";

                            return (
                                <a
                                    key={area}
                                    href={link}
                                    className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all font-bold text-xs uppercase tracking-widest hover:border-indigo-500/50"
                                >
                                    {area}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SFPlumbingInfo;
