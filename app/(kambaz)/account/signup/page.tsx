"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAccountContext, type User } from "../AccountContext";

export default function Signup() {
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [error, setError] = useState("");

  const signup = () => {
    if (password !== verifyPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!username || !password) {
      setError("Please enter a username and password");
      return;
    }

    const newUser: User = {
      _id: Date.now().toString(),
      username: username,
      password: password,
      firstName: "",
      lastName: "",
      email: "",
      role: "STUDENT",
      loginId: username,
      section: "",
      lastActivity: "",
      totalActivity: "",
    };

    setCurrentUser(newUser);
    router.push("/account/profile");
  };

  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h3 className="mb-3 text-2xl font-semibold">Sign up</h3>

      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-1.5"
      />

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        type="password"
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-1.5"
      />

      <input
        value={verifyPassword}
        onChange={(e) => setVerifyPassword(e.target.value)}
        placeholder="verify password"
        type="password"
        className="wd-password-verify mb-2 w-full rounded border border-neutral-300 px-3 py-1.5"
      />

      {error && <p className="mb-2 text-red-600">{error}</p>}

      <button
        type="button"
        onClick={signup}
        className="block w-full rounded bg-blue-600 px-3 py-1.5 text-center text-white"
      >
        Sign up
      </button>

      <Link href="/account/signin" className="mt-2 block text-blue-600">
        Sign in
      </Link>
    </div>
  );
}
