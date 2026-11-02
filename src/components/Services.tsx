import { Reveal } from "./Reveal";

const services = [
  {
    title: "Mobility & e-hailing",
    desc: "Market launch, driver supply, activation and retention, and the daily operating rhythm that keeps a platform reliable.",
    items: ["Go-to-market and market entry", "Driver acquisition and activation", "Operations playbooks and KPIs"],
    icon: <path d="M5 17h14l-1.5-5.5a2 2 0 0 0-1.9-1.5H8.4a2 2 0 0 0-1.9 1.5L5 17z M8 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z M16 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z M12 4v3 M9.5 5.5h5" />
  },
  {
    title: "Fleet management",
    desc: "Fleets that earn: vehicle utilisation, driver partnerships, cost control and the systems that let a fleet run without constant firefighting.",
    items: ["Fleet set-up and growth plans", "Utilisation and cost reviews", "Driver partner programmes"],
    icon: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18 M8 13h3 M8 16h6 M15 13h1" /></>
  },
  {
    title: "Commercial sales & marketing",
    desc: "Route-to-market, sales execution and brand activation, drawn from years leading commercial teams at major FMCG brands.",
    items: ["Commercial strategy", "Sales team structure and execution", "Brand and trade activation"],
    icon: <><path d="M4 19V10 M10 19V5 M16 19v-6 M3 19h18 M14 8l3-3 3 3" /></>
  },
  {
    title: "Sport & partnerships",
    desc: "Bringing business discipline to sport, and sport to business: sponsorships, partnerships and commercial programmes in rugby, cricket and beyond.",
    items: ["Sponsorship and partnership strategy", "Commercial programmes for teams and events", "Brand and athlete collaborations"],
    icon: <><ellipse cx="12" cy="12" rx="9" ry="6" transform="rotate(-35 12 12)" /><path d="M9 15l6-6 M10.5 10.5l1.5 1.5 M12 9l1.5 1.5 M9 12l1.5 1.5" /></>
  }
];

export function Services() {
  return (
    <section id="services" className="max-w-[1200px] mx-auto px-8 py-28">
      <Reveal>
        <p className="mb-4 text-[12px] font-bold tracking-[0.25em] text-deep-earth">WHAT WE DO</p>
        <h2 className="mb-5 max-w-[760px] font-serif font-bold text-[clamp(36px,4vw,54px)] leading-[1.08]">
          Four areas where operating experience turns into results.
        </h2>
        <p className="mb-14 max-w-[680px] text-[18px] text-[#5A4E44]">
          Every engagement is grounded in real operating experience, not theory. We work alongside your team to solve the problems that matter most right now.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <div className="flex flex-col h-full bg-white rounded-2xl p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="w-[52px] h-[52px] rounded-full bg-charcoal flex items-center justify-center mb-6">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D9774F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
              </div>
              <h3 className="mb-3 font-serif font-bold text-[26px] leading-[1.15]">{s.title}</h3>
              <p className="mb-5 text-[15px] text-[#5A4E44] flex-grow">{s.desc}</p>
              <ul className="flex flex-col gap-1.5 text-[14px] list-disc pl-4 marker:text-clay">
                {s.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
