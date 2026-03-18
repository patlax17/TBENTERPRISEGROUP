'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { Info, ShieldCheck, Clock, CreditCard, ChevronRight } from 'lucide-react'

// Types
type Category = 'Hypercar' | 'Supercar' | 'Ultra-Luxury'

interface ExoticVehicle {
    id: string
    name: string
    tagline: string
    category: Category
    image: string
    seats: number
    luggage?: number
    features: string[]
    bestFor: string[]
    pricing: {
        hourly: string
        halfDay?: string // 6 hrs
        dayRate?: string
        airport?: string
    }
}

const exoticFleet: ExoticVehicle[] = [
    {
        id: 'bugatti-chiron',
        name: 'Bugatti Chiron',
        tagline: 'The Pinnacle of Automotive Engineering',
        category: 'Hypercar',
        image: '/exotic-bugatti.png',
        seats: 2,
        features: ['Hypercar Experience', 'Premium Interior', '1500 HP'],
        bestFor: ['Ultra-Rare VIP Moments', 'High-End Content Shoots'],
        pricing: {
            hourly: '$2,500/hr (3-hr min)',
            halfDay: '$12,000 starting',
            dayRate: '$20,000 starting'
        }
    },
    {
        id: 'lamborghini-huracan',
        name: 'Lamborghini Huracán',
        tagline: 'Unmistakable Italian Performance',
        category: 'Supercar',
        image: '/exotic-lambo.png',
        seats: 2,
        features: ['Supercar Performance', 'Aggressive Styling', 'V10 Engine'],
        bestFor: ['Special Occasions', 'Arrivals', 'Content'],
        pricing: {
            hourly: '$900/hr (3-hr min)',
            halfDay: '$4,200 starting',
            dayRate: '$7,500 starting'
        }
    },
    {
        id: 'ferrari-488',
        name: 'Ferrari 488 / F8',
        tagline: 'Iconic Maranello Heritage',
        category: 'Supercar',
        image: '/exotic-lambo.png', // Placeholder
        seats: 2,
        features: ['Iconic Supercar', 'Premium Cabin', 'Twin-Turbo V8'],
        bestFor: ['VIP Arrivals', 'Luxury Experiences'],
        pricing: {
            hourly: '$950/hr (3-hr min)',
            halfDay: '$4,500 starting',
            dayRate: '$8,000 starting'
        }
    },
    {
        id: 'mclaren-720s',
        name: 'McLaren 720S',
        tagline: 'Aerodynamic Perfection',
        category: 'Supercar',
        image: '/exotic-lambo.png', // Placeholder
        seats: 2,
        features: ['Lightweight Performance', 'Exotic Styling', 'Dihedral Doors'],
        bestFor: ['Premium Shoots', 'Nights Out'],
        pricing: {
            hourly: '$850/hr (3-hr min)',
            halfDay: '$4,000 starting',
            dayRate: '$7,000 starting'
        }
    },
    {
        id: 'rolls-royce-cullinan',
        name: 'Rolls-Royce Cullinan',
        tagline: 'The Rolls-Royce of SUVs',
        category: 'Ultra-Luxury',
        image: '/exotic-cullinan.png',
        seats: 4,
        luggage: 4,
        features: ['Ultra-Luxury SUV', 'Privacy Partition', 'Magic Carpet Ride'],
        bestFor: ['Celebrity Movement', 'Weddings', 'Executives'],
        pricing: {
            hourly: '$450/hr (4-hr min)',
            airport: '$950 starting',
            dayRate: '$3,500 starting'
        }
    },
    {
        id: 'rolls-royce-ghost',
        name: 'Rolls-Royce Ghost',
        tagline: 'Post-Opulence Luxury',
        category: 'Ultra-Luxury',
        image: '/fleet-sedan.png', // Placeholder
        seats: 3,
        luggage: 3,
        features: ['Iconic Luxury Sedan', 'Quiet Cabin', 'Starlight Headliner'],
        bestFor: ['High-Class Corporate', 'Weddings'],
        pricing: {
            hourly: '$400/hr (4-hr min)',
            airport: '$850 starting',
            dayRate: '$3,000 starting'
        }
    },
    {
        id: 'bentley-continental',
        name: 'Bentley Continental GT',
        tagline: 'The Definitive Grand Tourer',
        category: 'Ultra-Luxury',
        image: '/fleet-sedan.png', // Placeholder
        seats: 3,
        luggage: 2,
        features: ['Grand Touring Luxury', 'Premium Interior', 'Refined Power'],
        bestFor: ['Date Nights', 'Upscale Arrivals'],
        pricing: {
            hourly: '$300/hr (3-hr min)',
            halfDay: '$1,650 starting',
            dayRate: '$2,600 starting'
        }
    },
    {
        id: 'maybach-s-class',
        name: 'Maybach S-Class',
        tagline: 'Automotive Haute Couture',
        category: 'Ultra-Luxury',
        image: '/fleet-sedan.png', // Placeholder
        seats: 3,
        luggage: 3,
        features: ['Executive Luxury', 'Rear-Seat Comfort', 'Champagne Fridge'],
        bestFor: ['Corporate VIP', 'Luxury Transfers'],
        pricing: {
            hourly: '$250/hr (3-hr min)',
            airport: '$600 starting',
            dayRate: '$1,900 starting'
        }
    }
]

