import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h3 className="mb-3 text-2xl font-semibold">Sign in</h3>

      <input
        placeholder="username"
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-1.5"
        defaultValue="alice"
      />

      <input
        placeholder="password"
        type="password"
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-1.5"
        defaultValue="123"
      />

      <Link
        href="/dashboard"
        id="wd-signin-btn"
        className="block w-full rounded bg-blue-600 px-3 py-1.5 text-center text-white no-underline"
      >
        Sign in
      </Link>

      <Link
        href="/account/signup"
        id="wd-signup-link"
        className="mt-2 block text-blue-600"
      >
        Sign up
      </Link>
    </div>
  );
}
