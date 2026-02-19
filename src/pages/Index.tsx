import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import PuyallupRepipingInfo from "@/components/landing/PuyallupRepipingInfo";
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
        <title>repiping services puyallup | Puyallup Repiping Pros</title>
        <meta name="description" content="repiping services puyallup - professional whole-home repiping and copper/PEX installation in Puyallup, WA. Expert system restoration and diagnostic services. Call (877) 792-1410." />
        <meta name="keywords" content="repiping services puyallup, Puyallup WA pipe replacement, copper repiping, PEX installation, Pierce County plumbing restoration" />
        <link rel="canonical" href="https://repiping-services-puyallup.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Puyallup Repiping Pros",
            "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "333 S Meridian",
              "addressLocality": "Puyallup",
              "addressRegion": "WA",
              "postalCode": "98371",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "47.1915",
              "longitude": "-122.2932"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Puyallup, Washington"
            },
            "priceRange": "$$$",
            "description": "Expert whole-home repiping and Copper/PEX installation services in Puyallup, WA. Specialized in residential plumbing restoration and technical system upgrades."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Repiping Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Puyallup Repiping Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Puyallup, WA"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Puyallup Repiping Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Whole-Home Copper Repiping"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "PEX Pipe Installation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Plumbing System Diagnostics"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="repiping services puyallup - Puyallup Repiping Pros" />
        <meta property="og:description" content="Professional whole-home repiping and system restoration in Puyallup, WA. Protect your property with master-grade copper and PEX installations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://repiping-services-puyallup.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              repiping services puyallup
              <span className="block text-emerald-400 mt-2 text-2xl md:text-3xl italic">Puyallup Repiping Pros</span>
            </>
          }
          subtitle="Puyallup's premier experts in master-grade whole-home repiping and pipe restoration. We design high-performance plumbing solutions tailored for the Pacific Northwest's specific water conditions, ensuring long-term structural integrity. Engineering excellence for Pierce County."
          image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
          overlayImage="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80"
          badge="PUYALLUP PLUMBING RESTORATION SPECIALISTS"
        />
        <Services />
        <WhyUs />
        <PuyallupRepipingInfo />
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





