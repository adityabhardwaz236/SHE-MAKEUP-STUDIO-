import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { GalleryPageContent } from "@/components/InnerPages";

export const metadata: Metadata = {
  title: "Gallery | SHE Salon & Make-Up Studio",
  description: "Explore signature SHE hair, makeup and bridal beauty looks.",
};

export default function GalleryPage() {
  return (
    <main>
      <Header />
      <GalleryPageContent />
      <Footer />
    </main>
  );
}
