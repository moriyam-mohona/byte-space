import Link from "next/link";

export const metadata = {
  title: "Courses | ByteSpace",
  description: "Browse all courses on ByteSpace",
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container-custom py-16 space-y-8">
        <div>
          <div className="text-xs font-mono text-primary font-bold uppercase tracking-widest mb-1">
            Catalog
          </div>
          <h1 className="text-heading-m text-neutral-950">Explore Courses</h1>
          <p className="text-body-m text-neutral-600 mt-2">
            Discover cutting-edge courses in design, development, and engineering.
          </p>
        </div>

        <div className="p-12 rounded-2xl bg-neutral-50 border border-neutral-200 text-center space-y-4">
          <p className="text-body-l text-neutral-700">Course marketplace catalog will be rendered here.</p>
          <Link
            href="/"
            className="inline-flex px-5 py-2.5 rounded-lg bg-primary text-white text-label-s hover:bg-primary-600 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
