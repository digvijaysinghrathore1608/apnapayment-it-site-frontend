import { BackgroundBeams } from "@/components/ui/background-beams";
import { WobbleCard } from "@/components/ui/wobble-card";
import { about_services } from "@/data/services";

export default function AboutSection() {
    return (
        <>
            {/* about section start */}
            <div className="relative flex w-full max-w-full flex-col items-start justify-center bg-neutral-950 pt-10 sm:py-10 px-2 sm:px-16">
                <span className="text-yellow-400 text-lg md:text-xl font-bold">
                    Looking for Reliable IT Solutions?
                </span>
                <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-0">
                    <h2 className="text-white mt-3 text-2xl sm:text-4xl font-bold leading-tight w-full max-w-full sm:max-w-2xl">
                        Discover how technology can streamline and grow your business.
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base sm:font-bold w-full max-w-full sm:max-w-2xl">We deliver modern IT solutions that fit seamlessly into your business—helping you optimize operations, overcome challenges, and stay ahead with practical, real-world technology.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full my-10">
                    {about_services.map((service, index) => (
                        <WobbleCard
                            key={index}
                            containerClassName={`col-span-1 min-h-[300px] ${service.bg}`}
                        >
                            <h2 className="max-w-80 text-left text-balance text-2xl md:text-xl lg:text-3xl font-semibold text-white">
                                {service.title}
                            </h2>
                            <p className="mt-4 text-left text-base/6 text-neutral-200">
                                {service.description}
                            </p>
                        </WobbleCard>
                    ))}
                </div>
                <BackgroundBeams />
            </div>
            {/* about section end */}
        </>
    )
}