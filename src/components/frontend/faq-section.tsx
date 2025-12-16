import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
    return (
        <>
            {/* faq section start */}
            <div className="relative flex w-full max-w-full flex-col items-center justify-center bg-neutral-950 pt-10 sm:py-10 px-2 sm:px-16">
                <h2 className="text-yellow-400 text-lg md:text-xl font-bold">
                    FAQ
                </h2>
                <div className="w-full sm:w-6xl text-center mb-5">
                    <p className="text-white mt-3 text-sm sm:text-base">
                        We provide end-to-end technology solutions designed to streamline operations, improve efficiency, and support business growth. Our team focuses on creating smart, scalable, and reliable digital solutions that help organizations solve real-world challenges with confidence.
                    </p>
                </div>

                <div className="w-full sm:w-6xl mb-5">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                    >
                        {faqs.map((faq, index) => (
                            <AccordionItem key={`faq-${index}`} value={`item-${index + 1}`}>
                                <AccordionTrigger className="text-white text-base">{faq.question}</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance text-gray-400">
                                    <p>{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}

                    </Accordion>
                </div>
            </div>
            {/* faq section end */}
        </>
    )
}

