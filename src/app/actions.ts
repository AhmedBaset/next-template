"use server";

import { revalidatePath } from "next/cache";

// Example of a server action
export async function revalidate(path: `/${string}`) {
  return revalidatePath(path);
}
