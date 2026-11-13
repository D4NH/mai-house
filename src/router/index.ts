import { createRouter, createWebHistory } from 'vue-router';
import { isValidPropertySlug } from '@/data/properties';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/:slug',
            name: 'property',
            component: () => import('../views/PropertyView.vue'),
            props: true,
            beforeEnter: (to) => {
                const slug = Array.isArray(to.params.slug) ? to.params.slug[0] : to.params.slug;
                if (!slug || !isValidPropertySlug(slug)) {
                    return undefined;
                }
                return true;
            },
        },
        {
            path: '/links',
            name: 'links',
            component: () => import('../views/LinksView.vue'),
        },
    ],
    scrollBehavior() {
        return { top: 0 };
    },
});

export default router;
