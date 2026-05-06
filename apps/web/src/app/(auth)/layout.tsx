export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-dvh flex items-center justify-center w-full">
      {children}
    </div>
  );
}
