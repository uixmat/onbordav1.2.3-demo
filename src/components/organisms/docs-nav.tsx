import Link from "next/link";

export const DocsNav = () => {
  return (
    <nav className="w-full">
      <ul className="space-y-2">
        <li>
          <Link
            href="/docs"
            className="text-sm transition-all flex w-full hover:pl-2"
          >
            Onborda setup
          </Link>
        </li>
        <li>
          <Link
            href="/docs/app-router"
            className="text-sm transition-all flex w-full hover:pl-2"
          >
            App router
          </Link>
        </li>
        <li>
          <Link
            href="/docs/tours-steps"
            className="text-sm transition-all flex w-full hover:pl-2"
          >
            Tours &amp; steps
          </Link>
        </li>
        <li>
          <Link
            href="/docs/hooks"
            className="text-sm transition-all flex w-full hover:pl-2"
          >
            Initilializing &amp; Hooks
          </Link>
        </li>
      </ul>
    </nav>
  );
};
