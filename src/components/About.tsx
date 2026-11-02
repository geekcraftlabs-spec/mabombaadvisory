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
          <p>Sisa is a senior operator with over two decades of experience across mobility, FMCG and commercial leadership. He specialises in building and scaling supply-side operations, driving activation and retention, and leading high-performing market teams in complex, fast-moving environments.</p>
          <p>Throughout his career, Sisa has held senior roles in both global technology and consumer goods businesses, where he was responsible for growing markets, strengthening operational performance and translating strategy into practical, on-the-ground execution. His approach combines sharp commercial thinking with a deep understanding of the people who make operations work, from frontline partners to leadership teams.</p>
          <p>Today, Sisa advises founders and executives on go-to-market strategy, operational design and scalable growth, with particular depth in marketplace and mobility businesses.</p>
          <p>A former professional rugby player, he brings a team-first, high-performance mindset to every engagement. He works comfortably in isiXhosa, isiZulu, English and Afrikaans, which allows him to connect with diverse teams and communities across South Africa.</p>
        </div>
      </Reveal>
    </section>
  );
}
