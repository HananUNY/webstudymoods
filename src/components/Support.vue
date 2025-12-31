<script setup>
import { useLanguage } from '../composables/useLanguage';
const { t } = useLanguage();

const openDonationPopup = () => {
    const url = 'https://saweria.co/widgets/qr?streamKey=262303e922af751d259de6fb194a7f89';
    const width = 400;
    const height = 600;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    
    window.open(
        url,
        'SaweriaDonation',
        `width=${width},height=${height},top=${top},left=${left},toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes`
    );
};
</script>

<template>
    <section id="support" class="py-24 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
        <!-- Floating Elements -->
        <div class="absolute top-10 left-10 text-9xl opacity-10 rotate-12 pointer-events-none">❤️</div>
        <div class="absolute bottom-20 right-20 text-9xl opacity-10 -rotate-12 pointer-events-none">🤝</div>
        
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center mb-16">
                 <h2 class="text-4xl lg:text-6xl font-black font-display mb-6 tracking-tight drop-shadow-md">
                    {{ t.support.title }}
                </h2>
                <p class="text-xl lg:text-2xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto">
                    {{ t.support.subtitle }}
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
                <!-- Sponsor Card -->
                <div class="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
                    <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 text-4xl shadow-inner">
                        💸
                    </div>
                    <h3 class="text-3xl font-bold mb-4">{{ t.support.sponsor.title }}</h3>
                    <p class="text-lg opacity-90 mb-8 flex-1">{{ t.support.sponsor.desc }}</p>
                    <button @click="openDonationPopup" class="w-full py-4 bg-white text-primary rounded-xl font-bold shadow-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2 group cursor-pointer">
                        <span class="material-icons-round group-hover:scale-110 transition-transform">qr_code_2</span>
                        {{ t.support.sponsor.button }}
                    </button>
                </div>

                <!-- Volunteer/Contributor Card -->
                <div class="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
                    <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 text-4xl shadow-inner">
                         🛠️
                    </div>
                    <h3 class="text-3xl font-bold mb-2">{{ t.support.volunteer.title }}</h3>
                    <p class="text-lg opacity-90 mb-6">{{ t.support.volunteer.desc }}</p>
                    
                    <ul class="text-left space-y-3 mb-8 w-full max-w-xs mx-auto">
                        <li v-for="(detail, index) in t.support.volunteer.details" :key="index" class="flex items-center gap-3 opacity-90">
                            <span class="material-icons-round text-sm bg-white/20 rounded-full p-1">check</span>
                            <span class="font-medium">{{ detail }}</span>
                        </li>
                    </ul>

                    <div class="flex flex-col w-full gap-3">
                        <a href="https://discord.gg/Er56Yh84ep" target="_blank" class="w-full py-3 bg-primary/30 text-white rounded-xl font-bold border border-white/30 hover:bg-primary/40 transition-all flex items-center justify-center gap-2 group">
                            <svg viewBox="0 0 256 199" class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"/></svg>
                            {{ t.support.volunteer.buttons.discord }}
                        </a>
                        <a href="https://github.com/HananUNY/Studymood" target="_blank" class="w-full py-3 bg-white/10 text-white rounded-xl font-bold border border-white/10 hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                             <span class="material-icons-round">code</span>
                            {{ t.support.volunteer.buttons.github }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
