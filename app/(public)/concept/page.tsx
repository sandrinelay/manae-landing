import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export default function ConceptPage() {
  return (
    <div className="min-h-screen font-sans bg-neutral-50 text-neutral-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-neutral-900 mb-8">Le concept</h1>
        <p className="text-neutral-600">Page en construction.</p>
      </main>
      <Footer />
    </div>
  );
}
