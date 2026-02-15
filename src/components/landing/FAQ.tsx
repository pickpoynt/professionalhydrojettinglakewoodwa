import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer emergency plumbing in San Francisco 24/7?",
    answer: "Absolutely. We provide round-the-clock master plumbing response for all San Francisco neighborhoods. Whether it's a 3 AM pipe failure or a weekend gas-line issue, we are ready to assist."
  },
  {
    question: "Will you provide a price before starting the work?",
    answer: "Absolutely. We believe in transparency. Our technicians will diagnose the issue and provide a clear, upfront, flat-rate pricing assessment before any work begins."
  },
  {
    question: "Are you qualified to install seismic shut-off valves in SF?",
    answer: "Yes, we are SF-licensed master plumbers with deep expertise in Bay Area seismic compliance. We install certified earthquake-actuated gas shut-off valves and flexible piping to protect your property."
  },
  {
    question: "How do I know if my water heater needs to be replaced?",
    answer: "If your unit is over 10 years old, shows signs of rust, makes rumbling noises, or isn't providing enough hot water, it's time for an inspection. We can help you decide if a repair or a more efficient tankless upgrade is best."
  },
  {
    question: "Do you service Victorian homes in Pacific Heights and The Haight?",
    answer: "Yes, we specialize in San Francisco's historic building stock. We have the specific equipment and expertise needed to safely repair and upgrade the vintage galvanized and cast-iron plumbing systems found in SF's iconic architecture."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6">
            SF Master Plumbing <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Common questions about residential and emergency plumbing in the City by the Bay.
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
                <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-blue-600 text-left py-6">
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
