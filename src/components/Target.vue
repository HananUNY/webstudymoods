<script setup>
import { useLanguage } from '../composables/useLanguage';
const { t } = useLanguage();
</script>

<template>
    <section id="target" class="py-24 bg-white dark:bg-[#0B1426]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-secondary font-bold tracking-wider uppercase text-sm">{{ t.target.label }}</span>
                <h3 class="text-3xl font-bold text-text-light dark:text-white mt-2">{{ t.target.title }}</h3>
            </div>
            
            <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-background-light dark:bg-card-dark p-8 rounded-[2rem] border border-transparent hover:border-blue-200 dark:hover:border-blue-900 transition-colors">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-2xl shadow-sm">🎓</div>
                        <div>
                            <h4 class="font-bold text-lg text-text-light dark:text-white">{{ t.target.university.title }}</h4>
                            <p class="text-xs font-bold text-blue-500 uppercase tracking-wide">{{ t.target.university.badge }}</p>
                        </div>
                    </div>
                    <p class="text-muted-light dark:text-muted-dark leading-relaxed">{{ t.target.university.desc }}</p>
                </div>
                
                <div class="bg-background-light dark:bg-card-dark p-8 rounded-[2rem] border border-transparent hover:border-purple-200 dark:hover:border-purple-900 transition-colors">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-2xl shadow-sm">🎒</div>
                        <div>
                            <h4 class="font-bold text-lg text-text-light dark:text-white">{{ t.target.highschool.title }}</h4>
                            <p class="text-xs font-bold text-purple-500 uppercase tracking-wide">{{ t.target.highschool.badge }}</p>
                        </div>
                    </div>
                    <p class="text-muted-light dark:text-muted-dark leading-relaxed">{{ t.target.highschool.desc }}</p>
                </div>
                
                <div class="bg-background-light dark:bg-card-dark p-8 rounded-[2rem] border border-transparent hover:border-orange-200 dark:hover:border-orange-900 transition-colors">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center text-2xl shadow-sm">🍎</div>
                        <div>
                            <h4 class="font-bold text-lg text-text-light dark:text-white">{{ t.target.educators.title }}</h4>
                            <p class="text-xs font-bold text-orange-500 uppercase tracking-wide">{{ t.target.educators.badge }}</p>
                        </div>
                    </div>
                    <p class="text-muted-light dark:text-muted-dark leading-relaxed">{{ t.target.educators.desc }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
