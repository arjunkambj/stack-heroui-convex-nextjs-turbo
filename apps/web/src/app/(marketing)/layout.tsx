import { Footer } from "@/components/marketing/Footer";
import { MarketingNavbar } from "@/components/marketing/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScroll>
      <div className="marketing-shell flex min-h-screen w-full flex-col items-center bg-background selection:bg-primary selection:text-primary-foreground">
        <MarketingNavbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
