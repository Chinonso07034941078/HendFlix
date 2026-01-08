import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    title: "Engineered Lubricants",
    subtitle: "Precision Meets Power",
    description:
      "High-performance lubricants designed to protect engines, reduce friction, and extend operational life — even under extreme conditions.",
    image:
      "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740729/garett-mizunaka-xFjti9rYILo-unsplash_rbtvoe.jpg",
  },
  {
    title: "Built for Heat & Pressure",
    subtitle: "Tested Beyond Limits",
    description:
      "Formulations proven under high temperatures and intense mechanical stress for uncompromising reliability.",
    image:
      "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740720/andreas-brun-Rm5_uSGkRmY-unsplash_ohshi3.jpg",
  },
  {
    title: "For Every Engine",
    subtitle: "Automotive • Industrial • Power Systems",
    description:
      "From personal vehicles to heavy-duty machinery, HendFlix lubricants deliver consistent performance across industries.",
    image:
      "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740719/eduardo-buscariolli-L-4mbXwL9yg-unsplash_boe2wz.jpg",
  },
  {
    title: "Protection You Can Trust",
    subtitle: "Driven by Engineering",
    description:
      "Trusted by professionals for smoother performance, reduced wear, and long-term engine protection.",
    image:
      "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740710/jan-kopriva-AVlOmTRe9mY-unsplash_fslqvv.jpg",
  },
]

export default function HomeHero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 6500)
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

                {/* Eyebrow - Section Label Style */}
                <span className="inline-block px-5 py-2 border border-[#ed1616]/60 rounded-full
                                 font-montserrat text-[0.7rem] tracking-tight uppercase text-[#ed1616] font-semibold">
                  {slide.subtitle}
                </span>

                {/* Heading - Hero H1 Style */}
                <h1 className="font-coolvetica text-[3.5rem] md:text-[4.5rem] leading-[1.1]">
                  {slide.title}
                </h1>

                {/* Body - Paragraph Style */}
                <p className="font-montserrat text-[1rem] md:text-[1.125rem] font-light text-white/75 max-w-2xl">
                  {slide.description}
                </p>

                {/* CTAs - Button Text Style */}
                <div className="pt-6 flex flex-wrap gap-6">
                  <Link 
                    to="/products"
                    className="px-12 py-4 rounded-full bg-[#ed1616]
                                     hover:bg-[#d01414] transition font-montserrat text-[0.9rem] font-medium tracking-[0.3px] inline-block"
                  >
                    Explore Products
                  </Link>
                  <Link 
                    to="/about"
                    className="px-12 py-4 rounded-full border border-white/30
                                     hover:border-[#ed1616] hover:text-[#ed1616]
                                     transition font-montserrat text-[0.9rem] font-medium tracking-[0.3px] inline-block"
                  >
                    Learn More
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