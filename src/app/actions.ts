"use server";

import { revalidatePath } from "next/cache";

// This is just an example of a serverAction
export async function revalidate(path: `/${string}`) {
  return revalidatePath(path);
}
