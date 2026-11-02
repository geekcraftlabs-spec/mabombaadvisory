import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Approach } from "@/components/Approach";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollMenu } from "@/components/ScrollMenu";

export default function Home() {
  return (
    <main id="top">
      <Header />
      <Hero />
      <Services />
      <Approach />
      <About />
      <Contact />
      <Footer />
      <ScrollMenu />
    </main>
  );
}
