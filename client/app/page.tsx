import Hero from '@/app/components/Hero'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      {/* Placeholder sections for the next steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-primary mb-4">Service Excellence</h2>
          <p className="text-muted-foreground">More sections coming soon...</p>
        </div>
      </section>
    </main>
  )
}
