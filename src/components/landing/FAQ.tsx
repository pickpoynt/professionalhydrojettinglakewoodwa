import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer emergency repiping assessment in Puyallup?",
    answer: "Yes. Our Puyallup teams are available for technical system diagnostics and localized restoration. We provide rapid support across Pierce County and the South Puget Sound to stabilize your plumbing."
  },
  {
    question: "What is whole-home repiping for Puyallup homes?",
    answer: "Whole-home repiping involves replacing all outdated or failing water supply lines (like galvanized or polybutylene) with new, durable copper or PEX-A piping to ensure clean water and consistent pressure."
  },
  {
    question: "Are your technicians licensed for Washington plumbing projects?",
    answer: "Absolutely. Our technicians are fully licensed master plumbers and repiping specialists who adhere strictly to Washington State building codes and Puyallup municipal standards."
  },
  {
    question: "How long does a typical house repiping in Puyallup take?",
    answer: "Most residential repiping projects can be completed in 3 to 5 days, depending on the size of the home. We focus on rapid, high-performance results to minimize disruption to your daily life."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6 uppercase tracking-tight">
            Puyallup <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Answers to common questions about whole-home repiping and system restoration in Puyallup, Washington.
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
                <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-indigo-600 text-left py-6 uppercase tracking-tight">
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
