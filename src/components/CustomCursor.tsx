import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out opacity-60 mix-blend-plus-lighter"
      style={{
        background: 'radial-gradient(circle, rgba(163, 48, 219, 0.25) 0%, rgba(71, 1, 178, 0) 70%)',
        transform: `translate(${position.x - 250}px, ${position.y - 250}px)`,
      }}
    />
  );
};
