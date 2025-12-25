import type { Metadata } from "next";
import "@/app/globals.css";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Manae — alléger la charge mentale",
  description:
    "Manae est une application pensée pour aider les parents à organiser, prioriser et alléger leur charge mentale.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col bg-white text-neutral-900">

        <main className="flex-1">{children}</main>

      </body>
    </html>
  );
}
