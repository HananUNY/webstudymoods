<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();
const blob1 = ref(null);
const blob2 = ref(null);
const blob3 = ref(null);
const heroContent = ref(null);
const heroCard = ref(null);

onMounted(() => {
    // Blob Animations
    const blobs = [blob1.value, blob2.value, blob3.value];
    
    blobs.forEach((blob, index) => {
        gsap.to(blob, {
            x: "random(-50, 50)",
            y: "random(-50, 50)",
            scale: "random(0.8, 1.2)",
            duration: "random(5, 8)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 2
        });
    });

    // Content Entry Animation
    gsap.from(heroContent.value.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5
    });

    // Card Entry Animation
    gsap.from(heroCard.value, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.8
    });
});
</script>

<template>
    <section class="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-background-light dark:bg-background-dark transition-colors duration-300">
        <!-- Blobs (manipulated by GSAP) -->
        <div ref="blob1" class="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen filter opacity-70"></div>
        <div ref="blob2" class="absolute top-0 right-[20%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen filter opacity-70"></div>
        <div ref="blob3" class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen filter opacity-70"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <!-- Text Content -->
                <div ref="heroContent" class="space-y-8 relative z-20">
                    <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 dark:bg-card-dark/80 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-sm">
                        <span class="relative flex h-3 w-3">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        <span class="text-xs font-bold uppercase tracking-widest text-text-light dark:text-white">{{ t.hero.badge }}</span>
                    </div>
                    
                    <h1 class="text-5xl lg:text-7xl font-display font-extrabold leading-[1.1] text-text-light dark:text-white">
                        {{ t.hero.title_p1 }}<br/>
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">{{ t.hero.title_p2 }}</span>
                        <br/>{{ t.hero.title_p3 }}
                    </h1>
                    
                    <p class="text-xl text-muted-light dark:text-muted-dark max-w-lg leading-relaxed">
                        {{ t.hero.subtitle }}
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 pt-2">
                        <a href="#support" class="inline-flex justify-center items-center px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-glow hover:translate-y-[-4px] transition-all hover:shadow-lg hover:bg-primary/90">
                            {{ t.hero.pitchDeck }}
                            <span class="material-icons-round ml-2">arrow_forward</span>
                        </a>
                        <a href="https://studymoods.netlify.app/" target="_blank" class="inline-flex justify-center items-center px-8 py-4 bg-secondary text-white rounded-2xl font-bold shadow-glow hover:translate-y-[-4px] transition-all hover:shadow-lg hover:bg-secondary/90">
                            {{ t.hero.tryNow }}
                            <span class="material-icons-round ml-2">rocket_launch</span>
                        </a>
                    </div>
                    
                    <!-- Key Benefits -->
                    <!-- Key Benefits -->
                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4 pt-4 text-sm font-medium text-muted-light dark:text-muted-dark w-full max-w-2xl">
                        <div class="flex items-center gap-2 text-primary">
                            <span class="material-icons-round text-lg">savings</span>
                            <span class="text-text-light dark:text-white">{{ t.hero.benefits.free }}</span>
                        </div>
                        <div class="flex items-center gap-2 text-primary">
                            <span class="material-icons-round text-lg">block</span>
                            <span class="text-text-light dark:text-white">{{ t.hero.benefits.noAds }}</span>
                        </div>
                        <div class="flex items-center gap-2 text-primary">
                            <span class="material-icons-round text-lg">security</span>
                            <span class="text-text-light dark:text-white">{{ t.hero.benefits.privacy }}</span>
                        </div>
                        <div class="flex items-center gap-2 text-primary">
                            <span class="material-icons-round text-lg">install_mobile</span>
                            <span class="text-text-light dark:text-white">{{ t.hero.benefits.pwa }}</span>
                        </div>
                    </div>
                </div>

                <!-- 3D Desktop App Visual (Cekat.ai Style) -->
                <!-- Mobile App Showcase -->
                <div ref="heroCard" class="relative lg:h-[700px] perspective-container flex items-center justify-center lg:justify-end">
                    <!-- Phone Container -->
                    <div class="relative w-[320px] h-[650px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-900 shadow-2xl transform-3d rotate-y-[-12deg] rotate-x-[6deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out z-30 ring-1 ring-white/20">
                        <!-- Notch -->
                        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-40"></div>
                        
                        <!-- Screen Content -->
                        <div class="w-full h-full bg-[#F3F6F8] dark:bg-[#0B1426] rounded-[2.5rem] overflow-hidden flex flex-col relative font-sans">
                            <!-- Status Bar -->
                            <div class="h-12 w-full flex justify-between items-center px-6 pt-3 text-[10px] font-bold text-gray-500 dark:text-gray-400 z-30">
                                <span>9:41</span>
                                <div class="flex gap-1.5">
                                    <span class="material-icons-round text-xs">signal_cellular_alt</span>
                                    <span class="material-icons-round text-xs">wifi</span>
                                    <span class="material-icons-round text-xs">battery_full</span>
                                </div>
                            </div>

                            <!-- App Content -->
                            <div class="flex-1 px-5 pb-6 flex flex-col gap-4 overflow-y-auto w-full no-scrollbar">
                                <!-- Header -->
                                <div class="flex justify-between items-start pt-1">
                                    <div class="flex items-center gap-3">
                                        <div class="relative">
                                            <div class="w-12 h-12 rounded-full bg-indigo-100 p-0.5 border-2 border-white shadow-sm overflow-hidden">
                                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hanan&backgroundColor=b6e3f4" alt="User" class="w-full h-full" />
                                            </div>
                                            <div class="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
                                        </div>
                                        <div>
                                            <h3 class="font-bold text-lg text-gray-800 dark:text-white leading-tight">Good Morning,<br>Student 👋</h3>
                                            <p class="text-[10px] font-bold text-[#3B82F6] mt-0.5">Let's check in</p>
                                        </div>
                                    </div>
                                    <div class="bg-white dark:bg-gray-800 rounded-xl px-3 py-1.5 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-2">
                                        <span class="material-icons-round text-blue-500 text-lg">calendar_today</span>
                                        <div class="text-center leading-none">
                                            <span class="block text-[8px] font-bold text-blue-500 uppercase">Dec</span>
                                            <span class="block text-sm font-bold text-gray-700 dark:text-white">30</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Daily Snapshot Card -->
                                <div class="bg-gradient-to-b from-[#E0F7FA] to-[#E8F5E9] dark:from-gray-800 dark:to-gray-900 rounded-[2rem] p-6 shadow-sm border border-white/50 relative text-center">
                                    <p class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Daily Snapshot</p>
                                    <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Today's Mood</h2>
                                    
                                    <div class="w-24 h-24 mx-auto mb-4 filter drop-shadow-xl transform hover:scale-110 transition-transform cursor-pointer">
                                        <span class="text-[5rem] leading-none">🙂</span>
                                    </div>

                                    <div class="bg-white/40 dark:bg-white/5 rounded-2xl p-3 backdrop-blur-sm border border-white/40">
                                        <p class="text-[10px] font-bold text-gray-500 uppercase mb-1">Feeling</p>
                                        <p class="text-2xl font-bold text-gray-800 dark:text-white">Good</p>
                                    </div>
                                </div>

                                <!-- Total Logs Card -->
                                <div class="bg-white dark:bg-gray-800 rounded-[2rem] p-5 shadow-sm border border-gray-100 dark:border-gray-700 flex justify-between items-center">
                                    <div>
                                        <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Total Logs</p>
                                        <div class="flex items-baseline gap-1 mb-2">
                                            <span class="text-3xl font-bold text-gray-800 dark:text-white">1</span>
                                            <span class="text-sm font-bold text-gray-400">check-ins</span>
                                        </div>
                                        <span class="px-3 py-1 bg-orange-50 text-orange-600 text-[10px] font-bold rounded-full border border-orange-100 inline-flex items-center gap-1">
                                            Keep logging! 🔥
                                        </span>
                                    </div>
                                    <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                        <span class="material-icons-round text-orange-500">local_fire_department</span>
                                    </div>
                                </div>

                                <!-- Tracker Card -->
                                <div class="bg-white dark:bg-gray-800 rounded-[2rem] p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                                    <div class="flex justify-between items-start mb-2">
                                        <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Tracker (Week)</p>
                                        <div class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                                            <span class="material-icons-round text-blue-500 text-sm">flag</span>
                                        </div>
                                    </div>
                                    <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-1">1/10</h3>
                                    <div class="flex justify-between items-end">
                                        <div class="w-full bg-gray-100 dark:bg-gray-700 h-2 rounded-full mt-2 overflow-hidden">
                                            <div class="bg-blue-500 w-[10%] h-full rounded-full"></div>
                                        </div>
                                        <span class="text-[10px] font-bold text-gray-400 ml-2 whitespace-nowrap">milestone</span>
                                    </div>
                                </div>
                                <div class="h-16"></div> <!-- Spacer for Nav -->
                            </div>

                            <!-- Bottom Nav Custom -->
                            <div class="absolute bottom-0 w-full bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-6 py-4 flex justify-between items-end z-40 rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                                <div class="flex flex-col items-center gap-1 text-blue-600">
                                    <span class="material-icons-round text-2xl">home</span>
                                    <span class="text-[9px] font-bold">Home</span>
                                </div>
                                <div class="flex flex-col items-center gap-1 text-gray-400">
                                    <span class="material-icons-round text-2xl">bar_chart</span>
                                    <span class="text-[9px] font-bold">Analytics</span>
                                </div>
                                <div class="relative -top-6">
                                    <div class="w-14 h-14 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full shadow-lg shadow-indigo-300/50 flex items-center justify-center text-white border-4 border-[#F3F6F8] dark:border-[#0B1426]">
                                        <span class="material-icons-round text-3xl">add</span>
                                    </div>
                                </div>
                                <div class="flex flex-col items-center gap-1 text-gray-400">
                                    <span class="material-icons-round text-2xl">calendar_today</span>
                                    <span class="text-[9px] font-bold">Calendar</span>
                                </div>
                                <div class="flex flex-col items-center gap-1 text-gray-400">
                                    <span class="material-icons-round text-2xl">person_outline</span>
                                    <span class="text-[9px] font-bold">Profile</span>
                                </div>
                            </div>
                        </div>

                        <!-- Reflections -->
                        <div class="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-[3rem] z-50"></div>
                    </div>
                    
                    <!-- Floating Badge -->
                    <div class="absolute top-[20%] -left-12 bg-white dark:bg-[#152035] p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce duration-[3000ms] text-left border border-gray-100 dark:border-gray-700 z-20 hidden lg:flex">
                         <span class="text-3xl">🚀</span>
                         <div>
                             <p class="text-xs font-bold text-gray-400 uppercase">Status</p>
                             <p class="font-bold text-text-light dark:text-white">Alpha Live</p>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.perspective-container {
    perspective: 2000px;
}
.transform-3d {
    transform-style: preserve-3d;
}
</style>
