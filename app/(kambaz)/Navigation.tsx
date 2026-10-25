"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCalendarDays } from "react-icons/fa6";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser, FaCircleQuestion } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { label: "Dashboard", path: "/dashboard", icon: AiOutlineDashboard },
  { label: "Courses", path: "/dashboard", icon: LiaBookSolid },
  { label: "Calendar", path: "/calendar", icon: FaRegCalendarDays },
  { label: "Inbox", path: "/inbox", icon: FaInbox },
  { label: "Labs", path: "/labs", icon: LiaCogSolid },
  { label: "History", path: "/history", icon: FaRegCalendarDays },
] as const;

export default function KambazNavigation() {
  const pathname = usePathname() ?? "";
  const accountActive = pathname.includes("/account");

  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="block bg-black py-3 text-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/NEU.png"
          width={75}
          height={75}
          alt="Northeastern University"
          className="mx-auto"
        />
      </a>

      <Link
        href="/account"
        id="wd-account-link"
        className={`block py-3 text-center text-sm no-underline ${
          accountActive ? "bg-white text-red-600" : "bg-black text-white"
        }`}
      >
        <FaRegCircleUser
          className={`inline-block text-3xl ${
            accountActive ? "text-red-600" : "text-white"
          }`}
        />
        <br />
        Account
      </Link>

      {LINKS.map((link) => {
        const active =
          link.label === "Courses"
            ? pathname.includes("/courses")
            : pathname.includes(link.path);
        const Icon = link.icon;

        return (
          <Link
            key={link.label}
            href={link.path}
            id={`wd-${link.label.toLowerCase()}-link`}
            className={`block py-3 text-center text-sm no-underline ${
              active ? "bg-white text-red-600" : "bg-black text-white"
            }`}
          >
            <Icon className="inline-block text-3xl text-red-500" /> <br />
            {link.label}
          </Link>
        );
      })}

      <Link
        href="/labs"
        id="wd-ai-nav-help"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaCircleQuestion className="inline-block text-3xl text-red-600" />
        <br />
        Help
      </Link>
    </nav>
  );
}
