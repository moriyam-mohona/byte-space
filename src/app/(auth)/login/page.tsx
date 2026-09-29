import Link from "next/link";

export const metadata = {
  title: "Login | ByteSpace",
  description: "Log in to your ByteSpace account",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white border border-neutral-200 shadow-xs space-y-6">
        <div className="space-y-1">
          <Link href="/" className="text-body-xs font-semibold text-primary hover:underline">
            ← ByteSpace
          </Link>
          <h1 className="text-heading-s text-neutral-950">Welcome back</h1>
          <p className="text-body-s text-neutral-500">Sign in to continue your learning journey.</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-label-s text-neutral-700 block mb-1">Email address</label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-primary text-body-m"
            />
          </div>
          <div>
            <label className="text-label-s text-neutral-700 block mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-primary text-body-m"
            />
          </div>
          <button className="w-full py-3 rounded-xl bg-primary text-white text-label-m hover:bg-primary-600 transition-colors">
            Sign In
          </button>
        </div>

        <p className="text-body-xs text-neutral-500 text-center">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-primary font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
