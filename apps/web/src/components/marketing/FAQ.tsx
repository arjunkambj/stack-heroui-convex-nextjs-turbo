"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is Unifeed and why is it useful?",
    answer:
      "Unifeed is a social media tracking platform that lets you monitor any creator, competitor, or campaign across TikTok, Instagram, YouTube, and X without requiring passwords or account access.",
  },
  {
    question: "Why should I use Unifeed for social media tracking?",
    answer:
      "Unifeed provides instant insights on engagement rates, follower growth, content performance, and viral trends. It helps you stay ahead of competitors and optimize your content strategy.",
  },
  {
    question: "How do I effectively track accounts with Unifeed?",
    answer:
      "Simply paste any profile URL from TikTok, Instagram, YouTube, or X. Unifeed will automatically start tracking engagement, content performance, and growth metrics in real-time.",
  },
  {
    question: "What are the benefits of using Unifeed for social media analytics?",
    answer:
      "Unifeed provides immediate insights on trending content, best posting times, and audience preferences. It helps you make data-driven decisions to grow your audience faster.",
  },
];

interface FaqProps {
  className?: string;
}

const Faq = ({ className }: FaqProps) => {
  return (
    <section className={cn("py-20 sm:py-24 lg:py-28", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-semibold">
              Need Help?
              <br />
              <span className="text-muted-foreground/70">
                We&apos;re here to assist.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Still have questions? Feel free to contact our friendly
              <Link href="mailto:hey@unifeed.io" className="mx-1 whitespace-nowrap underline">
                support team
              </Link>
              specialists.
            </p>
            <Button size="lg" variant="outline" className="w-fit">
              View all FAQs
            </Button>
          </div>
          <Accordion type="multiple">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { Faq };