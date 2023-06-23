import Link from "next/link"

import { siteConfig } from "@/config/site"
import ThemeToggle from "@/components/ThemeToggle"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
	return (
		<main className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
			<div className="flex max-w-[980px] flex-col items-start gap-2">
				<h1 className="text-3xl font-bold leading-6 tracking-tight md:text-4xl">
					Next.js Starter Template
				</h1>

				<div className="max-w-[700px] text-lg">
					<h2 className="text-xl">With my favorite tools:</h2>
					<ul className="list-inside list-disc">
						<li>Next.js</li>
						<li>TypeScript</li>
						<li>Tailwind CSS</li>
						<li>Shadcn/ui</li>
						<li>ESLint</li>
						<li>Prettier</li>
					</ul>
				</div>
			</div>
			<div className="flex gap-4">
				<Link
					target="_blank"
					rel="noreferrer"
					href={siteConfig.links.github}
					className={buttonVariants({ variant: "default" })}
				>
					GitHub
				</Link>
				<ThemeToggle />
			</div>
		</main>
	)
}
