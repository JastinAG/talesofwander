import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-navy-500 text-white py-12 border-t border-gold-500">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tales of Wanderthurst</h3>
            <p className="mb-4">Creating unforgettable travel experiences across Kenya, Africa, and worldwide.</p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" aria-label="Facebook" className="hover:text-gold-500 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter" className="hover:text-gold-500 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-gold-500 transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link href="https://youtube.com" aria-label="YouTube" className="hover:text-gold-500 transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gold-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-gold-500 transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/packages/beach" className="hover:text-gold-500 transition-colors">
                  Beach Packages
                </Link>
              </li>
              <li>
                <Link href="/packages/safari" className="hover:text-gold-500 transition-colors">
                  Safari Packages
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span>Block C, X259, Taratibu Street, Tudor, Mombasa, KENYA</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gold-500" />
                <a href="mailto:wanderthurst@landstar-group.com" className="hover:text-gold-500 transition-colors">
                  wanderthurst@landstar-group.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gold-500" />
                <a href="tel:+254715091291" className="hover:text-gold-500 transition-colors">
                  +254 715 091 291
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gold-500" />
                <a href="tel:+254100422341" className="hover:text-gold-500 transition-colors">
                  +254 100 422 341
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded bg-navy-600 border border-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-2 px-4 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-navy-400 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Tales of Wanderthurst. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="text-sm hover:text-gold-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm hover:text-gold-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-sm hover:text-gold-500 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
