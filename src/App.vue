<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

const currentYear: number = new Date().getFullYear();
</script>

<template>
    <div class="min-h-screen bg-sand-100 flex flex-col justify-between px-6 py-8 md:px-14 md:py-12">
        <header class="mx-auto flex flex-wrap w-full max-w-7xl items-start justify-between">
            <RouterLink to="/">
                <img
                    class="h-35 w-35 rounded-lg"
                    src="@/assets/logo.jpeg" />
            </RouterLink>

            <nav
                aria-label="Primary Navigation"
                class="flex items-center gap-6 md:gap-10 font-medium pt-4 sm:pt-0">
                <RouterLink
                    class="text-link hover:text-link-hover"
                    to="/">
                    Home
                </RouterLink>
                <RouterLink
                    class="text-link hover:text-link-hover"
                    to="/links">
                    Links
                </RouterLink>
            </nav>
        </header>

        <RouterView class="mx-auto my-auto w-full max-w-7xl pt-8 pb-8" />

        <footer class="mx-auto w-full max-w-7xl border-t border-border-subtle pt-6 text-xs">
            <div class="flex flex-col items-center justify-between gap-2 sm:flex-row">
                <p>© {{ currentYear }} Mai House. All rights reserved.</p>
                <p>Yogyakarta</p>
            </div>
        </footer>
    </div>
</template>

<style lang="scss">
a.router-link-exact-active {
    color: var(--color-text);
}
</style>
