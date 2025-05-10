import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialProps {
  name: string
  location: string
  rating: number
  comment: string
  image: string
}

const TestimonialCard = ({ name, location, rating, comment, image }: TestimonialProps) => {
  return (
    <div className="bg-white dark:bg-navy-600 p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image src={image || "/placeholder.svg"} alt={name} fill sizes="48px" className="object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-navy-500 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">{location}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} className={i < rating ? "text-gold-500 fill-gold-500" : "text-gray-300"} />
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-200 italic">"{comment}"</p>
    </div>
  )
}

export default TestimonialCard
