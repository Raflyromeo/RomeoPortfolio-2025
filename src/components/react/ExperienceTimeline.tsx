import React from "react";
import { Timeline } from "../ui/timeline";
import { translations } from "../../store/i18n";

interface ExperienceTimelineProps {
  lang: 'en' | 'id';
}

export default function ExperienceTimeline({ lang }: ExperienceTimelineProps) {
  const t = translations[lang].experience;
  
  const fullTitle = t.title;
  const titleWords = fullTitle.split(' ');
  const lastWord = titleWords.length > 1 ? titleWords.pop() : '';
  const firstPart = titleWords.join(' ');

  const data = [
    {
      title: t.expHeading,
      content: (
        <div>
          <p className="mb-4 text-xs font-mono text-neutral-500 md:text-sm dark:text-neutral-400">
            {t.expDate}
          </p>
          <div className="mb-6">
            <h4 className="flex items-center gap-2 text-base md:text-xl font-bold text-foreground mb-2">
              <span className="text-primary">✦</span> {t.expRole}
            </h4>
            <p className="text-sm font-normal text-muted-foreground leading-relaxed md:text-base">
              {t.expDesc}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              src="/experience/bem.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/experience/bem-pti.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: t.eduHeading,
      content: (
        <div>
          <div className="mb-8 border-l-2 border-primary/20 pl-4 py-1">
            <p className="text-xs font-mono text-neutral-500 md:text-sm dark:text-neutral-400 mb-1">
              {t.edu1Date}
            </p>
            <h4 className="text-base md:text-xl font-bold text-foreground mb-2">
              {t.edu1School}
            </h4>
            <p className="text-sm font-normal text-muted-foreground leading-relaxed md:text-base">
              {t.edu1Desc}
            </p>
          </div>

          <div className="mb-8 border-l-2 border-primary/20 pl-4 py-1">
            <p className="text-xs font-mono text-neutral-500 md:text-sm dark:text-neutral-400 mb-1">
              {t.edu2Date}
            </p>
            <h4 className="text-base md:text-xl font-bold text-foreground mb-2">
              {t.edu2School}
            </h4>
            <p className="text-sm font-normal text-muted-foreground leading-relaxed md:text-base">
              {t.edu2Desc}
            </p>
          </div>

          <div className="mb-8 border-l-2 border-primary/20 pl-4 py-1">
            <p className="text-xs font-mono text-neutral-500 md:text-sm dark:text-neutral-400 mb-1">
              {t.edu3Date}
            </p>
            <h4 className="text-base md:text-xl font-bold text-foreground mb-2">
              {t.edu3School}
            </h4>
            <p className="text-sm font-normal text-muted-foreground leading-relaxed md:text-base">
              {t.edu3Desc}
            </p>
          </div>

          <div className="mb-8 border-l-2 border-primary/20 pl-4 py-1">
            <p className="text-xs font-mono text-neutral-500 md:text-sm dark:text-neutral-400 mb-1">
              {t.edu4Date}
            </p>
            <h4 className="text-base md:text-xl font-bold text-foreground mb-2">
              {t.edu4School}
            </h4>
            <p className="text-sm font-normal text-muted-foreground leading-relaxed md:text-base">
              {t.edu4Desc}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              src="/experience/sd.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/experience/smp.jpeg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/experience/sma.jpeg"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/experience/kuliah.jpeg"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 relative selection:bg-accent selection:text-white w-full overflow-hidden">
        <div className="absolute top-[30%] left-[-10%] w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[130px] mix-blend-screen pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 z-10 relative">
          <div className="text-center mb-10 md:mb-16 exp-header-anim">
            <h2 className="font-display text-[40px] md:text-[60px] lg:text-[80px] font-extrabold uppercase tracking-tighter text-foreground leading-[1.1]">
              {firstPart} <span className="text-primary italic">{lastWord}</span>
            </h2>
          </div>
        </div>

        <div className="relative z-10">
          <Timeline data={data} />
        </div>
    </section>
  );
}