export default function ExoticFleetPage() {
    const searchParams = useSearchParams()
    const [filter, setFilter] = useState<'All' | Category>('All')
    const [selectedVehicle, setSelectedVehicle] = useState<string>('')

    // Form State
    const [formState, setFormState] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        location: '',
        destination: '',
        notes: ''
    })
    const [issubmitted, setIsSubmitted] = useState(false)


    useEffect(() => {
        const vehicleParam = searchParams.get('vehicle')
        if (vehicleParam) {
            const found = exoticFleet.find(v => v.name === vehicleParam)
            if (found) {
                setSelectedVehicle(found.name)
                // Scroll to form if vehicle param exists
                const formElement = document.getElementById('request-form')
                if (formElement) formElement.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }, [searchParams])

    const filteredFleet = filter === 'All'
        ? exoticFleet
        : exoticFleet.filter(v => v.category === filter)

    const handleRequestAvailability = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitted(true)
        // In a real app, you would send this data to an API
    }

    return (
        <main className="min-h-screen bg-black text-white pb-24 font-sans">

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/exotic-bugatti.png"
                        alt="Exotic Fleet Hero"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
                    >
                        Exotic Fleet
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl text-white/80 mb-10 font-light tracking-wide"
                    >
                        Elite vehicles for unforgettable moments in NYC and beyond.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex flex-col md:flex-row gap-4 justify-center"
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            className="min-w-[200px] text-lg"
                            onClick={() => document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Request Availability
                        </Button>
                        <Link href="/contact">
                            <Button variant="outline" size="lg" className="min-w-[200px] text-lg border-white text-white hover:bg-white hover:text-black">
                                Get a Quote
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Filter Bar */}
            <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 py-6 mb-12">
                <div className="max-w-7xl mx-auto px-6 flex justify-center gap-4 flex-wrap">
                    {['All', 'Hypercar', 'Supercar', 'Ultra-Luxury'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat as any)}
                            className={cn(
                                "px-5 py-2 rounded-full text-sm font-semibold tracking-wider transition-all uppercase",
                                filter === cat
                                    ? "bg-accent text-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                            )}
                        >
                            {cat}s
                        </button>
                    ))}
                </div>
            </div>

            {/* Vehicle Grid */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-24">
                <AnimatePresence mode="popLayout">
                    {filteredFleet.map((vehicle) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            key={vehicle.id}
                            className="group bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden hover:border-accent/50 transition-colors"
                        >
                            {/* Image Wrapper */}
                            <div className="relative aspect-[16/9] overflow-hidden bg-black">
                                <Image
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-black/60 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-white border border-white/10 rounded">
                                        {vehicle.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h2 className="text-3xl font-serif font-bold text-white mb-2">{vehicle.name}</h2>
                                        <p className="text-accent text-sm md:text-base">{vehicle.tagline}</p>
                                    </div>
                                </div>

                                {/* Specs Grid */}
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8 text-sm text-white/70">
                                    <div className="flex items-center gap-2">
                                        <span className="text-accent">•</span> {vehicle.seats} Passengers
                                    </div>
                                    {vehicle.luggage && (
                                        <div className="flex items-center gap-2">
                                            <span className="text-accent">•</span> {vehicle.luggage} Luggage
                                        </div>
                                    )}
                                    {vehicle.features.map((feat, i) => (
                                        <div key={i} className="flex items-center gap-2 col-span-2 md:col-span-1">
                                            <span className="text-accent">•</span> {feat}
                                        </div>
                                    ))}
                                </div>

                                {/* Pricing */}
                                <div className="bg-white/5 rounded-lg p-5 mb-8 border border-white/5">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Hourly</p>
                                            <p className="text-white font-semibold">{vehicle.pricing.hourly.split('/')[0]}</p>
                                        </div>
                                        {vehicle.pricing.halfDay ? (
                                            <div>
                                                <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Half Day</p>
                                                <p className="text-white font-semibold">{vehicle.pricing.halfDay.replace(' starting', '')}</p>
                                            </div>
                                        ) : (
                                            <div>
                                                <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Airport</p>
                                                <p className="text-white font-semibold">{vehicle.pricing.airport?.replace(' starting', '')}</p>
                                            </div>
                                        )}
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Full Day</p>
                                            <p className="text-white font-semibold">{vehicle.pricing.dayRate?.replace(' starting', '')}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* CTAs */}
                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        onClick={() => {
                                            setSelectedVehicle(vehicle.name)
                                            document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' })
                                        }}
                                        className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-3 rounded text-sm transition-colors uppercase tracking-wide"
                                    >
                                        Request Availability
                                    </button>
                                    <Link href={`/contact?vehicle=${encodeURIComponent(vehicle.name)}`} className="w-full">
                                        <button className="w-full border border-white/20 hover:bg-white text-white hover:text-black font-medium py-3 rounded text-sm transition-colors uppercase tracking-wide">
                                            Get Quote
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Requirements Section */}
            <section className="max-w-4xl mx-auto px-6 mb-24">
                <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5">
                        <ShieldCheck size={120} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block">Exotic Booking Requirements</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                        <div className="flex gap-4">
                            <Clock className="text-accent shrink-0" size={24} />
                            <div>
                                <h4 className="font-semibold text-white mb-2">Advance Reservation</h4>
                                <p className="text-white/60 text-sm">Due to high demand and limited inventory, we recommend booking at least 72 hours in advance.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <CreditCard className="text-accent shrink-0" size={24} />
                            <div>
                                <h4 className="font-semibold text-white mb-2">Deposit & Verification</h4>
                                <p className="text-white/60 text-sm">Security deposit and valid ID verification are mandatory for all exotic vehicle rentals.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Info className="text-accent shrink-0" size={24} />
                            <div>
                                <h4 className="font-semibold text-white mb-2">Pricing Variables</h4>
                                <p className="text-white/60 text-sm">Final pricing varies by date, time, pickup location, and specific itinerary requests.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <ShieldCheck className="text-accent shrink-0" size={24} />
                            <div>
                                <h4 className="font-semibold text-white mb-2">Events & Shoots</h4>
                                <p className="text-white/60 text-sm">Please provide a detailed itinerary for photoshoots, weddings, or production use in advance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Request Form */}
            <section id="request-form" className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif font-bold text-white mb-4">Request Availability</h2>
                    <p className="text-white/70">Submit your request below and our concierge team will contact you within 2 hours.</p>
                </div>

                {issubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-green-900/20 border border-green-500/30 p-8 rounded-xl text-center"
                    >
                        <h3 className="text-2xl font-serif text-green-400 mb-4">Request Received</h3>
                        <p className="text-white/70 mb-8">Thank you. Our team is checking availability for your requested vehicle and will reach out shortly.</p>
                        <Link href="/">
                            <Button variant="outline" className="text-white border-white/20 hover:bg-white hover:text-black">Return Home</Button>
                        </Link>
                    </motion.div>
                ) : (
                    <form onSubmit={handleRequestAvailability} className="space-y-6 bg-zinc-900/50 p-8 md:p-12 rounded-2xl border border-white/5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/50 uppercase tracking-wider">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/50 uppercase tracking-wider">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/50 uppercase tracking-wider">Phone Number</label>
                                <input
                                    required
                                    type="tel"
                                    className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    value={formState.phone}
                                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/50 uppercase tracking-wider">Select Vehicle</label>
                                <select
                                    className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none"
                                    value={selectedVehicle}
                                    onChange={(e) => setSelectedVehicle(e.target.value)}
                                >
                                    <option value="" disabled>Choose a vehicle...</option>
                                    {exoticFleet.map(v => (
                                        <option key={v.id} value={v.name}>{v.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/50 uppercase tracking-wider">Date</label>
                                <input
                                    required
                                    type="date"
                                    className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    value={formState.date}
                                    onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/50 uppercase tracking-wider">Start Time</label>
                                <input
                                    required
                                    type="time"
                                    className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    value={formState.time}
                                    onChange={(e) => setFormState({ ...formState, time: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/50 uppercase tracking-wider">Special Requests / Itinerary Details</label>
                            <textarea
                                rows={4}
                                className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-accent transition-colors"
                                value={formState.notes}
                                onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                            ></textarea>
                        </div>

                        <Button type="submit" variant="primary" size="lg" className="w-full text-lg shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                            Submit Request
                        </Button>
                    </form>
                )}
            </section>
        </main>
    )
}
