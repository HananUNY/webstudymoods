import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();

createApp(App).mount('#app')
