/* eslint-disable @next/next/no-img-element */
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="max-w-[1200px] mx-auto px-8 py-28 flex flex-wrap items-center gap-16">
      <Reveal className="flex-1 w-full md:w-auto min-w-[280px] max-w-[440px]">
        <img
          src="/portrait.jpg"
          alt="Sisa Mafu, Founder of Mabomba Advisory"
          className="block w-full aspect-[4/5] object-cover object-[center_15%] rounded-2xl bg-[#D6C8B4] shadow-lg"
        />
      </Reveal>

      <Reveal className="flex-1 w-full md:w-auto min-w-[280px]" delay={0.1}>
        <p className="mb-4 text-[12px] font-bold tracking-[0.25em] text-deep-earth">ABOUT THE FOUNDER</p>
        <h2 className="mb-1.5 font-serif font-bold text-[clamp(36px,4vw,54px)] leading-[1.08]">Sisa Mafu</h2>
        <p className="mb-7 text-[13px] font-bold tracking-[0.2em] text-deep-earth">FOUNDER</p>

        <div className="flex flex-col gap-4 text-[17px]">
          <p>Sisa is a senior operator and strategic advisor with 15 years of experience spanning mobility, technology-enabled marketplaces, FMCG and commercial leadership. He specialises in architecting and scaling supply-side operations, engineering activation and retention strategies, and leading high-performing market teams through periods of rapid growth and transformation.</p>
          <p>Across his career, Sisa has held senior leadership roles within global technology and consumer goods organisations, where he was accountable for market expansion, operational excellence and the translation of strategic intent into measurable, on-the-ground results. His approach integrates rigorous commercial acumen and data-led decision making with a nuanced understanding of the people who power operations, from frontline partners to executive leadership.</p>
          <p>Today, Sisa partners with founders, executives and investors on go-to-market strategy, operating model design and sustainable, scalable growth, with distinctive depth in platform and mobility businesses.</p>
          <p>A former professional rugby player, he brings the discipline, resilience and team-first, high-performance mindset of elite sport to every engagement. Fluent in isiXhosa, isiZulu, English and Afrikaans, he connects authentically with diverse teams, stakeholders and communities across South Africa.</p>
        </div>
      </Reveal>
    </section>
  );
}