import ContactSection from "@/components/frontend/contact-section";
import CoreValuesSection from "@/components/frontend/core-values-section";
import GallerySection from "@/components/frontend/gallery-section";
import TestimonialSection from "@/components/frontend/testimonial-section";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Link from "next/link";

export const metadata = {
    title: "About Us | Apna IT Solutions",
};

export default function AboutUs() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-between pt-5 bg-white dark:bg-black sm:items-start space-y-5">

            <section className="w-full">
                <div className="relative flex max-w-full flex-col items-center justify-center">

                    {/* Decorative Borders */}
                    {/* <div className="absolute inset-y-0 left-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
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
                    </div> */}
                    <BackgroundBeamsWithCollision>
                        {/* HERO CONTENT */}
                        <div className="flex flex-col items-center gap-6 px-2 sm:px-0 py-12 md:py-20">

                            <h1 className="relative z-10 max-w-4xl text-center text-2xl md:text-5xl lg:text-7xl font-bold text-slate-800 dark:text-slate-200 leading-tight">
                                Building Smart, Scalable & Future-Ready IT Solutions
                            </h1>

                            <p className="max-w-2xl text-center text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
                                Apna IT Solutions is a full-stack technology team specializing in web development, mobile apps,
                                cloud deployment, automation and custom business software.
                                <br /><br />
                                For over a decade, we’ve helped startups, enterprises and agencies build reliable digital products
                                that scale with their growth.
                            </p>

                            <div>
                                <Link href="/contact" className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-center text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
                                    Schedule a Call
                                </Link>
                            </div>
                        </div>
                    </BackgroundBeamsWithCollision>
                </div>
            </section>


            {/* ******. About section . ******* */}
            <section className="relative w-full py-16">
                <div className="max-w-full px-2 sm:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start justify-between">

                        {/* LEFT CONTENT */}
                        <div className="px-2 sm:px-0">
                            <p className="text-blue-600 font-medium text-sm tracking-wide uppercase">
                                About Us
                            </p>

                            <h2 className="text-2xl md:text-4xl font-bold mt-2 text-gray-800 dark:text-white">
                                Welcome to Apna IT Solutions
                            </h2>

                            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                                At Apna IT Solutions, we deliver future-ready digital products using
                                modern technologies. We specialize in Web Development, Mobile App Development,
                                Cloud Deployment, Automation, Backend Systems, and Full-Stack IT solutions.
                                <br /><br />
                                Our goal is to build high-performance solutions that help businesses grow,
                                scale, automate processes, and stay ahead in the digital world.
                            </p>

                            {/* Mission */}
                            <p className="mt-10 text-blue-600 font-medium text-sm tracking-wide uppercase">
                                Our Mission
                            </p>

                            <h2 className="text-2xl md:text-4xl font-bold mt-2 text-gray-800 dark:text-white">
                                Empower Businesses With Technology
                            </h2>

                            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                                We aim to bring powerful technology solutions—Web, Cloud, Automation & AI—to
                                businesses of all sizes. Our focus is on delivering reliable, scalable and
                                secure systems that enhance efficiency, reduce manual work, and improve customer
                                experience.
                            </p>
                        </div>

                        {/* RIGHT STATS GRID */}
                        <div className="flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-4 border rounded-xl overflow-hidden">

                                <div className="text-center p-6 border-b border-r">
                                    <div className="text-3xl font-extrabold text-blue-600">200+</div>
                                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                                        Projects Completed
                                    </div>
                                </div>

                                <div className="text-center p-6 border-b">
                                    <div className="text-3xl font-extrabold text-green-600">95%</div>
                                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                                        Client Satisfaction Rate
                                    </div>
                                </div>

                                <div className="text-center p-6 border-r">
                                    <div className="text-3xl font-extrabold text-orange-600">6+</div>
                                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                                        Years of Expertise
                                    </div>
                                </div>

                                <div className="text-center p-6">
                                    <div className="text-3xl font-extrabold text-purple-600">25+</div>
                                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                                        Apps With 1M+ Downloads
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* DECORATIVE IMAGE */}
                <img
                    className="absolute right-0 bottom-0 w-60 opacity-10 pointer-events-none"
                    src="https://assets.aceternity.com/logo-dark.png"
                    alt="decorative"
                />
            </section>
            {/* ******. About section . ******* */}


            {/* ******. Our Services section . ******* */}
            <section className="relative w-full py-16 bg-neutral-950">
                <div className="max-w-full px-2 sm:px-16">

                    {/* HEADER */}
                    <div className="mb-10 text-white">
                        <p className="text-sm font-medium tracking-wide uppercase" style={{ color: "#F5A403" }}>
                            Our Services
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2">
                            What We Do
                        </h2>
                        <p className="mt-3 text-gray-300 max-w-2xl">
                            We provide modern IT solutions that help businesses grow, automate,
                            and scale with confidence.
                        </p>
                    </div>

                    {/* GRID */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                        {/* CARD 1 */}
                        <a href="/services/ai-ml-solutions">
                            <div className="p-6 bg-white/5 border border-white/10 rounded-xl h-full hover:bg-white/10 transition">
                                <h3 className="text-white text-lg font-semibold">
                                    AI / ML Solutions
                                </h3>
                                <p className="text-gray-300 text-sm mt-2">
                                    Custom AI & ML tools designed to automate tasks, improve
                                    accuracy, and increase productivity for your business.
                                </p>
                            </div>
                        </a>

                        {/* CARD 2 */}
                        <a href="/services/data-management">
                            <div className="p-6 bg-white/5 border border-white/10 rounded-xl h-full hover:bg-white/10 transition">
                                <h3 className="text-white text-lg font-semibold">
                                    Data Management
                                </h3>
                                <p className="text-gray-300 text-sm mt-2">
                                    Smart data organization, warehousing, and advanced analytics
                                    to convert raw data into business insights.
                                </p>
                            </div>
                        </a>

                        {/* CARD 3 */}
                        <a href="/services/mvp-development">
                            <div className="p-6 bg-white/5 border border-white/10 rounded-xl h-full hover:bg-white/10 transition">
                                <h3 className="text-white text-lg font-semibold">
                                    MVP / POC Development
                                </h3>
                                <p className="text-gray-300 text-sm mt-2">
                                    Fast development of MVPs & proof of concepts to help startups
                                    validate ideas before full-scale investment.
                                </p>
                            </div>
                        </a>

                        {/* CARD 4 */}
                        <a href="/services/digital-transformation">
                            <div className="p-6 bg-white/5 border border-white/10 rounded-xl h-full hover:bg-white/10 transition">
                                <h3 className="text-white text-lg font-semibold">
                                    Digital Transformation
                                </h3>
                                <p className="text-gray-300 text-sm mt-2">
                                    Helping businesses adopt modern technologies and automate
                                    operations for faster growth.
                                </p>
                            </div>
                        </a>

                        {/* CARD 5 */}
                        <a href="/services/security-compliance">
                            <div className="p-6 bg-white/5 border border-white/10 rounded-xl h-full hover:bg-white/10 transition">
                                <h3 className="text-white text-lg font-semibold">
                                    Compliance & Security
                                </h3>
                                <p className="text-gray-300 text-sm mt-2">
                                    Secure infrastructure, data protection, and regulatory
                                    compliance for businesses of all sizes.
                                </p>
                            </div>
                        </a>

                        {/* CARD 6 */}
                        <a href="/services/web-mobile-development">
                            <div className="p-6 bg-white/5 border border-white/10 rounded-xl h-full hover:bg-white/10 transition">
                                <h3 className="text-white text-lg font-semibold">
                                    Web & Mobile Development
                                </h3>
                                <p className="text-gray-300 text-sm mt-2">
                                    High-performance websites and mobile apps with clean UI,
                                    fast speed, and modern technology.
                                </p>
                            </div>
                        </a>

                        {/* CARD 7 */}
                        <a href="/services/lowcode-solutions">
                            <div className="p-6 bg-white/5 border border-white/10 rounded-xl h-full hover:bg-white/10 transition">
                                <h3 className="text-white text-lg font-semibold">
                                    Low Code / No Code Solutions
                                </h3>
                                <p className="text-gray-300 text-sm mt-2">
                                    Fast application creation with low-code tools to speed up
                                    workflow automation and digitalization.
                                </p>
                            </div>
                        </a>

                        {/* CARD 8 */}
                        <a href="/services/cloud-solutions">
                            <div className="p-6 bg-white/5 border border-white/10 rounded-xl h-full hover:bg-white/10 transition">
                                <h3 className="text-white text-lg font-semibold">
                                    Cloud Solutions
                                </h3>
                                <p className="text-gray-300 text-sm mt-2">
                                    Scalable cloud deployment, migration, and optimization for
                                    secure and seamless business operations.
                                </p>
                            </div>
                        </a>

                    </div>
                </div>
                <BackgroundBeams />
            </section>
            {/* ******. Our Services section . ******* */}


            {/* testimonial section start */}
            <TestimonialSection heading="Let’s See What Our Client Say’s About Us" />
            {/* testimonial section end */}

            {/* core values section start */}
            <CoreValuesSection />
            {/* core values section end */}

            {/* gallery section start */}
            <GallerySection />
            {/* gallery section end */}

            <ContactSection />
        </main>
    );
}