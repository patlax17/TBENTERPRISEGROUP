export default function ServicesPage() {
    return (
        <main className="min-h-screen pt-24 pb-12 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Our Services</h1>
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
                    From airport transfers to corporate events, we provide the highest standard of luxury transportation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Airport Mastery", desc: "Seamless transfers to JFK, LGA, and EWR with real-time flight tracking." },
                        { title: "Corporate Solutions", desc: "Reliable, discreet transportation for executives and business meetings." },
                        { title: "Hourly As-Directed", desc: "Flexible, on-demand service for a personalized itinerary." }
                    ].map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-serif font-semibold mb-4">{service.title}</h3>
                            <p className="text-muted-foreground">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
