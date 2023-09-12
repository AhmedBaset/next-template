// @ts-check

import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // NEXTAUTH_SECRET: z.string().min(32),
  },
  client: {},
  runtimeEnv: {
    // NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
});

/**
 * # How to use this?
 * 1. write your env variables in the `.env.local` file
 * 2. add a schema for the env variables in the `env.mjs` file
 * 3. use the `env` object in your code
 * ```js
 * import { env } from "@env";
 * console.log(env.NEXTAUTH_SECRET);
 * ```
 */
