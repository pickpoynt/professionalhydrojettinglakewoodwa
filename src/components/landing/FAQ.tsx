import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer emergency slab leak detection in Turbeville?",
    answer: "Yes. Our Turbeville teams are available for technical foundation diagnostics and localized restoration. We provide rapid support across Clarendon County and the Santee region to stabilize your property."
  },
  {
    question: "What are the signs of a slab leak in Turbeville homes?",
    answer: "Common signs include unexplained increases in water bills, warm spots on flooring (especially under tile or wood), the sound of running water when faucets are off, and cracks in foundation walls."
  },
  {
    question: "Are your technicians licensed for South Carolina plumbing projects?",
    answer: "Absolutely. Our technicians are fully licensed South Carolina Master Plumbers and slab leak specialists who adhere strictly to SC building codes and Turbeville municipal standards."
  },
  {
    question: "How long does a typical slab leak repair in Turbeville take?",
    answer: "Most slab leak diagnostics and repairs can be completed in 1 to 2 days, depending on the complexity and location. We focus on non-invasive technical results to minimize disruption."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6 uppercase tracking-tight">
            Turbeville <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Answers to common questions about electronic slab leak detection and foundation restoration in Turbeville, South Carolina.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-2xl px-6"
              >
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-indigo-600 py-6 text-lg uppercase tracking-tight">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-6 leading-relaxed font-medium italic">
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
