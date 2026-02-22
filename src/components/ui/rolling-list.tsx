import React, { useState, useEffect } from "react";
import { cn } from "../../lib/utils";
import { i18nStore, translations } from "../../store/i18n";

interface ListItem {
  id: number;
  title: string;
  category: string;
  src: string;
  alt: string;
  color: "primary";
  link: string;
}

interface RollingTextItemProps {
  item: ListItem;
}

const colorClassMap: Record<ListItem["color"], string> = {
  primary: "text-primary",
};

function RollingTextItem({ item }: RollingTextItemProps) {
  return (
    <a 
      href={item.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative w-full cursor-pointer border-b border-border py-8 md:py-10 block"
    >
      {/* Rolling text */}
      <div className="relative overflow-hidden h-[60px] md:h-24">
        <div className="transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
          {/* State 1: Normal */}
          <div className="h-[60px] md:h-24 flex items-center">
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-foreground uppercase tracking-tighter">
              {item.title}
            </h2>
          </div>

          {/* State 2: Hover (Italic + Color) */}
          <div className="h-[60px] md:h-24 flex items-center justify-between">
            <h2
              className={cn(
                "text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter italic",
                colorClassMap[item.color]
              )}
            >
              {item.title}
            </h2>
          </div>
        </div>
      </div>

      {/* Category Label */}
      <span className="absolute top-10 right-0 text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground transition-opacity duration-300 group-hover:opacity-0 hidden md:block">
        {item.category}
      </span>

      {/* Image Reveal Effect */}
      <div
        className={cn(
          "pointer-events-none absolute right-10 top-1/2 z-20 h-40 w-60 lg:h-56 lg:w-[340px] -translate-y-1/2 overflow-hidden rounded-[1.5rem] shadow-2xl",
          "transition-all duration-700 ease-[0.2,0.65,0.3,0.9]",
          "opacity-0 scale-90 rotate-3 translate-x-10",
          "group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:translate-x-0 hidden md:block border border-white/10"
        )}
      >
        <div className="relative h-full w-full">
          <img
            src={item.src}
            alt={item.alt}
            className="object-cover w-full h-full grayscale transition-all duration-1000 ease-[0.2,0.65,0.3,0.9] group-hover:grayscale-0 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
        </div>
      </div>
    </a>
  );
}

export function RollingTextList() {
  const [lang, setLang] = useState<'en' | 'id'>('en');

  useEffect(() => {
    // Initial lang
    setLang(document.documentElement.lang as 'en' | 'id');
    
    // Listen for lang changes set by i18nStore
    const observer = new MutationObserver(() => {
      setLang(document.documentElement.lang as 'en' | 'id');
    });
    
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['lang'] 
    });
    
    return () => observer.disconnect();
  }, []);

  const t = translations[lang];

  const items: ListItem[] = [
    {
      id: 1,
      title: "Web Portfolio",
      category: t.projects.catDevelopment,
      src: "/images/portfolio.jpg",
      alt: "Web Portfolio",
      color: "primary",
      link: "#",
    },
    {
      id: 2,
      title: "Oprec BEM FIKTI",
      category: t.projects.catDesign,
      src: "/images/oprec-volunteer.jpg",
      alt: "Oprec Volunteer BEM FIKTI UG",
      color: "primary",
      link: "https://www.figma.com/design/mOCWng0UP6Pew82TD6dka0/oprec-volunteer?node-id=2-40&t=tLasPvjozBy03c4o-1",
    },
    {
      id: 3,
      title: "Image Processing",
      category: t.projects.catData,
      src: "/images/image-processing.jpg",
      alt: "Image Processing With Python",
      color: "primary",
      link: "https://colab.research.google.com/drive/1-L3yDjCUfqMquz3yq0scf7O-NqYdj5cH?usp=sharing",
    },
    {
      id: 4,
      title: "RPS AI Markov",
      category: t.projects.catML,
      src: "/images/rock-paper-scissors.jpg",
      alt: "Batu Gunting Kertas AI Markov",
      color: "primary",
      link: "https://colab.research.google.com/drive/1aqSNZhDNqoc2GsE1ADRYHtnv4ZYawozW?usp=sharing",
    },
    {
      id: 5,
      title: "Python Mini Game",
      category: t.projects.catGame,
      src: "/images/mini-game.jpg",
      alt: "Python Mini Game",
      color: "primary",
      link: "https://colab.research.google.com/drive/1mGW0lj9YwaFsljxVKKgM8UkiUge2lvdQ?usp=sharing",
    },
  ];

  const headingWords = t.headings.project.split(' ');
  const lastWord = headingWords.length > 1 ? headingWords.pop() : '';
  const firstWords = headingWords.join(' ');

  return (
    <section id="project" className="py-24 md:py-32 relative selection:bg-accent selection:text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 z-10 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
            <h2 className="font-display text-[40px] md:text-[60px] lg:text-[80px] font-extrabold uppercase tracking-tighter text-foreground leading-[1.1]">
              {firstWords} <span className="text-primary italic">{lastWord}</span>
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground font-medium tracking-widest uppercase text-sm md:text-base border-b border-foreground/20 pb-2 inline-block">
              {t.headings.projectSubtitle}
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col border-t border-border">
          {items.map((item) => (
            <RollingTextItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
