// Tiny classnames helper — merges truthy class fragments into one string.
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
