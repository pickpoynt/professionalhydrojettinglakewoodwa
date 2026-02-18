import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import CoosBaySlabLeakInfo from "@/components/landing/CoosBaySlabLeakInfo";
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
        <title>Slab water line leak repair Coos Bay OR | Coos Bay Slab Leak Pros</title>
        <meta name="description" content="Slab water line leak repair Coos Bay OR - Expert repair for sub-slab water line leaks in Coos Bay, OR. Professional leak detection and coastal foundation solutions. Call (877) 792-1410." />
        <meta name="keywords" content="Slab water line leak repair Coos Bay OR, Coos Bay Oregon slab repair, sub-slab water line Coos Bay, slab leak detection Coos County OR" />
        <link rel="canonical" href="https://slab-water-line-leak-repair-coos-bay.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Coos Bay Slab Leak Pros",
            "image": "https://images.unsplash.com/photo-1594235200370-b2d97b973b5b?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "500 Central Ave",
              "addressLocality": "Coos Bay",
              "addressRegion": "OR",
              "postalCode": "97420",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "43.3665",
              "longitude": "-124.2179"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Coos Bay, OR"
            },
            "priceRange": "$$$",
            "description": "Specialized slab water line leak repair and coastal foundation plumbing services in Coos Bay, Oregon. Professional electronic leak detection and structural solutions."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Slab Water Line Leak Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Coos Bay Slab Leak Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Coos Bay, Oregon"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Coos Bay Slab Repair Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Electronic Sub-Slab Leak Detection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Coastal Slab Foundation Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Water Line Pipe Restoration"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Slab water line leak repair Coos Bay OR - Coos Bay Slab Leak Pros" />
        <meta property="og:description" content="Expert slab water line and coastal foundation repair in Coos Bay, OR. Advanced detection solutions to protect your Oregon home." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://slab-water-line-leak-repair-coos-bay.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1594235200370-b2d97b973b5b?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Slab water line leak repair Coos Bay OR
              <span className="block text-emerald-400 mt-2 text-2xl md:text-3xl italic">Coos Bay Slab Leak Pros</span>
            </>
          }
          subtitle="Coos Bay's specialized experts in sub-slab water line and foundation leak repair. We utilize advanced electronic detection and maritime-grade sealing to stop leaks at the source. Safeguarding Coos Bay homes from coastal foundation failure."
          image="https://images.unsplash.com/photo-1594235200370-b2d97b973b5b?auto=format&fit=crop&q=80"
          overlayImage="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80"
          badge="COOS BAY SLAB REPAIR SPECIALISTS"
        />
        <Services />
        <WhyUs />
        <CoosBaySlabLeakInfo />
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
