<script setup lang="ts">
import { MapPin } from '@lucide/vue';
</script>

<template>
    <div class="flex flex-col space-y-8 max-w-xl">
        <section
            aria-labelledby="bookings-heading"
            class="flex flex-col gap-y-4">
            <h2
                id="bookings-heading"
                class="text-center text-base font-bold tracking-tight">
                Bookings & Reservations
            </h2>

            <div class="flex flex-col gap-y-3.5">
                <div
                    class="group relative flex items-center justify-between rounded-lg bg-white p-2.5 shadow-xs transition-all hover:bg-sand-200">
                    <a
                        href="https://www.agoda.com/mai-house-jogja-h81075430/hotel/yogyakarta-id.html"
                        class="flex flex-1 items-center gap-4 focus:outline-none"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            src="/images/agoda.jpg"
                            class="h-14 w-14 shrink-0 rounded-lg object-cover" />
                        <span
                            class="flex-1 pr-18 text-center text-base font-semibold group-hover:text-link transition-colors">
                            Agoda
                        </span>
                    </a>
                </div>
            </div>
            <div class="flex flex-col gap-y-3.5">
                <div
                    class="group relative flex items-center justify-between rounded-lg bg-white p-2.5 shadow-xs transition-all hover:bg-sand-200">
                    <a
                        href="https://www.airbnb.co.id/rooms/1545319904260865242"
                        class="flex flex-1 items-center gap-4 focus:outline-none"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            src="/images/airbnb.jpg"
                            class="h-14 w-14 shrink-0 rounded-lg object-cover" />
                        <span
                            class="flex-1 pr-18 text-center text-base font-semibold group-hover:text-link transition-colors">
                            Airbnb
                        </span>
                    </a>
                </div>
            </div>
            <div class="flex flex-col gap-y-3.5">
                <div
                    class="group relative flex items-center justify-between rounded-lg bg-white p-2.5 shadow-xs transition-all hover:bg-sand-200">
                    <a
                        href="https://www.booking.com/hotel/id/mai-house-jogja.html"
                        class="flex flex-1 items-center gap-4 focus:outline-none"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            src="/images/booking.jpg"
                            class="h-14 w-14 shrink-0 rounded-lg object-cover" />
                        <span
                            class="flex-1 pr-18 text-center text-base font-semibold group-hover:text-link transition-colors">
                            Booking.com
                        </span>
                    </a>
                </div>
            </div>
            <div class="flex flex-col gap-y-3.5">
                <div
                    class="group relative flex items-center justify-between rounded-lg bg-white p-2.5 shadow-xs transition-all hover:bg-sand-200">
                    <a
                        href="https://www.tiket.com/homes/indonesia/mai-house-jogja-811001764047164369"
                        class="flex flex-1 items-center gap-4 focus:outline-none"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            src="/images/tiket.jpg"
                            class="h-14 w-14 shrink-0 rounded-lg object-cover" />
                        <span
                            class="flex-1 pr-18 text-center text-base font-semibold group-hover:text-link transition-colors">
                            Tiket.com
                        </span>
                    </a>
                </div>
            </div>
            <div class="flex flex-col gap-y-3.5">
                <div
                    class="group relative flex items-center justify-between rounded-lg bg-white p-2.5 shadow-xs transition-all hover:bg-sand-200">
                    <a
                        href="https://www.trip.com/hotels/cityname-hotel-detail-132607165"
                        class="flex flex-1 items-center gap-4 focus:outline-none"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            src="/images/trip.jpg"
                            class="h-14 w-14 shrink-0 rounded-lg object-cover" />
                        <span
                            class="flex-1 pr-18 text-center text-base font-semibold group-hover:text-link transition-colors">
                            Trip.com
                        </span>
                    </a>
                </div>
            </div>
        </section>

        <section class="flex flex-col gap-y-4">
            <h2 class="text-center text-base font-bold tracking-tight">Location</h2>

            <div
                class="group relative flex items-center justify-between rounded-lg bg-white p-2.5 shadow-xs transition-all hover:bg-sand-200">
                <a
                    href="https://maps.app.goo.gl/ugBBs3t5Qfk3253x6"
                    class="flex min-w-0 flex-1 items-center gap-4 focus:outline-none"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                        src="/images/gmaps.jpg"
                        class="h-14 w-14 shrink-0 rounded-lg border border-border-subtle object-cover" />

                    <div
                        class="flex min-w-0 flex-1 flex-col items-center justify-center px-2 text-center">
                        <span
                            class="pr-18 text-base font-semibold group-hover:text-link transition-colors">
                            Google Maps
                        </span>
                        <span class="mt-0.5 flex max-w-full items-center gap-1 text-xs">
                            <MapPin class="icon" />
                            <span class="truncate pr-18">
                                Jl. Dusun Bintaran Wetan, Bantaran Wetan, Srimulyo, Kabupaten...
                            </span>
                        </span>
                    </div>
                </a>
            </div>
        </section>

        <section class="flex flex-col gap-y-4">
            <h2 class="text-center text-base font-bold tracking-tight">Social Media</h2>

            <div
                class="group relative flex items-center justify-between rounded-lg bg-white p-2.5 shadow-xs transition-all hover:bg-sand-200">
                <a
                    href="https://www.instagram.com/maihousejogja/"
                    class="flex min-w-0 flex-1 items-center gap-4 focus:outline-none"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                        src="@/assets/logo.jpeg"
                        class="h-14 w-14 shrink-0 rounded-lg border border-border-subtle object-cover" />

                    <div
                        class="flex min-w-0 flex-1 flex-col items-center justify-center px-2 text-center">
                        <span
                            class="flex items-center pr-18 text-base font-semibold group-hover:text-link transition-colors">
                            <svg
                                class="h-4 w-4 fill-current mr-2"
                                viewBox="0 0 24 24"
                                aria-hidden="true">
                                <path
                                    d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8 0-3.2 0-3.6.1-4.8.1-3.2 1.7-4.8 4.9-4.9 1.2-.1 1.6-.1 4.8-.1zm0-2.2c-3.3 0-3.7 0-5 .1-4.4.2-6.8 2.6-7 7-.1 1.3-.1 1.7-.1 5s0 3.7.1 5c.2 4.4 2.6 6.8 7 7 1.3.1 1.7.1 5 .1s3.7 0 5-.1c4.4-.2 6.8-2.6 7-7 .1-1.3.1-1.7.1-5s0-3.7-.1-5c-.2-4.4-2.6-6.8-7-7-1.3-.1-1.7-.1-5-.1zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-11.8c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4z" />
                            </svg>
                            Instagram
                        </span>
                        <span class="mt-0.5 flex max-w-full items-center gap-1 text-xs">
                            <span class="truncate pr-18"> maihousejogja </span>
                        </span>
                    </div>
                </a>
            </div>
            <div
                class="group relative flex items-center justify-between rounded-lg bg-white p-2.5 shadow-xs transition-all hover:bg-sand-200">
                <a
                    href="https://www.tiktok.com/@mai.house.jogja/"
                    class="flex min-w-0 flex-1 items-center gap-4 focus:outline-none"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                        src="@/assets/logo.jpeg"
                        class="h-14 w-14 shrink-0 rounded-lg border border-border-subtle object-cover" />

                    <div
                        class="flex min-w-0 flex-1 flex-col items-center justify-center px-2 text-center">
                        <span
                            class="flex items-center pr-18 text-base font-semibold group-hover:text-link transition-colors">
                            <svg
                                class="h-5 w-5 fill-current mr-1"
                                viewBox="0 0 24 24"
                                aria-hidden="true">
                                <path
                                    d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                            </svg>
                            Tiktok
                        </span>
                        <span class="mt-0.5 flex max-w-full items-center gap-1 text-xs">
                            <span class="truncate pr-18">@mai.house.jogja</span>
                        </span>
                    </div>
                </a>
            </div>
            <div
                class="group relative flex items-center justify-between rounded-lg bg-white p-2.5 shadow-xs transition-all hover:bg-sand-200">
                <a
                    href="https://wa.me/6282221861229"
                    class="flex min-w-0 flex-1 items-center gap-4 focus:outline-none">
                    <img
                        src="@/assets/logo.jpeg"
                        class="h-14 w-14 shrink-0 rounded-lg border border-border-subtle object-cover" />

                    <div class="flex min-w-0 flex-1 items-center justify-center px-2 text-center">
                        <svg
                            class="h-5 w-5 fill-current mr-1"
                            viewBox="0 0 24 24"
                            aria-hidden="true">
                            <path
                                d="M12.03 2C6.5 2 2.02 6.48 2.02 12c0 1.76.46 3.48 1.34 5L2 22l5.15-1.35c1.47.8 3.13 1.22 4.88 1.22 5.52 0 10-4.48 10-10S17.55 2 12.03 2zm5.82 14.13c-.24.68-1.41 1.3-1.95 1.38-.51.08-1.15.11-1.86-.11-.43-.14-.99-.32-1.7-.63-2.99-1.29-4.94-4.3-5.09-4.5-.15-.2-1.22-1.62-1.22-3.09 0-1.47.77-2.19 1.04-2.49.27-.3.59-.37.79-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.24.59.84 2.05.91 2.2.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.45.52-.15.15-.3.31-.13.61.17.3.77 1.27 1.65 2.05 1.13 1.01 2.09 1.32 2.39 1.47.3.15.47.12.64-.07.18-.2.74-.87.94-1.16.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.08.12.08.72-.16 1.4z" />
                        </svg>
                        <span
                            class="pr-18 text-base font-semibold group-hover:text-link transition-colors">
                            WhatsApp
                        </span>
                    </div>
                </a>
            </div>
        </section>
    </div>
</template>
