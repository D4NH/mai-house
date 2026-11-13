<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { MapPin } from '@lucide/vue';
</script>

<template>
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div class="flex flex-col justify-between lg:col-span-4">
            <div class="flex max-w-xl flex-col gap-y-3">
                <h1
                    class="font-display text-3xl font-bold tracking-tight text-ink-primary sm:text-4xl">
                    Our Properties
                </h1>
                <p class="text-sm leading-relaxed text-ink-secondary sm:text-base">
                    Thoughtfully designed stays across Yogyakarta combining tropical minimalism,
                    privacy and seamless self check-in.
                </p>
            </div>

            <div class="mt-12 flex items-center gap-6 text-ink-primary lg:mt-0">
                <a
                    href="https://www.instagram.com/maihousejogja/"
                    class="text-link hover:text-link-hover transition-colors"
                    target="_blank"
                    rel="noopener noreferrer">
                    <svg
                        class="h-5 w-5 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true">
                        <path
                            d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8 0-3.2 0-3.6.1-4.8.1-3.2 1.7-4.8 4.9-4.9 1.2-.1 1.6-.1 4.8-.1zm0-2.2c-3.3 0-3.7 0-5 .1-4.4.2-6.8 2.6-7 7-.1 1.3-.1 1.7-.1 5s0 3.7.1 5c.2 4.4 2.6 6.8 7 7 1.3.1 1.7.1 5 .1s3.7 0 5-.1c4.4-.2 6.8-2.6 7-7 .1-1.3.1-1.7.1-5s0-3.7-.1-5c-.2-4.4-2.6-6.8-7-7-1.3-.1-1.7-.1-5-.1zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-11.8c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4z" />
                    </svg>
                </a>
                <a
                    href="https://www.tiktok.com/@mai.house.jogja/"
                    class="text-link hover:text-link-hover transition-colors"
                    target="_blank"
                    rel="noopener noreferrer">
                    <svg
                        class="h-5 w-5 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true">
                        <path
                            d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                </a>
                <a
                    href="https://wa.me/6282221861229"
                    class="text-link hover:text-link-hover transition-colors"
                    target="_blank"
                    rel="noopener noreferrer">
                    <svg
                        class="h-5 w-5 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true">
                        <path
                            d="M12.03 2C6.5 2 2.02 6.48 2.02 12c0 1.76.46 3.48 1.34 5L2 22l5.15-1.35c1.47.8 3.13 1.22 4.88 1.22 5.52 0 10-4.48 10-10S17.55 2 12.03 2zm5.82 14.13c-.24.68-1.41 1.3-1.95 1.38-.51.08-1.15.11-1.86-.11-.43-.14-.99-.32-1.7-.63-2.99-1.29-4.94-4.3-5.09-4.5-.15-.2-1.22-1.62-1.22-3.09 0-1.47.77-2.19 1.04-2.49.27-.3.59-.37.79-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.24.59.84 2.05.91 2.2.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.45.52-.15.15-.3.31-.13.61.17.3.77 1.27 1.65 2.05 1.13 1.01 2.09 1.32 2.39 1.47.3.15.47.12.64-.07.18-.2.74-.87.94-1.16.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.08.12.08.72-.16 1.4z" />
                    </svg>
                </a>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-8 lg:gap-12">
            <!-- Piyungan -->
            <article class="group flex flex-col justify-between">
                <div class="flex flex-col gap-y-5">
                    <div
                        class="aspect-square w-full overflow-hidden rounded-lg bg-sand-200 isolate">
                        <RouterLink to="/piyungan">
                            <img
                                src="/images/piyungan.jpg"
                                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-lg" />
                        </RouterLink>
                    </div>

                    <div class="flex flex-col gap-y-2.5">
                        <p class="flex gap-1 items-center text-sm leading-relaxed">
                            <MapPin class="icon" /> Piyungan
                        </p>
                        <h2 class="font-display text-xl font-semibold leading-snug">
                            Tropical minimalist house with private pool
                        </h2>
                        <p class="text-sm leading-relaxed">
                            2 bedrooms with AC, 3 bathrooms, full kitchen and enclosed indoor pool
                        </p>
                    </div>
                </div>

                <div class="pt-6">
                    <RouterLink
                        class="inline-flex items-center gap-3 text-sm font-semibold text-link group-hover:text-link-hover transition-colors"
                        to="/piyungan">
                        <span>View Property</span>
                        <span
                            aria-hidden="true"
                            class="transition-transform duration-200 group-hover:translate-x-1">
                            →
                        </span>
                    </RouterLink>
                </div>
            </article>
            <article class="group flex flex-col justify-between">
                <div class="flex flex-col gap-y-5">
                    <div
                        class="aspect-square w-full overflow-hidden rounded-lg bg-sand-200 isolate">
                        <RouterLink to="/wonosari">
                            <img
                                src="/images/wonosari.jpg"
                                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-lg" />
                        </RouterLink>
                    </div>

                    <div class="flex flex-col gap-y-2.5">
                        <p class="flex gap-1 items-center text-sm leading-relaxed">
                            <MapPin class="icon" /> Wonosari
                        </p>
                        <h2 class="font-display text-xl font-semibold leading-snug">Coming soon</h2>
                        <p class="text-sm leading-relaxed">...</p>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>
