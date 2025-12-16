import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { mission_data } from "@/data/mission";

export default function MissionSection() {
  return (
    <>
      {/* mission section start */}
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
          {mission_data.map((item, i) => (
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
      {/* mission section end */}
    </>
  )
}