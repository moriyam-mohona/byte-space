export default function Loading() {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center py-20">
      <div className="relative flex items-center justify-center">
        {/* Outer glowing pulse ring */}
        <div className="w-14 h-14 rounded-full border-4 border-primary-200 border-t-primary animate-spin" />
        <div className="absolute w-6 h-6 rounded-full bg-secondary animate-ping opacity-30" />
      </div>
      <p className="mt-5 font-body text-body-s text-neutral-500 font-medium tracking-wide">
        Loading ByteSpace...
      </p>
    </div>
  );
}
