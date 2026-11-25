"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/docs", label: "Docs" },
  { href: "/plugins", label: "Plugins" },
  { href: "/community", label: "Community" },
  { href: "https://github.com/tessar-ai/tessar", label: "GitHub" },
];

const side =
  "flex items-center justify-evenly gap-6 text-[13px] uppercase tracking-[0.12em] text-fg max-md:hidden";
const link =
  "relative transition-colors hover:text-accent " +
  "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-[calc(100%-0.12em)] " +
  "after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-400 " +
  "hover:after:scale-x-100";
const bar =
  "absolute left-0 h-0.5 w-full bg-current transition-all duration-300 ease-out";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 mx-auto w-full max-w-7xl px-6 py-3">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6">
        <nav className={side}>
          {links.slice(0, 2).map((l) => (
            <Link key={l.href} href={l.href} className={link}>
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="relative col-start-2 pl-[0.2em]">
          <Image
            src="/tessar.png"
            alt="Tessar Logo"
            width={62}
            height={62}
            className="object-contain"
          />
        </Link>

        <nav className={side}>
          {links.slice(2).map((l) => (
            <Link key={l.href} href={l.href} className={link}>
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="col-start-3 flex size-8 items-center justify-center justify-self-end text-fg transition-colors hover:text-accent md:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`${bar} ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
            />
            <span
              className={`${bar} top-1/2 -translate-y-1/2 ${open ? "scale-x-0 opacity-0" : ""
                }`}
            />
            <span
              className={`${bar} ${open
                ? "top-1/2 -translate-y-1/2 -rotate-45"
                : "top-full -translate-y-full"
                }`}
            />
          </span>
        </button>
      </div>

      <div
        inert={!open}
        className={`absolute inset-x-0 top-full grid transition-[grid-template-rows] duration-300 ease-out md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
      >
        <nav
          className={`min-h-0 overflow-hidden transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="flex flex-col gap-5 border-y border-line bg-surface px-8 py-6 text-[13px] uppercase tracking-[0.12em] text-fg">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`${link} self-start`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;