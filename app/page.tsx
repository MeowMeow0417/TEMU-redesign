"use client"

import { useState } from "react"
import { Search, ShoppingCart, User, Menu, X, Star, Truck, CreditCard, Award, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

// Mock data for products
const newArrivals = [
  {
    id: 1,
    name: "Handhold Mini Fan",
    category: "Fans & Air Conditioner",
    price: "₱700",
    rating: 4.3,
    image: "/portable-mini-fan.png",
  },
  {
    id: 2,
    name: "Electric Scooter",
    category: "Sports",
    price: "₱2,185",
    rating: 4.4,
    image: "/electric-scooter.png",
  },
  {
    id: 3,
    name: "Wide Leg Pants",
    category: "Women's Pants",
    price: "₱339",
    rating: 4.5,
    image: "/wide-leg-pants-fashion.png",
  },
  {
    id: 4,
    name: "Transparent Album",
    category: "Scrapbooking and Stamping",
    price: "₱97",
    rating: 4.3,
    image: "/photo-album-scrapbook.png",
  },
]

const featuredProducts = [
  {
    id: 5,
    name: "2 piece Co Ord set",
    category: "Boy's Set",
    price: "₱500",
    rating: 4.6,
    image: "/boys-coordinated-outfit.png",
  },
  {
    id: 6,
    name: "Fast Charging Cable",
    category: "Cables and Adapters",
    price: "₱185",
    rating: 4.7,
    image: "/fast-charging-usb-cable.png",
  },
  {
    id: 7,
    name: "Children's Bicycle",
    category: "Baby's Travel Gear",
    price: "₱3,536",
    rating: 4.3,
    image: "/children-on-bicycles.png",
  },
  {
    id: 8,
    name: "Baggy Cargo Pants",
    category: "Boy's Pants",
    price: "₱696",
    rating: 4.5,
    image: "/baggy-cargo-streetwear.png",
  },
]

const categories = [
  { name: "WOMENS", image: "/diverse-women-fashion.png", hoverImage: "/summer-fashion-collection.png" },
  { name: "MENS", image: "/men-fashion-clothing.png", hoverImage: "/men-casual-wear.png" },
  { name: "MEN SHOES", image: "/mens-sneakers.png", hoverImage: "/men-formal-shoes.png" },
  { name: "HOODIES AND JACKETS", image: "/winter-outerwear.png", hoverImage: "/winter-jackets-collection.png" },
  { name: "WOMEN SHOES", image: "/women-high-heels.png", hoverImage: "/women-casual-shoes.png" },
  { name: "ELECTRONICS", image: "/electronics-gadgets.png", hoverImage: "/latest-electronics.png" },
]

const reviews = [
  {
    name: "Roger Lubin",
    avatar: "/avatar-man-1.png",
    rating: 5,
    comment: "Amazing quality products and fast delivery. Highly recommend!",
    time: "a month ago",
  },
  {
    name: "Paityn Staton",
    avatar: "/avatar-woman-1.png",
    rating: 5,
    comment: "Great shopping experience. The customer service is excellent.",
    time: "a month ago",
  },
  {
    name: "Chance Botosh",
    avatar: "/avatar-man-2.png",
    rating: 5,
    comment: "Best prices online and authentic products. Will shop again!",
    time: "a month ago",
  },
  {
    name: "Haylie Siphron",
    avatar: "/avatar-woman-2.png",
    rating: 5,
    comment: "Love the variety of products available. Quick shipping too.",
    time: "a month ago",
  },
  {
    name: "Kaylynn Vetrovs",
    avatar: "/avatar-woman-3.png",
    rating: 5,
    comment: "Excellent quality and great customer support. Satisfied customer!",
    time: "a month ago",
  },
  {
    name: "Makenna Baptista",
    avatar: "/avatar-woman-4.png",
    rating: 5,
    comment: "Perfect shopping platform with amazing deals and discounts.",
    time: "a month ago",
  },
]

const benefits = [
  { icon: Truck, title: "Quick Delivery" },
  { icon: CreditCard, title: "Secure Payment" },
  { icon: Award, title: "Best Quality" },
  { icon: Shield, title: "Return Guarantee" },
]

export default function TemuHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-orange-600">TEMU</div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                Best Sellers
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                5 Star Rated
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                Anniversary Sale
              </a>
              <a href="#arrivals" className="text-gray-700 hover:text-orange-600 transition-colors">
                Arrivals
              </a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-orange-600 transition-colors">Categories</button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">
                    Women's
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">
                    Men's
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">
                    Electronics
                  </a>
                </div>
              </div>
            </nav>

            {/* Search and Icons */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 w-64 rounded-full border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-orange-600">
                <ShoppingCart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-orange-600">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-gray-700 hover:text-orange-600">
                  Best Sellers
                </a>
                <a href="#" className="text-gray-700 hover:text-orange-600">
                  5 Star Rated
                </a>
                <a href="#" className="text-gray-700 hover:text-orange-600">
                  Anniversary Sale
                </a>
                <a href="#arrivals" className="text-gray-700 hover:text-orange-600">
                  Arrivals
                </a>
                <div className="pt-4 border-t border-gray-200">
                  <Input
                    type="text"
                    placeholder="Search..."
                    className="w-full rounded-full border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">DON'T MISS OUT!!!</h1>
            <p className="text-xl md:text-2xl mb-6">All deals just one click away</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="text-2xl md:text-3xl font-bold text-yellow-300">Up to 90% OFF!</span>
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-full"
              >
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center space-x-3 text-center">
                <benefit.icon className="w-8 h-8 text-orange-600" />
                <span className="font-semibold text-gray-800">{benefit.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              <span className="text-orange-600">SHOP</span> by Category
            </h2>
            <p className="text-xl text-gray-600">
              Discover our featured category of the <span className="text-orange-600 font-semibold">week</span>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onMouseEnter={() => setHoveredCategory(category.name)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={hoveredCategory === category.name ? category.hoverImage : category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black bg-opacity-70 text-white px-3 py-1 rounded-md font-bold text-sm">
                      {category.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section id="arrivals" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">New Arrivals</h2>
            <Button
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
            >
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-gray-800 line-clamp-2">{product.name}</h3>
                      <div className="flex items-center space-x-1 text-sm">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-800">{product.price}</span>
                      <div className="flex space-x-1">{renderStars(product.rating)}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
            <Button
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
            >
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-gray-800 line-clamp-2">{product.name}</h3>
                      <div className="flex items-center space-x-1 text-sm">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-800">{product.price}</span>
                      <div className="flex space-x-1">{renderStars(product.rating)}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  <span className="text-orange-600">Latest</span> Reviews from our Customer
                </h2>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <div className="flex space-x-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600">5.0 Rating from 69+ Reviews</span>
                </div>
              </div>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">Leave a Review</Button>
            </div>
          </div>

          <div className="bg-orange-600 rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {reviews.map((review, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-4 text-center">
                    <img
                      src={review.avatar || "/placeholder.svg"}
                      alt={review.name}
                      className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                    />
                    <h4 className="font-semibold text-gray-800 mb-1">{review.name}</h4>
                    <p className="text-xs text-gray-500 mb-2">{review.time}</p>
                    <div className="flex justify-center space-x-1 mb-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-3">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                <span className="text-orange-600">Subscribe</span> Newsletter
              </h2>
              <p className="text-xl text-gray-600">& Unlock Exclusive Offers</p>
            </div>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full">
              Enter Your Email Here
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Logo and Apps */}
            <div className="space-y-4">
              <div className="text-2xl font-bold text-orange-400">TEMU</div>
              <div className="space-y-2">
                <img src="/app-store-badge.png" alt="App Store" className="h-10" />
                <img src="/google-play-badge.png" alt="Google Play" className="h-10" />
              </div>
            </div>

            {/* Company Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Company Info</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    About Temu
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Return Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Support Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Safety Center
                  </a>
                </li>
              </ul>
            </div>

            {/* Payment Methods */}
            <div>
              <h3 className="font-semibold text-lg mb-4">We Accept</h3>
              <div className="grid grid-cols-4 gap-2 mb-6">
                <img src="/paypal-logo.png" alt="PayPal" className="h-6" />
                <img src="/visa-logo.png" alt="Visa" className="h-6" />
                <img src="/mastercard-logo.png" alt="Mastercard" className="h-6" />
                <img src="/amex-logo.png" alt="Amex" className="h-6" />
              </div>
              <h4 className="font-semibold mb-2">Security Certification</h4>
              <div className="grid grid-cols-3 gap-2">
                <img src="/ssl-secure-badge.png" alt="SSL" className="h-6" />
                <img src="/trusted-site-badge.png" alt="Trusted" className="h-6" />
                <img src="/secure-checkout-badge.png" alt="Secure" className="h-6" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-4 mb-4 md:mb-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z." />
                  </svg>
                </a>
              </div>
              <p className="text-sm text-gray-400">© 2024 WhaleCo Inc. | Terms of use | Privacy Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
