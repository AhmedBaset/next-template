"use client";

import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center space-y-4">
      <h1 className="text-7xl font-extrabold">Error</h1>
      <h2 className="text-2xl font-semibold">
        {process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong"}
      </h2>
      <div className="space-x-2">
        <Link href="/" className={buttonVariants()}>
          Go Home
        </Link>
        <Button variant="outline" onClick={() => reset()}>
          Try Again
        </Button>
      </div>
    </div>
  );
}
