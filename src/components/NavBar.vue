<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useLanguage } from '../composables/useLanguage';

const { t, currentLang, toggleLanguage } = useLanguage();
const isDark = ref(false);
const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleTheme = () => {
    isDark.value = !isDark.value;
    if (isDark.value) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    }
};

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
    // Force Light Mode by default for now as requested
    isDark.value = false;
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
    
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <nav 
        class="fixed w-full z-50 transition-all duration-500 ease-in-out"
        :class="[
            isScrolled 
                ? 'bg-white/80 dark:bg-[#050B14]/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-white/5 py-4' 
                : 'bg-transparent border-b border-transparent py-6'
        ]"
    >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center transition-all duration-300">
                <!-- Logo -->
                <div class="flex items-center gap-3">
                    <img src="/logo.svg" alt="Study Mood Logo" class="h-10 w-10 object-contain drop-shadow-md" />
                    <span class="font-bold text-2xl tracking-tight text-text-light dark:text-white font-display">
                        Study Mood
                        <span class="text-xs align-top opacity-50 font-medium ml-1 bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded-full">ALPHA</span>
                    </span>
                </div>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center gap-8 font-semibold text-sm">
                    <a href="#roadmap" class="text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-white transition-colors">{{ t.nav.roadmap }}</a>
                    <a href="#target" class="text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-white transition-colors">{{ t.nav.market }}</a>
                    <a href="#vision" class="text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-white transition-colors">{{ t.nav.vision }}</a>
                    
                    <!-- Language Toggle -->
                    <button @click="toggleLanguage" class="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-xs font-bold text-muted-light dark:text-muted-dark hover:bg-primary/10 hover:text-primary transition-all uppercase tracking-wide">
                        <span :class="{ 'text-primary': currentLang === 'en' }">EN</span>
                        <span class="opacity-30">/</span>
                        <span :class="{ 'text-primary': currentLang === 'id' }">ID</span>
                    </button>

                    <button @click="toggleTheme" class="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-card-dark hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-muted-light dark:text-muted-dark shadow-sm border border-gray-100 dark:border-gray-800">
                        <span v-if="!isDark" class="material-icons-round text-lg">dark_mode</span>
                        <span v-else class="material-icons-round text-lg">light_mode</span>
                    </button>
                    
                    <a href="https://studymoods.netlify.app/" target="_blank" class="text-primary dark:text-white hover:text-secondary dark:hover:text-secondary font-bold transition-colors">
                        {{ t.nav.testFlight }}
                    </a>
                    
                    <a href="#support" class="bg-text-light dark:bg-white hover:bg-primary text-white dark:text-primary dark:hover:text-white px-8 py-3 rounded-2xl font-bold transition-all shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
                        {{ t.nav.support }}
                    </a>
                </div>

                <!-- Mobile Button -->
                <div class="md:hidden flex items-center gap-4">
                    <button @click="toggleLanguage" class="flex items-center gap-1 font-bold text-xs uppercase text-muted-light dark:text-muted-dark">
                        <span :class="{ 'text-primary': currentLang === 'en' }">EN</span>
                        <span class="opacity-30">/</span>
                        <span :class="{ 'text-primary': currentLang === 'id' }">ID</span>
                    </button>
                    <button @click="toggleTheme" class="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                        <span v-if="!isDark" class="material-icons-round text-lg">dark_mode</span>
                        <span v-else class="material-icons-round text-lg">light_mode</span>
                    </button>
                    <button @click="toggleMobileMenu" class="text-text-light dark:text-white">
                        <span class="material-icons-round text-3xl">menu</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div v-show="isMobileMenuOpen" class="md:hidden bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 px-4 pt-4 pb-6 space-y-4 shadow-xl">
             <a href="#roadmap" class="block text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-white font-semibold">{{ t.nav.roadmap }}</a>
             <a href="#market" class="block text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-white font-semibold">{{ t.nav.market }}</a>
             <a href="#vision" class="block text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-white font-semibold">{{ t.nav.vision }}</a>
             <div class="pt-4 flex flex-col gap-4">
                 <a href="#" class="text-center w-full text-primary dark:text-white font-bold border border-gray-200 dark:border-gray-700 py-3 rounded-xl">{{ t.nav.testFlight }}</a>
                 <a href="#support" class="text-center w-full bg-primary text-white font-bold py-3 rounded-xl">{{ t.nav.support }}</a>
             </div>
        </div>
    </nav>
</template>
