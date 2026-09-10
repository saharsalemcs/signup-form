"use client";

import { useForm } from "react-hook-form";
import Input from "./Input";
import { signUpFields } from "./signUpFields";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SignUpFormValues,
  signUpSchema,
} from "@/lib/validations/sign-up-schema";
import FormError from "./FormError";

interface SignUpFormProps {
  onSubmit?: (values: SignUpFormValues) => Promise<void> | void;
}

export default function SignUpForm({ onSubmit }: SignUpFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const submitHandler = async (values: SignUpFormValues) => {
    console.log("Form Submitted Successfully:", values);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("Your account has been created");
    reset();
  };

  return (
    <form
      className="flex w-full max-w-md flex-col gap-5"
      onSubmit={handleSubmit(submitHandler)}
    >
      {signUpFields.map((field) => (
        <Input
          key={field.name}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          error={errors[field.name]}
          {...register(field.name)}
        />
      ))}

      <div className="flex flex-col gap-1.5">
        <label className="flex items-start gap-2 text-sm text-foreground">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-border text-accent focus:ring-accent"
            {...register("terms")}
          />
          <span>I agree to the Terms of Service and Privacy Policy</span>
        </label>
      </div>
      <FormError message={errors.terms?.message} />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-default bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Creating account..." : "Create account"}
      </button>
    </form>
  );
}
