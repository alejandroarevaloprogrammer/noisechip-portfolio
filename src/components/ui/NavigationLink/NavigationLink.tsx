"use client";

import type { ComponentProps } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationLinkProps
  extends Omit<ComponentProps<typeof Link>, "href"> {
  href: string;
}

export default function NavigationLink({
  href,
  children,
  ...props
}: NavigationLinkProps) {
  const pathname = usePathname();

  const isActive =
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      {...props}
    >
      {children}
    </Link>
  );
}