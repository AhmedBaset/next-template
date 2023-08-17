import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: `/${string}`) {
  // TODO
  // if (env.NEXT_PUBLIC_APP_URL) return `${env.NEXT_PUBLIC_APP_URL}${path}`
  return `http://localhost:3000${path}`;
}
