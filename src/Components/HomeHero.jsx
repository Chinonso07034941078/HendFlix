import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    title: "Texaco Products",
    subtitle: "Trusted Engine Protection",
    description:
      "Hendflix Limited supplies authentic, premium-grade Texaco engine oils that keep engines running smoothly, efficiently, and reliably across Nigeria.",
    image: "https://res.cloudinary.com/dnvgl9k4i/image/upload/f_auto,q_auto,w_1920,h_1080,c_fill/v1767959817/istockphoto-1325588832-612x612_ajw88o.webp",
    placeholder: "https://res.cloudinary.com/dnvgl9k4i/image/upload/w_20,h_12,c_fill,e_blur:1000,q_auto,f_auto/v1767959817/istockphoto-1325588832-612x612_ajw88o.webp",
    width: 1920,
    height: 1080
  },
  {
    title: "Quality You Can Trust",
    subtitle: "Engineered for Nigerian Conditions",
    description:
      "Our carefully sourced Texaco products meet global standards and are designed to reduce engine wear, improve fuel efficiency, and extend engine lifespan.",
    image: "https://res.cloudinary.com/dnvgl9k4i/image/upload/f_auto,q_auto,w_1920,h_1080,c_fill/v1767968286/istockphoto-153517859-612x612_i7pjvb.jpg",
    placeholder: "https://res.cloudinary.com/dnvgl9k4i/image/upload/w_20,h_12,c_fill,e_blur:1000,q_auto,f_auto/v1767968286/istockphoto-153517859-612x612_i7pjvb.jpg",
    width: 1920,
    height: 1080
  },
  {
    title: "Serving All of Nigeria",
    subtitle: "Private • Commercial • Industrial",
    description:
      "From individual car owners to transport companies and industrial users, Hendflix delivers the right Texaco solution for every need.",
    image: "https://res.cloudinary.com/dnvgl9k4i/image/upload/f_auto,q_auto,w_1920,h_1080,c_fill/v1767959599/premium_photo-1753364509609-7f59aac350d1_xtgd4j.avif",
    placeholder: "https://res.cloudinary.com/dnvgl9k4i/image/upload/w_20,h_12,c_fill,e_blur:1000,q_auto,f_auto/v1767959599/premium_photo-1753364509609-7f59aac350d1_xtgd4j.avif",
    width: 1920,
    height: 1080
  },
  {
    title: "Our Values Define Us",
    subtitle: "Teamwork • Respect • Integrity • Commitment • Excellence",
    description:
      "Founded by Henry Emeh, Hendflix operates with core values that guide everything we do, ensuring customer trust and long-term value.",
    image: "https://res.cloudinary.com/dnvgl9k4i/image/upload/f_auto,q_auto,w_1920,h_1080,c_fill/v1767968223/premium_photo-1740995763081-e699269bde34_hwute3.avif",
    placeholder: "https://res.cloudinary.com/dnvgl9k4i/image/upload/w_20,h_12,c_fill,e_blur:1000,q_auto,f_auto/v1767968223/premium_photo-1740995763081-e699269bde34_hwute3.avif",
    width: 1920,
    height: 1080
  },
]

// Preload the first image for faster initial load

export default function HomeHero() {
  const [index, setIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState(new Set([0])) // Track which images are loaded

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

useEffect(() => {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = slides[0].image
    document.head.appendChild(link)
    
    return () => {
      document.head.removeChild(link)
    }
  }
}, [])


  // Preload next image when current slide changes
  useEffect(() => {
    const nextIndex = (index + 1) % slides.length
    if (!loadedImages.has(nextIndex)) {
      const img = new Image()
      img.src = slides[nextIndex].image
      img.onload = () => {
        setLoadedImages(prev => new Set(prev).add(nextIndex))
      }
    }
  }, [index, loadedImages])

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
          {/* Image with optimized loading */}
          <div className="absolute inset-0">
            {/* Low-quality placeholder */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-105 transition-opacity duration-700"
              style={{
                backgroundImage: `url(${slide.placeholder})`,
                opacity: loadedImages.has(i) ? 0 : 1
              }}
            />
            
            {/* Full-quality image */}
            <img
              src={slide.image}
              alt={slide.title}
              className={`absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-700 ${
                loadedImages.has(i) ? 'opacity-100' : 'opacity-0'
              }`}
              loading={i === 0 ? "eager" : "lazy"}
              width={slide.width}
              height={slide.height}
              sizes="100vw"
              onLoad={() => setLoadedImages(prev => new Set(prev).add(i))}
            />
          </div>

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
                  <span className="inline-block mt--7 px-5 py-2 border border-[#ed1616]/60 rounded-full
                                   font-montserrat text-[0.7rem] tracking-tight uppercase text-[#ed1616] font-semibold">
                    {slide.subtitle}
                  </span>
                </div>

                {/* Heading - Hero H1 Style with fixed height */}
                <div className="h-[110px] md:h-[140px] mb-20">
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
        className="absolute left-6 top-96 md:top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur transition"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-6 top-96 md:top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur transition"
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