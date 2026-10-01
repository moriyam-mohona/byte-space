export default function AuthLoading() {
  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center animate-pulse py-6 sm:py-10">
      {/* Left Column: Visual Stage Skeleton (Desktop) */}
      <div className="lg:col-span-6 space-y-6 hidden lg:block">
        <div className="h-10 w-3/4 bg-white/15 rounded-xl" />
        <div className="h-5 w-full bg-white/10 rounded-md" />
        <div className="h-5 w-2/3 bg-white/10 rounded-md" />
        <div className="h-72 bg-white/10 rounded-3xl mt-8" />
      </div>

      {/* Right Column: Form Card Skeleton */}
      <div className="lg:col-span-6 flex justify-center lg:justify-end">
        <div className="w-full max-w-[480px] bg-white rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl">
          <div className="h-8 w-2/5 bg-neutral-200 rounded-lg mx-auto" />
          <div className="space-y-4 pt-2">
            <div className="h-12 bg-neutral-100 rounded-xl" />
            <div className="h-12 bg-neutral-100 rounded-xl" />
            <div className="h-12 bg-neutral-100 rounded-xl" />
          </div>
          <div className="h-12 bg-neutral-900/10 rounded-full mt-4" />
        </div>
      </div>
    </div>
  );
}
