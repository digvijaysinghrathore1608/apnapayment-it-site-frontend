import Reveal from "@/components/frontend/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQSection() {
    const faqs = [
        {
            question: "What services does your company provide?",
            answer:
                "We offer end-to-end software development services including web development, mobile apps, UI/UX design, backend development, API integration, cloud deployment, and ongoing maintenance."
        },
        {
            question: "How do you start a new project?",
            answer:
                "We begin with requirement gathering, understanding your goals, analyzing your business needs, and then creating a project plan. Once everything is finalized, our development team starts working in structured phases."
        },
        {
            question: "Do you offer custom software solutions?",
            answer:
                "Yes, we specialize in building custom solutions tailored to your business workflow, ensuring scalability, performance, and long-term reliability."
        },
        {
            question: "What technologies do you work with?",
            answer:
                "We work with modern technologies including HTML, CSS, JavaScript, React.js, Next.js, Node.js, Python, Django, Laravel, MySQL, PostgreSQL, and AWS."
        },
        {
            question: "How long does it take to complete a project?",
            answer:
                "The timeline depends on project complexity. Small projects can take 2–4 weeks, while larger systems may require a few months. We provide a clear timeline after understanding requirements."
        },
        {
            question: "Do you provide post-launch support?",
            answer:
                "Yes, we offer maintenance, updates, security fixes, performance optimization, and long-term support as per client needs."
        },
        {
            question: "How much do your services cost?",
            answer:
                "Cost varies depending on project size, features, and technology stack. We offer transparent pricing and provide a detailed quote after requirement analysis."
        },
        {
            question: "Can you work with existing systems or incomplete projects?",
            answer:
                "Yes, we can upgrade, optimize, or continue development on your existing system while ensuring smooth integration with new features."
        }
    ];
    return (
        <>
            {/* faq section start */}
            <Reveal className="w-full">
                <div className="relative flex w-full max-w-full flex-col items-center justify-center bg-neutral-950 pt-10 sm:py-10 px-2 sm:px-16">
                    <h2 className="text-yellow-400 text-lg md:text-xl font-bold">
                        FAQ
                    </h2>
                    <div className="w-full sm:w-6xl text-center mb-5">
                        <p className="text-white mt-3 text-sm sm:text-base">
                            We provide end-to-end technology solutions designed to streamline operations, improve efficiency, and support business growth. Our team focuses on creating smart, scalable, and reliable digital solutions that help organizations solve real-world challenges with confidence.
                        </p>
                    </div>

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
            </Reveal >
            {/* faq section end */}
        </>
    )
}

