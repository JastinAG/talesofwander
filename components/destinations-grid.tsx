"use client"

import { useState } from "react"
import DestinationCard, { type DestinationProps } from "./destination-card"
import { Button } from "@/components/ui/button"
import { Search, Filter, SortAsc, SortDesc } from "lucide-react"

interface DestinationsGridProps {
  destinations: DestinationProps[]
  showFilters?: boolean
}

type SortOption = "name" | "location" | "category" | null
type SortDirection = "asc" | "desc"

const DestinationsGrid = ({ destinations, showFilters = true }: DestinationsGridProps) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [sortBy, setSortBy] = useState<SortOption>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc")

  const toggleSort = (field: SortOption) => {
    if (sortBy === field) {
      // Toggle direction if already sorting by this field
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      // Set new sort field and default to ascending
      setSortBy(field)
      setSortDirection("asc")
    }
  }

  const sortedAndFilteredDestinations = destinations
    .filter((destination) => {
      const matchesSearch =
        destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        destination.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (typeof destination.description === "string"
          ? destination.description.toLowerCase().includes(searchTerm.toLowerCase())
          : Array.isArray(destination.description)
            ? destination.description.join(" ").toLowerCase().includes(searchTerm.toLowerCase())
            : false)

      const matchesCategory = selectedCategory === "" || destination.category === selectedCategory

      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (!sortBy) return 0

      let comparison = 0

      if (sortBy === "name") {
        comparison = a.name.localeCompare(b.name)
      } else if (sortBy === "location") {
        comparison = a.location.localeCompare(b.location)
      } else if (sortBy === "category") {
        comparison = a.category.localeCompare(b.category)
      }

      return sortDirection === "asc" ? comparison : -comparison
    })

  return (
    <div>
      {showFilters && (
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative min-w-[200px]">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 appearance-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Types</option>
                <option value="beach">Beach</option>
                <option value="safari">Safari</option>
                <option value="adventure">Adventure</option>
                <option value="cultural">Cultural</option>
              </select>
            </div>
          </div>

          {/* Sorting options */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-navy-500 dark:text-white font-medium self-center mr-2">Sort by:</span>
            <Button
              variant={sortBy === "name" ? "default" : "outline"}
              size="sm"
              onClick={() => toggleSort("name")}
              className={sortBy === "name" ? "bg-navy-500 text-white" : ""}
            >
              Name
              {sortBy === "name" &&
                (sortDirection === "asc" ? (
                  <SortAsc className="ml-2 h-4 w-4" />
                ) : (
                  <SortDesc className="ml-2 h-4 w-4" />
                ))}
            </Button>
            <Button
              variant={sortBy === "location" ? "default" : "outline"}
              size="sm"
              onClick={() => toggleSort("location")}
              className={sortBy === "location" ? "bg-navy-500 text-white" : ""}
            >
              Location
              {sortBy === "location" &&
                (sortDirection === "asc" ? (
                  <SortAsc className="ml-2 h-4 w-4" />
                ) : (
                  <SortDesc className="ml-2 h-4 w-4" />
                ))}
            </Button>
            <Button
              variant={sortBy === "category" ? "default" : "outline"}
              size="sm"
              onClick={() => toggleSort("category")}
              className={sortBy === "category" ? "bg-navy-500 text-white" : ""}
            >
              Category
              {sortBy === "category" &&
                (sortDirection === "asc" ? (
                  <SortAsc className="ml-2 h-4 w-4" />
                ) : (
                  <SortDesc className="ml-2 h-4 w-4" />
                ))}
            </Button>
            {(sortBy || searchTerm || selectedCategory) && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("")
                  setSortBy(null)
                }}
                className="ml-auto"
              >
                Reset Filters
              </Button>
            )}
          </div>
        </div>
      )}

      {sortedAndFilteredDestinations.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold mb-2">No destinations found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
          <Button
            onClick={() => {
              setSearchTerm("")
              setSelectedCategory("")
              setSortBy(null)
            }}
            className="bg-gold-500 hover:bg-gold-600 text-navy-900"
          >
            Reset Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedAndFilteredDestinations.map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>
      )}
    </div>
  )
}

export default DestinationsGrid
