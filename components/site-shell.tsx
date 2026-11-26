import type { ReactNode } from "react";
import Backdrop from "@/components/backdrop";
import Nav from "@/components/nav";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="frame" />
      <div className="site-shell relative isolate flex min-h-svh flex-col p-[14px]">
        <Backdrop />
        <Nav />
        {children}
      </div>
    </>
  );
}
