import Image from "next/image";

interface LogoProps {
  className?: string
  markOnly?: boolean
}

export default function Logo({ className, markOnly = false }: LogoProps) {
  return (
    <div
      className={`group flex cursor-pointer items-center gap-2.5${className ? ` ${className}` : ""}`}
    >
      <Image
        alt=""
        aria-hidden="true"
        className="h-7 w-7 transition-opacity group-hover:opacity-85"
        height={28}
        src="/icon.svg"
        width={28}
      />
      {!markOnly && (
        <span className="text-lg font-display font-bold tracking-tight text-foreground transition-colors group-hover:text-accent">
          Unifeed
        </span>
      )}
    </div>
  )
}
