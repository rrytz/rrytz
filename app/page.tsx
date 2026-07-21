import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NetworkCanvas from "@/components/NetworkCanvas";
import Blobs from "@/components/Blobs";
import ScrollProgress from "@/components/ScrollProgress";
import CursorTrail from "@/components/CursorTrail";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] transition-colors duration-500 selection:bg-[#7DF9C2] selection:text-[#080808]">
      <ScrollProgress />
      {/* Background Layers */}
      <NetworkCanvas />
      <Blobs />

      {/* Cursor trail — desktop only */}
      <CursorTrail />

      {/* Page Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Philosophy />
        <Projects />
        <Experience />
        <Stack />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
