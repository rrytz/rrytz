"use client";

export default function Navbar() {
  const navLinks = [
    { name: "Philosophy", href: "#philosophy" },
    { name: "Projects", href: "#projects" },
    { name: "Stack", href: "#stack" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] py-5 bg-[#080808]/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="font-syne font-extrabold text-xl tracking-tighter text-white">
          RL<span className="text-[#7DF9C2]">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/45 tracking-wider hover:text-[#7DF9C2] transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
