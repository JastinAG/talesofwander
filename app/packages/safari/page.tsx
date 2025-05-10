import HeroSection from "@/components/hero-section"
import DestinationsGrid from "@/components/destinations-grid"
import { getSafariDestinations } from "@/lib/destinations-data"

export default function SafariPackagesPage() {
  const safariDestinations = getSafariDestinations()

  return (
    <>
      <HeroSection
        title="Safari Packages"
        subtitle="Experience the thrill of Kenya's wildlife and breathtaking landscapes"
        minHeight="min-h-[50vh]"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-500 dark:text-white">Safari Destinations</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore our selection of premier safari destinations across Kenya. From the iconic Maasai Mara to the
              elephant herds of Amboseli.
            </p>
          </div>

          <DestinationsGrid destinations={safariDestinations} />
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-navy-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden order-2 lg:order-1">
              <div className="absolute inset-0 bg-navy-500/20 z-10 rounded-lg"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center text-white">
                <h3 className="text-3xl font-bold mb-4">The Big Five</h3>
                <p className="mb-6">Lion, Elephant, Buffalo, Leopard, and Rhinoceros</p>
                <a
                  href="/contact"
                  className="inline-block bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Book Your Safari
                </a>
              </div>
              <div className="relative h-full w-full">
                <div className="absolute inset-0">
                  <div className="h-full w-full bg-[url('/images/safari-package-bg.jpg')] bg-cover bg-center"></div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 text-navy-500 dark:text-white">Why Choose Our Safari Packages?</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Kenya is the original safari destination and home to some of Africa's most iconic wildlife and
                landscapes. Our safari packages offer you the chance to witness the incredible diversity of animals in
                their natural habitats.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                From the annual wildebeest migration in the Maasai Mara to the elephant herds against the backdrop of
                Mount Kilimanjaro in Amboseli, our safari experiences are designed to create memories that last a
                lifetime.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-gold-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-navy-900 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-500 dark:text-white">Expert Guides</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Knowledgeable local guides who know where to find the wildlife.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-navy-900 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-500 dark:text-white">Comfortable Lodges</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Stay in carefully selected lodges and camps that blend luxury with nature.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-navy-900 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-500 dark:text-white">Customized Itineraries</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Tailor your safari experience to your interests and schedule.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-navy-900 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-500 dark:text-white">Responsible Tourism</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      We prioritize conservation and support local communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
