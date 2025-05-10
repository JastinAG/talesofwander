import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

export interface DestinationProps {
  id: string
  name: string
  location: string
  category: "beach" | "safari" | "adventure" | "cultural"
  description?: string | string[]
  descriptions?: string[]
  image: string
  images?: string[]
}

const DestinationCard = ({ id, name, location, category, description, image }: DestinationProps) => {
  const categoryLabels = {
    beach: "BEACH",
    safari: "SAFARI",
    adventure: "ADVENTURE",
    cultural: "CULTURAL",
  }

  return (
    <div className="destination-card bg-white dark:bg-navy-600 rounded-lg overflow-hidden shadow-md">
      <div className="relative h-64">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={cn("category-badge", category)}>{categoryLabels[category]}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-navy-500 dark:text-white">{name}</h3>
        <div className="flex items-center mb-4 text-gray-600 dark:text-gray-300">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <p className="text-gray-700 dark:text-gray-200 mb-4 line-clamp-3">{description}</p>
        <Link
          href={`/destinations/${id}`}
          className="inline-flex items-center text-gold-500 hover:text-gold-600 font-medium"
        >
          Explore packages
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default DestinationCard
