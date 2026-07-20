import type { Metadata } from "next";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ContactPageContent } from "@/components/InnerPages";

export const metadata: Metadata = {
  title: "Contact & Booking | SHE Salon & Make-Up Studio",
  description: "Request your SHE salon appointment for hair, makeup, bridal or skin services.",
};

export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactPageContent><Booking /></ContactPageContent>
      <Footer />
    </main>
  );
}
