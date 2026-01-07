import React, { useState } from 'react'
import ProductsSection from '../Components/ProductsSection';

// Import fonts
// import '@fontsource/coolvetica'; // You'll need to install this package
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
 
/* =======================
   DATA
======================= */
const products = [
  {
    id: 1,
    name: 'Engine Max 5W-30',
    desc: 'Full synthetic engine oil engineered for fuel efficiency and long-term protection.',
    category: 'Automotive',
    specs: ['API SN', 'ACEA A3/B4', 'Full Synthetic'],
    temp: '-40°C → 150°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767742222/photo-1556838656-af51dadc2c93_iorhzq.avif'
  },
  {
    id: 2,
    name: 'Hydraulic Ultra',
    desc: 'Stable, anti-wear hydraulic fluid for high-load industrial systems.',
    category: 'Industrial',
    specs: ['ISO VG 46', 'DIN 51524', 'Anti-Wear'],
    temp: '-20°C → 120°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767742209/photo-1609872209699-3e55dc7d90b9_ltg0jj.avif'
  },
  {
    id: 3,
    name: 'GearPro 80W-90',
    desc: 'Extreme-pressure gear oil built for torque and endurance.',
    category: 'Automotive',
    specs: ['API GL-5', 'EP Additives'],
    temp: '-30°C → 140°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740730/setengah-limasore-wV1c8II7Q5k-unsplash_rl43hs.jpg'
  },
  {
    id: 4,
    name: 'Industrial Max Lube',
    desc: 'Heavy-duty lubricant for continuous industrial operation.',
    category: 'Industrial',
    specs: ['ISO VG 220', 'Extreme Pressure'],
    temp: '-15°C → 130°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740729/garett-mizunaka-xFjti9rYILo-unsplash_rbtvoe.jpg'
  },
  {
    id: 5,
    name: 'Synthetic Engine Oil',
    desc: 'Low-friction synthetic oil for extended service intervals.',
    category: 'Automotive',
    specs: ['Low SAPS', 'Extended Drain'],
    temp: '-45°C → 160°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740729/setengah-limasore-Suz290ywLYU-unsplash_mdeise.jpg'
  },
  {
    id: 6,
    name: 'Turbo Gear Lube',
    desc: 'High-performance lubricant for racing and high-torque applications.',
    category: 'Automotive',
    specs: ['API GL-4', 'High EP'],
    temp: '-35°C → 150°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740726/setengah-limasore-wIaydZbvgE4-unsplash_lhfbx2.jpg'
  },
  {
    id: 7,
    name: 'Industrial Gear Oil',
    desc: 'Designed for heavy-duty gearboxes and industrial machinery.',
    category: 'Industrial',
    specs: ['ISO VG 320', 'EP Additives'],
    temp: '-20°C → 140°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740720/andreas-brun-Rm5_uSGkRmY-unsplash_ohshi3.jpg'
  },
  {
    id: 8,
    name: 'Ultra Hydraulic Oil',
    desc: 'High-performance oil for smooth operation in hydraulics under extreme load.',
    category: 'Industrial',
    specs: ['ISO VG 68', 'Anti-Wear'],
    temp: '-25°C → 130°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740719/eduardo-buscariolli-L-4mbXwL9yg-unsplash_boe2wz.jpg'
  },
  {
    id: 9,
    name: 'Eco Synthetic Oil',
    desc: 'Environmentally friendly synthetic oil for low emissions engines.',
    category: 'Automotive',
    specs: ['Low SAPS', 'Fuel Efficient'],
    temp: '-40°C → 150°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740719/setengah-limasore-jlbbm_IerPE-unsplash_bgzbyc.jpg'
  },
  {
    id: 10,
    name: 'Precision Gear Lube',
    desc: 'Lubricant for precision machinery and sensitive automotive components.',
    category: 'Industrial',
    specs: ['ISO VG 150', 'Anti-Wear'],
    temp: '-15°C → 140°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740712/benjamin-brunner-9ZTpCjmwL2M-unsplash_t9gt68.jpg'
  },
  {
    id: 11,
    name: 'Max Turbo Oil',
    desc: 'High-temp oil for turbocharged engines.',
    category: 'Automotive',
    specs: ['API SN', 'Turbo Additives'],
    temp: '-30°C → 160°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740704/robert-laursoo-my6Q5k_WmoI-unsplash_1_dygcq7.jpg'
  },
  {
    id: 12,
    name: 'Extreme Industrial Oil',
    desc: 'Extreme-pressure oil for industrial applications with continuous load.',
    category: 'Industrial',
    specs: ['ISO VG 460', 'EP'],
    temp: '-10°C → 150°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740704/mark-boss-V___mbvgPhs-unsplash_zsusbj.jpg'
  },
  {
    id: 13,
    name: 'Racing Synthetic Oil',
    desc: 'Formulated for high-speed engines and extreme conditions.',
    category: 'Automotive',
    specs: ['API SN', 'Racing Additives'],
    temp: '-35°C → 170°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740705/georg-eiermann-n9j3wbSJzNM-unsplash_nx6ytg.jpg'
  },
  {
    id: 14,
    name: 'Precision Engine Oil',
    desc: 'Premium oil for long-lasting performance in precision engines.',
    category: 'Automotive',
    specs: ['API SN', 'Extended Drain'],
    temp: '-45°C → 160°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740704/lucas-larsson-41M7Xr6cEks-unsplash_absmd9.jpg'
  }
];

