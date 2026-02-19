import { ShieldCheck, Droplets, Activity, ClipboardCheck, MapPin, Construction, Locate, Search, Clock, Zap, Target } from "lucide-react";

const TurbevilleSlabLeakInfo = () => {
    return (
        <section id="turbeville-slab-leak-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Locate className="w-4 h-4" />
                            <span>Clarendon County Foundation Specialists</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Precision <span className="text-blue-600">Slab Leak Repair</span> in Turbeville
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Protecting the homes and heritage of Turbeville. We specialize in advanced electronic diagnostics and non-destructive restoration for sub-foundation water line failures across the South Carolina Coastal Plain.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Left Column - Service Excellence */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <Construction className="w-7 h-7 text-blue-600" />
                                    Turbeville Structural Plumbing
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Target className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Acoustic Signal Mapping</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                By isolating the specific frequency of water escaping from pressurized lines under your Turbeville home, we can locate leaks with pinpoint accuracy, saving you from unnecessary flooring damage.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Activity className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Infrared Thermal Profiling</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Our technicians use high-sensitivity thermal cameras to detect heat anomalies on your foundation, identifying hidden hot water line leaks that contribute to soil destabilization.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Search className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Sub-Slab Pressure Correlation</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We perform meticulous pressure testing on individual line segments to confirm the presence and severity of leaks before initiating any restoration work.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Local Expertise */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <MapPin className="w-7 h-7 text-blue-600" />
                                    Turbeville & Clarendon County Areas
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                    Providing rapid, technical leak diagnostics for Turbeville and the surrounding Santee region:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Turbeville Center",
                                        "Manning",
                                        "Summerton",
                                        "New Zion",
                                        "Olanta",
                                        "Lake City",
                                        "Gable",
                                        "Barrineau"
                                    ].map((area, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                                            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* UNIQUE GEOLOGICAL CONTENT */}
                            <div className="p-8 bg-blue-600 rounded-3xl text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">The Lowcountry Soil Dynamic</h4>
                                <p className="text-blue-50 text-sm leading-relaxed italic">
                                    Turbeville is situated on the sandy loam of the South Carolina Coastal Plain. While these soils drain well, they are prone to shifting during heavy Atlantic rain events. This movement can stress aging plumbing lines buried beneath your slab, leading to hairline fractures and pressure drops. Our diagnostics are calibrated specifically for this local geological profile.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Technical Box */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight flex items-center gap-3">
                                    Suspicious Water Bill?
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic">
                                    In the Clarendon County area, foundation movement is a primary cause of silent slab leaks. If you notice damp spots or a drop in water pressure, our Turbeville team is ready with master-grade acoustic equipment.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest font-heading">Slab Certified</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest font-heading">Clarendon County Local</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest font-heading">Non-Invasive Logic</div>
                                </div>
                            </div>
                            <div className="bg-blue-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform border border-blue-400/30 shadow-2xl">
                                <p className="text-blue-100 text-sm font-bold uppercase tracking-widest mb-2">Emergency Service Available</p>
                                <a href="tel:8777921410" className="text-4xl font-bold transition-colors block mb-4 hover:text-white">
                                    (877) 792-1410
                                </a>
                                <p className="text-blue-100 text-sm italic font-medium">
                                    Master-Grade Foundation Restoration Turbeville
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TurbevilleSlabLeakInfo;
