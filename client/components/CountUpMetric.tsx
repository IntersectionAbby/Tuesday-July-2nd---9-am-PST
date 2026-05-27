import { useEffect, useMemo, useRef, useState } from 'react';
import { animateCountUp, formatMetric, parseMetricValue } from '@/lib/count-up';

type CountUpMetricProps = {
  value: string;
  className?: string;
  delay?: number;
};

export default function CountUpMetric({ value, className = '', delay = 0 }: CountUpMetricProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const parsed = useMemo(() => parseMetricValue(value), [value]);
  const [text, setText] = useState(() => formatMetric(parsed, 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setText(value);
      return;
    }

    let cleanup = () => {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          cleanup = animateCountUp(parsed, setText, 1600, delay);
          observer.disconnect();
        });
      },
      { threshold: 0.35, rootMargin: '0px 0px -5% 0px' },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cleanup();
    };
  }, [value, parsed, delay]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
