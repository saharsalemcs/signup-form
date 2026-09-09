import { SignUpFormValues } from "@/lib/validations/sign-up-schema";
import { InputProps } from "./Input";

export interface SignUpFieldConfig {
  name: keyof Omit<SignUpFormValues, "terms">;
  label: string;
  type: NonNullable<InputProps["type"]>;
  placeholder?: string;
}

export const signUpFields: SignUpFieldConfig[] = [
  {
    name: "fullName",
    label: "Full name",
    type: "text",
    placeholder: "Enter your full name",
  },
  {
    name: "email",
    label: "Email address",
    type: "email",
    placeholder: "you@example.com",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "••••••••",
  },
  {
    name: "confirmPassword",
    label: "Confirm password",
    type: "password",
    placeholder: "••••••••",
  },
];
