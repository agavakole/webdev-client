"use client";

import Link from "next/link";
import "../kambaz.css";
import { useAccountContext } from "./AccountContext";

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();

  const links = currentUser ? ["profile"] : ["signin", "signup"];

  return (
    <div id="wd-account-navigation" className="wd list-group text-sm">
      {links.map((link) => (
        <Link
          key={link}
          href={`/account/${link}`}
          className="list-group-item border-0 text-red-600"
        >
          {link === "signin"
            ? "Signin"
            : link === "signup"
              ? "Signup"
              : "Profile"}
        </Link>
      ))}
    </div>
  );
}
