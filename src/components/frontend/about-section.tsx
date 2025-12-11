import { BackgroundBeams } from "@/components/ui/background-beams";
import { WobbleCard } from "@/components/ui/wobble-card";

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
                        {services.map((service, index) => (
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

export const services = [
    {
        title: "Custom Software Development",
        description:
            "We design and build scalable, secure, and tailored software solutions that streamline your business operations end-to-end.",
        bg: "bg-pink-800",
    },
    {
        title: "Web & Mobile App Development",
        description:
            "High-performance websites and mobile apps crafted to deliver seamless user experiences and strong digital presence.",
        bg: "",
    },
    {
        title: "Cloud & DevOps Solutions",
        description:
            "Deploy, scale, and manage applications with modern cloud infrastructure and automated DevOps pipelines.",
        bg: "bg-blue-900",
    },
    {
        title: "Business Process Automation",
        description:
            "Simplify repetitive tasks and improve workflow efficiency with smart automation and integration services.",
        bg: "",
    },
    {
        title: "IT Consulting & Digital Strategy",
        description:
            "Expert guidance to help you adopt the right technologies, reduce costs, and build a future-ready digital roadmap.",
        bg: "bg-pink-800",
    },
    {
        title: "Cybersecurity & Data Protection",
        description:
            "Protect your business with advanced security solutions—from threat monitoring to data backup and compliance.",
        bg: "bg-blue-900",
    },
];