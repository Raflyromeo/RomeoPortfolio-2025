<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { i18nStore } from '../../store/i18n';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref<HTMLElement | null>(null);

const projects = computed(() => [
  {
    id: 1,
    title: "Web Portfolio",
    category: i18nStore.t('projects.catDevelopment'),
    image: "/images/portfolio.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Oprec Volunteer BEM FIKTI UG",
    category: i18nStore.t('projects.catDesign'),
    image: "/images/oprec-volunteer.jpg",
    link: "https://www.figma.com/design/mOCWng0UP6Pew82TD6dka0/oprec-volunteer?node-id=2-40&t=tLasPvjozBy03c4o-1",
  },
  {
    id: 3,
    title: "Image Processing With Python",
    category: i18nStore.t('projects.catData'),
    image: "/images/image-processing.jpg",
    link: "https://colab.research.google.com/drive/1-L3yDjCUfqMquz3yq0scf7O-NqYdj5cH?usp=sharing",
  },
  {
    id: 4,
    title: "Batu Gunting Kertas AI Markov",
    category: i18nStore.t('projects.catML'),
    image: "/images/rock-paper-scissors.jpg",
    link: "https://colab.research.google.com/drive/1aqSNZhDNqoc2GsE1ADRYHtnv4ZYawozW?usp=sharing",
  },
  {
    id: 5,
    title: "Python Mini Game",
    category: i18nStore.t('projects.catGame'),
    image: "/images/mini-game.jpg",
    link: "https://colab.research.google.com/drive/1mGW0lj9YwaFsljxVKKgM8UkiUge2lvdQ?usp=sharing",
  },
]);

const getHeading = computed(() => {
  const fullText = i18nStore.t('headings.project');
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

const getSubtitle = computed(() => i18nStore.t('headings.projectSubtitle'));

onMounted(() => {
  // Stagger entrance for projects
  ScrollTrigger.batch('.project-card', {
    interval: 0.1,
    batchMax: 3,
    onEnter: (elements) => {
      gsap.fromTo(elements,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );
    },
    start: 'top 85%'
  });

  // Header entrance
  gsap.fromTo('.project-header-anim',
    { y: 50, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 1, ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%',
        once: true,
      }
    }
  );
});
</script>

<template>
  <section ref="sectionRef" id="project" class="py-24 md:py-32 relative selection:bg-accent selection:text-white overflow-hidden">
    <div class="max-w-[1400px] mx-auto px-6 md:px-10 z-10 relative">
      
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8 project-header-anim">
        <div>
          <h2 class="font-display text-[40px] md:text-[60px] lg:text-[80px] font-extrabold uppercase tracking-tighter text-foreground leading-[1.1]">
            {{ getHeading.first }} <span class="text-primary italic">{{ getHeading.last }}</span>
          </h2>
        </div>
        <div>
          <p class="text-muted-foreground font-medium tracking-widest uppercase text-sm md:text-base border-b border-foreground/20 pb-2 inline-block">
            {{ getSubtitle }}
          </p>
        </div>
      </div>

      <!-- Project Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        <template v-for="(project, index) in projects" :key="project.id">
          
          <div :class="['project-card group cursor-pointer relative', index === 0 ? 'md:col-span-2 lg:col-span-2' : 'col-span-1']" style="opacity: 0;">
            
            <!-- Glassmorphism Container with Anti-gravity hover -->
            <div :class="['relative w-full overflow-hidden rounded-[24px] glass-card border-white/5 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-700 ease-[0.2,0.65,0.3,0.9] hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(99,102,241,0.1)]', index === 0 ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-square md:aspect-[4/3]']">
              
              <!-- Image with zoom -->
              <img
                :src="project.image"
                :alt="project.title"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[0.2,0.65,0.3,0.9] group-hover:scale-110 grayscale group-hover:grayscale-0"
                loading="lazy"
              />
              
              <!-- Overlays -->
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700"></div>
              <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-700 pointer-events-none"></div>

              <!-- Content Reveal -->
              <div class="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.2,0.65,0.3,0.9]">
                <p class="text-accent font-mono text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {{ project.category }}
                </p>
                <div class="flex items-center justify-between">
                  <h3 :class="['font-bold text-white drop-shadow-lg', index === 0 ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl']">
                    {{ project.title }}
                  </h3>
                  
                  <a 
                    :href="project.link" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500 hover:bg-primary hover:text-white"
                    :aria-label="`View ${project.title}`"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </template>
      </div>
      
    </div>
  </section>
</template>
