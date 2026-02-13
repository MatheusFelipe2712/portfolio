import { useEffect, useState } from 'react';
import profileImg from '../assets/Portifolio/image-portifolio.png';
import { BackgroundParticles } from './BackgroundParticles';

export const Hero = () => {
  const [typedPrefix, setTypedPrefix] = useState('');
  const [typedSuffix, setTypedSuffix] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullPrefix = 'Web Developer ';
    const fullSuffix = 'Full-Stack';
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (!isDeleting) {
        // Typing phase
        if (typedPrefix.length < fullPrefix.length) {
          setTypedPrefix(fullPrefix.slice(0, typedPrefix.length + 1));
          timeout = setTimeout(tick, 100);
        } else if (typedSuffix.length < fullSuffix.length) {
          setTypedSuffix(fullSuffix.slice(0, typedSuffix.length + 1));
          timeout = setTimeout(tick, 120);
        } else {
          // Finished typing, wait before starting to delete
          timeout = setTimeout(() => setIsDeleting(true), 3000);
        }
      } else {
        // Deleting phase
        if (typedSuffix.length > 0) {
          setTypedSuffix(fullSuffix.slice(0, typedSuffix.length - 1));
          timeout = setTimeout(tick, 50);
        } else if (typedPrefix.length > 0) {
          setTypedPrefix(fullPrefix.slice(0, typedPrefix.length - 1));
          timeout = setTimeout(tick, 50);
        } else {
          // Finished deleting, wait before starting to type again
          setIsDeleting(false);
          timeout = setTimeout(tick, 500);
        }
      }
    };

    timeout = setTimeout(tick, 100);
    return () => clearTimeout(timeout);
  }, [typedPrefix, typedSuffix, isDeleting]);

  return (
    <section className="min-h-screen relative flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-24 pt-32 pb-12 lg:pt-20 overflow-hidden bg-[#0a0a0a]">
      <BackgroundParticles />
      <div className="flex-1 max-w-2xl z-10 text-center lg:text-left">
        <h3 className="text-lg md:text-xl font-medium text-gray-300 mb-2">Hello, I'm</h3>
        <h1 className="text-5xl md:text-8xl font-black text-brand mb-4 drop-shadow-[0_0_15px_rgba(71,1,178,0.35)] leading-tight">
          Matheus Felipe
        </h1>
        <h2 className="text-2xl md:text-5xl font-bold text-white mb-8 min-h-[3.5rem] md:min-h-0">
          <span>{typedPrefix}</span>
          <span className="text-accent underline decoration-2 underline-offset-8">
            {typedSuffix}
          </span>
          <span className="inline-block align-baseline ml-1 w-[2px] md:w-[3px] h-[1em] bg-accent animate-pulse" />
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand/20 flex items-center justify-center gap-2 group">
            DOWNLOAD CV
            <span className="group-hover:translate-y-1 transition-transform">↓</span>
          </button>
          
          <div className="flex items-center gap-4">
            <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-6 h-6 invert" alt="Github" />
            </a>
            <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="w-6 h-6" alt="Linkedin" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 relative mt-12 lg:mt-0 w-full max-w-sm lg:max-w-none flex justify-center lg:justify-end">
        <div className="relative group">
          <div className="relative w-64 md:w-96 overflow-hidden bg-[#0a0a0a] rounded-xl">
            <img 
              src={profileImg} 
              alt="Matheus Felipe" 
              className="w-full h-auto object-contain transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
