import Booking from "@/components/Booking";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Story from "@/components/Story";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Story />
      <Services />
      <Gallery />
      <Experience />
      <Booking />
      <Footer />
    </main>
  );
}
