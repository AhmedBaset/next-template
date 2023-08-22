import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center space-y-4">
      <h1 className="text-7xl font-black">404</h1>
      <h2 className="text-2xl font-semibold">Page not found</h2>
      <div>
        <Link href="/" className={buttonVariants()}>
          Go Home
        </Link>
      </div>
    </div>
  );
}
