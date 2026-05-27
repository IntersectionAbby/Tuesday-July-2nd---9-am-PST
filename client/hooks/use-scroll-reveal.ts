import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-scroll-reveal]');
    if (!nodes.length) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      nodes.forEach((node) => node.classList.add('scroll-reveal--visible'));
      return;
    }

    const reveal = (node: Element) => {
      const delay = Number(node.getAttribute('data-scroll-reveal-delay') || 0);
      window.setTimeout(() => node.classList.add('scroll-reveal--visible'), delay);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    nodes.forEach((node) => {
      const isStagger = node.getAttribute('data-scroll-reveal') === 'stagger';
      node.classList.add(isStagger ? 'scroll-reveal-stagger' : 'scroll-reveal');

      if (node.getBoundingClientRect().top < window.innerHeight * 0.92) {
        reveal(node);
      } else {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, []);
}
