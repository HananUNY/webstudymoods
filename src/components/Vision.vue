<script setup>
import { useLanguage } from '../composables/useLanguage';
const { t } = useLanguage();
</script>

<template>
    <section id="vision" class="py-24 relative overflow-hidden bg-background-light dark:bg-background-dark">
        <div class="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                 <h3 class="text-4xl font-bold text-text-light dark:text-white leading-tight mb-4">{{ t.vision.title }} <span class="text-primary">{{ t.vision.titleHighlight }}</span></h3>
                 <p class="text-muted-light dark:text-muted-dark text-xl max-w-3xl mx-auto">{{ t.vision.desc }}</p>
            </div>

            <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                <!-- Old Way -->
                <div class="bg-gray-100 dark:bg-[#1A1A1A] rounded-[2rem] p-8 lg:p-10 border border-gray-200 dark:border-gray-800 relative overflow-hidden">
                    <div class="absolute top-0 right-0 p-8 opacity-10 grayscale">
                        <span class="material-icons-round text-9xl">sentiment_dissatisfied</span>
                    </div>
                    <div class="relative z-10">
                        <span class="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-bold rounded-full uppercase tracking-wider mb-6 inline-block border border-gray-300 dark:border-gray-700">{{ t.vision.comparison.old.badge }}</span>
                        <h4 class="text-3xl font-bold text-gray-400 dark:text-gray-500 mb-8">{{ t.vision.comparison.old.title }}</h4>
                        <ul class="space-y-4">
                            <li v-for="(item, index) in t.vision.comparison.old.items" :key="index" class="flex items-start gap-4 text-gray-500 dark:text-gray-400">
                                <span class="material-icons-round text-red-400 mt-1">close</span>
                                <span class="font-medium text-lg leading-snug">{{ item }}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- New Way (StudyMood) -->
                <div class="bg-white dark:bg-card-dark rounded-[2rem] p-8 lg:p-10 border border-primary/20 shadow-xl relative overflow-hidden group">
                     <div class="absolute top-0 right-0 p-8 opacity-10 text-primary group-hover:scale-110 transition-transform duration-700">
                        <span class="material-icons-round text-9xl">sentiment_satisfied_alt</span>
                    </div>
                    <!-- Gradient Glow -->
                    <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
                    
                    <div class="relative z-10">
                        <span class="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-6 inline-block border border-primary/20">{{ t.vision.comparison.new.badge }}</span>
                        <h4 class="text-3xl font-bold text-text-light dark:text-white mb-8">{{ t.vision.comparison.new.title }}</h4>
                        <ul class="space-y-4">
                            <li v-for="(item, index) in t.vision.comparison.new.items" :key="index" class="flex items-start gap-4 text-text-light dark:text-white">
                                <div class="bg-green-100 dark:bg-green-900/30 rounded-full p-1 mt-0.5">
                                    <span class="material-icons-round text-green-500 text-sm font-bold">check</span>
                                </div>
                                <span class="font-bold text-lg leading-snug">{{ item }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- Original Visual (Optional, moved to bottom) -->
            <div class="mt-20 flex justify-center opacity-80 scale-90">
                <!-- Using the previously existing card visual merely as a decorative footer for the section -->
                 <div class="bg-card-dark text-white rounded-[2.5rem] p-6 shadow-2xl transform rotate-1 border border-gray-700/50 backdrop-blur-sm relative overflow-hidden max-w-2xl w-full">
                        <div class="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none"></div>
                        <div class="flex justify-between items-center mb-6">
                            <div>
                                <p class="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">{{ t.vision.avgMood }}</p>
                                <div class="flex items-center gap-3">
                                    <div class="bg-mood-zen/20 p-2 rounded-lg text-mood-zen">
                                        <span class="material-icons-round">sentiment_satisfied</span>
                                    </div>
                                    <span class="text-xl font-bold">{{ t.vision.balanced }}</span>
                                </div>
                            </div>
                            <div class="bg-gray-800/80 px-4 py-2 rounded-xl text-xs font-bold text-gray-300 border border-gray-700">{{ t.vision.projected }}</div>
                        </div>
                        <!-- Simple visual bars -->
                        <div class="h-24 w-full flex items-end gap-2">
                             <div class="flex-1 bg-primary/20 h-[40%] rounded-lg"></div>
                             <div class="flex-1 bg-primary/40 h-[60%] rounded-lg"></div>
                             <div class="flex-1 bg-gradient-to-t from-primary to-secondary h-[80%] rounded-lg relative">
                                  <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-primary font-bold text-[10px] py-1 px-2 rounded-md shadow-sm">{{ t.vision.target }}</div>
                             </div>
                             <div class="flex-1 bg-primary/20 h-[50%] rounded-lg"></div>
                        </div>
                </div>
            </div>
        </div>
    </section>
</template>
