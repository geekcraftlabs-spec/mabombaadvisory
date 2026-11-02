import { ZigZag } from "./ZigZag";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="bg-charcoal text-ivory">
      <ZigZag id="bandContact" />
      <div className="max-w-[1200px] mx-auto px-8 pt-24 pb-28 flex flex-wrap gap-16">
        
        <Reveal className="flex-1 w-full md:w-auto min-w-[280px]">
          <p className="mb-4 text-[12px] font-bold tracking-[0.25em] text-clay">GET IN TOUCH</p>
          <h2 className="mb-5 font-serif font-bold text-[clamp(36px,4vw,54px)] leading-[1.08]">
            Let&apos;s talk about what you&apos;re building.
          </h2>
          <p className="mb-10 max-w-[480px] text-[18px] text-[#D6C8B4]">
            Share a little about your business and the challenge in front of you. I&apos;ll come back to you within one business day.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold tracking-[0.2em] text-clay">EMAIL</span>
              <a href="mailto:info@mabombaadvisory.co.za" className="text-[18px] hover:text-clay transition-colors break-all">info@mabombaadvisory.co.za</a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold tracking-[0.2em] text-clay">PHONE / WHATSAPP</span>
              <a href="tel:+27710518506" className="text-[18px] hover:text-clay transition-colors">+27 71 051 8506</a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold tracking-[0.2em] text-clay">LINKEDIN</span>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-[18px] hover:text-clay transition-colors">[your LinkedIn profile]</a>
            </div>
          </div>
        </Reveal>

        <Reveal className="flex-1 w-full md:w-auto min-w-[280px]" delay={0.1}>
          <form 
            action="https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT" 
            method="POST"
            className="bg-ivory text-charcoal rounded-2xl p-6 md:p-9 flex flex-col gap-5"
          >
            <h3 className="mb-1 font-serif font-bold text-[30px] leading-[1.1]">Send an enquiry</h3>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[180px] flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-semibold">Your name</label>
                <input required id="name" name="name" type="text" autoComplete="name" className="min-h-[46px] px-3.5 border border-[#B9AA94] rounded-xl bg-white text-[15px] focus:outline-none focus:border-deep-earth focus:ring-1 focus:ring-deep-earth" />
              </div>
              <div className="flex-1 min-w-[180px] flex flex-col gap-1.5">
                <label htmlFor="company" className="text-sm font-semibold">Company</label>
                <input id="company" name="company" type="text" autoComplete="organization" className="min-h-[46px] px-3.5 border border-[#B9AA94] rounded-xl bg-white text-[15px] focus:outline-none focus:border-deep-earth focus:ring-1 focus:ring-deep-earth" />
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[180px] flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-semibold">Email</label>
                <input required id="email" name="email" type="email" autoComplete="email" className="min-h-[46px] px-3.5 border border-[#B9AA94] rounded-xl bg-white text-[15px] focus:outline-none focus:border-deep-earth focus:ring-1 focus:ring-deep-earth" />
              </div>
              <div className="flex-1 min-w-[180px] flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-semibold">Phone (optional)</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" className="min-h-[46px] px-3.5 border border-[#B9AA94] rounded-xl bg-white text-[15px] focus:outline-none focus:border-deep-earth focus:ring-1 focus:ring-deep-earth" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="topic" className="text-sm font-semibold">What can we help with?</label>
              <select id="topic" name="topic" className="min-h-[46px] px-3 border border-[#B9AA94] rounded-xl bg-white text-[15px] focus:outline-none focus:border-deep-earth">
                <option>Mobility & e-hailing</option>
                <option>Fleet management</option>
                <option>Commercial sales & marketing</option>
                <option>Sport & partnerships</option>
                <option>Something else</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-semibold">Tell us about the challenge</label>
              <textarea required id="message" name="message" rows={5} className="p-3.5 border border-[#B9AA94] rounded-xl bg-white text-[15px] focus:outline-none focus:border-deep-earth focus:ring-1 focus:ring-deep-earth resize-y" />
            </div>

            <button type="submit" className="min-h-[52px] rounded-full bg-red-earth text-white font-bold text-[16px] hover:bg-deep-earth transition-colors cursor-pointer mt-2">
              Send enquiry
            </button>
            <p className="text-sm text-[#5A4E44] text-center mt-1">
              Prefer to talk? <a href="tel:+27710518506" className="text-deep-earth font-semibold hover:underline">[Book a 30-minute call]</a>
            </p>
          </form>
        </Reveal>

      </div>
    </section>
  );
}
