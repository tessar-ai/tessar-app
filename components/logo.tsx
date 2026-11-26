// components/logo.tsx
import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  size?: number;
  className?: string;
};

export const LogoMark = ({ size = 62, className = "" }: LogoProps) => (
  <Image
    src="/tessar.png"
    alt="Tessar Logo"
    width={size}
    height={size}
    className={`object-contain ${className}`}
  />
);

const Logo = ({ className = "", size = 62 }: LogoProps) => (
  <Link href="/" className={className}>
    <LogoMark size={size} />
  </Link>
);

export default Logo;