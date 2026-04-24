"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How does Meyoo calculate profit?",
    answer:
      "We combine revenue with product cost (COGS), shipping, discounts, transaction fees, refunds, and ad spend to show true profit by order, SKU, and campaign.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "Connect Shopify and your ad channels. Add product costs (upload or edit inline). You’ll see profit start to populate right away.",
  },
  {
    question: "Which integrations are available?",
    answer:
      "Shopify, Meta Ads, Google Ads, TikTok Ads, Snapchat, and Google Analytics—with more coming soon.",
  },
  {
    question: "Can I export my data?",
    answer:
      "Yes. Export CSVs or copy to clipboard for quick shares. (API and scheduled exports on Growth+ plans.)",
  },
  {
    question: "Is my data secure?",
    answer:
      "We use modern encryption and strict access controls. Your data is yours—we never sell it. (Add your formal security/legal language here.)",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. Manage your plan from your account settings with one click.",
  },
];

const Faq = () => {
  return (
    <section
      id="faq"
      className="relative py-20 sm:py-24 lg:py-28 w-full scroll-mt-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col gap-12 sm:gap-16">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 mb-1 sm:mb-1.5 px-0 py-0 text-primary/80">
            <span className="text-sm uppercase tracking-[0.15em] font-medium text-primary/70">
              FAQ
            </span>
          </div>
          <h2 className="text-center text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight leading-tight">
            Common Questions
          </h2>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-center text-base sm:text-lg text-muted-foreground">
            We&apos;re here to help you get the most out of Unifeed.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold tracking-tight">
              Need personalized help?
            </h3>
            <p className="text-base text-muted-foreground">
              Drop a note to our
              <a
                href="mailto:hey@meyoo.io"
                className="mx-1 whitespace-nowrap underline text-primary hover:text-primary/80 transition-colors"
              >
                support team
              </a>
              and we&apos;ll point you in the right direction.
            </p>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-fit"
            >
              <a href="mailto:hey@meyoo.io">
                Email hey@meyoo.io
              </a>
            </Button>
          </div>
          <Accordion type="single" collapsible className="w-full border-0">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { Faq };