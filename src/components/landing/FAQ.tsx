import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can cigarette smoke really be removed from Nashville hardwood?",
    answer: "Yes. Using molecular extraction and thermal fogging, we can reach the smoke particles that have settled deep into the grain of Tennessee oak and heart pine floors. We treat the wood without damaging its historic finish."
  },
  {
    question: "Is ozone treatment safe for my Nashville home?",
    answer: "Ozone is incredibly effective but must be used in a controlled, unoccupied environment. We also use Hydroxyl generators, which are 100% safe for use while your family and pets remain in the home."
  },
  {
    question: "How long does the smoke odor removal process take?",
    answer: "Most Nashville residential treatments take 24 to 48 hours for complete saturation and neutralization. Severe fire damage or long-term heavy smoking heritage homes may require a multi-stage approach over 3 to 4 days."
  },
  {
    question: "Do you also clean the HVAC ducts in Nashville homes?",
    answer: "Absolutely. Smoke particles often settle in the ductwork and re-contaminate the air every time the furnace or AC turns on. We use specialized fogging agents that travel through your entire ventilation system."
  },
  {
    question: "Will the smell come back when the Nashville humidity rises?",
    answer: "This is a common issue with 'masking' sprays. Because we use molecular-level neutralizing agents that physically dismantle the carbon bonds of smoke, the odor will not return, regardless of Tennessee's humidity levels."
  },
  {
    question: "Does Nashville building code require specialized air quality testing?",
    answer: "While not usually required for residential sale, many Nashville property managers request a certified IAQ (Indoor Air Quality) report. We provide digital scent certification and particulate analysis to verify our results."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Nashville Smoke Odor FAQ
          </h2>
          <p className="text-lg text-slate-600">
            Professional air quality expertise for Nashville homeowners and property managers.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-xl px-4 bg-white shadow-sm overflow-hidden">
              <AccordionTrigger className="text-left font-heading font-bold text-slate-900 hover:text-blue-600 py-6 transition-colors font-semibold leading-relaxed">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;




