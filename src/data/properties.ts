import type { Property, PropertySlug } from '@/types/property';

export const PROPERTIES: Record<PropertySlug, Property> = {
    piyungan: {
        slug: 'piyungan',
        name: 'Mai House Jogja - Piyungan',
        tagline: 'Tropical minimalist house with private pool',
        description:
            'Mai House is a modern, air-conditioned retreat in Piyungan featuring a private swimming pool and two bedrooms, each with a 180cm King bed and its own private bathroom, perfect for guests seeking a peaceful escape near the scenic hills of Gunungkidul.',
        address: 'Dusun Bintaran Wetan, Srimulyo, Piyungan, Bantul',
        mapsUrl: 'https://maps.app.goo.gl/ugBBs3t5Qfk3253x6',
        specs: {
            bedrooms: 2,
            bathrooms: 3,
            hasPool: true,
            maxGuests: 4,
        },
        amenities: [
            'Private Indoor Pool',
            'AC in All Bedrooms',
            'High-Speed Wi-Fi',
            'Self Check-In Lockbox',
        ],
        heroImage: '/images/piyungan.jpg',
        gallery: ['/images/piyungan/1.jpg', '/images/piyungan/2.jpg'],
        bookingLinks: {
            agoda: 'https://www.agoda.com/mai-house-jogja-h81075430/hotel/yogyakarta-id.html',
            airbnb: 'https://www.airbnb.co.id/rooms/1545319904260865242',
            booking: 'https://www.booking.com/hotel/id/mai-house-jogja.html',
            tiket: 'https://www.tiket.com/homes/indonesia/mai-house-jogja-811001764047164369',
            trip: 'https://www.trip.com/hotels/cityname-hotel-detail-132607165',
            whatsapp: 'https://wa.me/6282221861229',
        },
    },
    wonosari: {
        slug: 'wonosari',
        name: 'Mai House Jogja -  Wonosari',
        tagline: 'Serene hillside retreat near Gunungkidul coast',
        description: '...',
        address: 'Wonosari, Gunungkidul, Yogyakarta',
        mapsUrl: 'https://maps.google.com/...',
        specs: {
            bedrooms: 2,
            bathrooms: 2,
            hasPool: false,
            maxGuests: 4,
        },
        amenities: ['Garden Patio', 'AC', 'Full Kitchen'],
        heroImage: '/images/wonosari.jpg',
        gallery: [],
        bookingLinks: {
            airbnb: 'https://www.airbnb.com/...',
            whatsapp: 'https://wa.me/628...',
        },
    },
    banguntapan: {
        slug: 'banguntapan',
        name: 'Mai House Jogja -  Banguntapan',
        tagline: 'Modern urban sanctuary minutes from city center',
        description: '...',
        address: 'Banguntapan, Bantul, Yogyakarta',
        mapsUrl: 'https://maps.google.com/...',
        specs: {
            bedrooms: 3,
            bathrooms: 2,
            hasPool: true,
            maxGuests: 6,
        },
        amenities: ['Private Pool', 'Workspace Desk', 'Carport'],
        heroImage: '/images/banguntapan/hero.jpg',
        gallery: [],
        bookingLinks: {
            booking: 'https://www.booking.com/...',
            whatsapp: 'https://wa.me/628...',
        },
    },
};

export const PROPERTY_LIST: Property[] = Object.values(PROPERTIES);

export function isValidPropertySlug(value: string): value is PropertySlug {
    return value in PROPERTIES;
}
