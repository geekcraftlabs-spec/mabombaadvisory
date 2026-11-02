import { Reveal } from "./Reveal";

export function Approach() {
  return (
    <section id="approach" className="bg-ivory">
      <div className="max-w-[1200px] mx-auto px-8 py-28">
        <Reveal>
          <p className="mb-4 text-[12px] font-bold tracking-[0.25em] text-deep-earth">HOW WE WORK</p>
          <h2 className="mb-14 max-w-[760px] font-serif font-bold text-[clamp(36px,4vw,54px)] leading-[1.08]">
            Hands-on, from first diagnosis to delivery.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { num: "01", title: "Understand", desc: "We start on the ground: your numbers, your people and your customers, to find what is really holding growth back." },
            { num: "02", title: "Design", desc: "A clear, prioritised plan with owners, timelines and the measures that will show us it is working." },
            { num: "03", title: "Deliver", desc: "We stay close through implementation, building the routines and capability your team needs to carry it forward." }
          ].map((step, i) => (
            <Reveal key={step.num} delay={i * 0.1}>
              <div className="border-t-2 border-charcoal pt-6">
                <p className="mb-3 font-serif text-5xl font-bold text-deep-earth">{step.num}</p>
                <h3 className="mb-2.5 text-[19px] font-bold">{step.title}</h3>
                <p className="text-[16px] text-[#5A4E44]">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
