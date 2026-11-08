"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";

export default function Profile() {
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();

  const [profile, setProfile] = useState<User | null>(currentUser);

  if (!currentUser) {
    router.push("/account/signin");
    return null;
  }

  if (!profile) {
    return null;
  }

  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };

  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h3 className="mb-3 text-2xl font-semibold">Profile</h3>

      <input
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
        placeholder="username"
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-1.5"
      />

      <input
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
        placeholder="password"
        type="password"
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-1.5"
      />

      <input
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
        placeholder="First Name"
        id="wd-firstname"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-1.5"
      />

      <input
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
        placeholder="Last Name"
        id="wd-lastname"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-1.5"
      />

      {/* Personal extra field: date of birth */}
      <input
        type="date"
        id="wd-dob"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-1.5"
      />

      <input
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        type="email"
        id="wd-email"
        placeholder="Email"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-1.5"
      />

      <select
        value={profile.role}
        onChange={(e) =>
          setProfile({ ...profile, role: e.target.value as User["role"] })
        }
        id="wd-role"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-1.5"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
        <option value="TA">TA</option>
      </select>

      <button
        type="button"
        onClick={signout}
        id="wd-signout-btn"
        className="block w-full rounded bg-red-600 px-3 py-1.5 text-center text-white"
      >
        Sign out
      </button>
    </div>
  );
}
