export default function MetropolitanMasteryPage() {
    return (
        <main className="min-h-screen pt-24 pb-12 px-6 bg-background">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Metropolitan Mastery</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Providing the "Technological Assurance" executive clients require to navigate a city in flux.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-secondary/5 rounded-2xl p-8 border border-border">
                    <h2 className="text-3xl font-serif text-primary mb-4">15-Minute Early Arrival</h2>
                    <p className="text-muted-foreground mb-4">
                        We don't meet expectations; we exceed them. Our policy guarantees your chauffeur is on location 15 minutes prior to your scheduled pickup time.
                    </p>
                    <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">Standard on Every Ride</div>
                </div>

                <div className="bg-secondary/5 rounded-2xl p-8 border border-border">
                    <h2 className="text-3xl font-serif text-primary mb-4">PAX Certified Chauffeurs</h2>
                    <p className="text-muted-foreground mb-4">
                        Every TB Enterprise Group chauffeur undergoes rigorous training and certification. They are professionals who understand the nuances of executive service.
                    </p>
                    <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">Gold Standard Safety</div>
                </div>

                <div className="md:col-span-2 bg-primary text-white rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-serif mb-6">TLC Licensed & Insured</h2>
                    <p className="text-white/80 max-w-3xl mx-auto mb-8 text-lg">
                        Operating with full compliance and carrying $10M in liability coverage for your peace of mind. We are the trusted partner for Fortune 500 executives and VIPs worldwide.
                    </p>
                </div>
            </div>
        </main>
    )
}
