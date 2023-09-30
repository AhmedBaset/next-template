# Next.js Starter Template

This template is up to Next.js `13.5.3`. Please run `pnpm update --latest` after creating your project.

> [!NOTE]  
> BTW, [dependabot](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates) is already configured in the template. this should keep the project up-to-date. Moreover, with your first push to github, It will open PRs to update the dependencies.

[![CI-check](https://github.com/A7med3bdulBaset/next-template/actions/workflows/CI.yml/badge.svg)](https://github.com/A7med3bdulBaset/next-template/actions/workflows/CI.yml)

## Create a new project

Copy the command below and run it in your terminal let the magic happen.

```bash
# with pnpm (recommended)
pnpm create next-app -e https://github.com/a7med3bdulbaset/next-template my-app

# with npm
npx create-next-app -e https://github.com/A7med3bdulBaset/next-template my-app

# with yarn
yarn create next-app -e https://github.com/A7med3bdulBaset/next-template my-app
```

> **Note**: When you use this template, VScode will prompt you to install recommended extensions and settings.

## Features

- Next.js 13
- TypeScript
- Tailwind CSS
- shadcn/ui & radix-ui
- lucide-icons
- dark/light mode
- Environment variables type safety [Read more in `./env.mjs` file](./env.mjs)
- Type safty for `next/link` href
  > The experimental `typedRoutes` feature of Next.js is enabled by default. once you run `dev` or `build` command, Next.js will generate a link definition in `.next/types` that contains information about all existing routes in your application, which TypeScript can then use to provide feedback in your editor about invalid links. [Read more](https://nextjs.org/docs/app/building-your-application/configuring/typescript#statically-typed-links)
- Github Action for checking formatting, linting and typechecking
- VSCode recommended settings & extensions
- ESLint
- Prettier with sorting imports
- Ready to use PWA [Read More in `next.config.js`](./next.config.js)

## Scripts

This template uses `pnpm` as the package manager. If you want to use other package managers, you can delete `pnpm-lock.yaml` and run `npm install` or `yarn install`.

- `dev`: Start the development server
- `build`: Build for production
- `start`: Start production server
- `preview`: build and start production server
- `lint`: Lint code
- `format`: Format code
- `format:check`: Check code formatting
- `typecheck`: Check types
- `ci-check`: Run all checks

### To install a component from `shadcn/ui` and `radix-ui`:

```sh
pnpm shadcn-ui add <component> [--overwrite]
```

## TODOs:

- [ ] Configure `next-auth`
- [ ] Configure `Prisma`
- [ ] Configure `Husky`, `lint-staged`
