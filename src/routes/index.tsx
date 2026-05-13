import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Particles from "@/components/Particles";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";
import Services from "@/components/Services";
import Certificates from "@/components/Certificates";
import FatherTribute from "@/components/FatherTribute";
import MotherTribute from "@/components/MotherTribute";
import IntegrityTribute from "@/components/IntegrityTribute";
import GitHubContributions from "@/components/GitHubContributions";
import { About, Experience, Projects, Skills, Education, Contact, Footer } from "@/components/Sections";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mohammed Zahid — Software Engineer" },
      { name: "description", content: "Portfolio of Mohammed Zahid, Software Engineer specializing in Android, full stack, and scalable application development." },
      { property: "og:title", content: "Mohammed Zahid — Software Engineer" },
      { property: "og:description", content: "Android & full stack developer building elegant, scalable applications." },
    ],
  }),
});

function Index() {
  return (
    <div className="dark relative min-h-screen overflow-x-hidden">
      <Loader />
      <ScrollProgress />
      <Particles />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <GitHubContributions />
        <Skills />
        <Education />
        <Certificates />
        <FatherTribute />
        <MotherTribute />
        <IntegrityTribute />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
