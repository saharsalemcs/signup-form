# Sign Up Form — TypeScript + Zod

Small learning project: a sign up form built with **React Hook Form**,
**Zod**, and **TypeScript**.

## Main idea

The validation schema is written once in Zod, and the TypeScript type
is inferred from it — no duplicate types:

```ts
export const signUpSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;
```

## Structure

```
lib/validations/sign-up-schema.ts   → Zod schema
components/Input.tsx           → generic input field
components/FormError.tsx       → error message
components/signUpFields.ts     → list of fields
components/SignUpForm.tsx      → the form
app/signup/page.tsx                 → example page
```

## Run

```bash
npm install react-hook-form @hookform/resolvers
npm run dev
```
