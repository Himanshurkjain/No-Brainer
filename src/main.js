import { createApp } from 'vue'
import App from './App.vue';
import './index.css';
import QuizzyLanding from './components/QuizzyLanding';
import router from './router'

const app = createApp(App);

app.component('quizzy-landing', QuizzyLanding)
app.use(router)
app.mount('#app')
