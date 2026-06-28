import { useEffect, useRef, useCallback } from 'react';

export function useScatter(radius = 120, force = 35) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const els = container.querySelectorAll<HTMLElement>('.scatter-tag');
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = cx - mouseRef.current.x;
      const dy = cy - mouseRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < radius && dist > 0) {
        const power = (1 - dist / radius) * force;
        const angle = Math.atan2(dy, dx);
        const tx = Math.cos(angle) * power;
        const ty = Math.sin(angle) * power;
        el.style.transform = `translate(${tx}px, ${ty}px)`;
      } else {
        el.style.transform = 'translate(0, 0)';
      }
    });

    rafRef.current = requestAnimationFrame(animate);
  }, [radius, force]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return containerRef;
}
