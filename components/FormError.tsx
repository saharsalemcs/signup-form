interface FormErrorProps {
  message?: string;
  id?: string;
  variant?: "inline" | "alert";
}

export default function FormError({
  message,
  id,
  variant = "inline",
}: FormErrorProps) {
  if (!message) return null;

  if (variant === "alert") {
    return (
      <p
        role="alert"
        id={id}
        className="rounded-default bg-danger-bg px-3 py-2 text-sm text-danger"
      >
        {message}
      </p>
    );
  }
  return (
    <p id={id} role="alert" className="text-xs text-danger">
      {message}
    </p>
  );
}
