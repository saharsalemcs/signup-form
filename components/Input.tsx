import { InputHTMLAttributes, Ref } from "react";
import { FieldError } from "react-hook-form";

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: string;
  type?: "text" | "email" | "password" | "number";
  error?: FieldError;
  ref?: Ref<HTMLInputElement>;
}

export default function Input() {
  return <input />;
}
