"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const DocsNav = () => {
  const pathname = usePathname();

  const linkClass = cn("text-sm transition-all flex w-full hover:pl-2");
  const activeClass = cn(linkClass, "font-bold pl-2");

  return (
    <nav className="w-full">
      <ul className="space-y-2">
        <li>
          <Link
            href="/docs"
            className={pathname === "/docs" ? activeClass : linkClass}
          >
            Onborda setup
          </Link>
        </li>
        <li>
          <Link
            href="/docs/app-router"
            className={
              pathname === "/docs/app-router" ? activeClass : linkClass
            }
          >
            App router
          </Link>
        </li>
        <li>
          <Link
            href="/docs/tours-steps"
            className={
              pathname === "/docs/tours-steps" ? activeClass : linkClass
            }
          >
            Tours &amp; steps
          </Link>
        </li>
        <li>
          <Link
            href="/docs/card"
            className={pathname === "/docs/card" ? activeClass : linkClass}
          >
            Card
          </Link>
        </li>
        <li>
          <Link
            href="/docs/hooks"
            className={pathname === "/docs/hooks" ? activeClass : linkClass}
          >
            Initilializing &amp; Hooks
          </Link>
        </li>
      </ul>
    </nav>
  );
};
