import AboutSection from "@/components/frontend/about-section";
import BrandsSection from "@/components/frontend/brand-section";
import ExpertiseSection from "@/components/frontend/expertise-section";
import FAQSection from "@/components/frontend/faq-section";
import Footer from "@/components/frontend/footer-section";
import HeroSection from "@/components/frontend/hero-section";
import MissionSection from "@/components/frontend/mission-section";
import OurVisionSection from "@/components/frontend/ourvision-section";
import TestimonialSection from "@/components/frontend/testimonial-section";

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
