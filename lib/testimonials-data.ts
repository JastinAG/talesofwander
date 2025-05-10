export interface TestimonialType {
  id: number
  name: string
  location: string
  rating: number
  comment: string
  image: string
}

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "London, UK",
    rating: 5,
    comment:
      "Our safari experience with Tales of Wanderthrust was absolutely incredible! The guides were knowledgeable, accommodations were luxurious, and we saw all of the Big Five. A dream come true!",
    image: "/images/testimonials/person1.jpg",
  },
  {
    id: 2,
    name: "John Peterson",
    location: "Toronto, Canada",
    rating: 5,
    comment:
      "Diani Beach was paradise! The team at Wanderthrust arranged everything perfectly - from airport transfers to our beachfront villa. The snorkeling trip they organized was the highlight of our vacation.",
    image: "/images/testimonials/person1.jpg",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    location: "Barcelona, Spain",
    rating: 4,
    comment:
      "Mount Kenya trekking was challenging but so rewarding! Our guide was patient and encouraging. The views from the top were absolutely breathtaking. Highly recommend this adventure!",
    image: "/images/testimonials/person1.jpg",
  },
  {
    id: 4,
    name: "Jastin Wilson",
    location: "Sydney, Australia",
    rating: 5,
    comment:
      "We combined a safari and beach holiday with Wanderthrust and it was the perfect mix of adventure and relaxation. The transitions between locations were seamless and the accommodations were top-notch.",
    image: "/images/testimonials/person4.jpg",
  },
  {
    id: 5,
    name: "Priya Patel",
    location: "Mumbai, India",
    rating: 5,
    comment:
      "Our family trip to Kenya was unforgettable thanks to Tales of Wanderthrust. They catered to our children's needs perfectly and created a customized itinerary that kept everyone engaged and excited.",
    image: "/images/testimonials/person1.jpg",
  },
  {
    id: 6,
    name: "Thomas Mueller",
    location: "Berlin, Germany",
    rating: 4,
    comment:
      "The cultural tour of Lamu Island was fascinating. Our guide was incredibly knowledgeable about the history and traditions. The boutique hotel they booked for us had amazing Swahili architecture.",
    image: "/images/testimonials/person1.jpg",
  },
]
