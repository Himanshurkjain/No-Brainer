import { createApp } from 'vue'
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import './index.css';
import QuizzyLanding from './components/QuizzyLanding';
import QuizzesList from './components/QuizzesList';
import UploadJson from './components/UploadJson';
import BuildQuiz from './components/BuildQuiz';
 
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: QuizzyLanding },
        { path: '/list', component: QuizzesList },
        { path: '/uploadJson', component: UploadJson },
        { path: '/buildQuiz', component: BuildQuiz}
    ],
});


const app = createApp(App);

app.component('quizzy-landing', QuizzyLanding)
app.use(router)
app.mount('#app')
