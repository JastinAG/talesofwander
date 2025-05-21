import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import { Users, Award, Heart, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About Tales of Wanderthurst"
        subtitle="Creating unforgettable travel experiences across Kenya, Africa, and worldwide"
        minHeight="min-h-[50vh]"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-500 dark:text-white">Our Story</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Tales of Wanderthurst was born out of a passion for showcasing the incredible beauty and diversity of
                Kenya to travelers from around the world. Founded in 2015, our journey began with a simple mission: to
                create authentic, immersive travel experiences that connect visitors with the heart and soul of Kenya.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                What started as a small team of dedicated travel enthusiasts has grown into a respected travel agency
                specializing in customized tours across Kenya and beyond. Our deep local knowledge, commitment to
                excellence, and passion for responsible tourism have made us a trusted partner for travelers seeking
                unforgettable African adventures.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Today, we continue to craft journeys that inspire, educate, and transform. Whether you're witnessing the
                great migration in the Maasai Mara, relaxing on the pristine beaches of Diani, or climbing the
                challenging slopes of Mount Kenya, our team is dedicated to making your travel dreams a reality.
              </p>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/about-story.jpg"
                alt="Tales of Wanderthurst team"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="bg-gold-500 text-navy-900 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Customer First</h3>
              <p>
                We prioritize your needs, preferences, and satisfaction above all else. Your dream vacation is our
                mission.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="bg-gold-500 text-navy-900 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p>
                We strive for excellence in every aspect of our service, from planning to execution, ensuring a seamless
                experience.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="bg-gold-500 text-navy-900 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Sustainability</h3>
              <p>
                We are committed to responsible tourism that respects and preserves the environment and benefits local
                communities.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="bg-gold-500 text-navy-900 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p>
                We operate with honesty, transparency, and ethical practices in all our dealings with clients and
                partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-500 dark:text-white">Meet Our Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our dedicated team of travel experts is passionate about creating unforgettable experiences for our
              clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="bg-white dark:bg-navy-600 rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/team/person1.jpg"
                    alt={`Team member ${index}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-navy-500 dark:text-white">Team Member {index}</h3>
                  <p className="text-gold-500 font-medium mb-4">
                    {index % 3 === 0
                      ? "Safari Specialist"
                      : index % 3 === 1
                        ? "Travel Consultant"
                        : "Destination Expert"}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Our team is made up of passionate travel experts, each dedicated to creating memorable journeys and providing exceptional service to every traveler.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-navy-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 text-navy-500 dark:text-white">
                Our Commitment to Responsible Tourism
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                At Tales of Wanderthurst, we believe that travel should be a force for good. We are committed to
                responsible tourism practices that minimize environmental impact, respect local cultures, and contribute
                positively to the communities we visit.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                We work with eco-friendly accommodations, support conservation initiatives, and ensure that a portion of
                our profits goes back to community development projects across Kenya.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-gold-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-navy-900 font-bold">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">Support for wildlife conservation projects</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-navy-900 font-bold">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">Partnership with local communities</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-navy-900 font-bold">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">Eco-friendly accommodation options</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-navy-900 font-bold">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">Waste reduction initiatives</p>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900">
                  Learn More About Our Initiatives
                </Button>
              </Link>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/responsible-tourism.jpg"
                alt="Responsible tourism"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team today to plan your perfect Kenyan getaway. We're here to make your travel dreams come true.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-6 text-lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
