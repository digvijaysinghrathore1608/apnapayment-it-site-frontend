import Reveal from "@/components/frontend/Reveal";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function MissionSection() {
    return (
        <>
            {/* mission section start */}
            <Reveal>
                <div className="relative flex w-full max-w-full flex-col items-start justify-center pt-10 sm:py-10 px-2 sm:px-16">
                    <span className="text-purple-500 text-lg md:text-xl font-bold">
                        Our Missions
                    </span>
                    <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-0">
                        <h2 className="mt-3 text-2xl sm:text-4xl font-bold leading-tight w-full max-w-full sm:max-w-2xl">
                            Empowering Businesses Through Innovative Technology Solutions
                        </h2>
                        <p className="text-gray-500 text-sm sm:text-base sm:font-bold w-full max-w-full sm:max-w-2xl">As a trusted technology partner, we deliver scalable and future-ready software solutions that help businesses grow, innovate, and stay competitive. From custom software development to digital transformation and automation, we provide end-to-end IT services designed to meet evolving industry demands.</p>
                    </div>

                    <BentoGrid className="w-full max-w-full mx-auto my-5">
                        {items.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                            />
                        ))}
                    </BentoGrid>
                </div>
            </Reveal>
            {/* mission section end */}
        </>
    )
}

const ImageCompo = ({imgUri}:{imgUri: string}) => (
    <img
        src={imgUri}
        className="w-full h-full max-h-[15rem] min-h-[10rem] object-cover rounded-md"
        alt="Digital Innovation"
    />
);
const items = [
  {
    title: "Driving Digital Innovation",
    description:
      "Empowering businesses with modern, scalable, and future-ready technology solutions.",
    header: (
      <ImageCompo imgUri="./photo-1535223289827-42f1e9919769.jpeg" />
    ),
  },
  {
    title: "Transforming Businesses with Technology",
    description:
      "Building digital products and IT systems that enhance performance and accelerate growth.",
    header: (
      <ImageCompo imgUri="./photo-1487058792275-0ad4aaf24ca7.jpeg" />
    ),
  },
  {
    title: "Designing Seamless User Experiences",
    description:
      "Creating clean, functional, and intuitive digital interfaces that users love.",
    header: (
      <ImageCompo imgUri="./photo-1559028012-481c04fa702d.jpeg" />
    ),
  },
  {
    title: "Enhancing Collaboration & Connectivity",
    description:
      "Developing solutions that improve communication, workflow efficiency, and team alignment.",
    header: (
      <ImageCompo imgUri="./photo-1522071820081-009f0129c71c.jpeg" />
    ),
  },
  {
    title: "Building Knowledge-Driven Solutions",
    description:
      "Leveraging data, insights, and research to create intelligent and reliable digital systems.",
    header: (
      <ImageCompo imgUri="./photo-1504384308090-c894fdcc538d.jpeg" />
    ),
  },
  {
    title: "Turning Ideas Into Reality",
    description:
      "Helping businesses bring innovative concepts to life with robust software engineering.",
    header: (
      <ImageCompo imgUri="./photo-1522071820081-009f0129c71c.jpeg" />
    ),
  },
  {
    title: "Exploring New Digital Frontiers",
    description:
      "Continuously adopting emerging technologies to create powerful new opportunities.",
    header: (
      <ImageCompo imgUri="./photo-1504384308090-c894fdcc538d.jpeg" />
    ),
  },
];
