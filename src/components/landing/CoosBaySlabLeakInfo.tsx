import { Wrench, Droplet, Hammer, Shield, Clock, MapPin, Construction, Locate, Search, HardHat } from "lucide-react";

const CoosBaySlabLeakInfo = () => {
    return (
        <section id="coos-bay-slab-leak-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590060411636-f78a73a9856f?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Construction className="w-4 h-4" />
                            <span>Coastal Oregon Foundation Authorities</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Specialized <span className="text-blue-600">Slab Water Line Leak Repair</span> in Coos Bay
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Protecting Pacific Northwest foundations from the specific moisture and coastal soil conditions of Coos County. Our expert team specializes in sub-slab water line restoration.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Left Column - Repair Excellence */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <Hammer className="w-7 h-7 text-blue-600" />
                                    Coos Bay Slab Solutions
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Locate className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Coastal Leak Detection</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We utilize advanced acoustic sensors and ultrasonic diagnostics to locate leaks in water lines buried deep within or under your Coos Bay concrete foundation.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Shield className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Foundation Line Restoration</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Our repair technical protocols are designed to address the corrosive nature of coastal groundwater, ensuring your sub-slab plumbing lasts for decades.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Search className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Electronic Pipe Mapping</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We provide precise mapping of your home's water distribution manifold to identify the exact source of pressure loss without broad foundation intrusion.
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
                                    <MapPin className="w-7 h-7 text-blue-600" />
                                    Coos County Service Areas
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Serving Coos Bay, North Bend, and the surrounding Oregon coast with specialized slab expertise:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Coos Bay Central",
                                        "North Bend",
                                        "Empire District",
                                        "Bayside",
                                        "Eastside",
                                        "Bunker Hill",
                                        "Charleston",
                                        "Coos County Coastal"
                                    ].map((area, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                                            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action Box */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight flex items-center gap-3">
                                    Coos Bay Slab Experts
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic">
                                    High water bill or moisture appearing in your lower level? Don't let slab leaks compromise your home's value. Call Coos Bay's slab specialists today.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">OR Licensed</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Coastal Experts</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Coos Bay Local</div>
                                </div>
                            </div>
                            <div className="bg-blue-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform">
                                <p className="text-blue-100 text-sm font-bold uppercase tracking-widest mb-2">24/7 Coastal Hotline</p>
                                <a href="tel:8777921410" className="text-4xl font-bold transition-colors block mb-4">
                                    (877) 792-1410
                                </a>
                                <p className="text-blue-100 text-sm italic">
                                    Emergency Slab Inspections Available
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoosBaySlabLeakInfo;
