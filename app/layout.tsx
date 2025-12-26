import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "@/app/globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manae — organise tes pensées",
  description:
    "Manae, organise ton quotidien en fonction de ton énergie.",
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
