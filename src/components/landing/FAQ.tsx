import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer emergency slab water line repair in Coos Bay?",
    answer: "Yes. Our Coos Bay teams are available 24/7 for technical electronic diagnostics and sub-slab water line repairs. We provide rapid support across Coos County to protect your property's foundation from coastal moisture damage."
  },
  {
    question: "How do you find water line leaks under Coos Bay concrete slabs?",
    answer: "We utilize non-invasive electronic leak detection and acoustic correlation technology. By pinpointing the exact sound frequency of a pressurized water line failure, we can locate leaks through your slab with surgical precision."
  },
  {
    question: "Are your technicians licensed for Oregon coastal projects?",
    answer: "Absolutely. Our technicians are fully licensed and insured professionals who adhere strictly to Oregon building codes and local Coos Bay residential foundation standards."
  },
  {
    question: "How long does a sub-slab water line repair take?",
    answer: "Most slab water line leaks can be located and restored within a single day. Our team focuses on non-invasive repairs that minimize disruption to your Coos Bay home while ensuring a permanent fix for the sub-floor plumbing."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6">
            Coos Bay Slab <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Answers to common questions about slab water line leaks and expert foundation repair in Coos Bay, Oregon.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-2xl px-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-indigo-600 text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
