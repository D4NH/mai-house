export type PropertySlug = 'piyungan' | 'wonosari' | 'banguntapan';

export interface PropertyBookingLinks {
    agoda?: string;
    airbnb?: string;
    booking?: string;
    tiket?: string;
    trip?: string;
    whatsapp: string;
}

export interface Property {
    slug: PropertySlug;
    name: string;
    tagline: string;
    description: string;
    address: string;
    mapsUrl: string;
    specs: {
        bedrooms: number;
        bathrooms: number;
        hasPool: boolean;
        maxGuests: number;
    };
    amenities: string[];
    heroImage: string;
    gallery: string[];
    bookingLinks: PropertyBookingLinks;
}
