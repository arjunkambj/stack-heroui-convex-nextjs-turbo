"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-dvh flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-semibold">Something went wrong</h2>
          <p className="text-muted-foreground">{error.message}</p>
          <button onClick={reset} className="text-primary underline">
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
