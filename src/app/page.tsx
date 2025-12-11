import AboutSection from "@/components/frontend/about-section";
import BrandsSection from "@/components/frontend/brand-section";
import ExpertiseSection from "@/components/frontend/expertise-section";
import FAQSection from "@/components/frontend/faq-section";
import Footer from "@/components/frontend/footer-section";
import HeroSection from "@/components/frontend/hero-section";
import MissionSection from "@/components/frontend/mission-section";
import OurVisionSection from "@/components/frontend/ourvision-section";
import TestimonialSection from "@/components/frontend/testimonial-section";
import { Metadata } from "next";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const domain = (await headers()).get("host") || "localhost:3000";
  const protocol = domain.includes("localhost") ? "http" : "https";

  const fullUrl = `${protocol}://${domain}`;

  return {
    metadataBase: new URL(fullUrl),

    title: "Apna IT Solution | Software Development, Web Design & IT Services",
    description:
      "Apna IT Solution is a trusted software development company offering web development, mobile apps, UI/UX design, cloud deployment, automation, and IT consulting. We help businesses build scalable and modern digital solutions.",

    keywords: [
      "Apna IT Solution",
      "IT company India",
      "software development",
      "web development",
      "app development",
      "IT services",
      "cloud solutions",
      "UI UX design",
      "backend development",
      "digital transformation",
    ],

    authors: [{ name: "Apna IT Solution" }],
    robots: "index, follow",

    openGraph: {
      title: "Apna IT Solution | Software Development & IT Services",
      description:
        "We provide professional software development, web applications, mobile apps, and cloud solutions to help businesses grow digitally.",
      type: "website",
      url: "/",
      images: [
        {
          url: "/images/og-image.png", // Auto becomes https://apnaitsolution.com/images/og-image.png
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Apna IT Solution - Software Development Company",
      description:
        "A startup IT company offering modern web development, app development, API integration, and cloud services.",
      images: ["/images/og-image.png"], // Auto domain added
    },
    other: {
      "revisit-after": "1 day",     // SEO hint
      "refresh": "86400",           // Auto refresh in 24 hours
    },
  };
}

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between pt-5 bg-white dark:bg-black sm:items-start space-y-5">
      {/* hero section start */}
      <HeroSection />
      {/* hero section end */}

      {/* about section start */}
      <AboutSection />
      {/* about section end */}

      {/* mission section start */}
      <MissionSection />
      {/* mission section end */}

      {/* overvision section start */}
      <OurVisionSection />
      {/* overvision section end */}

      {/* expertise section start */}
      <ExpertiseSection />
      {/* expertise section end */}

      {/* brand section start */}
      <BrandsSection />
      {/* brand section end */}

      {/* testimonial section start */}
      <TestimonialSection />
      {/* testimonial section end */}

      {/* faq section start */}
      <FAQSection />
      {/* faq section end */}

      <Footer />
    </main>
  );
}
