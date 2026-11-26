import Link from "next/link";
import SiteShell from "@/components/site-shell";

const link =
  "relative inline-block mt-8 transition-colors hover:text-accent max-md:hidden " +
  "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-[calc(100%-0.12em)] " +
  "after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 " +
  "hover:after:scale-x-100";

const NotFound = () => (
  <SiteShell>
    <main className="px-10 py-24 text-center">
      <h1 className="text-6xl">404</h1>
      <p className="mt-4 text-fg/60">Page not found.</p>
      <Link href="/" className={link}>
        Back home
      </Link>
    </main>
  </SiteShell>
);

export default NotFound;
