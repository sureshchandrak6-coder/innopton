import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { DemoButton } from "@/components/demo-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "INNOPTON — AI-Powered Water Purification",
  description: "Predictive maintenance platform for portable water purifiers. Sense. Analyze. Purify. Predict.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-slate-50 text-slate-900 antialiased min-h-screen")}>
        {children}
        <DemoButton />
      </body>
    </html>
  );
}
