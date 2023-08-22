"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

interface ProviderProps {
  children: ReactNode;
}

export function Providers({ children }: ProviderProps) {
  return (
    <ThemeProvider enableSystem defaultTheme="system" attribute="class">
      {children}
    </ThemeProvider>
  );
}
