// TODO: Remove this entire file and start your own project from scratch.
// Happy coding!

import Link from "next/link";
import { GithubIcon } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export default function IndexPage() {
	return (
		<main className="container grid items-center gap-6 space-y-4 pb-8 pt-6 md:py-10">
			<div className="space-y-2">
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
				<ul className="list-inside ps-8 marker:text-2xl marker:text-primary-500/50">
					<li>Next.js 13.4: App Router and Server Actions</li>
					<li>Typescript</li>
					<li>Tailwind CSS</li>
					<li>
						<Link
							href="https://ui.shadcn.com"
							target="_blank"
							className="underline decoration-sky-500 decoration-wavy underline-offset-4 hover:text-sky-500"
						>
							Shadcn/ui
						</Link>{" "}
						Beautifully and customizable components.
					</li>
					<li>Lucide Ycons</li>
					<li>Next Themes: light/dark toggler</li>
					<li>ESLint</li>
					<li>Prettier with imports and tailwindcss classes sorting</li>
				</ul>
			</div>

			<div className="space-y-2">
				<h2 className="text-3xl font-semibold">Scripts:</h2>
				<p className="text-slate-">
					This template uses <Badge variant="secondary">pnpm</Badge> as the
					package manager. If you want to use other package managers, you can
					delete <Badge variant="secondary">pnpm-lock.yaml</Badge> and run{" "}
					<Badge variant="secondary">npm install</Badge> or{" "}
					<Badge variant="secondary">yarn install</Badge>.
				</p>
				<ul className="list-disc ps-8 marker:text-2xl marker:text-primary-500/50">
					<li>
						<Badge>dev</Badge> Start the development server
					</li>
					<li>
						<Badge>build</Badge> Build for production
					</li>
					<li>
						<Badge>start</Badge> Start production server
					</li>
					<li>
						<Badge>preview</Badge> Build and start production server
					</li>
					<li>
						<Badge>lint</Badge> Lint code
					</li>
					<li>
						<Badge>format</Badge> Format code
					</li>
					<li>
						<Badge>format:check</Badge> Check code formatting
					</li>
					<li>
						<Badge>typecheck</Badge> Check types
					</li>
					<li>
						<Badge>ci-check</Badge> Run all checks
					</li>
				</ul>
			</div>

			<div className="space-y-2">
				<h2 className="text-3xl font-semibold">PNPM Cheat Sheet</h2>
				<ul className="list-disc ps-8 marker:text-2xl marker:text-primary-500/50">
					<li>
						<Badge>pnpm install</Badge> Install dependencies
					</li>
					<li>
						<Badge>pnpm add &lt;dependency&gt;</Badge> Add dependencies (-D for
						devDependencies)
					</li>
					<li>
						<Badge>pnpm dlx &lt;package&gt;</Badge> like npx
					</li>
					<li>
						<Badge>pnpm run &lt;script&gt;</Badge> Run scripts (or just{" "}
						<Badge>pnpm &lt;script&gt;</Badge> if there is no command conflict)
					</li>
					<li>
						<Badge>pnpm update</Badge> Update dependencies
					</li>
				</ul>
			</div>
		</main>
	);
}
