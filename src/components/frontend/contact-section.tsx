
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import ContactForm from "@/components/frontend/contact-form";
import { address, contact_email, contact_phone, working_hours } from "@/data/business";

export default function ContactSection() {

    return (
        <BackgroundBeamsWithCollision>
            <section className="w-full py-12 bg-neutral-950">
                <div className="relative flex max-w-full flex-col items-center justify-center px-2 sm:px-16 text-white">

                    {/* Heading */}
                    <div className="text-center mb-10">
                        <p className="text-blue-600 font-medium">Contact Us</p>

                    </div>

                    {/* Grid */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* Contact Details */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-8">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-3xl sm:text-4xl font-bold mt-2">We’d Love to Hear From You</h2>
                                    <p className="text-sm sm:text-base mt-3 text-gray-300 max-w-2xl mx-auto">
                                        Whether you have a project in mind, need support, or simply want to connect —
                                        feel free to reach out. Our team responds within 24 hours!
                                    </p>
                                </div>

                                <h3 className="text-2xl font-semibold text-gray-200 mt-6">Our Contact Info</h3>

                                <div>
                                    <p className="text-sm text-gray-400">📍 Address</p>
                                    <p className="font-medium text-gray-300">
                                        {address}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-400">📞 Phone</p>
                                    <p className="font-medium text-gray-300">
                                        {contact_phone}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-400">📧 Email</p>
                                    <p className="font-medium text-gray-300">
                                        {contact_email}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-400">⏰ Working Hours</p>
                                    <p className="font-medium text-gray-300">
                                        {working_hours}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <ContactForm />
                    </div>
                </div>
            </section>
        </BackgroundBeamsWithCollision>
    );
}
