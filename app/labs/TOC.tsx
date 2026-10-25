"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  {
    href: "/labs",
    id: "wd-home-link",
    label: "Home",
    match: (p: string) => p === "/labs",
  },
  {
    href: "/labs/lab1",
    id: "wd-toc-lab1-link",
    label: "Lab 1",
    match: (p: string) => p.startsWith("/labs/lab1"),
  },
  {
    href: "/labs/lab2",
    id: "wd-toc-lab2-link",
    label: "Lab 2",
    match: (p: string) => p.startsWith("/labs/lab2"),
  },
  {
    href: "/labs/lab3",
    id: "wd-toc-lab3-link",
    label: "Lab 3",
    match: (p: string) => p.startsWith("/labs/lab3"),
  },
  {
    href: "https://kambaz.dev/book/ch3",
    id: "wd-toc-book-ch3-link",
    label: "Book Ch3",
    match: () => false,
  },
  {
    href: "/",
    id: "wd-kambaz-link",
    label: "Kambaz",
    match: () => false,
  },
  {
    href: "https://webdev-client.vercel.app/book/ch1",
    id: "wd-toc-book-link",
    label: "Chapter 1",
    match: () => false,
  },
] as const;

const activeStyle = {
  backgroundColor: "#2563eb",
  color: "white",
  borderRadius: "4px",
  padding: "2px 8px",
  textDecoration: "none",
};

export default function TOC() {
  const pathname = usePathname() ?? "";

  return (
    <ul>
      <li>Kole Agava.</li>
      {LINKS.map((link) => {
        const active = link.match(pathname);

        return (
          <li key={link.id}>
            <Link
              href={link.href}
              id={link.id}
              style={active ? activeStyle : undefined}
              aria-current={active ? "page" : undefined}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
