import { createApp } from 'vue'
import App from './App.vue'
import BaseModel from "@/components/BaseModel";
const app = createApp(App)

app.component('base-modal', BaseModel)

app.mount('#app')
