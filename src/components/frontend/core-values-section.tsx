"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Award, Handshake, Lightbulb, Puzzle, UserStar } from "lucide-react";
import { i } from "motion/react-client";

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We thrive on creativity and seek out new ideas that push the boundaries of technology.",
  },
  {
    icon: Puzzle,
    title: "Integrity",
    desc: "We believe in honesty and transparency in all our dealings, fostering trust with our clients and partners.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    desc: "We work together, valuing diverse perspectives to achieve common goals and deliver exceptional results.",
  },
  {
    icon: UserStar,
    title: "Customer-Centricity",
    desc: "Our clients are at the heart of everything we do; we strive to exceed their expectations.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We pursue excellence in our work, continuously improving to deliver high-quality outcomes.",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="w-full py-12 bg-neutral-950">
      <div className="relative flex max-w-full flex-col items-center justify-center px-2 sm:px-16 text-white">
        {/* Heading Row */}
        <div className="w-full flex flex-wrap justify-between gap-6 pb-8">
          <div>
            <span className="text-sm font-medium tracking-wide uppercase" style={{ color: "#F5A403" }}>Our Core Values</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2">Our Identity and Approach</h2>
          </div>
        </div>

        {/* Carousel */}
        <Carousel opts={{ align: "center" }} className="w-full">
          <CarouselContent>
            {coreValues.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-10/12 md:basis-5/12 lg:basis-3/12"
              >
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-md text-center h-full flex flex-col justify-between">
                  <div className="p-4">
                    <item.icon className="mx-auto h-20 w-20 text-blue-500" />
                  </div>

                  <h3 className="mt-4 font-semibold text-xl">{item.title}</h3>
                  <p className="mt-2">{item.desc}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
