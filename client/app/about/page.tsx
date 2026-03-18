export default function AboutPage() {
    return (
        <main className="min-h-screen pt-24 pb-12 px-6 bg-background">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 text-center">About TB Enterprise Group</h1>

                <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                    <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-accent first-letter:float-left first-letter:mr-4">
                        Today, in a city that never sleeps, time is the ultimate luxury. TB Enterprise Group was founded on the principle that your journey should be more than just transportation; it should be a seamless extension of your professional and personal life.
                    </p>

                    <h2 className="text-3xl font-serif text-primary mt-12 mb-4">Time Management Partnership</h2>
                    <p>
                        We don't just drive; we manage your schedule. Our dispatch team monitors traffic, flights, and weather in real-time to ensure punctuality is guaranteed.
                    </p>

                    <h2 className="text-3xl font-serif text-primary mt-12 mb-4">British Etiquette Standards</h2>
                    <p>
                        Our chauffeurs are trained in the art of service. Influenced by the highest standards of British etiquette, we provide a level of discretion and anticipation that is rare in the modern world.
                    </p>
                </div>
            </div>
        </main>
    )
}
