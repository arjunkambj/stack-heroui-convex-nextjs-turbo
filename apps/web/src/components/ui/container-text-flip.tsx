"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export interface ContainerTextFlipProps {
  words?: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const safeWords = words.length > 0 ? words : [""];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState<number | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!textRef.current) {
      return;
    }

    setWidth(textRef.current.scrollWidth + 30);
  }, [currentWordIndex]);

  useEffect(() => {
    if (currentWordIndex >= safeWords.length) {
      setCurrentWordIndex(0);
    }
  }, [currentWordIndex, safeWords.length]);

  useEffect(() => {
    if (safeWords.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % safeWords.length);
    }, interval);

    return () => window.clearInterval(intervalId);
  }, [interval, safeWords.length]);

  const currentWord = safeWords[currentWordIndex] ?? "";

  return (
    <span
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-lg pt-2 pb-3 text-center text-4xl font-bold text-black transition-[width] ease-in-out md:text-7xl dark:text-white",
        "[background:linear-gradient(to_bottom,#f3f4f6,#e5e7eb)]",
        "shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,_0_4px_8px_#d1d5db]",
        "dark:[background:linear-gradient(to_bottom,#374151,#1f2937)]",
        "dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052]",
        className,
      )}
      style={{
        width: width ? `${width}px` : undefined,
        transitionDuration: `${animationDuration}ms`,
      }}
    >
      <span
        key={currentWord}
        ref={textRef}
        className={cn(
          "inline-block whitespace-nowrap animate-in fade-in-0",
          textClassName,
        )}
      >
        {currentWord.split("").map((letter, index) => (
          <span
            key={`${currentWord}-${index}`}
            className="inline-block animate-in fade-in-0"
            style={{
              animationDelay: `${index * 20}ms`,
              animationDuration: `${animationDuration}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </span>
    </span>
  );
}
