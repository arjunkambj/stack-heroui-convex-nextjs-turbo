import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 40 40"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-foreground"
      >
        {/* Left stroke — tall with slanted top and rounded bottom */}
        <path d="M6 4L18 10V26C18 29.3137 15.3137 32 12 32C8.68629 32 6 29.3137 6 26V4Z" />
        {/* Right stroke — shorter with flat top and angled bottom */}
        <path d="M22 14H34V24L22 30V14Z" />
      </svg>
      <span className="text-lg font-display font-bold tracking-tight text-foreground">
        Unifeed
      </span>
    </div>
  );
}
