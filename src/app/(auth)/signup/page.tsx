import { Metadata } from "next";
import { AuthVisualStage, SignupForm } from "@/features/auth";

export const metadata: Metadata = {
  title: "Sign Up | ByteSpace",
  description: "Create your ByteSpace account and start your learning and teaching journey today.",
};

export default function SignupPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      {/* Left Column: Visual & 3D Stage */}
      <div className="lg:col-span-6">
        <AuthVisualStage
          title="Sign up and come in"
          subtitle="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
        />
      </div>

      {/* Right Column: White Form Card */}
      <div className="lg:col-span-6 flex justify-center lg:justify-end">
        <SignupForm />
      </div>
    </div>
  );
}
