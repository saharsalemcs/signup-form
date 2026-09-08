import z from "zod";

export const signUpSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(1, { message: "Full Name is required" })
      .min(3, { message: "full Name must be at least 3 characters" })
      .max(30, { message: "full Name too long" }),

    email: z
      .string()
      .trim()
      .min(1, { message: "Email is required" })
      .email({ message: "Enter a valid email" }),

    password: z
      .string()
      .trim()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" }),

    confirmPassword: z
      .string()
      .trim()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" }),

    terms: z
      .boolean()
      .refine((val) => val === true, { message: "you must agree with terms" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwords do not match",
    path: ["confirmPassword"],
  });

export type SignUpFormValues = z.infer<typeof signUpSchema>;
