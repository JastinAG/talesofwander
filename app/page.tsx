"use client"
import DestinationsGrid from "@/components/destinations-grid"
import TestimonialCard from "@/components/testimonial-card"
import { Button } from "@/components/ui/button"
import { destinations } from "@/lib/destinations-data"
import { testimonials } from "@/lib/testimonials-data"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Calendar, Users, Compass, Shield, Award } from "lucide-react"
import ImageSlider from "@/components/image-slider"
import { useState, useRef, useEffect } from "react"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filter, setFilter] = useState("")
  const featuredTestimonials = testimonials // show all
  const featuredRef = useRef<HTMLDivElement>(null)
  const testimonialsRowRef = useRef<HTMLDivElement>(null)
  const [carouselIndex, setCarouselIndex] = useState(0)

  // Filter destinations based on search and filter
  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (typeof destination.description === "string"
        ? destination.description.toLowerCase().includes(searchTerm.toLowerCase())
        : false)
    const matchesFilter = filter === "" || destination.category === filter
    return matchesSearch && matchesFilter
  })

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % featuredTestimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [featuredTestimonials.length])

  useEffect(() => {
    if (testimonialsRowRef.current) {
      const container = testimonialsRowRef.current;
      const card = container.querySelector('div[data-carousel-card]');
      if (card) {
        const cardWidth = (card as HTMLElement).offsetWidth + 24; // 24px gap-6
        container.scrollTo({
          left: carouselIndex * cardWidth,
          behavior: 'smooth',
        });
      }
    }
  }, [carouselIndex]);

  const handleSearch = () => {
    if (featuredRef.current) {
      featuredRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <div className="relative">
        <div className="w-full h-2.5 bg-gold-500 z-20"></div> {/* Thicker gold divider below navbar */}
        <div> {/* No top padding to remove gap */}
          <ImageSlider
            images={[
              { src: "https://images.pexels.com/photos/457876/pexels-photo-457876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Beautiful beach sunset in Kenya" },
              { src: "https://www.wildlifekenyasafari.com/wp-content/uploads/2023/12/safari-truck-giraffes-micato-safaris-SAFARIGUIDETIPS0721-2549bb165aa34dc193cb8b6f3958654b-1170x450.jpg", alt: "African safari landscape with wildlife" },
              { src: "https://www.tsavonationalparkkenya.com/wp-content/uploads/2023/02/kenya-mombasa-north-coast-beaches.jpg", alt: "Cultural experience with local tribes" },
              { src: "https://www.discoverafrica.com/wp-content/uploads/2014/04/iStock-918855102-1200x675.jpg", alt: "Wildebeest migration in Kenya" },
            ]}
            overlayContent={
              <div className="container mx-auto px-4 text-center text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                  Discover Kenya's Breathtaking Beauty
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-fade-in-delay">
                  Creating unforgettable travel experiences across Kenya, Africa, and worldwide. Specializing in beach and
                  bush packages tailored to your needs.
                </p>
                <div className="max-w-3xl mx-auto mb-8 bg-white/10 backdrop-blur-md p-4 rounded-lg animate-fade-in-delay-2">
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      type="text"
                      placeholder="Search destinations..."
                      className="flex-grow px-4 py-3 rounded-md bg-white/90 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                      className="px-4 py-3 rounded-md bg-white/90 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500"
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                    >
                      <option value="">All Types</option>
                      <option value="beach">Beach</option>
                      <option value="safari">Safari</option>
                      <option value="adventure">Adventure</option>
                      <option value="cultural">Cultural</option>
                    </select>
                    <Button
                      className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold"
                      onClick={handleSearch}
                      type="button"
                    >
                      Search
                    </Button>
                  </div>
                </div>
                <Link href="/destinations">
                  <Button
                    size="lg"
                    className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-8 py-6 text-lg animate-fade-in-delay-3"
                  >
                    Explore Destinations
                  </Button>
                </Link>
              </div>
            }
          />
        </div>
      </div>

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50 dark:bg-navy-800" ref={featuredRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-500 dark:text-white">Featured Destinations</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our handpicked selection of Kenya's most stunning destinations, from pristine beaches to majestic
              safaris.
            </p>
          </div>

          <DestinationsGrid destinations={filteredDestinations.slice(0, 6)} showFilters={false} />

          <div className="text-center mt-12">
            <Link href="/destinations">
              <Button size="lg" className="bg-navy-500 hover:bg-navy-600 text-white">
                View All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/about-us.jpg"
                alt="About Tales of Wanderthrust"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-500 dark:text-white">
                Your Journey, Our Expertise
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                At Tales of Wanderthrust, we believe that travel should be transformative, enriching, and seamless. With
                our deep knowledge of Kenya and beyond, we craft personalized experiences that connect you with the
                heart and soul of each destination.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Whether you're seeking the thrill of a safari, the serenity of pristine beaches, or the adventure of
                mountain trekking, our team of experienced travel specialists will design your perfect journey.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <Compass className="h-6 w-6 text-gold-500 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-navy-500 dark:text-white">Expert Guides</h4>
                    <p className="text-gray-600 dark:text-gray-400">Knowledgeable local experts</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-gold-500 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-navy-500 dark:text-white">Safe Travel</h4>
                    <p className="text-gray-600 dark:text-gray-400">Your security is our priority</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="h-6 w-6 text-gold-500 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-navy-500 dark:text-white">Personalized</h4>
                    <p className="text-gray-600 dark:text-gray-400">Tailored to your preferences</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Award className="h-6 w-6 text-gold-500 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-navy-500 dark:text-white">Quality Service</h4>
                    <p className="text-gray-600 dark:text-gray-400">Exceptional experiences</p>
                  </div>
                </div>
              </div>

              <Link href="/about">
                <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Package Categories */}
      <section className="py-16 bg-navy-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Packages</h2>
            <p className="text-lg max-w-3xl mx-auto">
              From thrilling safaris to relaxing beach getaways, we offer a wide range of packages to suit every
              traveler's preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Beach Packages */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/images/categories/beach.jpg"
                  alt="Beach Packages"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-2xl font-bold p-6">Beach Packages</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-6">
                  Relax on Kenya's pristine beaches with crystal clear waters and white sands. Perfect for honeymoons,
                  family vacations, or a peaceful getaway.
                </p>
                <Link href="/packages/beach">
                  <Button className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900">View Beach Packages</Button>
                </Link>
              </div>
            </div>

            {/* Safari Packages */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/images/categories/safari.jpg"
                  alt="Safari Packages"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-2xl font-bold p-6">Safari Packages</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-6">
                  Experience the thrill of witnessing Africa's magnificent wildlife in their natural habitat. Our safari
                  packages offer unforgettable adventures.
                </p>
                <Link href="/packages/safari">
                  <Button className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900">View Safari Packages</Button>
                </Link>
              </div>
            </div>

            {/* Adventure Packages */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/images/categories/adventure.jpg"
                  alt="Adventure Packages"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-2xl font-bold p-6">Adventure Packages</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-6">
                  For the thrill-seekers, our adventure packages offer hiking, mountain climbing, white water rafting,
                  and more across Kenya's diverse landscapes.
                </p>
                <Link href="/packages/adventure">
                  <Button className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900">
                    View Adventure Packages
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50 dark:bg-navy-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-500 dark:text-white">How It Works</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Planning your dream vacation with Tales of Wanderthrust is simple and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white dark:bg-navy-600 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6 shadow-md">
                <Compass className="h-10 w-10 text-gold-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy-500 dark:text-white">1. Choose Your Destination</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Browse our wide range of destinations and packages to find your perfect match.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white dark:bg-navy-600 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6 shadow-md">
                <Calendar className="h-10 w-10 text-gold-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy-500 dark:text-white">2. Contact Us</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Reach out via phone or email to discuss your preferences and requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white dark:bg-navy-600 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6 shadow-md">
                <MapPin className="h-10 w-10 text-gold-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy-500 dark:text-white">3. Enjoy Your Journey</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Relax and enjoy as we take care of all the details for your unforgettable adventure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-500 dark:text-white">
              What Our Travelers Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied travelers about their experiences.
            </p>
          </div>
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gold-500 scrollbar-track-navy-100">
            <div
              className="flex flex-nowrap gap-6 pb-4 snap-x snap-mandatory"
              ref={testimonialsRowRef}
              style={{ scrollBehavior: 'smooth' }}
            >
              {featuredTestimonials.map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  data-carousel-card
                  className="min-w-[320px] max-w-xs flex-shrink-0 snap-center"
                >
                  <TestimonialCard
                    name={testimonial.name}
                    location={testimonial.location}
                    rating={testimonial.rating}
                    comment={testimonial.comment}
                    image={"/images/team/person1.jpg"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-navy-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to plan your perfect getaway. Our travel experts are ready to create your dream vacation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-6 text-lg">
                Contact Us
              </Button>
            </Link>
            <Link href="/destinations">
              <Button
                size="lg"
                className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-6 text-lg"
              >
                Explore Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
