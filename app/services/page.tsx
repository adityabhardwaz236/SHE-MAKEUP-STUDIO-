import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ServicesPageContent } from "@/components/InnerPages";

export const metadata: Metadata = {
  title: "Services | SHE Salon & Make-Up Studio",
  description: "Explore bespoke hair, makeup, bridal and skin services at SHE.",
};

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <ServicesPageContent />
      <Footer />
    </main>
  );
}