/* =======================
   IMAGE
======================= */
const Img = ({ src, alt }) => {
  const fallback =
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80'

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={(e) => (e.currentTarget.src = fallback)}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  )
}

/* =======================
   PAGE
======================= */
const Products = () => {
  const [active, setActive] = useState('All')

  const categories = ['All', ...new Set(products.map(p => p.category))]
  const visible =
    active === 'All'
      ? products
      : products.filter(p => p.category === active)

  return (
    <div className="bg-white text-black font-montserrat">

{/* ================= HERO ================= */}
<section className="relative overflow-hidden text-white py-32 md:py-36 bg-black">
  {/* Gradient Background */}
  <div className="absolute inset-0 pointer-events-none">
    {/* Primary red glow */}
    <div
      className="absolute inset-0"
      style={{
        background: `
          radial-gradient(
            circle at 85% 15%,
            rgba(237,22,22,0.45),
            transparent 55%
          ),
          radial-gradient(
            circle at 15% 85%,
            rgba(237,22,22,0.35),
            transparent 60%
          ),
          radial-gradient(
            circle at 50% 50%,
            rgba(255,255,255,0.04),
            transparent 70%
          )
        `
      }}
    />

    {/* Subtle dark depth */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />
  </div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6">
    <div className="max-w-4xl">
      <span className="inline-block mb-6 px-5 py-2 border border-[#ed1616]/60 rounded-full font-montserrat text-[0.625rem] tracking-tight text-[#ed1616] uppercase">
        Products
      </span>

      <h1 className="font-coolvetica text-[3.5rem] md:text-[4.5rem] leading-[1.1]">
        Precision Lubrication
        <span className="block text-white/55 font-normal">
          Built for Demanding Systems
        </span>
      </h1>

      <p className="mt-6 font-montserrat text-[1.125rem] md:text-[1.25rem] font-light text-white/75 max-w-3xl">
        HendFlix formulates advanced lubricants that protect critical
        components, extend service life, and perform under continuous stress.
      </p>
    </div>
  </div>
</section>

   
      
          <ProductsSection />



      {/* ================= TECH STATEMENT ================= */}
      <section className="bg-black text-white py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-coolvetica text-[3.5rem] md:text-[4rem] leading-tight">
              Chemistry Meets<br />
              <span className="text-white/50 font-normal">Mechanical Reality</span>
            </h2>
            <p className="mt-6 font-montserrat text-[1rem] md:text-[1.125rem] font-light text-white/70">
              Our lubricants are engineered to reduce friction, control heat,
              and extend service life across extreme operational conditions.
            </p>
          </div>

          <div className="space-y-6">
            {[
              ['Temperature Stability', '-45°C → 160°C'],
              ['Wear Reduction', 'Up to 35%'],
              ['Service Life', 'Up to 50% Longer'],
              ['Friction Loss', '−15%']
            ].map(([k, v], i) => (
              <div
                key={i}
                className="flex justify-between border-b border-white/10 py-4"
              >
                <span className="font-montserrat text-[0.95rem] font-light text-white/70">{k}</span>
                <span className="font-montserrat text-[0.95rem] font-semibold text-[#ed1616]">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-40 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-coolvetica text-[3.5rem] md:text-[4rem]">
            Built for Demands<br />
            <span className="text-gray-500 font-normal">That Never Pause</span>
          </h2>
          <p className="mt-6 font-montserrat text-[1rem] md:text-[1.125rem] font-light text-gray-600">
            Request specifications, pricing, or technical guidance.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <button className="px-12 py-4 bg-[#ed1616] text-white rounded-full font-montserrat text-[0.9rem] font-medium tracking-[0.3px] hover:bg-[#d01414] transition">
              Request Quote
            </button>
            <button className="px-12 py-4 border border-gray-300 rounded-full font-montserrat text-[0.9rem] font-medium tracking-[0.3px] hover:border-[#ed1616] hover:text-[#ed1616] transition">
              Download Catalog
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Products