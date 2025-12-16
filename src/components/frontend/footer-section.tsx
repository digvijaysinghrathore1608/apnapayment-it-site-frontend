import Logo from "@/components/frontend/logo";
import { contact_email, contact_phone } from "@/data/business";
import { industries } from "@/data/industries";
import { legalPages } from "@/data/legalPages";
import { services } from "@/data/services";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
export default function Footer() {
    return (
        <>
            <footer
                className="relative flex w-full max-w-full flex-col items-center justify-center bg-neutral-950 pt-10 sm:py-10 px-2 sm:px-16 text-white"
            >
                <div className="w-full">

                    {/* TOP LOGO + CERTIFICATIONS */}
                    <div className="flex flex-col xl:flex-row items-center gap-6 py-6">

                        {/* MAIN LOGO */}
                        <div className="xl:w-1/4 flex justify-center xl:justify-start">
                            <Logo text_color="white" />
                        </div>

                        {/* CERTIFICATION ICONS */}
                        <div className="xl:w-3/4 flex flex-wrap justify-between xl:justify-end gap-6">
                            {/* Repeatable item */}
                            {[
                                {
                                    img: "/certificate/iso.webp",
                                    title: "ISO-27001 Software Security",
                                },
                                {
                                    img: "/certificate/d-b-register.webp",
                                    title: "Dun & Bradstreet Verified",
                                },
                                {
                                    img: "/certificate/google-cloud-partner.webp",
                                    title: "Google Cloud Partner",
                                },
                                {
                                    img: "/certificate/aws-consulting-partner.webp",
                                    title: "AWS Consulting Partner",
                                },
                            ].map((item, i) => (
                                <div key={i} className="text-center">
                                    <img src={item.img} className="w-24 mx-auto" alt={item.title} />
                                    <p className="text-xs sm:text-sm pt-2">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <hr className="opacity-30" />

                    {/* ================= */}
                    {/* FOOTER LINKS GRID */}
                    {/* ================= */}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10">

                        {/* COLUMN 1 */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Development Services</h4>
                            <ul className="space-y-2 text-sm">
                                {services.map((service, index) => (
                                    <li key={"service-" + index}><Link href={`/services/${service.slug}`}>{service.title}</Link></li>
                                ))}
                            </ul>
                        </div>

                        {/* COLUMN 2 */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Industry We Serve</h4>
                            <ul className="space-y-2 text-sm">
                                {industries.map((industry, index) => (
                                    <li key={"industry-" + index}><Link href={`/industries/${industry.slug}`}>{industry.title}</Link></li>
                                ))}
                            </ul>
                        </div>

                        {/* COLUMN 3 */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Hire Experts</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="#">Hire Frontend Developer</Link></li>
                                <li><Link href="#">Hire Backend Engineer</Link></li>
                                <li><Link href="#">Hire DevOps Engineer</Link></li>
                            </ul>
                        </div>

                        {/* CONTACT COLUMN */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <a href={`tel:${contact_phone}`} className="flex items-center gap-3">
                                        <img src="/flag/indian_flag.png" className="w-6" alt="indian flag" />
                                        {contact_phone}
                                    </a>
                                </li>
                            </ul>

                            <div className="mt-4">
                                <p className="font-semibold">Career:</p>
                                <a href={`mailto:${contact_email}`} className="text-sm">
                                    {contact_email}
                                </a>
                            </div>

                            {/* SOCIAL ICONS */}
                            <div className="flex gap-4 mt-4">
                                {[
                                    Facebook,
                                    Linkedin,
                                    Twitter,
                                    Instagram,
                                    Youtube
                                ].map((Icon, i) => (
                                    <Icon
                                        key={i}
                                        className="w-5 h-5 text-white hover:text-blue-400 transition"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="py-4 mt-6">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm">ApnaPayment © 2025 | All Rights Reserved</p>

                        <ul className="flex gap-6 text-sm flex-wrap">
                            <li><Link href="/about-us">About Us</Link></li>
                            {/* <li><a href="#">Career</a></li> */}
                            <li><Link href="/blogs">Blog</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            {Object.entries(legalPages).map(([slug, page]: any) => (
                                <li key={"legal-" + slug}>
                                    <Link href={`/${slug}`}>{page.title}</Link>
                                </li>
                            ))}
                            {/* <li><a href="#">Site Map</a></li> */}
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}
