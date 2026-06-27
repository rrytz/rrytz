import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/10 text-center">
      <div className="max-w-7xl mx-auto px-6 text-white/25 text-[0.8rem] font-medium tracking-tight">
        <p>© {currentYear} <span className="text-[#3fffa8]">{portfolioData.personal.name}</span>. Crafted with precision.</p>
      </div>
    </footer>
  );
}
