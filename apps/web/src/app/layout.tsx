import type { Metadata } from "next";
import "../styles/globals.css";
import Providers from "@/components/Providers";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "@/stack/server";
import {
  Bricolage_Grotesque,
  Plus_Jakarta_Sans,
  Inter,
  Figtree,
} from "next/font/google";
import { Databuddy } from "@databuddy/sdk/react";

const figtreeHeading = Figtree({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const appSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-app-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Unifeed | Track Any Account Across All Socials",
  description:
    "Unifeed tracks all your creators, competitors, and campaigns across TikTok, Instagram, YouTube, and X — no passwords required.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Unifeed | Track Any Account Across All Socials",
    description:
      "Unifeed tracks all your creators, competitors, and campaigns across TikTok, Instagram, YouTube, and X — no passwords required.",
    siteName: "Unifeed",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unifeed | Track Any Account Across All Socials",
    description:
      "Unifeed tracks all your creators, competitors, and campaigns across TikTok, Instagram, YouTube, and X — no passwords required.",
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
      className={`${bricolage.variable} ${appSans.variable} font-sans ${inter.variable} ${figtreeHeading.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="font-sans" suppressHydrationWarning>
        <StackProvider app={stackServerApp}>
          <StackTheme>
            <Providers>{children}</Providers>
          </StackTheme>
        </StackProvider>
        <Databuddy clientId="" />
      </body>
    </html>
  );
}
