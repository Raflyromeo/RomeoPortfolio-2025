<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { i18nStore } from '../../store/i18n';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const footerRef = ref<HTMLElement | null>(null);
const textRef = ref<HTMLElement | null>(null);

const getName = computed(() => i18nStore.t('footer.name'));
const getDesc = computed(() => i18nStore.t('footer.description'));
const getSocial = computed(() => i18nStore.t('footer.socialMedia'));
const getContact = computed(() => i18nStore.t('footer.contactInfo'));
const getRights = computed(() => i18nStore.t('footer.rights'));

const currentYear = new Date().getFullYear();

const socials = [
  { name: "Instagram", url: "https://www.instagram.com/rfly.romeo_/" },
  { name: "TikTok", url: "https://tiktok.com/@raflyromeoo_" },
  { name: "YouTube", url: "https://youtube.com/@raflyromeoo" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-rafly-romeo-nasution" }
];

onMounted(() => {
  setTimeout(() => {
    // Intro animation for footer links
    gsap.fromTo('.footer-anim',
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.value,
          start: 'top 85%',
          once: true,
        }
      }
    );

    // Massive parallax typography "ROMEO"
    gsap.fromTo(textRef.value,
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: footerRef.value,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
        }
      }
    );
    
    ScrollTrigger.refresh();
  }, 100);
});
</script>

<template>
  <footer ref="footerRef" class="relative bg-background text-foreground overflow-hidden pt-24 pb-8 md:pt-32">
    
    <!-- Dynamic Background Glow -->
    <div class="absolute top-0 left-1/2 w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

    <div class="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
      
      <!-- Top Section -->
      <div class="flex flex-col md:flex-row justify-between items-start gap-16 mb-24 md:mb-32">
        
        <!-- Brand/Logo Area -->
        <div class="w-full md:w-1/3 footer-anim">
          <h2 class="text-2xl font-bold text-foreground tracking-widest uppercase mb-4">{{ getName }}</h2>
          <p class="text-muted-foreground font-light leading-relaxed max-w-sm">
            {{ getDesc }}
          </p>
        </div>

        <!-- Social Links -->
        <div class="w-full md:w-1/3 md:pl-8 footer-anim">
          <h3 class="text-sm font-semibold tracking-widest uppercase text-foreground mb-6 border-b border-foreground/10 pb-2 inline-block">{{ getSocial }}</h3>
          <ul class="space-y-4">
            <li v-for="social in socials" :key="social.name">
              <a :href="social.url" target="_blank" class="group flex items-center gap-3 w-fit text-muted-foreground hover:text-primary transition-colors duration-300">
                <span class="relative overflow-hidden inline-flex items-center text-sm md:text-base font-medium">
                  <span class="block group-hover:-translate-y-full transition-transform duration-300 whitespace-nowrap">{{ social.name }}</span>
                  <span class="absolute left-0 top-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-foreground whitespace-nowrap">{{ social.name }}</span>
                </span>
                <span class="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 text-primary">↗</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Links -->
        <div class="w-full md:w-1/3 footer-anim">
          <h3 class="text-sm font-semibold tracking-widest uppercase text-foreground mb-6 border-b border-foreground/10 pb-2 inline-block">{{ getContact }}</h3>
          <ul class="space-y-4">
            <li>
              <a href="mailto:raflyromeonasution07@gmail.com" class="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                <span class="text-sm md:text-base cursor-pointer">raflyromeonasution07@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/6281388608132" target="_blank" class="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                <span class="text-sm md:text-base">+62 813-8860-8132</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      <!-- Large Typography Area -->
      <div class="flex justify-center items-center w-full mb-10 overflow-hidden">
        <h1 
          ref="textRef"
          class="font-display text-[15vw] sm:text-[14vw] md:text-[16vw] font-extrabold text-transparent text-center leading-none tracking-tighter"
          style="-webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);"
        >
          ROMEO
        </h1>
      </div>

    </div>

    <!-- Copyright -->
    <div class="border-t border-foreground/5 relative z-10 w-full mt-8">
      <div class="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-muted-foreground text-sm">
          © {{ currentYear }} By Muhammad Rafly Romeo Nasution.
        </p>
        <p class="text-muted-foreground text-sm">
          {{ getRights }}
        </p>
      </div>
    </div>
  </footer>
</template>
