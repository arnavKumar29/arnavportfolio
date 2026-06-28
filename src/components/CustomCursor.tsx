import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.left = `${e.clientX - 4}px`;
        dot.current.style.top = `${e.clientY - 4}px`;
      }

      const target = e.target as HTMLElement;
      const hovering = target.closest('a, button, [data-hover]');
      dot.current?.classList.toggle('hovering', !!hovering);
      ring.current?.classList.toggle('hovering', !!hovering);
    };

    const animate = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.15;
      if (ring.current) {
        ring.current.style.left = `${ringPos.current.x - 18}px`;
        ring.current.style.top = `${ringPos.current.y - 18}px`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot hidden md:block" />
      <div ref={ring} className="cursor-ring hidden md:block" />
    </>
  );
}
