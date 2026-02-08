import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import SmokeOdorInfo from "@/components/landing/SmokeOdorInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>smoke odor removal Nashville | Nashville Air Quality Pros: Professional Deodorization Services</title>
        <meta name="description" content="smoke odor removal Nashville. Professional wood smoke, cigarette, and fire damage odor elimination. 24/7 expert scent neutralize in Nashville. Call (380) 266-0944 today!" />
        <meta name="keywords" content="smoke odor removal Nashville, cigarette smell removal Nashville, fire damage restoration Nashville, ozone treatment Nashville, Nashville odor elimination" />
        <link rel="canonical" href="https://nashville-smoke-odor.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Nashville Air Quality Pros",
            "image": "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80",
            "telephone": "+1-380-266-0944",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nashville",
              "addressRegion": "TN",
              "postalCode": "37201",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "36.1627",
              "longitude": "-86.7816"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Nashville, Tennessee"
            },
            "priceRange": "$$$",
            "description": "Professional smoke odor removal and air quality restoration services in Nashville, TN. We specialize in molecular-level deodorization for homes, music venues, and commercial spaces."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Smoke Odor Removal",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Nashville Air Quality Pros",
              "telephone": "+1-380-266-0944"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Nashville, Tennessee"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Smoke Odor Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cigarette Smoke Elimination"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Fire Damage Deodorization"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hydroxyl & Ozone Treatment"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "HVAC System Purification"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="smoke odor removal Nashville | Nashville Air Quality Pros" />
        <meta property="og:description" content="Professional smoke odor removal in Nashville, TN. 24/7 molecular-level air purification and fire damage restoration. Call (380) 266-0944 for a free estimate." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nashville-smoke-odor.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              smoke odor removal Nashville
              <span className="block text-blue-400 mt-2">Nashville Air Quality Pros: Breathe Pure Again</span>
            </>
          }
          subtitle="Don't live with the lingering scent of smoke. Our molecular-level purification systems target smoke particles embedded in Nashville's historic hardwood, drywall, and upholstery—eradicating odors from cigarettes, fires, and environmental hazards with invisible Nashville precision."
          image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <SmokeOdorInfo />
        <FAQ />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;




