'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Briefcase, Wifi, Battery, Shield, Coffee, Snowflake, Music } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

// Types
type VehicleCategory = 'Sedan' | 'SUV' | 'Sprinter'

interface Vehicle {
    id: string
    name: string
    tagline: string
    category: VehicleCategory
    image: string
    seats: number
    luggage: number
    features: string[]
    bestFor: string[]
    pricing: {
        hourly: string
        airport: string
        dayRate: string
    }
}

// Data
const fleetData: Vehicle[] = [
    {
        id: 'executive-sedan',
        name: 'Executive Sedan',
        tagline: 'Mercedes-Benz S-Class',
        category: 'Sedan',
        image: '/fleet-sedan.png',
        seats: 3,
        luggage: 3,
        features: ['Leather Interior', 'Climate Control', 'Phone Charging', 'Tinted Windows'],
        bestFor: ['Corporate Travel', 'Date Nights', 'Discreet Transfers'],
        pricing: {
            hourly: '$120/hr (2-hr min)',
            airport: '$220 starting',
            dayRate: '$950 starting'
        }
    },
    {
        id: 'luxury-sedan',
        name: 'Luxury Sedan',
        tagline: 'BMW 7 Series / Audi A8',
        category: 'Sedan',
        image: '/fleet-sedan.png', // Reusing placeholder style
        seats: 3,
        luggage: 3,
        features: ['Premium Sound', 'Wi-Fi Option', 'Charging Ports'],
        bestFor: ['Upscale City Rides', 'Business Meetings'],
        pricing: {
            hourly: '$110/hr (2-hr min)',
            airport: '$200 starting',
            dayRate: '$850 starting'
        }
    },
    {
        id: 'luxury-suv',
        name: 'Luxury SUV',
        tagline: 'Cadillac Escalade',
        category: 'SUV',
        image: '/fleet-suv.png',
        seats: 6,
        luggage: 6,
        features: ['Spacious Cabin', 'Tinted Windows', 'Premium Audio', 'Charging'],
        bestFor: ['VIP Travel', 'Groups', 'Airport Runs'],
        pricing: {
            hourly: '$160/hr (3-hr min)',
            airport: '$320 starting',
            dayRate: '$1,250 starting'
        }
    },
    {
        id: 'premium-suv',
        name: 'Premium SUV',
        tagline: 'Chevrolet Suburban / GMC Yukon XL',
        category: 'SUV',
        image: '/fleet-suv.png',
        seats: 6,
        luggage: 6,
        features: ['Comfortable Ride', 'Extra Cargo', 'Charging'],
        bestFor: ['Family Travel', 'Luggage Heavy Trips'],
        pricing: {
            hourly: '$145/hr (3-hr min)',
            airport: '$300 starting',
            dayRate: '$1,150 starting'
        }
    },
    {
        id: 'executive-sprinter',
        name: 'Executive Sprinter',
        tagline: 'Mercedes-Benz Sprinter',
        category: 'Sprinter',
        image: '/fleet-sprinter.png',
        seats: 12,
        luggage: 10,
        features: ['High Roof', 'Group Comfort', 'Charging Ports', 'Optional Wi-Fi'],
        bestFor: ['Group Transfers', 'Corporate Teams', 'Events'],
        pricing: {
            hourly: '$220/hr (4-hr min)',
            airport: '$520 starting',
            dayRate: '$1,850 starting'
        }
    },
    {
        id: 'vip-sprinter',
        name: 'VIP Sprinter',
        tagline: 'Luxury Executive Sprinter',
        category: 'Sprinter',
        image: '/fleet-sprinter.png',
        seats: 10,
        luggage: 8,
        features: ['Lounge Seating', 'Premium Lighting', 'Privacy', 'Optional Wi-Fi'],
        bestFor: ['VIP Nights Out', 'Tours', 'Celebrity Movement'],
        pricing: {
            hourly: '$280/hr (4-hr min)',
            airport: '$650 starting',
            dayRate: '$2,400 starting'
        }
    }
]

