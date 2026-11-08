import type { ProfileErrors } from "./profile";

export default function ProfileAlert({
  id,
  submitted,
  errors,
}: {
  id: string;
  submitted: boolean;
  errors: ProfileErrors;
}) {
  if (!submitted) return null;

  const count = Object.keys(errors).length;

  return (
    <div
      id={id}
      role={count === 0 ? "status" : "alert"}
      className="mb-3 rounded border border-neutral-300 p-3"
    >
      {count === 0 ? "Profile saved." : `Please fix ${count} field(s) below.`}
    </div>
  );
}
