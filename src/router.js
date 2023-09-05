import { createRouter, createWebHistory } from 'vue-router';
import uploadJson from './views/uploadJson'
import Home from './views/homePage'
const history = createWebHistory();
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        },
{
path: '/uploadjson',
name: 'UploadJson',
component: uploadJson,
},

];

const router = createRouter({
history,
routes,
});

export default router;