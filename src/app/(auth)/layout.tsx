export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen w-full bg-[#003be2] text-white flex items-center justify-center py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* ─── Geometric Grid Overlay (88px square grid) ─── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30 select-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "88px 88px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  );
}
