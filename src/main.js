import { createApp } from 'vue'
import App from './App.vue';
import './index.css';
import QuizzyLanding from './components/QuizzyLanding';

const app = createApp(App);

app.component('quizzy-landing', QuizzyLanding)
app.mount('#app')
