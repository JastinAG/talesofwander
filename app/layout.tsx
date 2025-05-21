import type React from "react"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tales of Wanderthurst Tours & Travel",
  description:
    "Creating unforgettable travel experiences across Kenya, Africa, and worldwide. Specializing in beach and bush packages tailored to your needs.",
  keywords: "travel, Kenya, safari, beach, tours, Africa, Maasai Mara, Diani Beach, Mount Kenya",
  openGraph: {
    title: "Tales of Wanderthurst Tours & Travel",
    description: "Creating unforgettable travel experiences across Kenya, Africa, and worldwide.",
    url: "https://wanderthurst.com",
    siteName: "Tales of Wanderthurst",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tales of Wanderthurst Tours & Travel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tales of Wanderthurst Tours & Travel",
    description: "Creating unforgettable travel experiences across Kenya, Africa, and worldwide.",
    images: ["/images/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <Suspense fallback={
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-500">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <Skeleton className="w-40 h-6 mb-2 bg-gold-500/30" />
                <Skeleton className="w-32 h-4 bg-gold-500/20" />
              </div>
            </div>
          }>
            <main className="min-h-screen">{children}</main>
          </Suspense>
          <Footer />
          {/* WhatsApp Chatbot Button */}
          <a
            href="https://wa.me/254715091291"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center w-16 h-16 transition-colors"
            aria-label="Chat with us on WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-4.988-1.358l-.361-.214-3.709.982.991-3.617-.235-.372a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.987c-.003 5.451-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.336.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.876 11.876 0 0 0 5.741 1.463h.005c6.554 0 11.889-5.336 11.892-11.892a11.821 11.821 0 0 0-3.48-8.413"/>
            </svg>
          </a>
        </ThemeProvider>
      </body>
    </html>
  )
}
