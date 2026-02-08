import { Phone, Mail, MapPin, Wind, ShieldCheck } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <Wind className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Nashville Air Quality Pros
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Nashville's leading specialists in molecular smoke odor removal and air purification. We protect your historic Music City property with advanced scent-neutralization technology.
            </p>
            <div className="flex items-center gap-4">
              <a href="tel:3802660944" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Phone className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Purification Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Smoke Odor Removal</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Thermal Fogging</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Hydroxyl Treatment</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Cigarette Nicotine Wash</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> HVAC Deodorization</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Nashville Service Area</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Brentwood & Franklin</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> East Nashville & Madison</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Hendersonville & Gallatin</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Mount Juliet & Lebanon</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Sylvan Park & Bellevue</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Nashville Air Line</h4>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
              <div className="text-blue-400 font-bold text-sm uppercase mb-2">TN Licensed & Bonded</div>
              <a href="tel:3802660944" className="text-2xl font-heading font-bold text-white hover:text-blue-400 transition-colors">
                (380) 266-0944
              </a>
              <div className="flex items-center gap-2 mt-4 text-slate-400 text-sm">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                Licensed & Insured #NASHIAQ1
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 text-center md:text-left flex flex-col md:row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} Nashville Air Quality Pros. All rights reserved.
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
          <div className="flex items-center gap-3">
            <div className="text-xs text-slate-600 italic">smoke odor removal Nashville</div>
            <div className="w-2 h-2 rounded-full bg-blue-600/30" />
            <div className="text-xs text-slate-600 italic">Fire damage deodorization TN</div>
          </div>
        </div>
      </div>

      {/* Structured Data for LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Nashville Air Quality Pros",
          "telephone": "+1-380-266-0944",
          "url": "https://nashville-smoke-odor.com/",
          "logo": "https://nashville-smoke-odor.com/logo.png",
          "image": "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80",
          "description": "Professional smoke odor removal and air quality restoration services in Nashville, TN. We specialize in molecular-level deodorization for homes, music venues, and commercial spaces.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Serving the Greater Nashville Area",
            "addressLocality": "Nashville",
            "addressRegion": "TN",
            "postalCode": "37201",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 36.1627,
            "longitude": -86.7816
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        })}
      </script>
    </footer>
  );
};




export default Footer;

