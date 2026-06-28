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
    <main className="relative min-h-screen bg-[#050d1a] selection:bg-[#3fffa8] selection:text-[#050d1a]">
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
