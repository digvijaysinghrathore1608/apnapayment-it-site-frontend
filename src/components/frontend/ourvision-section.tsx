import Reveal from "@/components/frontend/Reveal";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function OurVisionSection() {
    return (
        <>
            {/* ourvision section start */}
            <Reveal>
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
                    <HoverEffect items={projects} />
                    <BackgroundBeams />
                </div>
            </Reveal >
            {/* ourvision section end */}
        </>
    )
}

export const projects = [
  {
    title: "Empowering Digital Growth",
    description:
      "Our vision is to empower businesses with intelligent, scalable, and future-ready digital solutions that help them grow in a rapidly evolving world.",
  },
  {
    title: "Technology That Moves Businesses Forward",
    description:
      "Our vision is to become a leading technology partner by delivering innovative solutions that simplify operations and accelerate business success.",
  },
  {
    title: "Transforming Ideas Into Powerful Digital Products",
    description:
      "Our vision is to enable organizations to turn their ideas into impactful digital products that create real value and long-term sustainability.",
  },
  {
    title: "Building the Future of Smart, Connected Businesses",
    description:
      "Our vision is to build a digitally connected ecosystem where every business—small or large—can leverage modern technology with ease.",
  },
  {
    title: "Making Technology Accessible for Every Business",
    description:
      "Our vision is to make advanced technology accessible, meaningful, and affordable for businesses across all industries.",
  },
  {
    title: "Leading the Path Toward Digital Transformation",
    description:
      "Our vision is to lead the path of digital transformation by continuously adopting new technologies and delivering solutions that empower innovation.",
  },
];