import type { Metadata } from "next";

import { Hero } from "@/components/marketing/Hero";
import { Feature } from "@/components/marketing/Feature";
import Divider from "@/components/marketing/Divider";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { Testimonial } from "@/components/marketing/Testimonial";
import { Faq } from "@/components/marketing/FAQ";
import { Pricing } from "@/components/marketing/Pricing";

export const metadata: Metadata = {
  title: "Unifeed | Track Any Account Across All Socials",
  description:
    "Unifeed tracks all your creators, competitors, and campaigns across TikTok, Instagram, YouTube, and X — no passwords required.",
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

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <HowItWorks />
      <Divider />
      <Feature />
      <Divider />
      <Testimonial />
      <Divider />
      <Faq />
      <Divider />
      <Pricing />
    </>
  );
}
