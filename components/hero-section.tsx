import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
  showSearchBar?: boolean
  minHeight?: string
}

const HeroSection = ({
  title,
  subtitle,
  ctaText = "Explore Destinations",
  ctaLink = "/destinations",
  showSearchBar = false,
  minHeight = "min-h-[80vh]",
}: HeroSectionProps) => {
  return (
    <section className={`hero-section relative flex items-center justify-center text-white ${minHeight}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-0"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">{title}</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-fade-in-delay">{subtitle}</p>

        {showSearchBar && (
          <div className="max-w-3xl mx-auto mb-8 bg-white/10 backdrop-blur-md p-4 rounded-lg animate-fade-in-delay-2">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Search destinations..."
                className="flex-grow px-4 py-3 rounded-md bg-white/90 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
              <select className="px-4 py-3 rounded-md bg-white/90 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500">
                <option value="">All Types</option>
                <option value="beach">Beach</option>
                <option value="safari">Safari</option>
                <option value="adventure">Adventure</option>
                <option value="cultural">Cultural</option>
              </select>
              <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold">Search</Button>
            </div>
          </div>
        )}

        <Link href={ctaLink}>
          <Button
            size="lg"
            className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-8 py-6 text-lg animate-fade-in-delay-3"
          >
            {ctaText}
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
