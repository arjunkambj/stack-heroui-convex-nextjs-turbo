"use client";

import { motion } from "motion/react";

const cardContainerVariants = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
  initial: {},
};

const cardVariants = {
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" as const },
    y: 0,
  },
  initial: { opacity: 0, scale: 0.95, y: 30 },
};

const steps = [
  {
    description:
      "Add public creator profiles, campaign details, deliverables, and the links you want to attribute.",
    step: "1",
    title: "Set up your creator roster",
  },
  {
    description:
      "Unifeed keeps social performance, link clicks, contract status, and campaign data in sync.",
    step: "2",
    title: "Track every moving part",
  },
  {
    description:
      "See what is working, renew top creators, and share clean campaign reports with your team.",
    step: "3",
    title: "Act on the signal",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 py-24">
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-accent">
          Process
        </span>
        <h2 className="text-4xl font-bold leading-tight">How it works</h2>
        <span className="text-lg leading-relaxed text-muted">
          Three simple steps from scattered creator work to a clear operating
          system.
        </span>
      </div>
      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
        initial="initial"
        variants={cardContainerVariants}
        viewport={{ amount: 0.3, once: true }}
        whileInView="animate"
      >
        {steps.map((step) => (
          <motion.div key={step.step} variants={cardVariants}>
            <Card
              description={step.description}
              step={step.step}
              title={step.title}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const Card = ({
  title,
  description,
  step,
}: {
  title: string;
  description: string;
  step: string;
}) => (
  <div className="flex h-full w-full flex-col gap-6 rounded-[2rem] border border-border/50 bg-surface p-2">
    <div className="flex h-70 w-full items-end rounded-[1.5rem] bg-background p-5">
      <div className="grid w-full grid-cols-4 gap-2">
        {[32, 58, 76, 44].map((height, index) => (
          <div
            className="flex h-36 items-end rounded-full bg-surface-secondary"
            key={height + index}
          >
            <div
              className="w-full rounded-full bg-accent"
              style={{ height: `${height}%` }}
            />
          </div>
        ))}
      </div>
    </div>
    <div className="flex flex-col gap-2 px-2 pb-6">
      <div className="mr-auto rounded-2xl bg-background px-3 py-0.5 text-sm font-semibold">
        Step {step}
      </div>
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="text-sm text-muted">{description}</p>
    </div>
  </div>
);