export default function FleetPage() {
    const [filter, setFilter] = useState<'All' | VehicleCategory>('All')

    const filteredFleet = filter === 'All'
        ? fleetData
        : fleetData.filter(v => v.category === filter)

    return (
        <main className="min-h-screen bg-background pb-24">
            {/* Hero Section */}
            <section className="relative h-[40vh] bg-black flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-background/90 z-10" />
                <div className="absolute inset-0 z-0 opacity-50">
                    <Image
                        src="/fleet-sedan.png"
                        alt="Fleet Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-20 text-center px-6 mt-12">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">The Elite Fleet</h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                        Meticulously maintained vehicles for every occasion.
                    </p>
                </div>
            </section>

            {/* Filter Bar */}
            <div className="sticky top-20 z-30 bg-background/95 backdrop-blur-sm border-b border-white/10 py-4 mb-12">
                <div className="max-w-7xl mx-auto px-6 flex justify-center gap-2 md:gap-4 overflow-x-auto no-scrollbar">
                    {['All', 'Sedan', 'SUV', 'Sprinter'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat as any)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                                filter === cat
                                    ? "bg-white text-black shadow-lg scale-105"
                                    : "bg-secondary/10 text-muted-foreground hover:bg-secondary/20 hover:text-white"
                            )}
                        >
                            {cat}s
                        </button>
                    ))}
                </div>
            </div>

            {/* Fleet Grid */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                <AnimatePresence mode="popLayout">
                    {filteredFleet.map((vehicle) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            key={vehicle.id}
                            className="bg-secondary/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all group"
                        >
                            {/* Image */}
                            <div className="relative aspect-[16/9] bg-black overflow-hidden">
                                <Image
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10">
                                    {vehicle.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-1">{vehicle.name}</h2>
                                        <p className="text-accent font-medium">{vehicle.tagline}</p>
                                    </div>
                                </div>

                                {/* Specs */}
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg text-sm text-muted-foreground">
                                        <Users size={16} />
                                        <span>{vehicle.seats} Pax</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg text-sm text-muted-foreground">
                                        <Briefcase size={16} />
                                        <span>{vehicle.luggage} Bags</span>
                                    </div>
                                    {vehicle.features.slice(0, 2).map((feat, i) => (
                                        <div key={i} className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg text-sm text-muted-foreground">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Pricing Box */}
                                <div className="bg-white/5 rounded-xl p-4 mb-8 grid grid-cols-3 gap-4 border border-white/5">
                                    <div className="text-center border-r border-white/10 last:border-0">
                                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Hourly</p>
                                        <p className="font-semibold text-primary text-sm md:text-base">{vehicle.pricing.hourly.split('/')[0]}</p>
                                    </div>
                                    <div className="text-center border-r border-white/10 last:border-0">
                                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Airport</p>
                                        <p className="font-semibold text-primary text-sm md:text-base">{vehicle.pricing.airport.replace(' starting', '')}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Day Rate</p>
                                        <p className="font-semibold text-primary text-sm md:text-base">{vehicle.pricing.dayRate.replace(' starting', '')}</p>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="grid grid-cols-2 gap-4">
                                    <Link href={`/contact?vehicle=${encodeURIComponent(vehicle.name)}`} className="w-full">
                                        <Button variant="outline" className="w-full">Request Quote</Button>
                                    </Link>
                                    <Link href="/?section=booking" className="w-full">
                                        <Button variant="primary" className="w-full">Book Now</Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Fleet Notes */}
            <div className="max-w-3xl mx-auto mt-16 px-6 text-center">
                <h3 className="text-lg font-serif font-semibold text-primary mb-4">Additional Information</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• All rates are improved estimates; final pricing may vary by date, time, and specific routing.</li>
                    <li>• Meet & Greet service is available for all airport transfers.</li>
                    <li>• Corporate accounts and recurring ride packages are available upon request.</li>
                    <li>• 20% gratuity is standard but customizable based on service satisfaction.</li>
                </ul>
            </div>

            {/* Mobile Sticky CTA */}
            <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
                <Link href="/?section=booking">
                    <Button variant="primary" size="lg" className="w-full shadow-2xl shadow-primary/20">
                        Book Your Ride Now
                    </Button>
                </Link>
            </div>
        </main>
    )
}
