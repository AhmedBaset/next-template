import { Alexandria as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["sans-serif"],
});
