import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import SFPlumbingInfo from "@/components/landing/SFPlumbingInfo";
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
        <title>Plumber San Francisco CA San Francisco</title>
        <meta name="description" content="Plumber San Francisco CA San Francisco. Expert plumbing repair and installation in San Francisco, CA. 24/7 seismic-ready plumbing, leak detection, and drain cleaning. Call (877) 792-1410!" />
        <meta name="keywords" content="Plumber San Francisco CA San Francisco, San Francisco plumbers, emergency plumber San Francisco, water heater repair San Francisco, leak detection San Francisco" />
        <link rel="canonical" href="https://sf-plumbing-pros.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "SF Plumbing Pros",
            "image": "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "postalCode": "94102",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.7749",
              "longitude": "-122.4194"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "San Francisco, CA"
            },
            "priceRange": "$$$",
            "description": "Professional residential plumbing services in San Francisco, CA. We specialize in seismic safety valves, historic home pipe restoration, and master plumbing diagnostics."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Residential Plumbing Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "SF Plumbing Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "San Francisco, CA"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plumbing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Seismic Shut-off Valve Installation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Historic Victorian Pipe Restoration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "High-Pressure Main Leak Detection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency 24/7 San Francisco Plumbing"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Plumber San Francisco CA San Francisco - Expert Residential Plumbing" />
        <meta property="og:description" content="Precision plumbing for the City by the Bay. Fast, seismic-ready, and mastercraft plumbing service for all SF neighborhoods." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sf-plumbing-pros.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Plumber San Francisco CA San Francisco
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">SF Plumbing Pros</span>
            </>
          }
          subtitle="San Francisco's premier master plumbers. We provide expert seismic-ready diagnostics, historic pipe restoration, and rapid emergency repairs. Professional Master Craftsmanship."
          image="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2669&auto=format&fit=crop"
          overlayImage="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <SFPlumbingInfo />
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
