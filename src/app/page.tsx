// TODO: Remove this entire file and start your own project from scratch.
// Happy coding!

import Link from "next/link";
import { GithubIcon } from "lucide-react";

import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";

export default function IndexPage() {
  return (
    <main className="container grid max-w-prose items-center gap-6 space-y-4 pb-8 pt-6 text-balance md:py-10">
      <div className="flex min-h-[50vh] flex-col justify-center gap-3">
        <h1 className="text-5xl font-bold">{siteConfig.title}</h1>
        <p className="text-slate-500">{siteConfig.description}</p>
        <div className="space-x-2">
          <Link
            className={cn(buttonVariants(), "space-x-2")}
            href="https://github.com/A7med3bdulBaset/next-template"
          >
            <GithubIcon />
            <span>Github</span>
          </Link>
          <ThemeToggle variant="outline" size="icon" />
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold">Included Features:</h2>
        <ul className="list-disc ps-8 marker:text-2xl marker:text-primary-500/50">
          <li>Next.js 13.4: App Router and Server Actions</li>
          <li>Typescript</li>
          <li>Tailwind CSS</li>
          <li>
            <Link href="https://ui.shadcn.com" target="_blank">
              shadcn/ui
            </Link>
          </li>
          <li>Lucide Icons</li>
          <li>Next Themes: light/dark toggler</li>
          <li>ESLint</li>
          <li>Prettier with imports and tailwindcss classes sorting</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="text-3xl font-semibold">Scripts:</h2>
        <p className="text-opacity-90">
          This template uses{" "}
          <span className="font-bold text-primary">pnpm</span> as the package
          manager. If you want to use other package managers, you can delete{" "}
          <span className="font-bold text-primary">pnpm-lock.yaml</span> and run{" "}
          <span className="font-bold text-primary">npm install</span> or{" "}
          <span className="font-bold text-primary">yarn install</span>.
        </p>
        <ul className="list-disc ps-8 marker:text-2xl marker:text-primary-500/50">
          <li>
            <span className="font-bold text-primary">dev</span> Start the
            development server
          </li>
          <li>
            <span className="font-bold text-primary">build</span> Build for
            production
          </li>
          <li>
            <span className="font-bold text-primary">start</span> Start
            production server
          </li>
          <li>
            <span className="font-bold text-primary">preview</span> Build and
            start production server
          </li>
          <li>
            <span className="font-bold text-primary">lint</span> Lint code
          </li>
          <li>
            <span className="font-bold text-primary">format</span> Format code
          </li>
          <li>
            <span className="font-bold text-primary">format:check</span> Check
            code formatting
          </li>
          <li>
            <span className="font-bold text-primary">typecheck</span> Check
            types
          </li>
          <li>
            <span className="font-bold text-primary">ci-check</span> Run all
            checks
          </li>
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="text-3xl font-semibold">PNPM Cheat Sheet</h2>
        <ul className="list-disc ps-8 marker:text-2xl marker:text-primary-500/50">
          <li>
            <span className="font-bold text-primary">pnpm install</span> Install
            dependencies
          </li>
          <li>
            <span className="font-bold text-primary">
              pnpm add &lt;dependency&gt;
            </span>{" "}
            Add dependencies (-D for devDependencies)
          </li>
          <li>
            <span className="font-bold text-primary">
              pnpm dlx &lt;package&gt;
            </span>{" "}
            like npx
          </li>
          <li>
            <span className="font-bold text-primary">
              pnpm run &lt;script&gt;
            </span>{" "}
            Run scripts (or just{" "}
            <span className="font-bold text-primary">pnpm &lt;script&gt;</span>{" "}
            if there is no command conflict)
          </li>
          <li>
            <span className="font-bold text-primary">pnpm update</span> Update
            dependencies
          </li>
        </ul>
      </div>
      {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
      <div className="fixed -bottom-1/3 -right-1/3 -z-10 h-[50rem] w-[50rem] animate-pulse rounded-full ![animation-duration:5s] [background-image:radial-gradient(circle_at_center,#9994_0,transparent,transparent_100%)]" />
    </main>
  );
}
