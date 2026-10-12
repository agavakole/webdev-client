import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz-account">
      <div className="flex gap-4">
        {/* Sidebar */}
        <div className="hidden w-[140px] shrink-0 md:block">
          <AccountNavigation />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
