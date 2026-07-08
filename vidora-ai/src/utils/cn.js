/**
 * Merges class names conditionally, filtering out falsy values.
 * Lightweight alternative to clsx for this project's needs.
 * @param  {...(string|boolean|undefined|null)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
