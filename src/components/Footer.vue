<script setup>
import { useLanguage } from '../composables/useLanguage';
const { t } = useLanguage();

const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="bg-white dark:bg-background-dark py-12 border-t border-gray-100 dark:border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between items-center gap-6">
                <div class="flex items-center gap-3">
                    <img src="/logo.svg" alt="Study Mood Logo" class="h-8 w-8 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
                    <span class="font-bold text-xl text-text-light dark:text-white font-display">Study Mood</span>
                </div>
                
                <div class="flex gap-8 text-sm font-medium text-muted-light dark:text-muted-dark">
                    <a href="#" class="hover:text-primary dark:hover:text-white transition-colors">{{ t.footer.links.privacy }}</a>
                    <a href="#" class="hover:text-primary dark:hover:text-white transition-colors">{{ t.footer.links.terms }}</a>
                    <a href="#" class="hover:text-primary dark:hover:text-white transition-colors">{{ t.footer.links.twitter }}</a>
                    <a href="#" class="hover:text-primary dark:hover:text-white transition-colors">{{ t.footer.links.instagram }}</a>
                </div>
                
                <div class="text-sm text-muted-light dark:text-muted-dark">
                    &copy; {{ currentYear }} Study Mood. {{ t.footer.rights }}
                </div>
            </div>
        </div>
    </footer>
</template>
