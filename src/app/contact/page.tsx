import ContactSection from "@/components/frontend/contact-section";
import { AtSign, Phone } from "lucide-react";

export const metadata = {
    title: "Contact | Apna IT Solutions",
};

export default function Contact() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-between pt-5 bg-white dark:bg-black sm:items-start space-y-5">

            <section className="w-full">
                <div className="relative flex max-w-full flex-col items-center justify-center mx-2 sm:mx-16">
                    {/* Decorative Borders */}
                    <div className="absolute inset-y-0 left-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
                        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                    </div>
                    <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
                    </div>
                    <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
                        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                    </div>


                    <div className="w-full px-2 sm:px-16 py-10 sm:py-20">

                        {/* Top Heading */}
                        <div className="flex flex-col items-center">
                            <h4 className="text-center uppercase text-blue-600 font-medium mb-2">
                                reach out
                            </h4>

                            <div className="text-center">
                                <h2 className="text-2xl sm:text-3xl capitalize font-bold">have any query, no hesitation connect any time.</h2>
                            </div>

                            <div className="text-center mt-7">
                                <p className="text-gray-600 font-medium">Get In Touch With Us</p>
                            </div>
                        </div>

                        {/* Contact Cards */}
                        <div className="my-5 px-2 lg:px-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">

                                {/* === Card 1: Business === */}
                                <div className="border-contact-card py-6 ps-3 rounded-xl shadow-sm bg-white">
                                    <h3 className="text-center font-semibold textFontSize mb-4 capitalize">
                                        For Business
                                    </h3>

                                    <a
                                        href="mailto:sales@apnapayment.com"
                                        className="flex items-center gap-3 mb-3"
                                        aria-label="business-email"
                                    >
                                        <AtSign className="text-yellow-300"/>
                                        <p className="mb-0 text-blue-600 font-medium">sales@apnapayment.com</p>
                                    </a>

                                    <a
                                        href="tel:+911234567890"
                                        className="flex items-center gap-3"
                                        aria-label="business-call"
                                    >
                                        <Phone className="text-red-300"/>
                                        <p className="mb-0 text-blue-600 font-medium">(+91) 123-456-7890</p>
                                    </a>
                                </div>

                                {/* === Card 2: Consultation === */}
                                <div className="border-contact-card py-6 ps-3 rounded-xl shadow-sm bg-white">
                                    <h3 className="text-center font-semibold textFontSize mb-4 capitalize">
                                        For Consultation
                                    </h3>

                                    <a
                                        href="mailto:sales@apnapayment.com"
                                        className="flex items-center gap-3 mb-3"
                                        aria-label="consult-email"
                                    >
                                        <AtSign className="text-yellow-300"/>
                                        <p className="mb-0 text-blue-600 font-medium">sales@apnapayment.com</p>
                                    </a>

                                    <a
                                        href="tel:+911234567890"
                                        className="flex items-center gap-3"
                                        aria-label="consult-call"
                                    >
                                        <Phone className="text-red-300"/>
                                        <p className="mb-0 text-blue-600 font-medium">(+91) 123-456-7890</p>
                                    </a>
                                </div>

                                {/* === Card 3: Career === */}
                                <div className="border-contact-card py-6 ps-3 rounded-xl shadow-sm bg-white">
                                    <h3 className="text-center font-semibold textFontSize mb-4 capitalize">
                                        For Career
                                    </h3>

                                    <a
                                        href="mailto:hr@apnapayment.com"
                                        className="flex items-center gap-3 mb-3"
                                        aria-label="career-email"
                                    >
                                        <AtSign className="text-yellow-300"/>
                                        <p className="mb-0 text-blue-600 font-medium">hr@apnapayment.com</p>
                                    </a>

                                    <a
                                        href="tel:+911234567890"
                                        className="flex items-center gap-3"
                                        aria-label="career-call"
                                    >
                                        <Phone className="text-red-300"/>
                                        <p className="mb-0 text-blue-600 font-medium">(+91) 123-456-7890</p>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <ContactSection />
        </main>
    )
}