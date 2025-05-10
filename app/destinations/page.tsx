import HeroSection from "@/components/hero-section"
import DestinationsGrid from "@/components/destinations-grid"
import { destinations } from "@/lib/destinations-data"

export default function DestinationsPage() {
  return (
    <>
      <HeroSection
        title="Explore Our Destinations"
        subtitle="Discover the beauty and diversity of Kenya's most stunning locations"
        minHeight="min-h-[50vh]"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-500 dark:text-white">All Destinations</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Browse our complete collection of handpicked destinations across Kenya. Use the filters to find your
              perfect match.
            </p>
          </div>

          <DestinationsGrid destinations={destinations} />
        </div>
      </section>
    </>
  )
}
