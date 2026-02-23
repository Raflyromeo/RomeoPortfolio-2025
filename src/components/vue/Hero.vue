<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { i18nStore } from '../../store/i18n';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref<HTMLElement | null>(null);
const textContainer = ref<HTMLElement | null>(null);
const imageGroup = ref<HTMLElement | null>(null);

const getRole = computed(() => i18nStore.t('hero.role'));
const getDesc = computed(() => i18nStore.t('hero.description'));
const getExplore = computed(() => i18nStore.t('hero.explore'));
const getResume = computed(() => i18nStore.t('about.resume'));

const roles = ["Web Designer", "Frontend Developer", "Junior Web Developer", "UI/UX Designer"];
const currentTypingText = ref("");
const roleIndex = ref(0);
const isDeleting = ref(false);

const downloadStatus = ref<'idle' | 'downloading' | 'downloaded' | 'complete'>('idle');
const progress = ref(0);

const handleDownload = () => {
    if (downloadStatus.value !== 'idle') return;
    
    downloadStatus.value = 'downloading';
    progress.value = 0;
    
    const interval = setInterval(() => {
        progress.value += 5; 
        if (progress.value >= 100) {
            clearInterval(interval);
            downloadStatus.value = 'downloaded';
            
            const link = document.createElement('a');
            link.href = '/Resume.pdf';
            link.download = 'Rafly_Romeo_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            setTimeout(() => {
                downloadStatus.value = 'idle';
            }, 3000);
        }
    }, 100);
};

