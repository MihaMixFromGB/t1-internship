export function isHideMenu() {
  const mql = window.matchMedia('(max-width: 768px)');
  return mql.matches;
}
