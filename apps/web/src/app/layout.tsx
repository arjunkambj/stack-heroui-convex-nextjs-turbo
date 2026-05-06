import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../index.css";
import Providers from "@/components/providers";
import { StackProvider } from "@stackframe/stack";
import { stackServerApp } from "@/stack/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "next-hero-stack-convex-starter",
  description: "next-hero-stack-convex-starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-dvh w-full`}
      >
        <StackProvider app={stackServerApp}>
          <Providers>{children}</Providers>
        </StackProvider>
      </body>
    </html>
  );
}
