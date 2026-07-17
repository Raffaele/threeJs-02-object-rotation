export function continuouslyRender(callback: () => void) {
  callback();
  requestAnimationFrame(() => continuouslyRender(callback));
}