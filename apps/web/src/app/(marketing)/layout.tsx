import { MarketingFooter } from "@/components/marketing/footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="marketing-shell flex min-h-screen w-full flex-col items-center bg-background selection:bg-primary selection:text-primary-foreground">
      <main className="flex-1 w-full">{children}</main>
      <MarketingFooter />
    </div>
  );
}
