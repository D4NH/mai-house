<script setup lang="ts">
import { computed } from 'vue';
import { PROPERTIES, isValidPropertySlug } from '@/data/properties';
import type { Property } from '@/types/property';

interface Props {
    slug: string;
}

const { slug } = defineProps<Props>();

const property = computed<Property | null>(() => {
    if (!isValidPropertySlug(slug)) return null;
    return PROPERTIES[slug];
});
</script>

<template>
    <div
        v-if="property"
        class="flex flex-col gap-y-8">
        <header class="flex flex-col gap-y-2">
            <h1 class="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {{ property.name }}
            </h1>
            <p class="text-base">
                {{ property.tagline }}
            </p>
        </header>

        <div class="aspect-video w-full overflow-hidden rounded-xl bg-sand-200">
            <img
                :src="property.heroImage"
                :alt="property.name"
                class="h-full w-full object-cover" />
        </div>

        <div class="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <section class="flex flex-col gap-y-6 lg:col-span-8">
                <p class="leading-relaxed">
                    {{ property.description }}
                </p>

                <ul class="flex flex-wrap gap-2">
                    <li
                        v-for="amenity in property.amenities"
                        :key="amenity"
                        class="rounded-full bg-sage-100 px-3.5 py-1.5 text-xs font-medium">
                        {{ amenity }}
                    </li>
                </ul>
            </section>

            <aside
                class="flex flex-col gap-y-3 rounded-2xl border border-border-subtle bg-white p-6 lg:col-span-4">
                <h2 class="text-base font-bold">Reserve This Property</h2>
                <a
                    :href="property.bookingLinks.whatsapp"
                    target="_blank"
                    rel="noopener"
                    class="rounded-lg bg-action-primary px-4 py-3 text-center text-sm font-semibold hover:bg-action-primary-hover transition-colors">
                    Book Direct via WhatsApp
                </a>
            </aside>
        </div>
    </div>
    <div v-else>Not found {{ property }}</div>
</template>
