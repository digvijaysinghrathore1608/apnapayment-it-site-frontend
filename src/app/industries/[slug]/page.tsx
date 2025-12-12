import { notFound } from "next/navigation";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { industryDetails } from "@/data/industries";


// -------- DYNAMIC METADATA ----------
export async function generateMetadata({ params }: any) {
    const resolvedParams = await params;
    const industry = industryDetails[resolvedParams.slug];

    if (!industry) {
        return { title: "Industry Not Found" };
    }

    return {
        title: `${industry.title} | Apna IT Solutions`,
        description: industry.description,
    };
}

// -------- PAGE COMPONENT ----------
export default async function IndustryDetailPage({ params }: any) {
    const resolvedParams = await params;
    const industry = industryDetails[resolvedParams.slug];

    if (!industry) return notFound();

    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-center pt-5 bg-white dark:bg-black sm:items-start space-y-5">

            {/* ------------------ HERO SECTION ------------------ */}
            <section className="relative text-white flex w-full max-w-full flex-col items-center justify-center bg-neutral-950 py-20 sm:py-25 px-2 sm:px-16">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold">
                        {industry.title}
                    </h1>
                    <p className="text-gray-300 max-w-3xl mx-auto mt-4 text-lg">
                        {industry.description}
                    </p>
                </div>
                <BackgroundBeams />
            </section>

            {/* ------------------ CONTENT SECTION ------------------ */}
            <section className="max-w-5xl mx-auto px-6 py-16">

                {/* LONG DESCRIPTION */}
                <p className="text-gray-700 leading-relaxed text-lg">
                    {industry.longDescription}
                </p>

                {/* FEATURES LIST */}
                <h2 className="text-3xl font-semibold mt-12 mb-6">
                    What’s Included
                </h2>

                <ul className="space-y-4">
                    {industry.points.map((point: string, i: number) => (
                        <li key={i} className="flex items-center gap-3">
                            <Check className="h-5 w-5 text-green-600" />
                            <span className="text-gray-800 text-lg">{point}</span>
                        </li>
                    ))}
                </ul>

                {/* TECH STACK */}
                <h2 className="text-3xl font-semibold mt-10 mb-6">
                    Technologies We Use
                </h2>

                <div className="flex flex-wrap gap-3">
                    {industry.technologies.map((tech: string, i: number) => (
                        <span
                            key={i}
                            className="px-4 py-2 bg-gray-100 border rounded-full text-sm text-gray-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex flex-wrap justify-between items-center mt-10 p-8 border rounded-2xl bg-gray-50">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">
                            Need this service for your business?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Let’s build something amazing together. Contact us today!
                        </p>
                    </div>
                    <div>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
                        >
                            Contact Us <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
