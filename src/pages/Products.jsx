import { useState } from 'react'
import { Link } from 'react-router-dom'
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
    name: 'Texaco Havoline 5W-30',
    desc: 'Premium full synthetic engine oil designed for modern passenger cars, providing excellent protection and fuel economy.',
    category: 'Automotive',
    specs: ['API SP', 'ACEA C5', 'Full Synthetic'],
    temp: '-40°C → 150°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740704/lucas-larsson-41M7Xr6cEks-unsplash_absmd9.jpg'
  },
  {
    id: 2,
    name: 'Texaco HDAX 320',
    desc: 'High-performance hydraulic fluid for industrial systems with excellent anti-wear properties and thermal stability.',
    category: 'Industrial',
    specs: ['ISO VG 320', 'DIN 51524', 'Anti-Wear'],
    temp: '-20°C → 120°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767742209/photo-1609872209699-3e55dc7d90b9_ltg0jj.avif'
  },
  {
    id: 3,
    name: 'Texaco Meropa 220',
    desc: 'Extreme-pressure gear oil for industrial gearboxes operating under severe conditions.',
    category: 'Industrial',
    specs: ['ISO VG 220', 'DIN 51517', 'EP Additives'],
    temp: '-30°C → 140°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740730/setengah-limasore-wV1c8II7Q5k-unsplash_rl43hs.jpg'
  },
  {
    id: 4,
    name: 'Texaco Ursa 15W-40',
    desc: 'Heavy-duty diesel engine oil formulated for modern engines with extended drain intervals.',
    category: 'Heavy-Duty',
    specs: ['API CK-4', 'ACEA E9', 'Low SAPS'],
    temp: '-15°C → 130°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740729/garett-mizunaka-xFjti9rYILo-unsplash_rbtvoe.jpg'
  },
  {
    id: 5,
    name: 'Texaco Havoline 10W-40',
    desc: 'Semi-synthetic engine oil for older passenger cars providing reliable protection and performance.',
    category: 'Automotive',
    specs: ['API SN', 'ACEA A3/B4', 'Semi-Synthetic'],
    temp: '-30°C → 130°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740729/setengah-limasore-Suz290ywLYU-unsplash_mdeise.jpg'
  },
  {
    id: 6,
    name: 'Texaco Delo 400 XSP',
    desc: 'Advanced heavy-duty engine oil for modern diesel engines with emission control systems.',
    category: 'Heavy-Duty',
    specs: ['API FA-4', 'Low SAPS', 'Fuel Efficient'],
    temp: '-35°C → 150°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740726/setengah-limasore-wIaydZbvgE4-unsplash_lhfbx2.jpg'
  },
  {
    id: 7,
    name: 'Texaco Meropa 460',
    desc: 'High-viscosity industrial gear oil for heavy-duty applications and extreme pressure conditions.',
    category: 'Industrial',
    specs: ['ISO VG 460', 'EP Additives', 'Thermal Stable'],
    temp: '-10°C → 140°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740720/andreas-brun-Rm5_uSGkRmY-unsplash_ohshi3.jpg'
  },
  {
    id: 8,
    name: 'Texaco HDAX 68',
    desc: 'Premium hydraulic fluid for high-pressure systems with excellent water separation properties.',
    category: 'Industrial',
    specs: ['ISO VG 68', 'Anti-Wear', 'Anti-Foam'],
    temp: '-25°C → 130°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740719/eduardo-buscariolli-L-4mbXwL9yg-unsplash_boe2wz.jpg'
  },
  {
    id: 9,
    name: 'Texaco Havoline 0W-20',
    desc: 'Low viscosity full synthetic oil for fuel-efficient modern engines with tight tolerances.',
    category: 'Automotive',
    specs: ['API SP', 'ACEA C2', 'Fuel Efficient'],
    temp: '-40°C → 120°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740719/setengah-limasore-jlbbm_IerPE-unsplash_bgzbyc.jpg'
  },
  {
    id: 10,
    name: 'Texaco Starplex EP2',
    desc: 'Multi-purpose extreme pressure grease for a wide range of industrial and automotive applications.',
    category: 'Industrial',
    specs: ['NLGI 2', 'EP Additives', 'Water Resistant'],
    temp: '-30°C → 140°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740712/benjamin-brunner-9ZTpCjmwL2M-unsplash_t9gt68.jpg'
  },
  {
    id: 11,
    name: 'Texaco Ursa 20W-50',
    desc: 'Mineral-based heavy-duty engine oil for older diesel engines operating in severe conditions.',
    category: 'Heavy-Duty',
    specs: ['API CI-4', 'High TBN', 'Mineral Base'],
    temp: '-20°C → 140°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740704/robert-laursoo-my6Q5k_WmoI-unsplash_1_dygcq7.jpg'
  },
  {
    id: 12,
    name: 'Texaco HDAX 46',
    desc: 'Versatile hydraulic fluid for general industrial applications with excellent anti-wear properties.',
    category: 'Industrial',
    specs: ['ISO VG 46', 'Anti-Wear', 'Thermal Stable'],
    temp: '-20°C → 120°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740704/mark-boss-V___mbvgPhs-unsplash_zsusbj.jpg'
  },
  {
    id: 13,
    name: 'Texaco Delo 400 SDE',
    desc: 'Multi-grade heavy-duty engine oil for diesel engines in severe service conditions.',
    category: 'Heavy-Duty',
    specs: ['API CJ-4', 'ACEA E7', 'Extended Drain'],
    temp: '-25°C → 130°C',
    image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740705/georg-eiermann-n9j3wbSJzNM-unsplash_nx6ytg.jpg'
  },
  {
    id: 14,
    name: 'Texaco Havoline 5W-40',
    desc: 'Full synthetic engine oil for high-performance engines requiring extra protection.',
    category: 'Automotive',
    specs: ['API SP', 'ACEA A3/B4', 'Full Synthetic'],
    temp: '-35°C → 150°C',
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
        Texaco Products
      </span>

      <h1 className="font-coolvetica text-[3.5rem] md:text-[4.5rem] leading-[1.1]">
        Premium Texaco
        <span className="block text-white/55 font-normal">
          Engine Oils & Lubricants
        </span>
      </h1>

      <p className="mt-6 font-montserrat text-[1.125rem] md:text-[1.25rem] font-light text-white/75 max-w-3xl">
        Hendflix Limited supplies original, premium-grade Texaco products that keep engines running smoothly, 
        efficiently, and reliably across Nigeria. Each product is carefully sourced to ensure authenticity and quality.
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
              Texaco Quality<br />
              <span className="text-white/50 font-normal">Meets Nigerian Demands</span>
            </h2>
            <p className="mt-6 font-montserrat text-[1rem] md:text-[1.125rem] font-light text-white/70">
              Our Texaco lubricants are engineered to reduce engine wear, improve fuel efficiency, 
              and extend engine lifespan across Nigeria's diverse operating conditions.
            </p>
          </div>

          <div className="space-y-6">
            {[
              ['Temperature Stability', '-45°C → 160°C'],
              ['Engine Wear Reduction', 'Up to 35%'],
              ['Service Life Extension', 'Up to 50% Longer'],
              ['Fuel Efficiency Improvement', 'Up to 3%']
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

      {/* ================= WHO WE SERVE ================= */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-coolvetica text-[3.5rem] md:text-[4rem] mb-16">
            Products For Every Need
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Private Car Owners', 
                desc: 'Quality-conscious vehicle owners seeking reliable engine protection',
                products: 'Havoline 5W-30, 10W-40, 0W-20'
              },
              { 
                title: 'Commercial Drivers', 
                desc: 'Professional drivers who depend on engine reliability for daily operations',
                products: 'Havoline 5W-40, Ursa 15W-40'
              },
              { 
                title: 'Transport Companies', 
                desc: 'Fleet operators managing multiple vehicles across Nigeria',
                products: 'Ursa 15W-40, Delo 400 Series'
              },
              { 
                title: 'Service Centers', 
                desc: 'Workshops and service centers providing professional maintenance',
                products: 'Full Texaco Range'
              },
              { 
                title: 'Industrial Users', 
                desc: 'Businesses using generators and heavy machinery',
                products: 'HDAX, Meropa, Starplex'
              },
              { 
                title: 'Agricultural Sector', 
                desc: 'Farms and agricultural operations with equipment needs',
                products: 'Ursa 20W-50, Delo 400 SDE'
              }
            ].map((customer, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#ed1616] transition-all duration-300">
                <h3 className="font-coolvetica text-[1.125rem] mb-3">{customer.title}</h3>
                <p className="font-montserrat text-[0.95rem] font-light text-gray-600 mb-4">{customer.desc}</p>
                <p className="font-montserrat text-[0.875rem] font-semibold text-[#ed1616]">{customer.products}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-40 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-coolvetica text-[3.5rem] md:text-[4rem]">
            Original Texaco<br />
            <span className="text-gray-500 font-normal">Products Across Nigeria</span>
          </h2>
          <p className="mt-6 font-montserrat text-[1rem] md:text-[1.125rem] font-light text-gray-600">
            Request specifications, pricing, or technical guidance from our team of experts.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <Link to="/contact" className="px-12 py-4 bg-[#ed1616] text-white rounded-full font-montserrat text-[0.9rem] font-medium tracking-[0.3px] hover:bg-[#d01414] transition inline-block">
              Contact Hendflix
            </Link>
            <Link to="/products" className="px-12 py-4 border border-gray-300 rounded-full font-montserrat text-[0.9rem] font-medium tracking-[0.3px] hover:border-[#ed1616] hover:text-[#ed1616] transition inline-block">
              View Full Catalog
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Products