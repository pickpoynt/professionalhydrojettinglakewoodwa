import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import TurbevilleSlabLeakInfo from "@/components/landing/TurbevilleSlabLeakInfo";
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
        <title>slab leak repair turbeville | Turbeville Slab Leak Pros</title>
        <meta name="description" content="slab leak repair turbeville - Professional electronic slab leak detection and foundation pipe repair in Turbeville, SC. Expert diagnostics and non-invasive restoration. Call (877) 792-1410." />
        <meta name="keywords" content="slab leak repair turbeville, Turbeville SC leak detection, foundation water leak, concrete slab repair, Clarendon County plumbing restoration" />
        <link rel="canonical" href="https://slab-leak-repair-turbeville.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Turbeville Slab Leak Pros",
            "image": "/ultra-realistic-photo-of-a-licensed-plumber-perfor.jpeg",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Turbeville Main St",
              "addressLocality": "Turbeville",
              "addressRegion": "SC",
              "postalCode": "29162",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.8893",
              "longitude": "-80.0165"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Turbeville, South Carolina"
            },
            "priceRange": "$$$",
            "description": "Expert electronic slab leak detection and foundation pipe repair services in Turbeville, SC. Specialized in residential leak diagnostics and structural plumbing restoration."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Slab Leak Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Turbeville Slab Leak Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Turbeville, SC"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Turbeville Slab Leak Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Electronic Slab Leak Detection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Acoustic Foundation Diagnostics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sub-Slab Plumbing Restoration"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="slab leak repair turbeville - Turbeville Slab Leak Pros" />
        <meta property="og:description" content="Professional electronic slab leak detection and restoration in Turbeville, SC. Protect your property with advanced diagnostics and master-grade plumbing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://slab-leak-repair-turbeville.com/" />
        <meta property="og:image" content="/ultra-realistic-photo-of-a-licensed-plumber-perfor.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              slab leak repair turbeville
              <span className="block text-emerald-400 mt-2 text-2xl md:text-3xl italic">Turbeville Slab Leak Pros</span>
            </>
          }
          subtitle="Turbeville's premier experts in master-grade electronic slab leak detection and foundation restoration. We design high-performance plumbing solutions tailored for the South Carolina Coastal Plain's shifting soil conditions, ensuring long-term structural integrity. Engineering excellence for Clarendon County."
          image="/ultra-realistic-photo-of-a-licensed-plumber-perfor.jpeg"
          overlayImage="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80"
          badge="TURBEVILLE SLAB LEAK RESTORATION SPECIALISTS"
        />
        <Services />
        <WhyUs />
        <TurbevilleSlabLeakInfo />
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








