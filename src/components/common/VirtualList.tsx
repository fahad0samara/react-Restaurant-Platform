import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface VirtualListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  itemHeight: number;
  windowSize?: number;
  className?: string;
}

export default function VirtualList<T>({
  items,
  renderItem,
  itemHeight,
  windowSize = 10,
  className = '',
}: VirtualListProps<T>) {
  const [startIndex, setStartIndex] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { targetRef: topSentinelRef, isIntersecting: isTopIntersecting } = useIntersectionObserver();
  const { targetRef: bottomSentinelRef, isIntersecting: isBottomIntersecting } = useIntersectionObserver();

  React.useEffect(() => {
    if (isTopIntersecting && startIndex > 0) {
      setStartIndex((prev) => Math.max(0, prev - windowSize));
    }
  }, [isTopIntersecting, startIndex, windowSize]);

  React.useEffect(() => {
    if (isBottomIntersecting && startIndex + windowSize < items.length) {
      setStartIndex((prev) => Math.min(items.length - windowSize, prev + windowSize));
    }
  }, [isBottomIntersecting, startIndex, windowSize, items.length]);

  const visibleItems = items.slice(startIndex, startIndex + windowSize);
  const totalHeight = items.length * itemHeight;
  const offsetTop = startIndex * itemHeight;

  return (
    <div ref={containerRef} className={`relative overflow-auto ${className}`} style={{ height: '100%' }}>
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div ref={topSentinelRef as React.RefObject<HTMLDivElement>} style={{ position: 'absolute', top: 0, height: '1px' }} />
        <div style={{ position: 'absolute', top: offsetTop, width: '100%' }}>
          {visibleItems.map((item, index) => renderItem(item, startIndex + index))}
        </div>
        <div ref={bottomSentinelRef as React.RefObject<HTMLDivElement>} style={{ position: 'absolute', bottom: 0, height: '1px' }} />
      </div>
    </div>
  );
}