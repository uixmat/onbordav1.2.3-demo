import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/themes";

import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

import { Onborda, OnbordaProvider } from "onborda";
import { steps } from "../lib/steps";

import { TourCard } from "@/components/tourcard";
import { Header } from "@/components/organisms/header";

export const metadata: Metadata = {
  title: "Onborda - Product tour's for Next.js",
  description:
    "A modern product tour library for Next.js powered by Framer Motion",
};

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dm_sans.variable} ${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <OnbordaProvider>
            <Onborda
              steps={steps}
              cardComponent={TourCard}
              shadowOpacity="0.8"
              cardTransition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              <Header />
              <div className="space-y-16">{children}</div>
            </Onborda>
          </OnbordaProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
