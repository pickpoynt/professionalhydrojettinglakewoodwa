import { Wrench, Droplet, Hammer, Shield, Clock, MapPin, Construction, Locate, Search, HardHat, Waves } from "lucide-react";

const ArtesiaSlabLeakInfo = () => {
    return (
        <section id="slab-leak-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Construction className="w-4 h-4" />
                            <span>Eddy County Foundation Specialist Authorities</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Concrete slab water leak repair <span className="text-indigo-600">Artesia NM</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Protecting High Plains foundations from sub-slab water intrusion. Our Artesia-based team specializes in pinpointing and repairing slab leaks beneath concrete foundations with industrial-grade precision.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Left Column - Repair Excellence */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <Waves className="w-7 h-7 text-indigo-600" />
                                    Advanced Leak Suppression
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Locate className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Acoustic Leak Correlation</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We use ultra-sensitive acoustic sensors to listen through the concrete slab of your Artesia home, identifying the exact frequency of escaping water without drilling "test holes."
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Shield className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Direct Access Slab Repair</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Once located, we perform surgical repairs through the slab with minimal disruption to your flooring, utilizing rapid-set structural concrete to restore foundation integrity.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Search className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Thermal Moisture Mapping</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Infrared thermography allows us to see hot spots from leaking hot water lines under your slab, providing a visual confirmation of the leak location before work begins.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Local Service */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <MapPin className="w-7 h-7 text-indigo-600" />
                                    Artesia & Eddy County Service
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    We understand the unique challenges of Southeast New Mexico's soil, providing expert service throughout Artesia and surrounding communities:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Downtown Artesia",
                                        "Eagle Draw",
                                        "Atoka",
                                        "Lake Arthur",
                                        "Espuela",
                                        "Pecos Diamond Area",
                                        "Eddy County Rural",
                                        "Permian Basin"
                                    ].map((area, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{area}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                                    <h4 className="font-bold text-indigo-900 mb-2 uppercase text-xs tracking-widest">Local Insight</h4>
                                    <p className="text-indigo-800/80 text-sm leading-relaxed italic">
                                        "The gypsum-heavy soil in the Artesia area can cause foundation shifts that stress copper piping. Our sub-slab solutions are designed specifically for the Permian Basin environment."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action Box */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight flex items-center gap-3">
                                    Artesia Slab Experts
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic">
                                    Noticing warm spots on your floor or an unexplained spike in your water bill? Don't let a slab leak undermine your foundation. Call the Artesia specialists.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Industrial Grade</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Non-Invasive</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Artesia Owned</div>
                                </div>
                            </div>
                            <div className="bg-indigo-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform">
                                <p className="text-indigo-100 text-sm font-bold uppercase tracking-widest mb-2">Service Hotline</p>
                                <a href="tel:8777921410" className="text-4xl font-bold transition-colors block mb-4">
                                    (877) 792-1410
                                </a>
                                <p className="text-indigo-100 text-sm italic hover:text-white cursor-pointer">
                                    Emergency Leak Detection Available
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArtesiaSlabLeakInfo;
