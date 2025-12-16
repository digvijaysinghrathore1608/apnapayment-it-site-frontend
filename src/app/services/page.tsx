import { BackgroundBeams } from "@/components/ui/background-beams";
import { site_name } from "@/data/business";
import { services } from "@/data/services";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: `Services | ${site_name}`,
    description: "We provide IT services like Web Development, App Development, UI/UX, Cloud Deployment & Automation.",
};

export default function ServicesPage() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-center pt-5 bg-white dark:bg-black sm:items-start space-y-5">
            {/* Hero Section */}
            <div className="relative text-white flex w-full max-w-full flex-col items-center justify-center bg-neutral-950 py-20 sm:py-25 px-2 sm:px-16">
                <h1 className="text-4xl font-bold">Our Services</h1>
                <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-center">
                    We deliver modern digital solutions that help your business grow.
                </p>
                <BackgroundBeams />
            </div>


            {/* Services Grid */}
            <div className="max-w-6xl mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white shadow-lg rounded-2xl border hover:shadow-xl transition"
                    >
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>

                        <ul className="space-y-2">
                            {service.points.map((p, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    {p}
                                </li>
                            ))}
                        </ul>
                        <Link
                            href={`/services/${service.slug}`}
                            className="mt-5 inline-block text-sm text-blue-600 font-medium hover:underline"
                        >
                            Know More →
                        </Link>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="relative text-white flex w-full max-w-full flex-col items-center justify-centerpt-10 px-2 sm:px-16 my-10">
                <div className="text-center">
                    <Link
                        href="/contact"
                        className="px-8 py-3 bg-black text-white rounded-full text-lg hover:bg-gray-800"
                    >
                        Get a Quote
                    </Link>
                </div>
            </div>
        </main>
    );
}
