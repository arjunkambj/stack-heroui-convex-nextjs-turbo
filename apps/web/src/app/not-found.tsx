export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-semibold">Not Found</h2>
      <p className="text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <a href="/" className="text-primary underline">
        Go home
      </a>
    </div>
  );
}
