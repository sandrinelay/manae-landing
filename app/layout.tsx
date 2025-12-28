import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "@/app/globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manae —  Vide ta tête. Respire",
  description:
    "Manae transforme ton vrac mental en clarté.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className={quicksand.variable}>
      <body className="min-h-screen flex flex-col bg-white text-neutral-900">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
