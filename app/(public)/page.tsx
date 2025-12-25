'use client'
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans bg-neutral-50 text-neutral-900">
      <Header onSignupClick={() => console.log('A faire')} />

      <main>
        <Hero onSignupClick={() => console.log('A faire')} />
        <Features />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
