import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-navy-900 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-navy-500 dark:text-white">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-navy-500 dark:text-white">Page Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Contact Dev.
        </p>
        <div className="space-x-4">
          <Link href="/">
            <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900">Return Home</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="border-navy-500 text-navy-500 dark:border-white dark:text-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
