'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { MapPin, Calendar, Clock, ArrowRight } from 'lucide-react'

export default function Hero() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    return (
        <section ref={ref} className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center">
            {/* Background with Parallax */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/50 z-10" /> {/* Dark Overlay for text legibility */}
                {/* Placeholder for generated image */}
                <img
                    src="/hero-bg.png"
                    alt="Luxury Chauffeur Service in NYC"
                    className="h-full w-full object-cover"
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center text-white pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
                        Punctuality is the <br />
                        <span className="text-accent italic block mt-2">Ultimate Luxury.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-sans font-light leading-relaxed drop-shadow-md">
                        NYC’s most trusted executive chauffeur service, refined for the modern metropolitan traveler.
                    </p>
                </motion.div>

                {/* Booking Entry Point - Logic Hub Pre-cursor */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    className="w-full max-w-5xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 shadow-2xl ring-1 ring-white/10"
                >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                        {/* Inputs placeholders */}
                        <div className="md:col-span-3 bg-white/5 border border-white/10 rounded-xl p-4 text-left hover:bg-white/10 transition-colors cursor-pointer group">
                            <div className="flex items-center gap-3 mb-1">
                                <MapPin className="w-4 h-4 text-accent" />
                                <span className="text-xs text-white/60 uppercase tracking-wider font-medium">Pick Up</span>
                            </div>
                            <span className="block text-white font-medium group-hover:text-accent transition-colors">Enter Location</span>
                        </div>

                        <div className="md:col-span-3 bg-white/5 border border-white/10 rounded-xl p-4 text-left hover:bg-white/10 transition-colors cursor-pointer group">
                            <div className="flex items-center gap-3 mb-1">
                                <MapPin className="w-4 h-4 text-accent" />
                                <span className="text-xs text-white/60 uppercase tracking-wider font-medium">Drop Off</span>
                            </div>
                            <span className="block text-white font-medium group-hover:text-accent transition-colors">Enter Destination</span>
                        </div>

                        <div className="md:col-span-3 bg-white/5 border border-white/10 rounded-xl p-4 text-left hover:bg-white/10 transition-colors cursor-pointer group">
                            <div className="flex items-center gap-3 mb-1">
                                <Calendar className="w-4 h-4 text-accent" />
                                <span className="text-xs text-white/60 uppercase tracking-wider font-medium">Date & Time</span>
                            </div>
                            <span className="block text-white font-medium group-hover:text-accent transition-colors">Select Schedule</span>
                        </div>

                        <div className="md:col-span-3 h-full">
                            <Button variant="secondary" size="lg" className="w-full h-full min-h-[64px] rounded-xl text-lg font-serif">
                                Reserve Now
                            </Button>
                        </div>
                    </div>

                    <div className="mt-4 flex flex-wrap justify-between items-center text-xs text-white/60 px-2">
                        <div className="flex gap-4">
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-accent" /> 15-Min Early Arrival Guarantee</span>
                            <span className="hidden sm:flex items-center gap-1">✨ PAX Certified Chauffeurs</span>
                        </div>
                        <div className="hidden md:block">
                            TLC Licensed & Insured • $10M Liability Coverage
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center animate-bounce">
                <ArrowRight className="w-6 h-6 text-white/50 rotate-90" />
            </div>
        </section>
    )
}
