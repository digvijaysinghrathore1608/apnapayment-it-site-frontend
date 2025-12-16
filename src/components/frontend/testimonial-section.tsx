"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSection({heading="Our Evolution as a Software Development Company"}: {heading?: string}) {
    return (
        <>
            {/* expertise section start */}
            <div className="w-full">
                <div className="relative flex max-w-full flex-col items-center justify-center mx-2 sm:mx-16">
                    <div className="px-4 py-10 md:py-20">
                        {/* Heading */}
                        <div className="text-center">
                            <h2 className="text-xl sm:text-4xl font-bold">{heading}</h2>
                        </div>
                        <AnimatedTestimonials autoplay={true} testimonials={testimonials} />
                    </div>
                </div>
            </div>
        </>
    );
}