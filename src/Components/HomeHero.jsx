import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    title: "Texaco Products",
    subtitle: "Trusted Engine Protection",
    description:
      "Hendflix Limited supplies authentic, premium-grade Texaco engine oils that keep engines running smoothly, efficiently, and reliably across Nigeria.",
    image:
      "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767959817/istockphoto-1325588832-612x612_ajw88o.webp  ",
  },
  {
    title: "Quality You Can Trust",
    subtitle: "Engineered for Nigerian Conditions",
    description:
      "Our carefully sourced Texaco products meet global standards and are designed to reduce engine wear, improve fuel efficiency, and extend engine lifespan.",
    image:
      "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767968286/istockphoto-153517859-612x612_i7pjvb.jpg",
  },
  {
    title: "Serving All of Nigeria",
    subtitle: "Private • Commercial • Industrial",
    description:
      "From individual car owners to transport companies and industrial users, Hendflix delivers the right Texaco solution for every need.",
    image:
      "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767959599/premium_photo-1753364509609-7f59aac350d1_xtgd4j.avif",
  },
  {
    title: "Our Values Define Us",
    subtitle: "Teamwork • Respect • Integrity • Commitment • Excellence",
    description:
      "Founded by Henry Emeh, Hendflix operates with core values that guide everything we do, ensuring customer trust and long-term value.",
    image:
      "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767968223/premium_photo-1740995763081-e699269bde34_hwute3.avif",
  },
]

export default function HomeHero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 9500)
    return () => clearInterval(interval)
  }, [])

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ${
            i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Image */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#ed1616]/25 rounded-full blur-[140px]" />
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-3xl space-y-8">

                {/* Eyebrow - Section Label Style with fixed height */}
                <div className="h-[28px] flex items-center">
                  <span className="inline-block px-5 py-2 border border-[#ed1616]/60 rounded-full
                                   font-montserrat text-[0.7rem] tracking-tight uppercase text-[#ed1616] font-semibold">
                    {slide.subtitle}
                  </span>
                </div>

                {/* Heading - Hero H1 Style with fixed height */}
                <div className="h-[110px] md:h-[140px]">
                  <h1 className="font-coolvetica text-[3.5rem] md:text-[4.5rem] leading-[1.1]">
                    {slide.title}
                  </h1>
                </div>

                {/* Body - Paragraph Style with fixed height */}
                <div className="h-[60px] md:h-[70px]">
                  <p className="font-montserrat text-[1rem] md:text-[1.125rem] font-light text-white/75 max-w-2xl">
                    {slide.description}
                  </p>
                </div>

                {/* CTAs - Button Text Style with fixed height */}
                <div className="h-[60px] pt-6 flex flex-wrap gap-6">
                  <Link 
                    to="/products"
                    className="px-12 py-4 rounded-full bg-[#ed1616]
                                     hover:bg-[#d01414] transition font-montserrat text-[0.9rem] font-medium tracking-[0.3px] inline-block"
                  >
                    View Texaco Products
                  </Link>
                  <Link 
                    to="/about"
                    className="px-12 py-4 rounded-full border border-white/30
                                     hover:border-[#ed1616] hover:text-[#ed1616]
                                     transition font-montserrat text-[0.9rem] font-medium tracking-[0.3px] inline-block"
                  >
                    About Hendflix
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur transition"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur transition"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-10 bg-[#ed1616]' : 'w-3 bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}