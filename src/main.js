import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { injectSpeedInsights } from '@vercel/speed-insights';
import { inject } from '@vercel/analytics';

injectSpeedInsights();
inject();

createApp(App).mount('#app')
