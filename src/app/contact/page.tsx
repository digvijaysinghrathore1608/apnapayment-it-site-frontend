import ContactSection from "@/components/frontend/contact-section";
import ContactTabsSEOEnhanced from "@/components/frontend/contact/contact-business-section";
import { site_name } from "@/data/business";
import { AtSign, Phone } from "lucide-react";

export const metadata = {
    title: `Contact | ${site_name}`,
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


                    <div className="w-full px-2 sm:px-16 py-10">

                        {/* Top Heading */}
                        <div className="flex flex-col items-center">
                            <h4 className="text-center uppercase text-blue-600 font-medium mb-2">
                                reach out
                            </h4>

                            <div className="text-center">
                                <h2 className="text-2xl sm:text-3xl capitalize font-bold">Connect With the Right Team.</h2>
                            </div>

                            <div className="text-center mt-7">
                                <p className="text-gray-600 font-medium">Whether you’re a business looking to grow, need expert consultation,
                                    or want to build your career with us — we’re here to help.</p>
                            </div>
                        </div>

                        {/* Contact Cards */}
                        <ContactTabsSEOEnhanced />
                    </div>

                </div>
            </section>

            <ContactSection />
        </main>
    )
}