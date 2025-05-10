import HeroSection from "@/components/hero-section"
import DestinationsGrid from "@/components/destinations-grid"
import { getBeachDestinations } from "@/lib/destinations-data"

export default function BeachPackagesPage() {
  const beachDestinations = getBeachDestinations()

  return (
    <>
      <HeroSection title="Beach Packages" subtitle="Discover Kenya's pristine beaches and coastal paradises" minHeight="min-h-[30vh]" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-500 dark:text-white">Beach Destinations</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore our selection of stunning beach destinations along Kenya's coastline. From the white sands of
              Diani to the historic charm of Lamu Island.
            </p>
          </div>

          <DestinationsGrid destinations={beachDestinations} />
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-navy-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-navy-500 dark:text-white">Why Choose Our Beach Packages?</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Kenya's coastline offers some of the most beautiful beaches in Africa, with pristine white sands,
                crystal-clear waters, and vibrant marine life. Our beach packages are designed to give you the perfect
                balance of relaxation and adventure.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Whether you're looking for a romantic getaway, a family vacation, or a solo adventure, our beach
                packages can be customized to meet your specific needs and preferences.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-gold-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-navy-900 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-500 dark:text-white">Pristine Beaches</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Enjoy some of the most beautiful and unspoiled beaches in the world.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-navy-900 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-500 dark:text-white">Water Activities</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      From snorkeling and diving to sailing and fishing, there's something for everyone.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-navy-900 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-500 dark:text-white">Luxury Accommodations</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Stay in handpicked beachfront resorts and boutique hotels.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-navy-900 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-500 dark:text-white">Cultural Experiences</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Immerse yourself in the rich coastal cultures and traditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-navy-500/20 z-10 rounded-lg"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Ready to Book?</h3>
                <p className="mb-6">Contact us to create your perfect beach getaway</p>
                <a
                  href="/contact"
                  className="inline-block bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Contact Us Now
                </a>
              </div>
              <div className="relative h-full w-full">
                <div className="absolute inset-0">
                  <div className="h-full w-full bg-[url('/images/beach-package-bg.jpg')] bg-cover bg-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
