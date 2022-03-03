import { createRouter, createWebHistory } from "vue-router";
import EventsView from "../views/EventsView.vue";
import AboutViewVue from '../views/AboutView.vue';

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            name: "events",
            component: EventsView,
        },
        {
            path: "/events",
            name: "events",
            component: EventsView,
        },
        {
            path: "/about",
            name: "about",
            component: AboutViewVue
        },
    ],
});

export default router;