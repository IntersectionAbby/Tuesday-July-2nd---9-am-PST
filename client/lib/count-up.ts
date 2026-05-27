export type ParsedMetric = {
  prefix: string;
  target: number;
  suffix: string;
  decimals: number;
};

export function parseMetricValue(value: string): ParsedMetric {
  const match = value.trim().match(/^([^\d]*)([\d.]+)(.*)$/);
  if (!match) {
    return { prefix: '', target: 0, suffix: value, decimals: 0 };
  }

  const numStr = match[2];
  return {
    prefix: match[1],
    target: parseFloat(numStr),
    suffix: match[3],
    decimals: numStr.includes('.') ? numStr.split('.')[1].length : 0,
  };
}

export function formatMetric(parsed: ParsedMetric, current: number): string {
  const n =
    parsed.decimals > 0 ? current.toFixed(parsed.decimals) : String(Math.round(current));
  return `${parsed.prefix}${n}${parsed.suffix}`;
}

export function animateCountUp(
  parsed: ParsedMetric,
  onUpdate: (text: string) => void,
  duration = 1600,
  delay = 0,
): () => void {
  let raf = 0;
  let timeout = 0;

  const run = () => {
    let start = 0;
    const step = (now: number) => {
      if (!start) start = now;
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - t) ** 3;
      onUpdate(formatMetric(parsed, parsed.target * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
  };

  timeout = window.setTimeout(run, delay);

  return () => {
    window.clearTimeout(timeout);
    cancelAnimationFrame(raf);
  };
}
