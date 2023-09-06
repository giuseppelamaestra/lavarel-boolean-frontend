import { createRouter, createWebHistory } from "vue-router";

// importo componenti
import CocktailsList from './pages/CocktailsList.vue';
import AppAbout from './pages/AppAbout.vue';
import AppContacts from './pages/AppContacts.vue';


const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: '/',
            name : 'CocktailsList',
            component : CocktailsList,
        },
        {
            path: '/AppAbout',
            name : 'AppAbout',
            component : AppAbout,
        },
        {
            path: '/AppContacts',
            name : 'AppContacts',
            component : AppContacts,
        },
    ]
})

export { router };
