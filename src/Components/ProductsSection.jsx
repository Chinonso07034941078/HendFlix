import React, { useState, useEffect } from 'react'

const fallbackImage = 'https://res.cloudinary.com/dnvgl9k4i/image/upload/f_auto,q_auto/v1767785660/q5_nqqjnv.jpg';

const products = [
  { id: 1, name: 'Texaco Havoline 5W-30', type: 'Engine Oil', category: 'Automotive', specs: ['API SP', 'ACEA C5', 'Full Synthetic'], temp: '-40°C → 150°C', image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/f_auto,q_auto/v1767785660/q5_nqqjnv.jpg' },
  { id: 2, name: 'Texaco HDAX 46', type: 'Hydraulic Oil', category: 'Industrial', specs: ['ISO VG 46', 'DIN 51524', 'Anti-Wear'], temp: '-20°C → 120°C', image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/f_auto,q_auto/v1767785659/q10_hydr.jpg' },
  { id: 3, name: 'Texaco Meropa 220', type: 'Gear Oil', category: 'Industrial', specs: ['ISO VG 220', 'DIN 51517', 'EP Additives'], temp: '-30°C → 140°C', image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/f_auto,q_auto/v1767785658/q2_s8c7dz.jpg' },
  { id: 4, name: 'Texaco HDAX 320', type: 'Industrial Oil', category: 'Industrial', specs: ['ISO VG 320', 'Extreme Pressure'], temp: '-15°C → 130°C', image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/f_auto,q_auto/v1767785657/q11_indus.jpg' },
  { id: 5, name: 'Texaco Havoline 10W-40', type: 'Engine Oil', category: 'Automotive', specs: ['API SN', 'ACEA A3/B4', 'Semi-Synthetic'], temp: '-30°C → 130°C', image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/f_auto,q_auto/v1767785648/q3_qlbzqa.jpg' },
  { id: 6, name: 'Texaco Ursa 15W-40', type: 'Engine Oil', category: 'Heavy-Duty', specs: ['API CK-4', 'ACEA E9', 'Low SAPS'], temp: '-15°C → 130°C', image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/f_auto,q_auto/v1767785639/q6_wbuege.jpg' },
  { id: 7, name: 'Texaco Delo 400 SDE', type: 'Engine Oil', category: 'Heavy-Duty', specs: ['API CJ-4', 'ACEA E7', 'Extended Drain'], temp: '-25°C → 130°C', image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/f_auto,q_auto/v1767785640/q9_marine.jpg' },
  { id: 8, name: 'Texaco Starplex EP2', type: 'Grease', category: 'Industrial', specs: ['NLGI 2', 'EP Additives', 'Water Resistant'], temp: '-30°C → 140°C', image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/f_auto,q_auto/v1767785641/q5_agri.jpg' },
  { id: 9, name: 'Texaco Havoline 0W-20', type: 'Engine Oil', category: 'Automotive', specs: ['API SP', 'ACEA C2', 'Fuel Efficient'], temp: '-40°C → 120°C', image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/f_auto,q_auto/v1767785638/q1_euygbn.jpg' },
  { id: 10, name: 'Texaco Meropa 150', type: 'Gear Oil', category: 'Industrial', specs: ['ISO VG 150', 'Anti-Wear'], temp: '-15°C → 140°C', image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/f_auto,q_auto/v1767785603/q4_hiwcfv.jpg' },
  { id: 11, name: 'Texaco Ursa 20W-50', type: 'Engine Oil', category: 'Heavy-Duty', specs: ['API CI-4', 'High TBN', 'Mineral Base'], temp: '-20°C → 140°C', image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/f_auto,q_auto/v1767785599/q8_lncjjv.jpg' },
  { id: 12, name: 'Texaco HDAX 68', type: 'Hydraulic Oil', category: 'Industrial', specs: ['ISO VG 68', 'Anti-Wear', 'Anti-Foam'], temp: '-20°C → 120°C', image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/f_auto,q_auto/v1767785598/q13_hydr.jpg' },
  { id: 13, name: 'Texaco Delo 400 XSP', type: 'Engine Oil', category: 'Heavy-Duty', specs: ['API FA-4', 'Low SAPS', 'Fuel Efficient'], temp: '-35°C → 150°C', image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/f_auto,q_auto/v1767785599/q7_nv3acs.jpg' },
  { id: 14, name: 'Texaco Havoline 5W-40', type: 'Engine Oil', category: 'Automotive', specs: ['API SP', 'ACEA A3/B4', 'Full Synthetic'], temp: '-35°C → 150°C', image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/f_auto,q_auto/v1767785599/q12_dhk65v.jpg' }
];

// fallback function if image fails
products.forEach(p => {
  const img = new Image();
  img.src = p.image;
  img.onerror = () => p.image = fallbackImage;
});

const accents = [
  'top-0 left-0 w-20 h-1', 'top-0 right-0 w-16 h-1', 'bottom-0 left-0 w-24 h-1',
  'top-0 left-0 w-1 h-20', 'top-0 right-0 w-1 h-24', 'bottom-0 right-0 w-1 h-16',
  'bottom-0 left-0 w-28 h-1', 'top-0 left-0 w-32 h-1', 'bottom-0 right-0 w-20 h-1',
  'top-0 right-0 w-1 h-28', 'bottom-0 left-0 w-1 h-32', 'top-0 left-0 w-24 h-1',
  'bottom-0 right-0 w-1 h-20', 'top-0 right-0 w-28 h-1'
];

const ProductCard = ({ product, onClick, className = '', idx = 0 }) => (
  <div onClick={() => onClick(product)} className={`group relative overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow ${className}`}>
    <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
    <div className={`absolute ${accents[idx % accents.length]} bg-[#ed1616]`} />
    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6">
      <span className="section-label text-white/70 mb-1 block">{product.category}</span>
      <h3 className="card-title text-white group-hover:text-[#ed1616] transition-colors leading-tight mb-2">{product.name}</h3>
      <div className="hidden sm:flex flex-wrap gap-2 mt-2">
        {product.specs.slice(0, 2).map((s, i) => (
          <span key={i} className="card-body px-2 py-0.5 bg-white/10 backdrop-blur-sm text-white/90">{s}</span>
        ))}
        <span className="card-body px-2 py-0.5 bg-[#ed1616]/30 backdrop-blur-sm text-white">{product.temp}</span>
      </div>
    </div>
  </div>
);


const TypewriterText = () => {
  const text = "At Hendflix Limited, we supply original, premium-grade Texaco products that keep engines running smoothly, efficiently, and reliably. Every product is carefully sourced to ensure authenticity, quality, and consistency. We're committed to protecting engines, improving performance, and helping our customers reduce maintenance costs while driving with confidence.";

  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (index < text.length) {
      timer = setTimeout(() => {
        setDisplay((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 30);
    } else {
      timer = setTimeout(() => {
        setDisplay("");
        setIndex(0);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [index, text]);

  return (
    <p className="paragraph text-gray-600 leading-relaxed max-w-4xl min-h-[120px] relative">
      {display}
      {index < text.length && (
        <span className="absolute w-0.5 h-5 bg-[#ed1616] ml-1 animate-pulse" />
      )}
    </p>
  );
};


const PurchaseModal = ({ product, onClose }) => {
  const whatsappUrl = `https://wa.me/+234 8165009559?text=Hi, I'm interested in purchasing ${encodeURIComponent(product.name)} from Hendflix Limited`;
  
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-white w-full max-w-lg transform transition-transform animate-slide-up" onClick={e => e.stopPropagation()}>
        <div className="relative">
          <img src={product.image} alt={product.name} className="w-full h-48 sm:h-64 object-cover" />
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors">✕</button>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="p-6 sm:p-8">
          <span className="section-label text-gray-500 mb-2 block">{product.category}</span>
          <h3 className="card-title text-gray-900 mb-3">{product.name}</h3>
          <p className="card-body text-gray-600 mb-4">{product.type} • {product.temp}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {product.specs.map((s, i) => (
              <span key={i} className="card-body px-3 py-1 bg-gray-100 text-gray-700">{s}</span>
            ))}
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="button-text w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-4 px-6 flex items-center justify-center gap-3 transition-colors shadow-lg">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Message HendFlix on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white">
      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-up { from { transform: translateY(100%); } to { transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.2s ease-out; }
        .animate-slide-up { animation: slide-up 0.3s ease-out; }
        
        /* Typography Styles */
        .hero-h1 {
          font-family: 'Coolvetica', sans-serif;
          font-size: clamp(3.5rem, 5vw, 4.5rem);
          line-height: 1.1;
        }
        
        .hero-subheading {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.25rem, 2vw, 1.5rem);
          font-weight: 300;
        }
        
        .paragraph {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(0.95rem, 1.5vw, 1.125rem);
          font-weight: 300;
        }
        
        .section-label {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(0.625rem, 1vw, 0.75rem);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .card-title {
          font-family: 'Coolvetica', sans-serif;
          font-size: 1.125rem;
        }
        
        .card-body {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          font-weight: 300;
        }
        
        .button-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.3px;
        }
      `}</style>

      <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-10">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 sm:w-16 bg-[#ed1616]" />
              <span className="section-label text-[#ed1616]">Texaco Products</span>
            </div>
            <h2 className="hero-h1 text-black leading-tight">
              Premium Engine Oils<span className="hero-subheading block text-gray-400 mt-2">From HendFlix Limited</span>
            </h2>
          </div>
          <TypewriterText />
        </div>
      </section>

      <section className="pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Mobile: 2 columns with varied heights */}
          <div className="grid grid-cols-2 sm:hidden gap-3">
            <ProductCard product={products[0]} onClick={setSelected} idx={0} className="h-72" />
            <ProductCard product={products[1]} onClick={setSelected} idx={1} className="h-64" />
            <ProductCard product={products[2]} onClick={setSelected} idx={2} className="h-56" />
            <ProductCard product={products[3]} onClick={setSelected} idx={3} className="h-80" />
            <ProductCard product={products[4]} onClick={setSelected} idx={4} className="h-64" />
            <ProductCard product={products[5]} onClick={setSelected} idx={5} className="h-72" />
            <ProductCard product={products[6]} onClick={setSelected} idx={6} className="h-60" />
            <ProductCard product={products[7]} onClick={setSelected} idx={7} className="h-68" />
            <ProductCard product={products[8]} onClick={setSelected} idx={8} className="h-72" />
            <ProductCard product={products[9]} onClick={setSelected} idx={9} className="h-64" />
            <ProductCard product={products[10]} onClick={setSelected} idx={10} className="h-56" />
            <ProductCard product={products[11]} onClick={setSelected} idx={11} className="h-76" />
            <ProductCard product={products[12]} onClick={setSelected} idx={12} className="h-64" />
            <ProductCard product={products[13]} onClick={setSelected} idx={13} className="h-72" />
          </div>

          {/* Tablet: Balanced grid */}
          <div className="hidden sm:grid md:hidden gap-4">
            <div className="grid grid-cols-2 gap-4">
              <ProductCard product={products[0]} onClick={setSelected} idx={0} className="h-72" />
              <ProductCard product={products[1]} onClick={setSelected} idx={1} className="h-72" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <ProductCard product={products[2]} onClick={setSelected} idx={2} className="h-64" />
              <ProductCard product={products[3]} onClick={setSelected} idx={3} className="h-64" />
              <ProductCard product={products[4]} onClick={setSelected} idx={4} className="h-64" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ProductCard product={products[5]} onClick={setSelected} idx={5} className="h-80" />
              <div className="grid grid-rows-2 gap-4">
                <ProductCard product={products[6]} onClick={setSelected} idx={6} />
                <ProductCard product={products[7]} onClick={setSelected} idx={7} />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <ProductCard product={products[8]} onClick={setSelected} idx={8} className="h-64" />
              <ProductCard product={products[9]} onClick={setSelected} idx={9} className="h-64" />
              <ProductCard product={products[10]} onClick={setSelected} idx={10} className="h-64" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <ProductCard product={products[11]} onClick={setSelected} idx={11} className="h-64" />
              <ProductCard product={products[12]} onClick={setSelected} idx={12} className="h-64" />
              <ProductCard product={products[13]} onClick={setSelected} idx={13} className="h-64" />
            </div>
          </div>

          {/* Desktop: Advanced masonry */}
          <div className="hidden md:grid gap-4">
            <div className="grid grid-cols-12 gap-4">
              <ProductCard product={products[0]} onClick={setSelected} idx={0} className="col-span-7 h-96" />
              <ProductCard product={products[1]} onClick={setSelected} idx={1} className="col-span-5 h-96" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <ProductCard product={products[2]} onClick={setSelected} idx={2} className="h-80" />
              <ProductCard product={products[3]} onClick={setSelected} idx={3} className="h-80" />
              <ProductCard product={products[4]} onClick={setSelected} idx={4} className="h-80" />
              <ProductCard product={products[5]} onClick={setSelected} idx={5} className="h-80" />
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-3 grid gap-4">
                <ProductCard product={products[6]} onClick={setSelected} idx={6} className="h-64" />
                <ProductCard product={products[7]} onClick={setSelected} idx={7} className="h-64" />
              </div>
              <ProductCard product={products[8]} onClick={setSelected} idx={8} className="col-span-5 h-[544px]" />
              <ProductCard product={products[9]} onClick={setSelected} idx={9} className="col-span-4 h-[544px]" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <ProductCard product={products[10]} onClick={setSelected} idx={10} className="h-72" />
              <ProductCard product={products[11]} onClick={setSelected} idx={11} className="h-72" />
              <ProductCard product={products[12]} onClick={setSelected} idx={12} className="h-72" />
              <ProductCard product={products[13]} onClick={setSelected} idx={13} className="h-72" />
            </div>
          </div>

          <div className="mt-8 sm:mt-12 flex items-center gap-4 sm:gap-6">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="section-label text-gray-400">Texaco Products</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
        </div>
      </section>

      {selected && <PurchaseModal product={selected} onClose={() => setSelected(null)} />}
    </div>
  );
};

export default ProductsSection;