export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): T {
  let inThrottle: boolean;
  let lastCall: number;

  return function (this: any, ...args: Parameters<T>) {
    const now = Date.now();

    if (!inThrottle || now - lastCall >= limit) {
      lastCall = now;
      inThrottle = true;

      const result = func.apply(this, args);

      setTimeout(() => {
        inThrottle = false;
      }, limit);

      return result;
    }
  } as T;
}
