import type { Metadata } from "next";
import "../styles/globals.css";
import Providers from "@/components/Providers";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "@/stack/server";
import { Inter, Noto_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Databuddy } from "@databuddy/sdk/react";

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-app-sans",
});

export const metadata: Metadata = {
  title: "Unifeed | Business Phone Number That Works Everywhere",
  description:
    "Get a virtual business number in minutes. Call, text, record, and share with your team -- from any device.",
  icons: {
    icon: "/icon",
  },
  openGraph: {
    title: "Unifeed | Business Phone Number That Works Everywhere",
    description:
      "Get a virtual business number in minutes. Call, text, record, and share with your team -- from any device.",
    siteName: "Unifeed",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unifeed | Business Phone Number That Works Everywhere",
    description:
      "Get a virtual business number in minutes. Call, text, record, and share with your team -- from any device.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, "font-sans", notoSans.variable)}
      suppressHydrationWarning
    >
      <body className="font-sans" suppressHydrationWarning>
        <StackProvider app={stackServerApp}>
          <StackTheme>
            <Providers>{children}</Providers>
          </StackTheme>
        </StackProvider>
        <Databuddy clientId="89353fd5-c2c5-4dc2-8510-1360af7170dd" />
      </body>
    </html>
  );
}
