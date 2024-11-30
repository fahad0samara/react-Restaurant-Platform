import { useEffect, useCallback } from 'react';

export function reportWebVitals(metric: any) {
  if (metric.label === 'web-vital') {
    console.log(metric);
  }
}

export function useDebounce(callback: Function, delay: number) {
  let timeoutId: NodeJS.Timeout;

  return useCallback((...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  }, [callback, delay]);
}

export function useMemoizedValue<T>(value: T, deps: any[]): T {
  const [memoizedValue, setMemoizedValue] = React.useState(value);

  useEffect(() => {
    setMemoizedValue(value);
  }, deps);

  return memoizedValue;
}