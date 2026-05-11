"use client";

import { Button } from "@heroui/react";
import { motion } from "motion/react";
import Link from "next/link";

const textContainerVariants = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
  initial: {},
};

const textVariants = {
  animate: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" as const },
    y: 0,
  },
  initial: { opacity: 0, y: 30 },
};

const imageVariants = {
  animate: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.3, duration: 0.8, ease: "easeInOut" as const },
    y: 0,
  },
  initial: { opacity: 0, scale: 0.8, y: 40 },
};

const metrics = [
  ["18.4M", "tracked views"],
  ["42%", "avg. engagement lift"],
  ["$312K", "attributed revenue"],
] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-[60dvh] w-full flex-col gap-12 px-4 pb-20 pt-24 sm:pt-28">
      <motion.div
        animate="animate"
        className="relative z-10 flex flex-col items-center gap-4"
        initial="initial"
        variants={textContainerVariants}
      >
        <motion.p
          className="text-center text-sm text-accent"
          variants={textVariants}
        >
          Creator campaign intelligence
        </motion.p>
        <motion.h1
          className="mt-2 max-w-5xl text-center text-5xl font-bold leading-none sm:text-6xl lg:text-7xl"
          variants={textVariants}
        >
          Track every creator, post, click, and contract in one place
        </motion.h1>
        <motion.p
          className="max-w-3xl text-center text-base leading-tight text-muted sm:text-lg"
          variants={textVariants}
        >
          Unifeed keeps creator performance, campaign attribution, and team
          workflows synced across TikTok, Instagram, YouTube, and X without
          passwords or messy spreadsheets.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={textVariants}
        >
          <Link href="/sign-in">
            <Button size="lg">Start tracking</Button>
          </Link>
          <Link href="#features">
            <Button size="lg" variant="ghost">
              View features
            </Button>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        animate="animate"
        className="relative z-10 mx-auto flex min-h-96 w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-surface/80 p-4 shadow-2xl shadow-foreground/10"
        initial="initial"
        variants={imageVariants}
      >
        <div className="flex items-center justify-between border-b border-border/70 pb-4">
          <div>
            <p className="text-sm font-semibold">Campaign Overview</p>
            <p className="text-xs text-muted">Spring creator launch</p>
          </div>
          <div className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            Live
          </div>
        </div>
        <div className="grid flex-1 gap-4 py-4 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.5rem] bg-background p-4">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-medium">Tracked channels</p>
              <p className="text-xs text-muted">Updated 4 min ago</p>
            </div>
            <div className="flex h-56 items-end gap-3">
              {[42, 68, 51, 86, 73, 92, 64, 78].map((height, index) => (
                <div
                  className="flex flex-1 items-end rounded-full bg-surface-secondary"
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
          <div className="grid gap-4">
            {metrics.map(([value, label]) => (
              <div className="rounded-[1.5rem] bg-background p-5" key={label}>
                <p className="text-3xl font-semibold">{value}</p>
                <p className="text-sm text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
