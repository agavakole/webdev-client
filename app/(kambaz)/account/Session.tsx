"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useAccountContext } from "./AccountContext";
import { profile } from "./client";

export default function Session({ children }: { children: ReactNode }) {
  const [pending, setPending] = useState(true);
  const { setCurrentUser } = useAccountContext();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const currentUser = await profile();
        setCurrentUser(currentUser);
      } catch {
        setCurrentUser(null);
      } finally {
        setPending(false);
      }
    };

    fetchProfile();
  }, [setCurrentUser]);

  if (pending) {
    return null;
  }

  return children;
}
