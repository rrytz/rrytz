import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NetworkCanvas from "@/components/NetworkCanvas";
import Blobs from "@/components/Blobs";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#080808] selection:bg-[#7DF9C2] selection:text-[#080808]">
      {/* Background Layers */}
      <NetworkCanvas />
      <Blobs />
      
      {/* Page Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Philosophy />
        <Projects />
        <Stack />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
