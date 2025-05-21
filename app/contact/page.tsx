import HeroSection from "@/components/hero-section"
import ContactForm from "@/components/contact-form"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <HeroSection title="Contact Us" subtitle="Get in touch with our team to plan your perfect journey" minHeight="min-h-[50vh]" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-navy-500 dark:text-white">Get In Touch</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Whether you're ready to book your next adventure or just have questions about our destinations and
                packages, our team is here to help. Fill out the form, and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-gold-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-navy-500 dark:text-white mb-1">Our Office</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Block C, X259, Taratibu Street,
                      <br />
                      Tudor, Mombasa, KENYA
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-gold-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-navy-500 dark:text-white mb-1">Email</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      <a
                        href="mailto:wanderthurst@landstar-group.com"
                        className="hover:text-gold-500 transition-colors"
                      >
                        wanderthurst@landstar-group.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-gold-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-navy-500 dark:text-white mb-1">Phone</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      <a href="tel:+254715091291" className="hover:text-gold-500 transition-colors block">
                        +254 715 091 291
                      </a>
                      <a href="tel:+254100422341" className="hover:text-gold-500 transition-colors block">
                        +254 100 422 341
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-gold-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-navy-500 dark:text-white mb-1">Office Hours</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 3:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-navy-700 p-6 rounded-lg">
                <h4 className="font-bold text-navy-500 dark:text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    className="bg-navy-500 text-white hover:bg-navy-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    className="bg-navy-500 text-white hover:bg-navy-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    className="bg-navy-500 text-white hover:bg-navy-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com"
                    className="bg-navy-500 text-white hover:bg-navy-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-navy-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-navy-500 dark:text-white">Our Location</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Visit our office in Mombasa, Kenya to meet our team and plan your journey in person.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden h-[500px] shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127356.66107720042!2d39.59289485!3d-4.0434771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012e78ec02c15%3A0xcb618bbc35d0db5a!2sMombasa%2C%20Kenya!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tales of Wanderthurst Office Location"
              aria-label="Map showing the location of Tales of Wanderthurst office in Mombasa, Kenya"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}
