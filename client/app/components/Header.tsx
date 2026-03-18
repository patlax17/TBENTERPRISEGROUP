'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/fleet', label: 'Fleet' },
    { href: '/exotic-fleet', label: 'Exotic Fleet' },
    { href: '/about', label: 'About TB Enterprise Group' },
    { href: '/metropolitan-mastery', label: 'Metropolitan Mastery' }, // Assuming this is valid based on request
]

export default function Header() {
    const pathname = usePathname()
    const isHome = pathname === '/'
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <header
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6',
                    isScrolled || !isHome ? 'bg-background/80 backdrop-blur-md shadow-sm py-4 text-primary' : 'bg-transparent text-white py-5'
                )}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-10">
                        <Image
                            src="/logo.png"
                            alt="TB Enterprise Group"
                            width={256}
                            height={144}
                            className={cn(
                                "object-contain w-auto transition-all duration-300 ease-in-out",
                                isScrolled
                                    ? "h-[42px] sm:h-[48px] md:h-[54px]"
                                    : "h-[48px] sm:h-[56px] md:h-[64px]"
                            )}
                            priority
                            quality={100}
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    'text-sm font-medium transition-colors hover:text-accent font-sans uppercase tracking-wide',
                                    (isScrolled || !isHome) ? 'text-primary' : 'text-white'
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button variant={(isScrolled || !isHome) ? 'primary' : 'glass'} size="sm" className="ml-4">
                            Book Now
                        </Button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden z-50 relative p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className={cn('w-6 h-6', (isScrolled || isMobileMenuOpen || !isHome) ? 'text-primary' : 'text-white')} />
                        ) : (
                            <Menu className={cn('w-6 h-6', (isScrolled || !isHome) ? 'text-primary' : 'text-white')} />
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center space-y-8 md:hidden pt-20"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-serif font-medium text-primary hover:text-accent transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button variant="primary" size="lg" className="mt-8" onClick={() => setIsMobileMenuOpen(false)}>
                            Book Your Ride
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
