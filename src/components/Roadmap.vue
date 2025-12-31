<script setup>
import { onMounted, ref } from 'vue';
import { useLanguage } from '../composables/useLanguage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const { t } = useLanguage();
const roadmapRef = ref(null);

onMounted(() => {
    // Desktop Horizontal Line Animation
    const desktopLine = roadmapRef.value.querySelector('.desktop-line-progress');
    if (desktopLine) {
        gsap.to(desktopLine, {
            width: '100%',
            scrollTrigger: {
                trigger: roadmapRef.value,
                start: 'top 70%',
                end: 'bottom 70%',
                scrub: 1.5
            },
            ease: 'none'
        });
    }

    // Mobile Vertical Line Animation
    const mobileLine = roadmapRef.value.querySelector('.mobile-line-progress');
    if (mobileLine) {
        gsap.to(mobileLine, {
            height: '100%',
            scrollTrigger: {
                trigger: roadmapRef.value,
                start: 'top 60%',
                end: 'bottom 80%',
                scrub: 1.5
            },
            ease: 'none'
        });
    }

    // Phases Reveal
    gsap.utils.toArray('.roadmap-phase').forEach((phase, i) => {
        gsap.from(phase, {
            scrollTrigger: {
                trigger: phase,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.2, // Stagger effect
            ease: 'power3.out'
        });
    });
});
</script>

<template>
    <section id="roadmap" class="py-24 bg-gray-50 dark:bg-[#050B14] relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <!-- Header -->
            <div class="text-center max-w-3xl mx-auto mb-16" v-if="t.roadmap">
                <span class="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">{{ t.roadmap.label }}</span>
                <h2 class="text-3xl md:text-5xl font-bold text-text-light dark:text-white mb-6 font-display">{{ t.roadmap.title }}</h2>
                <p class="text-muted-light dark:text-muted-dark text-lg font-light">{{ t.roadmap.desc }}</p>
            </div>

            <div ref="roadmapRef" class="relative">
                <!-- Desktop Timeline Line (Horizontal) -->
                <div class="hidden lg:block absolute top-[60px] left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 rounded-full">
                     <div class="desktop-line-progress w-0 h-full bg-primary rounded-full"></div>
                </div>

                <!-- Mobile Timeline Line (Vertical) -->
                <div class="lg:hidden absolute left-[28px] top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-800 rounded-full h-full">
                    <div class="mobile-line-progress h-0 w-full bg-primary rounded-full"></div>
                </div>

                <!-- Phases Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8" v-if="t.roadmap">
                    <div 
                        v-for="(phase, index) in t.roadmap.phases" 
                        :key="index"
                        class="roadmap-phase relative pl-20 lg:pl-0 lg:pt-24"
                    >
                        <!-- Node/Marker -->
                        <div 
                            class="absolute w-14 h-14 rounded-full border-4 border-white dark:border-[#050B14] shadow-lg flex items-center justify-center z-20
                            lg:left-1/2 lg:-translate-x-1/2 lg:top-[32px]
                            left-0 top-0"
                            :class="[
                                phase.status === 'current' ? 'bg-primary text-white' : 
                                phase.status === 'upcoming' ? 'bg-white dark:bg-gray-800 text-primary border-primary' : 
                                'bg-gray-100 dark:bg-gray-800 text-gray-400'
                            ]"
                        >
                            <span class="material-icons-round text-2xl">
                                {{ phase.status === 'current' ? 'flag' : phase.status === 'upcoming' ? 'hiking' : 'star' }}
                            </span>
                        </div>

                        <!-- Content Card -->
                        <div class="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none hover:-translate-y-1 transition-transform duration-300">
                            <span 
                                class="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 border"
                                :class="[
                                    phase.status === 'current' ? 'bg-primary/10 text-primary border-primary/20' : 
                                    phase.status === 'upcoming' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800' : 
                                    'bg-gray-100 dark:bg-gray-800 text-gray-500 border-gray-200 dark:border-gray-700'
                                ]"
                            >
                                {{ phase.subtitle }}
                            </span>
                            <h3 class="text-2xl font-bold text-text-light dark:text-white mb-2">{{ phase.title }}</h3>
                            
                            <ul class="space-y-3 mt-6">
                                <li v-for="(item, idx) in phase.items" :key="idx" class="flex items-start gap-3 text-muted-light dark:text-muted-dark text-sm">
                                    <span class="material-icons-round text-lg mt-0.5" :class="phase.status === 'current' ? 'text-green-500' : 'text-gray-400'">check_circle</span>
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
