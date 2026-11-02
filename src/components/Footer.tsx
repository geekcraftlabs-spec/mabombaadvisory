import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-charcoal text-[#D6C8B4] border-t border-[#3A332D]">
      <div className="max-w-[1200px] mx-auto px-8 py-9 flex flex-wrap justify-between items-center gap-5 text-[14px]">
        <Logo size={40} variant="dark" />
        <p>© {new Date().getFullYear()} Mabomba Advisory · South Africa</p>
        <nav aria-label="Footer" className="flex gap-6">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
