export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen w-full bg-primary-800 text-white flex items-center justify-center py-12 sm:py-16 lg:py-26 pb-40 overflow-hidden bg-hero-grid">
      <div className="relative z-10 container w-full">{children}</div>
    </main>
  );
}
