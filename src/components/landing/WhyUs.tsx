import { ShieldCheck, MapPin, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Dynamic Background with Technical Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="/ultra-realistic-photo-of-a-licensed-plumber-perfor.jpeg"
          alt=""
          className="w-full h-full object-cover opacity-5 brightness-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 opacity-95" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">Unmatched Precision</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight uppercase tracking-tight">
              Why Turbeville Trusts <br />
              <span className="text-indigo-500">Our Leak Experts</span>
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light italic">
              We bring master-grade engineering to every diagnostic bridge. Our team is dedicated to preserving Turbeville property value through technical excellence and non-invasive sub-slab restoration.
            </p>

            <div className="grid gap-6">
              {[
                {
                  title: "Clinical Accuracy",
                  description: "Our electronic triangulation equipment identifies leaks with +/- 6 inch precision, preventing unnecessary slab destruction.",
                  icon: Target
                },
                {
                  title: "Turbeville Local",
                  description: "Based in the heart of Turbeville, SC. We understand the specific soil shifting patterns that cause Clarendon County slab failures.",
                  icon: MapPin
                },
                {
                  title: "Rapid Detection",
                  description: "Emergency diagnostic teams deployed immediately across Clarendon County to stabilize critical foundation water breaches.",
                  icon: Clock
                },
                {
                  title: "Technical Valve",
                  description: "Master-level plumbing certification in South Carolina, ensuring all repairs meet the highest structural and municipal standards.",
                  icon: ShieldCheck
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-indigo-500/20 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 group-hover:scale-110 transition-all">
                    <item.icon className="w-7 h-7 text-indigo-400 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden border-4 border-indigo-500/20 shadow-2xl shadow-indigo-500/20 relative group">
              <img
                src="/ultra-realistic-photo-of-a-licensed-plumber-perfor(1).jpeg"
                alt="Turbeville Electronic Leak Detection"
                className="w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-all" />

              <div className="absolute bottom-8 left-8 right-8 bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <p className="text-indigo-400 font-bold uppercase tracking-widest text-xs mb-3">Foundation Crisis?</p>
                <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight leading-tight">Emergency Slab Scans</h4>
                <div className="flex items-center gap-4">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-12 px-6 rounded-xl uppercase tracking-widest text-xs" asChild>
                    <a href="tel:8777921410">Call Turbeville Team</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
