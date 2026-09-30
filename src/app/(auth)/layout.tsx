export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen w-full bg-primary-800 text-white flex items-center justify-center py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* ─── Geometric Grid Overlay (88px square grid) ─── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-70 select-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 2px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 2px, transparent 1px)
          `,
          backgroundSize: "88px 88px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container w-full ">{children}</div>
    </main>
  );
}
