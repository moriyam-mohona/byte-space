import { Metadata } from "next";
import { AuthVisualStage, LoginForm } from "@/features/auth";

export const metadata: Metadata = {
  title: "Sign In | ByteSpace",
  description:
    "Sign in to your ByteSpace account to access your courses and creators.",
};

export default function LoginPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      {/* Left Column: Visual & 3D Stage */}
      <div className="lg:col-span-6">
        <AuthVisualStage
          title="Sign in with ease"
          subtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
        />
      </div>

      {/* Right Column: White Form Card */}
      <div className="lg:col-span-6 flex justify-center lg:justify-end">
        <LoginForm />
      </div>
    </div>
  );
}
