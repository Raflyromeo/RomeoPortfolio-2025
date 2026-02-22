import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Sun, Moon } from 'lucide-react';

interface NavigationProps {
  lang: 'en' | 'id';
}

const navLinks = [
  { id: 'home', href: '#home', label: { en: 'Home', id: 'Beranda' } },
  { id: 'about', href: '#about', label: { en: 'About', id: 'Tentang' } },
  { id: 'experience', href: '#experience', label: { en: 'Journey', id: 'Perjalanan' } },
  { id: 'project', href: '#project', label: { en: 'Works', id: 'Karya' } },
];

export default function Navigation({ lang }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(lang);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };
  
  const menuRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // Listen to custom event from Vue store or Language toggler
    const handleLangChange = () => {
      const docLang = document.documentElement.lang as 'en' | 'id';
      if (docLang && docLang !== currentLang) {
        setCurrentLang(docLang);
      }
    };
    
    // We can also poll or set up an observer, but for now we'll just check periodically or via mutation observer
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'lang') {
          handleLangChange();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, [currentLang]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Animate background "gates" opening / expanding
      gsap.to(bgRef.current, {
        clipPath: 'circle(150% at 50% 50%)',
        duration: 1.2,
        ease: 'power4.inOut'
      });
      
      // Animate links staggering in
      gsap.fromTo(linksRef.current, 
        { y: 100, opacity: 0, rotate: 5 },
        { y: 0, opacity: 1, rotate: 0, duration: 1, stagger: 0.1, ease: 'back.out(1.7)', delay: 0.3 }
      );
    } else {
      document.body.style.overflow = '';
      // Animate links out
      gsap.to(linksRef.current, {
        y: -50, opacity: 0, duration: 0.5, ease: 'power3.in', stagger: -0.05
      });
      
      // Close gates
      gsap.to(bgRef.current, {
        clipPath: 'circle(0% at 50% 0%)',
        duration: 1,
        ease: 'power4.inOut',
        delay: 0.2
      });
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const switchLanguage = () => {
    // Trigger the global i18n switching
    const newLang = currentLang === 'en' ? 'id' : 'en';
    document.documentElement.lang = newLang; // MutationObserver will catch this
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 pointer-events-none transition-colors duration-500">
        <a href={`/${currentLang}/`} className="pointer-events-auto transition-transform duration-300 hover:scale-105">
          <img 
            src={(theme === 'dark' || isOpen) ? '/logo/logoRR-putih.png' : '/logo/logoRR-abu.png'} 
            alt="Romeo Logo" 
            className="h-8 md:h-10 w-auto object-contain" 
          />
        </a>
        
        <div className={`flex gap-4 md:gap-6 items-center pointer-events-auto transition-colors duration-500 ${isOpen ? 'text-white' : 'text-foreground'}`}>
          <button 
            onClick={toggleTheme}
            className={`hover:text-primary transition-colors flex items-center justify-center p-2 rounded-full border backdrop-blur-md ${isOpen ? 'bg-white/5 border-white/10 text-white' : 'glass'}`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Moon className="w-4 h-4 md:w-5 md:h-5 text-current" /> : <Sun className="w-4 h-4 md:w-5 md:h-5 text-current" />}
          </button>

          <button 
            onClick={switchLanguage}
            className="text-xs font-bold tracking-[0.2em] hover:text-primary transition-colors"
          >
            {currentLang.toUpperCase()}
          </button>
          <button 
            onClick={toggleMenu} 
            className="group flex flex-col gap-1.5 w-8 items-end justify-center z-[60]"
          >
            <span className={`h-0.5 transition-all duration-500 ease-in-out ${isOpen ? 'bg-white rotate-45 translate-y-2 w-8' : 'bg-foreground w-8 group-hover:w-6'}`}></span>
            <span className={`h-0.5 transition-all duration-500 ease-in-out ${isOpen ? 'bg-white opacity-0 w-0' : 'bg-foreground w-6 group-hover:w-8'}`}></span>
            <span className={`h-0.5 transition-all duration-500 ease-in-out ${isOpen ? 'bg-white -rotate-45 -translate-y-2 w-8' : 'bg-foreground w-4 group-hover:w-6'}`}></span>
          </button>
        </div>
      </header>

      {/* Fullscreen Overlay Grid / Gate */}
      <div 
        ref={bgRef}
        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex flex-col justify-center px-12 lg:px-32"
        style={{ clipPath: 'circle(0% at 50% 0%)' }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:48px_48px] opacity-20 pointer-events-none"></div>
        
        <nav ref={menuRef} className="flex flex-col gap-4 md:gap-8 relative z-10 w-full max-w-5xl mx-auto">
          {navLinks.map((link, i) => (
            <a 
              key={link.id}
              href={link.href}
              onClick={toggleMenu}
              ref={(el) => { linksRef.current[i] = el as HTMLAnchorElement | null; }}
              className="group overflow-hidden flex items-center gap-6"
            >
              <span className="text-sm md:text-xl font-mono text-primary/50 group-hover:text-primary transition-colors tracking-widest shrink-0">
                0{i + 1}
              </span>
              <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 hover:to-white stroke-text hover:ml-4 transition-all duration-500 will-change-transform">
                {link.label[currentLang]}
              </span>
            </a>
          ))}
        </nav>
        
        <div className="absolute bottom-12 left-12 lg:left-32 flex gap-8 z-10 opacity-50">
          {['LinkedIn', 'Github', 'Instagram', 'Twitter'].map(social => (
            <a key={social} href="#" className="font-mono text-xs tracking-widest hover:text-white transition-colors uppercase">
              {social}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
