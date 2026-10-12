import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h3 className="mb-3 text-2xl font-semibold">Profile</h3>

      <input
        defaultValue="alice"
        placeholder="username"
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-1.5"
      />

      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-1.5"
      />

      <input
        defaultValue="Alice"
        placeholder="First Name"
        id="wd-firstname"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-1.5"
      />

      <input
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-1.5"
      />

      <input
        defaultValue="2000-01-01"
        type="date"
        id="wd-dob"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-1.5"
      />

      <input
        defaultValue="alice@wonderland"
        type="email"
        id="wd-email"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-1.5"
      />

      <select
        defaultValue="FACULTY"
        id="wd-role"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-1.5"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <Link
        href="/account/signin"
        className="block w-full rounded bg-red-600 px-3 py-1.5 text-center text-white no-underline"
      >
        Sign out
      </Link>
    </div>
  );
}
