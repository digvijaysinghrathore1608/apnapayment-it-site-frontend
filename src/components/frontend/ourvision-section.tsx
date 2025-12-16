import { BackgroundBeams } from "@/components/ui/background-beams";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { vision_points } from "@/data/vision";

export default function OurVisionSection() {
    return (
        <>
            {/* ourvision section start */}
                <div className="relative flex w-full max-w-full flex-col items-start justify-center bg-neutral-950 pt-10 sm:py-10 px-2 sm:px-16">
                    <span className="text-yellow-400 text-lg md:text-xl font-bold">
                        Our Vision
                    </span>
                    <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-0">
                        <h2 className="text-white mt-3 text-2xl sm:text-4xl font-bold leading-tight w-full max-w-full sm:max-w-2xl">
                            Pioneering the Future of Digital Excellence
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base sm:font-bold w-full max-w-full sm:max-w-2xl">Dive into our world of innovations, where each project tells a story of industry transformation and breakthrough success. Discover the power of strategic digital solutions tailored to achieve remarkable outcomes with our AI development agency expertise.</p>
                    </div>
                    <HoverEffect items={vision_points} />
                    <BackgroundBeams />
                </div>
            {/* ourvision section end */}
        </>
    )
}
