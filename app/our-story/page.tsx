import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { StoryPageContent } from "@/components/InnerPages";

export const metadata: Metadata = {
  title: "Our Story | SHE Salon & Make-Up Studio",
  description: "Discover the calm, care and craft behind the SHE beauty experience.",
};

export default function OurStoryPage() {
  return (
    <main>
      <Header />
      <StoryPageContent />
      <Footer />
    </main>
  );
}
