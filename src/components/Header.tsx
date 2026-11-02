import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="bg-charcoal text-ivory">
      <div className="max-w-[1200px] mx-auto px-8 py-[22px] flex flex-wrap justify-between items-center gap-5">
        <a href="#top" aria-label="Mabomba Advisory home">
          <Logo variant="dark" />
        </a>
        <nav aria-label="Main" className="flex flex-wrap items-center gap-7 text-[15px] font-medium">
          <a href="#services" className="text-sand hover:text-clay transition-colors">Services</a>
          <a href="#approach" className="text-sand hover:text-clay transition-colors">Approach</a>
          <a href="#about" className="text-sand hover:text-clay transition-colors">About</a>
          <a href="#contact" className="inline-flex items-center justify-center min-h-[44px] px-[22px] rounded-full bg-clay text-charcoal font-bold hover:bg-white transition-colors">
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
