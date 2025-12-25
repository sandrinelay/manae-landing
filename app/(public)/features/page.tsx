import { Header } from "@/components/sections/Header";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen font-sans bg-neutral-50 text-neutral-900">
      <Header />
      <main className="py-12">
        <Features />
      </main>
      <Footer />
    </div>
  );
}
