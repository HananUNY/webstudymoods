<script setup>
import { onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import Hero from './components/Hero.vue';
import Features from './components/Features.vue';
import Roadmap from './components/Roadmap.vue';
import Vision from './components/Vision.vue';
import Target from './components/Target.vue';
import Support from './components/Support.vue';
import Footer from './components/Footer.vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // Global Section Animations
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    gsap.from(section.children, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });
});
</script>

<template>
  <div class="antialiased text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark">
    <NavBar />
    <main>
      <Hero />
      <Features />
      <Roadmap />
      <Vision />
      <Target />
      <Support />
    </main>
    <Footer />
  </div>
</template>
