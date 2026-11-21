import Link from "next/link";
import Image from "next/image";

const side =
  "flex items-center justify-around text-[13px] uppercase tracking-[0.12em] text-muted";
const link =
  "relative transition-colors hover:text-accent max-md:hidden " +
  "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-[calc(100%-0.12em)] " +
  "after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-400 " +
  "hover:after:scale-x-100";

const Nav = () => (
  <header className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-6 px-10 py-7">
    <nav className={side}>
      <Link href="/docs" className={link}>
        Docs
      </Link>
      <Link href="/plugins" className={link}>
        Plugins
      </Link>
    </nav>

    <Link href="/" className="relative pl-[0.2em] text-xl tracking-[0.2em]">
      <Image
        src="/tessar-dark.png"
        alt="Tessar Logo"
        width={62}
        height={62}
        className="object-contain"
      />
    </Link>

    <nav className={side}>
      <Link href="/community" className={link}>
        Community
      </Link>
      <Link href="https://github.com" className={link}>
        GitHub
      </Link>
    </nav>
  </header>
);

export default Nav;