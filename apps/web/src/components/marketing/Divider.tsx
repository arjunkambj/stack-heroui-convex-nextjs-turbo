export default function Divider({ className }: { className?: string }) {
  return (
    <div className={`w-full bg-background ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="relative w-full h-[1px] overflow-visible">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/20 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  );
}