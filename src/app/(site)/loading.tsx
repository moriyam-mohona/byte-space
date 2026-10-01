export default function SiteLoading() {
  return (
    <div className="w-full animate-pulse">
      {/* Hero Section Skeleton */}
      <section className="bg-primary-800 bg-hero-grid text-white min-h-[580px] lg:min-h-[640px] flex items-center justify-center pt-24 pb-16">
        <div className="container max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
          <div className="h-8 w-44 bg-white/10 rounded-full" />
          <div className="h-14 sm:h-18 w-11/12 max-w-2xl bg-white/15 rounded-2xl" />
          <div className="h-5 w-3/4 max-w-lg bg-white/10 rounded-lg" />
          <div className="h-14 w-full max-w-xl bg-white/20 rounded-full mt-4" />
        </div>
      </section>

      {/* Featured Courses Section Skeleton */}
      <section className="container py-16 sm:py-20 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="h-9 w-64 bg-neutral-200 rounded-xl" />
            <div className="h-4 w-80 bg-neutral-100 rounded-md" />
          </div>
          <div className="h-10 w-32 bg-neutral-100 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="rounded-3xl border border-neutral-200/80 p-5 space-y-4 bg-white shadow-xs"
            >
              <div className="h-48 sm:h-52 bg-neutral-200 rounded-2xl w-full" />
              <div className="space-y-2 pt-1">
                <div className="h-6 bg-neutral-200 rounded-md w-3/4" />
                <div className="h-4 bg-neutral-100 rounded-md w-full" />
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                <div className="h-7 w-28 bg-neutral-200 rounded-full" />
                <div className="h-7 w-16 bg-neutral-200 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
