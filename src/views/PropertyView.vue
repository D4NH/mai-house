<script setup lang="ts">
import { computed } from 'vue';
import { PROPERTIES, isValidPropertySlug } from '@/data/properties';
import type { Property } from '@/types/property';
import { Check } from '@lucide/vue';

interface Props {
    slug: string;
}

const { slug } = defineProps<Props>();

const property = computed<Property | null>(() => {
    if (!isValidPropertySlug(slug)) return null;
    return PROPERTIES[slug];
});
const otaLinks = computed(() => {
    if (!property.value) return {};
    return Object.fromEntries(
        Object.entries(property.value.bookingLinks).filter(([key]) => key !== 'whatsapp')
    );
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
                <ul class="flex flex-wrap gap-2">
                    <li
                        v-for="amenity in property.amenities"
                        :key="amenity"
                        class="rounded-full bg-sage-100 px-3.5 py-1.5 text-xs font-medium">
                        {{ amenity }}
                    </li>
                </ul>

                <p class="leading-relaxed">
                    {{ property.description }}
                </p>

                <div class="space-y-2">
                    <h3>Capacity & Bed Arrangement</h3>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div class="rounded-lg border border-border-subtle bg-white p-4 space-y-1">
                            <p class="text-xs font-semibold uppercase">Guest Capacity</p>
                            <p class="font-bold">4 People</p>
                            <p class="text-sm text-ink-muted">
                                Maximum comfort sleeping without crowding
                            </p>
                        </div>
                        <div class="rounded-lg border border-border-subtle bg-white p-4 space-y-1">
                            <p class="text-xs font-semibold uppercase">Bed Arrangement</p>
                            <p class="font-bold">180x200cm</p>
                            <p class="text-sm text-ink-muted">
                                Clean bed sheets & towels are prepared
                            </p>
                        </div>
                    </div>
                </div>

                <div class="space-y-2">
                    <h3>Notes</h3>
                    <p>
                        This is a self-service accommodation. Guests are responsible for keeping the
                        space clean and tidy during their stay. Any additional cleaning service must
                        be requested in advance and will incur an extra fee.
                    </p>
                </div>

                <div class="space-y-2">
                    <h3>Facilities</h3>
                    <ul class="space-y-3 text-sm grid grid-cols-1 sm:grid-cols-2">
                        <li class="flex items-center gap-x-3">
                            <Check class="icon" />
                            <span> 2 rooms with 180x200 bed </span>
                        </li>
                        <li class="flex items-center gap-x-3">
                            <Check class="icon" />
                            <span> AC </span>
                        </li>
                        <li class="flex items-center gap-x-3">
                            <Check class="icon" />
                            <span> En suite bathroom with water heater </span>
                        </li>
                        <li class="flex items-center gap-x-3">
                            <Check class="icon" />
                            <span> Towels, soap </span>
                        </li>
                        <li class="flex items-center gap-x-3">
                            <Check class="icon" />
                            <span> Kitchen </span>
                        </li>
                        <li class="flex items-center gap-x-3">
                            <Check class="icon" />
                            <span> Refrigerator </span>
                        </li>
                        <li class="flex items-center gap-x-3">
                            <Check class="icon" />
                            <span> Water dispenser </span>
                        </li>
                        <li class="flex items-center gap-x-3">
                            <Check class="icon" />
                            <span> Smart TV </span>
                        </li>
                        <li class="flex items-center gap-x-3">
                            <Check class="icon" />
                            <span> Wifi </span>
                        </li>
                    </ul>
                </div>

                <div class="space-y-2">
                    <h3>Check-in Hours & Accommodation Conditions</h3>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div class="rounded-lg border border-border-subtle bg-white p-4 space-y-1">
                            <p class="text-sm">Check-in: from 14.00 WIB</p>
                            <p class="text-sm">Check-out: maximum 12.00 WIB</p>
                        </div>
                        <div class="rounded-lg border border-border-subtle bg-white p-4 space-y-1">
                            <p class="text-sm">No Smoking</p>
                            <p class="text-sm">No Pets</p>
                            <p class="text-sm">No BBQ</p>
                        </div>
                    </div>
                </div>

                <div class="space-y-2">
                    <h3>Location</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.601221641908!2d110.45456277618992!3d-7.831960677804076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a516477dd03cd%3A0x433e0a11cdcef702!2sMai%20House%20Jogja!5e0!3m2!1sen!2sid!4v1794620493667!5m2!1sen!2sid"
                        width="100%"
                        height="350px"
                        style="border: 0"
                        allowfullscreen
                        loading="lazy"
                        referrerpolicy="strict-origin-when-cross-origin"></iframe>
                </div>

                <div class="space-y-2">
                    <h3>Neighbourhood highlights</h3>
                    <p>
                        Experience the Best of Both Worlds Located on the eastern edge of
                        Yogyakarta, Piyungan offers a refreshing escape from the urban hustle while
                        remaining conveniently accessible. Known as the gateway to the scenic Gunung
                        Kidul region, our neighborhood is perfect for those who want to enjoy cooler
                        breezes and local village charm.
                    </p>
                </div>
            </section>

            <aside
                class="flex flex-col gap-y-3 rounded-lg border border-border-subtle bg-white p-6 self-start">
                <h2 class="text-base font-bold text-center">Reserve This Property</h2>

                <a
                    v-for="(url, platform) in otaLinks"
                    :key="platform"
                    :href="url"
                    target="_blank"
                    rel="noopener"
                    class="capitalize rounded-lg bg-surface-hover px-4 py-3 text-center text-sm font-semibold hover:bg-surface-active transition-colors flex items-center justify-center">
                    {{ platform }}
                </a>

                <div
                    class="py-2 flex items-center text-xs text-stone-400 uppercase before:flex-1 before:border-t before:border-border-subtle before:me-6 after:flex-1 after:border-t after:border-border-subtle after:ms-6">
                    Or
                </div>
                <a
                    :href="property.bookingLinks.whatsapp"
                    target="_blank"
                    rel="noopener"
                    class="rounded-lg bg-action-secondary px-4 py-3 text-center text-sm font-semibold hover:bg-action-secondary-hover text-link-inverse transition-colors flex items-center justify-center">
                    Book Direct via WhatsApp
                    <svg
                        class="h-5 w-5 fill-current ml-1"
                        viewBox="0 0 24 24"
                        aria-hidden="true">
                        <path
                            d="M12.03 2C6.5 2 2.02 6.48 2.02 12c0 1.76.46 3.48 1.34 5L2 22l5.15-1.35c1.47.8 3.13 1.22 4.88 1.22 5.52 0 10-4.48 10-10S17.55 2 12.03 2zm5.82 14.13c-.24.68-1.41 1.3-1.95 1.38-.51.08-1.15.11-1.86-.11-.43-.14-.99-.32-1.7-.63-2.99-1.29-4.94-4.3-5.09-4.5-.15-.2-1.22-1.62-1.22-3.09 0-1.47.77-2.19 1.04-2.49.27-.3.59-.37.79-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.24.59.84 2.05.91 2.2.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.45.52-.15.15-.3.31-.13.61.17.3.77 1.27 1.65 2.05 1.13 1.01 2.09 1.32 2.39 1.47.3.15.47.12.64-.07.18-.2.74-.87.94-1.16.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.08.12.08.72-.16 1.4z" />
                    </svg>
                </a>
            </aside>
        </div>
    </div>
    <div v-else>Not found {{ property }}</div>
</template>
