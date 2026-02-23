<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { i18nStore } from '../../store/i18n';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextHoverEffect from '../ui/text-hover-effect';

gsap.registerPlugin(ScrollTrigger);

const footerRef = ref<HTMLElement | null>(null);

const getName = computed(() => i18nStore.t('footer.name'));
const getDesc = computed(() => i18nStore.t('footer.description'));
const getSocial = computed(() => i18nStore.t('footer.socialMedia'));
const getExplore = computed(() => i18nStore.t('hero.explore').split(' ')[0] || 'Explore'); // Fallback or reuse hero.explore text
const getRights = computed(() => i18nStore.t('footer.rights'));

const currentYear = new Date().getFullYear();

const navLinks = [
  { id: 'home', href: '#home', label: { en: 'Home', id: 'Beranda' } },
  { id: 'about', href: '#about', label: { en: 'About', id: 'Tentang' } },
  { id: 'experience', href: '#experience', label: { en: 'Journey', id: 'Perjalanan' } },
  { id: 'project', href: '#project', label: { en: 'Works', id: 'Karya' } },
];

import { Icon } from '@iconify/vue';

const socials = [
  { name: "Instagram", icon: "mdi:instagram", url: "https://www.instagram.com/rfly.romeo_/" },
  { name: "TikTok", icon: "ic:baseline-tiktok", url: "https://tiktok.com/@raflyromeoo_" },
  { name: "YouTube", icon: "mdi:youtube", url: "https://youtube.com/@raflyromeoo" },
  { name: "LinkedIn", icon: "mdi:linkedin", url: "https://www.linkedin.com/in/muhammadraflyromeonasution" },
  { name: "GitHub", icon: "mdi:github", url: "https://github.com/Raflyromeo" },
  { name: "Email", icon: "mdi:email-outline", url: "mailto:raflyromeonasution07@gmail.com" }
];

onMounted(() => {
  setTimeout(() => {
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
    
    ScrollTrigger.refresh();
  }, 100);
});
</script>

<template>
  <footer ref="footerRef" class="relative w-full bg-background text-foreground overflow-hidden pt-12 sm:pt-20 md:pt-32">
      <div class="absolute top-0 left-1/2 w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
    <div class="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20 md:mb-32">
        <div class="md:col-span-6 lg:col-span-5 footer-anim">
          <h2 class="text-2xl font-bold text-foreground tracking-widest uppercase mb-4">{{ getName }}</h2>
          <p class="text-muted-foreground font-light leading-relaxed max-w-sm">
            {{ getDesc }}
          </p>
        </div>

        <div class="md:col-span-3 lg:col-span-3 lg:col-start-7 footer-anim">
          <h3 class="text-sm font-semibold tracking-widest uppercase text-foreground mb-6 border-b border-foreground/10 pb-2 inline-block">{{ getExplore }}</h3>
          <ul class="space-y-4">
            <li v-for="link in navLinks" :key="link.id">
              <a :href="`/${i18nStore.currentLang}${link.href}`" class="group flex items-center gap-3 w-fit text-muted-foreground hover:text-primary transition-colors duration-300">
                <span class="relative overflow-hidden inline-flex items-center text-sm md:text-base font-medium">
                  <span class="block group-hover:-translate-y-full transition-transform duration-300 whitespace-nowrap">{{ link.label[i18nStore.currentLang] }}</span>
                  <span class="absolute left-0 top-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-foreground whitespace-nowrap">{{ link.label[i18nStore.currentLang] }}</span>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div class="md:col-span-3 lg:col-span-3 footer-anim">
          <h3 class="text-sm font-semibold tracking-widest uppercase text-foreground mb-6 border-b border-foreground/10 pb-2 inline-block">{{ getSocial }}</h3>
          <ul class="space-y-4">
            <li v-for="social in socials" :key="social.name">
              <a :href="social.url" target="_blank" class="group flex items-center gap-3 w-fit text-muted-foreground hover:text-primary transition-colors duration-300">
                <Icon :icon="social.icon" class="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span class="relative overflow-hidden inline-flex items-center text-sm md:text-base font-medium">
                  <span class="block group-hover:-translate-y-full transition-transform duration-300 whitespace-nowrap">{{ social.name }}</span>
                  <span class="absolute left-0 top-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-foreground whitespace-nowrap">{{ social.name }}</span>
                </span>
                <span class="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 text-primary">↗</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div class="flex justify-center items-center w-full min-h-[150px] sm:min-h-[200px] md:min-h-[300px] mb-10 overflow-hidden">
          <div class="w-full h-full flex items-center justify-center pointer-events-auto relative">
             <slot name="text-effect"></slot>
         </div>
      </div>

    </div>

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