onMounted(() => {
  let typingSpeed = 100;
  let timerId: ReturnType<typeof setTimeout>;

  const type = () => {
    const currentRole = roles[roleIndex.value];
    
    if (isDeleting.value) {
      currentTypingText.value = currentRole.substring(0, currentTypingText.value.length - 1);
      typingSpeed = 40; 
    } else {
      currentTypingText.value = currentRole.substring(0, currentTypingText.value.length + 1);
      typingSpeed = 100; 
    }
    
    if (!isDeleting.value && currentTypingText.value === currentRole) {
      typingSpeed = 2000; 
      isDeleting.value = true;
    } else if (isDeleting.value && currentTypingText.value === "") {
      isDeleting.value = false;
      roleIndex.value = (roleIndex.value + 1) % roles.length;
      typingSpeed = 500; 
    }
    
    timerId = setTimeout(type, typingSpeed);
  };
  
  timerId = setTimeout(type, 1500); 

  setTimeout(() => {
    const tt = gsap.timeline();
    tt.fromTo('.hero-text-anim',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power4.out', delay: 0.2 }
    ).fromTo(imageGroup.value, 
      { scale: 0.9, opacity: 0, rotate: -2 },
      { scale: 1, opacity: 1, rotate: 0, duration: 1.5, ease: 'power3.out' },
      '-=1'
    );

    gsap.to(imageGroup.value, {
      y: -80,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    gsap.to(textContainer.value, {
      y: 100,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });
    
    ScrollTrigger.refresh();
  }, 100);
});

const handleScrollDown = () => {
  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <section ref="sectionRef" id="home" class="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden">
    <div class="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[130px] mix-blend-screen pointer-events-none animate-pulse" />
    <div class="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-accent/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none " style="animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;" />
    <div class="w-[90%] md:w-[85%] max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-20 z-10 relative">
      <div ref="textContainer" class="col-span-1 lg:col-span-7 flex flex-col justify-center text-center lg:text-left relative z-20">
        <div class="overflow-hidden mb-6 sm:mb-8 flex justify-center lg:justify-start">
          <div class="hero-text-anim inline-flex items-center gap-3 bg-background/80 backdrop-blur-xl border border-border py-2 px-4 rounded-full shadow-lg">
            <div class="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-primary"></span>
            </div>
            <span class="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-foreground">{{ getRole }}</span>
          </div>
        </div>
        <div class="relative w-full overflow-hidden">
          <h1 class="font-display text-[10vw] sm:text-[50px] md:text-[65px] lg:text-[60px] xl:text-[75px] 2xl:text-[90px] font-black leading-[0.85] tracking-tighter text-foreground uppercase mb-4 sm:mb-6 flex flex-col justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
            <div class="overflow-hidden w-full">
              <span class="hero-text-anim block text-foreground">
                MUHAMMAD
              </span>
            </div>
            <div class="overflow-hidden w-full">
              <span class="hero-text-anim block text-foreground">
                RAFLY
              </span>
            </div>
            <div class="overflow-hidden mt-1 sm:mt-2 md:mt-4 w-full">
              <span class="hero-text-anim block text-transparent stroke-text" style="-webkit-text-stroke: 1.5px var(--foreground)">
                ROMEO
              </span>
            </div>
            <div class="overflow-hidden w-full">
              <span class="hero-text-anim block text-transparent stroke-text" style="-webkit-text-stroke: 1.5px var(--foreground)">
                NASUTION
              </span>
            </div>
          </h1>
        </div>
        <div class="overflow-hidden mb-10 h-8 md:h-10">
          <p class="hero-text-anim text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium max-w-[600px] mx-auto lg:mx-0 tracking-wide">
            <span class="text-foreground">{{ currentTypingText }}</span>
            <span class="animate-pulse text-primary font-bold">|</span>
          </p>
        </div>
        <div class="flex flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 w-full px-2 sm:px-0 flex-wrap sm:flex-nowrap">
          <div class="hero-text-anim flex-shrink-0 relative overflow-hidden rounded-full">
            <button 
              @click="handleScrollDown"
              class="group relative px-4 sm:px-6 md:px-8 h-12 sm:h-14 xl:h-16 w-[150px] sm:w-[170px] md:w-[190px] xl:w-[220px] 2xl:w-[240px] glass text-foreground font-semibold uppercase tracking-wider md:tracking-[0.2em] text-[10px] md:text-sm xl:text-base overflow-hidden transition-all duration-500 hover:bg-foreground/10 hover:border-foreground/30 flex items-center justify-center whitespace-nowrap"
            >
              <div class="absolute inset-0 w-full h-full bg-primary/20 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0" />
              <span class="relative z-10 flex items-center gap-1 sm:gap-2 xl:gap-3">
                {{ getExplore }}
                <span class="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>
          <div class="hero-text-anim flex-shrink-0">
            <button
               @click="handleDownload"
               :class="[
                   'inline-flex items-center justify-center w-[150px] sm:w-[170px] md:w-[190px] xl:w-[220px] 2xl:w-[240px] rounded-full h-12 sm:h-14 xl:h-16 px-4 sm:px-6 relative overflow-hidden select-none text-[10px] md:text-sm xl:text-base font-semibold uppercase tracking-wider lg:tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 whitespace-nowrap',
                   downloadStatus === 'downloading' ? 'bg-primary/50 text-white' : 'bg-primary text-primary-foreground hover:bg-primary/90',
                   downloadStatus !== 'idle' ? 'pointer-events-none' : ''
               ]"
            >
              <div v-if="downloadStatus === 'idle'" class="flex items-center gap-1 sm:gap-2 relative z-10 transition-transform hover:-translate-y-0.5 duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  <span>{{ getResume }}</span>
              </div>
              <div v-if="downloadStatus === 'downloading'" class="flex items-center justify-center gap-2 relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                  <span>{{ progress }}%</span>
              </div>
              <div v-if="downloadStatus === 'downloaded'" class="flex items-center gap-2 relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <span>Downloaded</span>
              </div>
              <div v-if="downloadStatus === 'complete'" class="relative z-10">
                  <span>{{ getResume }}</span>
              </div>
              <div v-if="downloadStatus === 'downloading'"
                  class="absolute bottom-0 z-0 h-full left-0 bg-primary transition-all duration-200 ease-in-out"
                  :style="{ width: `${progress}%` }"
              />
            </button>
          </div>
        </div>
      </div>
      <div class="col-span-1 lg:col-span-5 flex justify-center lg:justify-end relative z-10 mt-10 lg:mt-0">
        <div ref="imageGroup" class="relative group perspective-[1000px]">
          <div class="absolute inset-0 bg-primary/40 rounded-full blur-[80px] scale-90 group-hover:scale-100 group-hover:bg-primary/50 transition-all duration-700"></div>
          <div class="relative w-[280px] sm:w-[350px] lg:w-[420px] aspect-[4/5.5] rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(var(--primary),0.2)] transition-transform duration-700 hover:-translate-y-4 border border-foreground/10 bg-background/50 backdrop-blur-xl group-hover:shadow-[0_0_80px_rgba(var(--primary),0.4)]">
            <img 
              src="/hero/hero.jpeg" 
              class="w-full h-full object-cover object-center filter transition-all duration-700 scale-[1.02] group-hover:scale-[1.08]"
              alt="Muhammad Rafly Romeo Nasution" 
            />
          </div>
          <div class="absolute -bottom-3 sm:-bottom-4 -right-2 sm:right-0 z-20 flex items-center gap-2 sm:gap-3 bg-background/80 backdrop-blur-xl border border-border py-2 px-4 sm:py-3 sm:px-5 rounded-full shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-500">
            <div class="relative flex h-2 w-2 sm:h-3 sm:w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-green-500"></span>
            </div>
            <span class="text-[9px] sm:text-xs uppercase tracking-widest font-bold text-foreground whitespace-nowrap">Available for work</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
