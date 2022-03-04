import { createRouter, createWebHistory } from "vue-router";
import EventsView from "../views/EventsView.vue";
import AboutViewVue from '../views/AboutView.vue';
import EventDetails from '../views/event/Details.vue';
import EventRegister from '../views/event/Register.vue';
import EventEdit from '../views/event/Edit.vue';

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            name: "events",
            component: EventsView,
            props: route => ({ page: parseInt(route.query.page) || 1 })
        },
        {
            path: "/event/:id",
            name: "EventDetails",
            props: true,
            component: EventDetails,
        },
        {
            path: '/event/:id/register',
            name: 'EventRegister',
            props: true,
            component: EventRegister
        },
        {
            path: '/event/:id/edit',
            name: 'EventEdit',
            props: true,
            component: EventEdit
        },
        {
            path: "/about",
            name: "about",
            component: AboutViewVue
        },
    ],
});

export default router;