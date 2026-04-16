import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 40, className = "" }: LogoProps) {
  return (
    <Image
      src="/logo.jpg"
      alt="Luxe Joias"
      width={size}
      height={size}
      className={`rounded-full object-cover ${className}`}
    />
  );
}
