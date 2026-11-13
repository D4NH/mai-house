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
            <ul class="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                <li class="font-semibold">Homestay</li>
                <li
                    aria-hidden="true"
                    class="h-1 w-1 rounded-full bg-gray-400"></li>
                <li>Capacity 4 People</li>
                <li
                    aria-hidden="true"
                    class="h-1 w-1 rounded-full bg-gray-400"></li>
                <li>2 Bedrooms</li>
                <li
                    aria-hidden="true"
                    class="h-1 w-1 rounded-full bg-gray-400"></li>
                <li>3 Bathrooms</li>
            </ul>
            <h1 class="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {{ property.name }}
            </h1>
            <p class="text-base">
                {{ property.tagline }}
            </p>
        </header>

        <div class="grid grid-cols-3 grid-rows-2 aspect-21/9 w-full overflow-hidden gap-4">
            <img
                :src="property.heroImage"
                class="col-span-2 row-span-2 h-full w-full object-cover rounded-lg" />
            <img
                src="https://a0.muscache.com/im/pictures/hosting/Hosting-1545319904260865242/original/cffdab7e-9623-4254-bda7-e171f3e40f2e.jpeg?im_w=720"
                class="h-full w-full object-cover rounded-lg" />
            <img
                src="https://a0.muscache.com/im/pictures/hosting/Hosting-1545319904260865242/original/9c220261-0019-484c-a282-f15821be4bfe.jpeg?im_w=720"
                class="h-full w-full object-cover rounded-lg" />
        </div>

        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <section class="flex flex-col gap-y-6 lg:col-span-2">
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
                class="flex flex-col gap-y-3 rounded-lg border border-border-subtle bg-white p-6">
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
