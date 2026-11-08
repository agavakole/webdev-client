"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as db from "../../database";
import { useAccountContext } from "../AccountContext";

export default function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { setCurrentUser } = useAccountContext();
  const router = useRouter();

  const signin = () => {
    const user = db.users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password,
    );

    if (!user) return;

    setCurrentUser(user);
    router.push("/dashboard");
  };

  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h3 className="mb-3 text-2xl font-semibold">Sign in</h3>

      <input
        placeholder="username"
        id="wd-username"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-1.5"
      />

      <input
        placeholder="password"
        type="password"
        id="wd-password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-1.5"
      />

      <input
        id="wd-ai-signin-note"
        placeholder="sample note"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-1.5"
      />

      <button
        type="button"
        onClick={signin}
        id="wd-signin-btn"
        className="block w-full rounded bg-blue-600 px-3 py-1.5 text-center text-white"
      >
        Sign in
      </button>

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
