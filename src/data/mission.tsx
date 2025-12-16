import Image from "next/image";

const ImageCompo = ({
  imgUri,
  alt,
}: {
  imgUri: string;
  alt: string;
}) => (
  <div className="relative h-[15rem] w-full overflow-hidden rounded-md">
    <Image
      src={imgUri}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  </div>
);

export const mission_data = [
  {
    title: "Driving Digital Innovation for Modern Businesses",
    description:
      "We help organizations innovate faster by delivering scalable, secure, and future-ready digital solutions powered by modern technologies.",
    header: (
      <ImageCompo
        imgUri="/photo-1535223289827-42f1e9919769.jpeg"
        alt="Digital innovation and modern technology solutions"
      />
    ),
  },
  {
    title: "Transforming Businesses Through Technology",
    description:
      "From custom software to enterprise systems, we build technology solutions that improve efficiency, performance, and long-term business growth.",
    header: (
      <ImageCompo
        imgUri="/photo-1487058792275-0ad4aaf24ca7.jpeg"
        alt="Business transformation using technology solutions"
      />
    ),
  },
  {
    title: "Designing Seamless User Experiences",
    description:
      "We create intuitive, user-centric designs that enhance usability, engagement, and customer satisfaction across web and mobile platforms.",
    header: (
      <ImageCompo
        imgUri="/photo-1559028012-481c04fa702d.jpeg"
        alt="UI UX design and seamless user experience"
      />
    ),
  },
  {
    title: "Enhancing Collaboration & Digital Connectivity",
    description:
      "Our solutions improve team collaboration, communication, and workflow efficiency through smart integrations and connected digital systems.",
    header: (
      <ImageCompo
        imgUri="/photo-1522071820081-009f0129c71c.jpeg"
        alt="Team collaboration and digital connectivity solutions"
      />
    ),
  },
  {
    title: "Building Knowledge-Driven & Data-Powered Solutions",
    description:
      "We leverage data, analytics, and insights to develop intelligent software systems that support smarter decision-making and business outcomes.",
    header: (
      <ImageCompo
        imgUri="/photo-1504384308090-c894fdcc538d.jpeg"
        alt="Data driven and intelligent software solutions"
      />
    ),
  },
  {
    title: "Turning Innovative Ideas Into Scalable Products",
    description:
      "From concept to launch, we help businesses transform ideas into reliable, scalable, and high-quality digital products.",
    header: (
      <ImageCompo
        imgUri="/photo-1522071820081-009f0129c71c.jpeg"
        alt="Software product development from idea to launch"
      />
    ),
  },
  {
    title: "Exploring New Digital Frontiers & Emerging Technologies",
    description:
      "We continuously adopt emerging technologies to help businesses stay competitive, innovate faster, and unlock new digital opportunities.",
    header: (
      <ImageCompo
        imgUri="/photo-1504384308090-c894fdcc538d.jpeg"
        alt="Emerging technologies and future digital innovation"
      />
    ),
  },
];

