import ReactMarkdown from "react-markdown";
import { legalPages } from "@/data/legalPages";
import { notFound } from "next/navigation";
import { BackgroundBeams } from "@/components/ui/background-beams";

// -------- DYNAMIC METADATA ----------
export async function generateMetadata({ params }: any) {
    const resolvedParams = await params;
    const legalPage = legalPages[resolvedParams.slug];

    if (!legalPage) {
        return { title: "Legal Page Not Found" };
    }

    return {
        title: `${legalPage.title} | Apna IT Solutions`,
        description: `Read our ${legalPage.title} page for important information regarding our policies.`,
    };
}

export default async function LegalPage({ params }: { params: { slug: string } }) {
    const resolvedParams = await params;
    const page = legalPages[resolvedParams.slug];

    if (!page) {
        return notFound();
    }

    return (
        <main className="flex w-full flex-col items-center justify-between pt-5 bg-white dark:bg-black sm:items-start space-y-5">
            {/* Hero Section */}
            <div className="relative text-white flex w-full max-w-full flex-col items-center justify-center bg-neutral-950 py-20 sm:py-25 px-2 sm:px-16">
                <h1 className="text-4xl font-bold">{page.title}</h1>
                <BackgroundBeams />
            </div>
            <section className="w-full pt-5 py-10 px-2 sm:px-16">
                <div className="max-w-4xl mx-auto px-4">

                    <h1 className="text-4xl font-bold mb-4">{page.title}</h1>

                    <p className="text-sm mb-8">
                        Last Updated: {page.updatedOn}
                    </p>

                    <div className="prose prose-invert leading-relaxed">
                        <ReactMarkdown>{page.content}</ReactMarkdown>
                    </div>

                </div>
            </section>
        </main>
    );
}
