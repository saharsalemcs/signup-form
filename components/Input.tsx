"use client";
import { InputHTMLAttributes, Ref, useState } from "react";
import { FieldError } from "react-hook-form";
import FormError from "./FormError";

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: string;
  type?: "text" | "email" | "password" | "number";
  error?: FieldError;
  ref?: Ref<HTMLInputElement>;
}

export default function Input({
  label,
  type = "text",
  error,
  id,
  className,
  ref,
  ...rest
}: InputProps) {
  const [visible, setVisible] = useState(false);
  const inputId = id ?? rest.name;
  const isPassword = type === "password";

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className="text-sm font-medium text-foreground">
        {label}
      </label>

      <div>
        <input
          id={inputId}
          ref={ref}
          type={isPassword && visible ? "text" : type}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={`w-full rounded-default border bg-surface px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground ${
            isPassword ? "pr-16" : ""
          } ${
            error
              ? "border-danger focus:border-danger"
              : "border-border focus:border-accent"
          } ${className}`}
          {...rest}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            tabIndex={-1}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            {visible ? "Hide" : "Show"}
          </button>
        )}
      </div>

      {error && <FormError id={`${inputId}-error`} message={error.message} />}
    </div>
  );
}
