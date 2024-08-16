import type { Metadata } from "next";
import "./globals.css";

import { Onborda, OnbordaProvider } from "onborda";
import { steps } from "../lib/steps";

import { TourCard } from "@/components/TourCard";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="p-4">
        <OnbordaProvider>
          <Onborda
            steps={steps}
            cardComponent={TourCard}
            shadowOpacity="0.8"
            cardTransition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            {children}
          </Onborda>
        </OnbordaProvider>
      </body>
    </html>
  );
}
