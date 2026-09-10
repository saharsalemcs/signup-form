import SignUpForm from "@/components/SignUpForm";
import { SignUpFormValues } from "@/lib/validations/sign-up-schema";

export default function SignUpPage() {
  const handleSubmit = async (values: SignUpFormValues) => {
    "use server";
    console.log(values);
  };
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-foreground">
            Create your account
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Fill in your details to get started
          </p>
        </div>

        <SignUpForm />
      </div>
    </main>
  );
}
