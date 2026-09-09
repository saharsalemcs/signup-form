import Input from "./Input";
import { signUpFields } from "./signUpFields";

export default function SignUpForm() {
  return (
    <form className="flex w-full max-w-md flex-col gap-5">
      {signUpFields.map((field) => (
        <Input
          key={field.name}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
        />
      ))}

      <div className="flex flex-col gap-1.5">
        <label className="flex items-start gap-2 text-sm text-foreground">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-border text-accent focus:ring-accent"
            // {...register("terms")}
          />
          <span>I agree to the Terms of Service and Privacy Policy</span>
        </label>
        {/* <FormError message={errors.terms?.message} /> */}
      </div>
    </form>
  );
}
