export const BackgroundParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" style={{ transform: 'translateZ(0)' }}>
      {[...Array(30)].map((_, i) => {
        const size = Math.random() * 2 + 2; // Bolinhas menores ainda (2px a 4px)
        const isAccent = Math.random() > 0.6;
        
        return (
          <div
            key={i}
            className={`absolute rounded-full ${isAccent ? 'bg-accent' : 'bg-brand'} animate-float`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * -25}s`,
              animationDuration: `${Math.random() * 15 + 20}s`, // Mais lento e constante
              opacity: Math.random() * 0.2 + 0.1,
            }}
          />
        );
      })}
    </div>
  );
};
