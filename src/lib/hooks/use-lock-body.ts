import * as React from "react";

/**
 * Locks the body scroll
 * @example
 * function MobileMenu() {
 *  useLockBody();
 * }
 * @see https://usehooks.com/useLockBodyScroll
 */
export function useLockBody() {
  React.useLayoutEffect((): (() => void) => {
    const originalStyle: string = window.getComputedStyle(
      document.body
    ).overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = originalStyle);
  }, []);
}
