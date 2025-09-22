import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href={"/dashboard"}
      className={cn(
        "relative aspect-[1/0.28] grid",
        className,
        !className && "w-32"
      )}
    >
      <Image src={"/logo.webp"} fill alt="Goziri Logo" />
    </Link>
  );
}
