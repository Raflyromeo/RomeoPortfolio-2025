<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { i18nStore } from '../../store/i18n';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref<HTMLElement | null>(null);

const getTitle = computed(() => {
  const fullText = i18nStore.t('experience.title');
  const words = fullText.split(' ');
  if (words.length > 1) {
    const lastWord = words.pop();
    return {
      first: words.join(' '),
      last: lastWord
    };
  }
  return { first: fullText, last: '' };
});

const expHeading = computed(() => i18nStore.t('experience.expHeading'));
const expRole = computed(() => i18nStore.t('experience.expRole'));
const expDate = computed(() => i18nStore.t('experience.expDate'));
const expDesc = computed(() => i18nStore.t('experience.expDesc'));

const eduHeading = computed(() => i18nStore.t('experience.eduHeading'));

const educations = computed(() => [
  {
    year: i18nStore.t('experience.edu1Date'),
    school: i18nStore.t('experience.edu1School'),
    desc: i18nStore.t('experience.edu1Desc')
  },
  {
    year: i18nStore.t('experience.edu2Date'),
    school: i18nStore.t('experience.edu2School'),
    desc: i18nStore.t('experience.edu2Desc')
  },
  {
    year: i18nStore.t('experience.edu3Date'),
    school: i18nStore.t('experience.edu3School'),
    desc: i18nStore.t('experience.edu3Desc')
  },
  {
    year: i18nStore.t('experience.edu4Date'),
    school: i18nStore.t('experience.edu4School'),
    desc: i18nStore.t('experience.edu4Desc')
  }
]);

onMounted(() => {
  // Wait for next tick to ensure DOM is ready
  setTimeout(() => {
    // Header animation
    gsap.fromTo('.exp-header-anim',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 85%',
          once: true,
        }
      }
    );

    // Cards staggered entrance
    gsap.fromTo('.exp-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 75%',
          once: true,
        }
      }
    );
    
    ScrollTrigger.refresh();
  }, 100);
});
</script>

<template>
  <section ref="sectionRef" id="experience" class="py-24 md:py-32 relative selection:bg-accent selection:text-white overflow-hidden">
    <!-- Background Decor (Pulse) -->
    <div class="absolute top-[30%] left-[-10%] w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[130px] mix-blend-screen pointer-events-none" />

    <div class="max-w-[1400px] mx-auto px-6 md:px-10 z-10 relative">
      <!-- Section Header -->
      <div class="text-center mb-16 md:mb-24 exp-header-anim">
        <h2 class="font-display text-[40px] md:text-[60px] lg:text-[80px] font-extrabold uppercase tracking-tighter text-foreground leading-[1.1]">
          {{ getTitle.first }} <span class="text-primary italic">{{ getTitle.last }}</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative">
        <!-- Divider for desktop view -->
        <div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2"></div>
        
        <!-- Experience Column -->
        <div>
          <h3 class="text-2xl font-semibold text-primary mb-8 tracking-wide font-mono exp-header-anim">
            // {{ expHeading }}
          </h3>
          <div class="exp-card glass p-8 md:p-10 rounded-[2rem] relative group border-border transition-all duration-500 hover:-translate-y-2 hover:border-primary/30" style="opacity: 0;">
            <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <p class="text-sm font-mono text-muted-foreground mb-2">{{ expDate }}</p>
            <h4 class="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{{ expRole }}</h4>
            <p class="text-muted-foreground leading-relaxed font-light text-sm md:text-base">
              {{ expDesc }}
            </p>
          </div>
        </div>

        <!-- Education Column -->
        <div class="space-y-6">
          <h3 class="text-2xl font-semibold text-primary mb-8 tracking-wide font-mono exp-header-anim">
            // {{ eduHeading }}
          </h3>
          <div 
            v-for="(edu, index) in educations" 
            :key="index"
            class="exp-card glass p-6 md:p-8 rounded-[1.5rem] relative group border-border transition-all duration-500 hover:-translate-y-1 hover:border-accent/30"
            style="opacity: 0;"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <p class="text-xs font-mono text-muted-foreground mb-1">{{ edu.year }}</p>
            <h4 class="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{{ edu.school }}</h4>
            <p class="text-muted-foreground leading-relaxed font-light text-sm">
              {{ edu.desc }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
