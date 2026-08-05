import { createFileRoute } from "@tanstack/react-router";

import { AuroraBackground } from "@/components/portfolio/AuroraBackground";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Skills } from "@/components/portfolio/Skills";
import { WhyChooseMe } from "@/components/portfolio/WhyChooseMe";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop } from "@/components/portfolio/BackToTop";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Preloader } from "@/components/portfolio/Preloader";

const title = "Zehra AI Solutions — AI Web Developer & Website Designer";
const description =
  "Zehra AI Solutions builds modern AI-powered websites, landing pages and web apps with React, Tailwind CSS and AI-assisted development.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Zehra",
          jobTitle: "AI Web Developer",
          worksFor: { "@type": "Organization", name: "Zehra AI Solutions" },
          email: "hello@zehraaisolutions.com",
          address: { "@type": "PostalAddress", addressCountry: "PK" },
          knowsAbout: ["React", "Tailwind CSS", "AI Web Development", "Landing Pages", "SEO"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <AuroraBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Skills />
        <WhyChooseMe />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
