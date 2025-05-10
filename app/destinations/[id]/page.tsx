import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar, Users, Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getDestinationById } from "@/lib/destinations-data"

interface DestinationPageProps {
  params: {
    id: string
  }
}

export default function DestinationPage({ params }: DestinationPageProps) {
  const destination = getDestinationById(params.id)

  if (!destination) {
    notFound()
  }

  const categoryLabels = {
    beach: "Beach",
    safari: "Safari",
    adventure: "Adventure",
    cultural: "Cultural",
  }

  // Sample packages for this destination
  const packages = [
    {
      id: 1,
      name: `${destination.name} Explorer`,
      duration: "3 days, 2 nights",
      price: "From $599 per person",
      description: `Experience the best of ${destination.name} with our popular package. Includes accommodation, meals, and guided tours.`,
      highlights: [
        "Luxury accommodation",
        "All meals included",
        "Expert local guides",
        "Transportation",
        "Entrance fees",
      ],
    },
    {
      id: 2,
      name: `${destination.name} Premium`,
      duration: "5 days, 4 nights",
      price: "From $999 per person",
      description: `Our premium package offers an extended stay at ${destination.name} with additional activities and exclusive experiences.`,
      highlights: [
        "Luxury accommodation",
        "All meals included",
        "Private guide",
        "Premium transportation",
        "Special experiences",
        "Photography session",
      ],
    },
    {
      id: 3,
      name: `${destination.name} Family Adventure`,
      duration: "4 days, 3 nights",
      price: "From $499 per person",
      description: `A family-friendly package designed for all ages to enjoy the wonders of ${destination.name} together.`,
      highlights: [
        "Family-friendly accommodation",
        "All meals included",
        "Kid-friendly activities",
        "Family guide",
        "Transportation",
        "Souvenir pack for kids",
      ],
    },
  ]

  return (
    <>
      <div className="relative h-[50vh]">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={destination.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <span className={`category-badge ${destination.category} mb-4`}>
              {categoryLabels[destination.category]}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">{destination.name}</h1>
            <div className="flex items-center text-lg">
              <MapPin className="mr-2 h-5 w-5" />
              <span>{destination.location}</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-navy-500 dark:text-white">About {destination.name}</h2>
              {((destination.descriptions && Array.isArray(destination.descriptions))
                ? destination.descriptions
                : (typeof destination.description === 'string' ? [destination.description] : (destination.description || []))
              ).map((desc, idx) => (
                <p key={idx} className="text-lg text-gray-700 dark:text-gray-300 mb-6">{desc}</p>
              ))}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 dark:bg-navy-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-navy-500 dark:text-white">Best Time to Visit</h3>
                  <div className="flex items-start mb-3">
                    <Calendar className="h-5 w-5 text-gold-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">Peak Season: June to October</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-gold-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">Off Season: November to May</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-navy-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-navy-500 dark:text-white">Ideal For</h3>
                  <div className="flex items-start mb-3">
                    <Users className="h-5 w-5 text-gold-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">Families, Couples, Solo Travelers</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gold-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">Recommended Stay: 3-5 days</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {(Array.isArray(destination.images) ? destination.images : []).map((img, idx) => (
                  <div key={idx} className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={`${destination.name} gallery image ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-white dark:bg-navy-600 rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-navy-500 dark:text-white">
                  Interested in this destination?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Contact us to create your personalized itinerary for {destination.name}.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold mb-4">
                    Contact Us
                  </Button>
                </Link>
                <div className="text-center text-gray-600 dark:text-gray-400 text-sm mb-6">or call us directly at</div>
                <a
                  href="tel:+254715091291"
                  className="block text-center text-navy-500 dark:text-gold-400 font-bold text-lg mb-2 hover:underline"
                >
                  +254 715 091 291
                </a>
                <a
                  href="tel:+254100422341"
                  className="block text-center text-navy-500 dark:text-gold-400 font-bold text-lg hover:underline"
                >
                  +254 100 422 341
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-navy-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-navy-500 dark:text-white text-center">Available Packages</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white dark:bg-navy-600 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-navy-500 dark:text-white">{pkg.name}</h3>
                  <div className="flex items-center mb-4 text-gray-600 dark:text-gray-300">
                    <Clock className="h-5 w-5 mr-2 text-gold-500" />
                    <span>{pkg.duration}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{pkg.description}</p>
                  <div className="mb-6">
                    <h4 className="font-bold mb-2 text-navy-500 dark:text-white">Highlights:</h4>
                    <ul className="space-y-1">
                      {pkg.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-xl font-bold text-navy-500 dark:text-white mb-4">{pkg.price}</div>
                  <Link href="/contact">
                    <Button className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900">Inquire Now</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
