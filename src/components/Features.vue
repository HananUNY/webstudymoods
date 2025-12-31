<script setup>
import { useLanguage } from '../composables/useLanguage';
const { t } = useLanguage();
</script>

<template>
    <section id="features" class="py-24 bg-white dark:bg-[#0B1426] relative">
        <div class="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background-light dark:from-background-dark to-transparent"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-20">
                <h2 class="text-sm font-bold text-primary tracking-widest uppercase mb-3">{{ t.features.urgency }}</h2>
                <h3 class="text-3xl md:text-5xl font-bold text-text-light dark:text-white mb-6">{{ t.features.title }}</h3>
                <p class="text-muted-light dark:text-muted-dark text-xl font-light">
                    {{ t.features.subtitle }}
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Expressive Mood Tracker -->
                <div class="p-8 rounded-[2rem] bg-background-light dark:bg-card-dark border border-transparent hover:border-primary/20 transition-all group hover:bg-white dark:hover:bg-[#152035] hover:shadow-card relative overflow-hidden">
                    <span class="absolute top-6 right-6 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full border border-green-200">{{ t.features.cards.tracker.badge }}</span>
                    <div class="w-16 h-16 rounded-2xl bg-white dark:bg-background-dark flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform text-secondary border border-gray-100 dark:border-gray-700">
                        <span class="material-icons-round text-4xl">emoji_emotions</span>
                    </div>
                    <h4 class="text-xl font-bold text-text-light dark:text-white mb-3">{{ t.features.cards.tracker.title }}</h4>
                    <p class="text-muted-light dark:text-muted-dark leading-relaxed">{{ t.features.cards.tracker.desc }}</p>
                </div>

                <!-- Vibe Customization -->
                <div class="p-8 rounded-[2rem] bg-background-light dark:bg-card-dark border border-primary/20 hover:border-primary transition-all group hover:bg-white dark:hover:bg-[#152035] hover:shadow-card relative overflow-hidden">
                    <span class="absolute top-6 right-6 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full border border-green-200">{{ t.features.cards.vibe.badge }}</span>
                    <div class="absolute -right-4 -top-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors"></div>
                    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-pink-400 flex items-center justify-center shadow-lg shadow-secondary/30 mb-8 group-hover:scale-110 transition-transform text-white">
                        <span class="material-icons-round text-4xl">palette</span>
                    </div>
                    <h4 class="text-xl font-bold text-text-light dark:text-white mb-3">{{ t.features.cards.vibe.title }}</h4>
                    <p class="text-muted-light dark:text-muted-dark leading-relaxed">{{ t.features.cards.vibe.desc }}</p>
                </div>

                <!-- Axolotl Companion -->
                <div class="p-8 rounded-[2rem] bg-background-light dark:bg-card-dark border border-transparent hover:border-primary/20 transition-all group hover:bg-white dark:hover:bg-[#152035] hover:shadow-card relative overflow-hidden">
                    <span class="absolute top-6 right-6 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full border border-green-200">{{ t.features.cards.companion.badge }}</span>
                    <div class="w-16 h-16 rounded-2xl bg-white dark:bg-background-dark flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform text-primary border border-gray-100 dark:border-gray-700">
                        <span class="material-icons-round text-4xl">pets</span>
                    </div>
                    <h4 class="text-xl font-bold text-text-light dark:text-white mb-3">{{ t.features.cards.companion.title }}</h4>
                    <p class="text-muted-light dark:text-muted-dark leading-relaxed">{{ t.features.cards.companion.desc }}</p>
                </div>

                <!-- Mood Analytics -->
                <div class="p-8 rounded-[2rem] bg-background-light dark:bg-card-dark border border-transparent hover:border-primary/20 transition-all group hover:bg-white dark:hover:bg-[#152035] hover:shadow-card relative overflow-hidden">
                    <span class="absolute top-6 right-6 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full border border-blue-200">{{ t.features.cards.analytics.badge }}</span>
                    <div class="w-16 h-16 rounded-2xl bg-white dark:bg-background-dark flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform text-mood-zen border border-gray-100 dark:border-gray-700">
                        <span class="material-icons-round text-4xl">insights</span>
                    </div>
                    <h4 class="text-xl font-bold text-text-light dark:text-white mb-3">{{ t.features.cards.analytics.title }}</h4>
                    <p class="text-muted-light dark:text-muted-dark leading-relaxed">{{ t.features.cards.analytics.desc }}</p>
                </div>

                <!-- Diary Timeline -->
                <div class="p-8 rounded-[2rem] bg-background-light dark:bg-card-dark border border-transparent hover:border-primary/20 transition-all group hover:bg-white dark:hover:bg-[#152035] hover:shadow-card relative overflow-hidden">
                    <span class="absolute top-6 right-6 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full border border-blue-200">{{ t.features.cards.diary.badge }}</span>
                    <div class="w-16 h-16 rounded-2xl bg-white dark:bg-background-dark flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform text-secondary border border-gray-100 dark:border-gray-700">
                        <span class="material-icons-round text-4xl">history_edu</span>
                    </div>
                    <h4 class="text-xl font-bold text-text-light dark:text-white mb-3">{{ t.features.cards.diary.title }}</h4>
                    <p class="text-muted-light dark:text-muted-dark leading-relaxed">{{ t.features.cards.diary.desc }}</p>
                </div>

                <!-- Cross-Platform Sync -->
                <div class="p-8 rounded-[2rem] bg-background-light dark:bg-card-dark border border-transparent hover:border-primary/20 transition-all group hover:bg-white dark:hover:bg-[#152035] hover:shadow-card relative overflow-hidden">
                    <span class="absolute top-6 right-6 px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full border border-purple-200">{{ t.features.cards.sync.badge }}</span>
                    <div class="w-16 h-16 rounded-2xl bg-white dark:bg-background-dark flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform text-indigo-500 border border-gray-100 dark:border-gray-700">
                        <span class="material-icons-round text-4xl">devices</span>
                    </div>
                    <h4 class="text-xl font-bold text-text-light dark:text-white mb-3">{{ t.features.cards.sync.title }}</h4>
                    <p class="text-muted-light dark:text-muted-dark leading-relaxed">{{ t.features.cards.sync.desc }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
