import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex h-dvh items-center justify-center bg-background">
      <Spinner className="size-6" />
    </div>
  );
}
