import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Temporary Welcome & Verification Hero */}
      <section className="container-custom py-20 lg:py-32">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-label-s border border-primary-200">
            <span>✨</span>
            <span>Style Guide Active</span>
          </div>

          <h1 className="text-heading-l text-neutral-950">
            ByteSpace — Learn Skills that Set the World in Motion.
          </h1>

          <p className="text-body-l text-neutral-600">
            A production-quality course marketplace built with Next.js, React, TypeScript, and Tailwind CSS.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/design-system"
              className="px-6 py-3.5 rounded-xl bg-primary text-white text-label-m hover:bg-primary-600 transition-colors shadow-xs"
            >
              View Style Guide &amp; Tokens →
            </Link>
            <div className="px-6 py-3.5 rounded-xl bg-secondary text-neutral-950 text-label-m font-semibold border border-secondary-400">
              12-Col Grid Active
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
