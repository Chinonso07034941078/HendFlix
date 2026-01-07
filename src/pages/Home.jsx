import { Link } from "react-router-dom"
import { Droplet, ShieldCheck, Gauge, ArrowRight, Zap, Target, Flame } from "lucide-react"
import HomeHero from "../Components/HomeHero"

const Home = () => {
  return (
    <main className="bg-black text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <HomeHero />

      {/* =========================
          SECTION 2: Philosophy
      ========================= */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#ed1616]/10 via-[#ed1616]/5 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-gray-100 to-transparent blur-2xl" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 py-24 md:py-32">

          <div className="max-w-2xl mb-20 md:mb-32 text-left">
            <p className="uppercase tracking-tight text-[#ed1616] font-semibold mb-4" style={{ fontSize: "0.7rem", fontWeight: "600" }}>
              Engineering Philosophy
            </p>

            <h2 className="text-black leading-[1.1] mb-6" style={{ fontSize: "clamp(3.5rem, 5vw, 4.5rem)", fontFamily: "'Coolvetica', sans-serif" }}>
              Precision
              <span className="block text-[#ed1616] font-medium">
                Lubrication
              </span>
              <span className="block text-gray-500 mt-3 font-light" style={{ fontSize: "clamp(2.5rem, 3.5vw, 3.5rem)" }}>
                Performance System
              </span>
            </h2>

            <p className="text-gray-600 leading-relaxed font-normal" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)", fontWeight: "300" }}>
              Not a consumable—a controlled interface managing friction, heat, pressure, and time with precision.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">

            <div className="col-span-12 md:col-span-7 row-span-2 bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-14 relative overflow-hidden group">
              <span className="text-6xl font-bold text-[#ed1616]/30 mb-6 block">01</span>
              <h3 className="mb-6" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontFamily: "'Coolvetica', sans-serif" }}>
                Friction Management
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-xl font-normal" style={{ fontSize: "0.875rem", fontWeight: "300" }}>
                Optimized molecular structures reduce metal-to-metal contact, enabling smoother operation and efficiency gains.
              </p>
              <div className="mt-8 flex items-center gap-2 text-[#ed1616] font-medium" style={{ fontSize: "0.9rem", fontWeight: "500", letterSpacing: "0.3px" }}>
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="col-span-6 md:col-span-5 bg-white border rounded-2xl p-6 md:p-8">
              <span className="text-gray-400 font-medium" style={{ fontSize: "0.875rem", fontWeight: "300" }}>02</span>
              <h3 className="text-black mt-4 mb-3" style={{ fontSize: "1.125rem", fontFamily: "'Coolvetica', sans-serif" }}>
                Thermal Control
              </h3>
              <p className="text-gray-600 leading-relaxed font-normal" style={{ fontSize: "0.875rem", fontWeight: "300" }}>
                Stable viscosity across extreme temperatures ensures consistency.
              </p>
            </div>

            <div className="col-span-6 md:col-span-5 row-span-2 bg-gradient-to-b from-[#ed1616] to-[#c01212] rounded-2xl p-6 md:p-10">
              <span className="text-white/70 font-medium" style={{ fontSize: "0.875rem", fontWeight: "300" }}>03</span>
              <h3 className="mt-6 mb-4" style={{ fontSize: "1.125rem", fontFamily: "'Coolvetica', sans-serif" }}>
                Surface Protection
              </h3>
              <p className="text-white/90 font-normal leading-relaxed" style={{ fontSize: "0.875rem", fontWeight: "300" }}>
                Active additives form protective films reducing wear.
              </p>
            </div>

            <div className="col-span-12 md:col-span-7 bg-gray-50 rounded-2xl p-8 md:p-10">
              <span className="text-gray-400 font-medium" style={{ fontSize: "0.875rem", fontWeight: "300" }}>04</span>
              <h3 className="text-black mt-4 mb-4" style={{ fontSize: "1.125rem", fontFamily: "'Coolvetica', sans-serif" }}>
                Operational Longevity
              </h3>
              <p className="text-gray-600 font-normal leading-relaxed max-w-2xl" style={{ fontSize: "0.875rem", fontWeight: "300" }}>
                Extended service intervals reduce downtime and total cost.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          SECTION 3: Architecture
      ========================= */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#ed1616]/5 via-transparent to-transparent" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 80%)' }} />
        
        <div className="max-w-[1600px] mx-auto px-6 py-32 md:py-48">

          <div className="max-w-3xl mb-20 md:mb-32">
            <p className="uppercase tracking-tight text-[#ed1616] font-semibold mb-6" style={{ fontSize: "0.7rem", fontWeight: "600" }}>
              System Architecture
            </p>

            <h2 className="leading-[1.1] mb-8" style={{ fontSize: "clamp(3.5rem, 5vw, 4.5rem)", fontFamily: "'Coolvetica', sans-serif" }}>
              Lubrication
              <span className="block text-gray-500 mt-2">
                Works in
              </span>
              <span className="block text-[#ed1616] mt-2">
                Layers
              </span>
            </h2>

            <p className="text-white/75 leading-relaxed border-l-4 border-[#ed1616] pl-6 font-normal" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)", fontWeight: "300" }}>
              Not in isolation—multiple interacting layers engineered to respond to mechanical stress in specific ways.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">

            <div className="space-y-8 lg:-mt-20">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-12 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                <Droplet className="w-10 h-10 text-[#ed1616] mb-6" />
                <h3 className="mb-5" style={{ fontSize: "1.125rem", fontFamily: "'Coolvetica', sans-serif" }}>
                  Primary Lubrication Layer
                </h3>
                <p className="text-white/75 leading-relaxed font-normal" style={{ fontSize: "0.875rem", fontWeight: "300" }}>
                  Maintains continuous separation between moving surfaces under variable loads and speeds with precision engineering.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#ed1616]/20 to-transparent border border-[#ed1616]/30 rounded-2xl p-8 md:p-10 hover:from-[#ed1616]/30 transition-all duration-500">
                <h4 className="font-semibold text-white mb-4 text-xl flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#ed1616] rounded-full" />
                  Chemical Stability
                </h4>
                <p className="text-white/75 leading-relaxed font-normal" style={{ fontSize: "0.875rem", fontWeight: "300" }}>
                  Resists oxidation and deposit formation over extended time periods.
                </p>
              </div>
            </div>

            <div className="space-y-8 lg:mt-20">
              <div className="bg-gradient-to-br from-[#ed1616]/20 to-transparent border border-[#ed1616]/30 rounded-2xl p-8 md:p-10 hover:from-[#ed1616]/30 transition-all duration-500">
                <h4 className="font-semibold text-white mb-4 text-xl flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#ed1616] rounded-full" />
                  Thermal Regulation
                </h4>
                <p className="text-white/75 leading-relaxed font-normal" style={{ fontSize: "0.875rem", fontWeight: "300" }}>
                  Controls heat transfer and prevents viscosity collapse under extreme conditions.
                </p>
              </div>

              <div className="bg-white text-black rounded-3xl p-10 md:p-12 hover:shadow-2xl hover:shadow-[#ed1616]/30 transition-all duration-500">
                <Flame className="w-10 h-10 text-[#ed1616] mb-6" />
                <h4 className="font-semibold mb-4" style={{ fontSize: "1.125rem", fontFamily: "'Coolvetica', sans-serif" }}>
                  Surface Protection
                </h4>
                <p className="text-gray-600 leading-relaxed font-normal" style={{ fontSize: "0.875rem", fontWeight: "300" }}>
                  Forms protective films that reduce wear and fatigue, extending component life dramatically.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          SECTION 4: Certifications
      ========================= */}
      <section className="bg-white relative overflow-hidden">
        
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#ed1616]/5 rounded-full blur-3xl" />
        
        <div className="max-w-[1600px] mx-auto px-6 py-32 md:py-48 relative">

          <div className="max-w-4xl mx-auto text-center mb-24 md:mb-36">
            <p className="uppercase tracking-tight text-[#ed1616] font-semibold mb-6 inline-block border-b-2 border-[#ed1616] pb-2" style={{ fontSize: "0.7rem", fontWeight: "600" }}>
              Proven & Trusted
            </p>
            <h2 className="text-black leading-[1.1] mb-8" style={{ fontSize: "clamp(3.5rem, 5vw, 4.5rem)", fontFamily: "'Coolvetica', sans-serif" }}>
              Recognized
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ed1616] to-[#ff4444] mt-2">
                Standards
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto font-normal" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)", fontWeight: "300" }}>
              Certified to meet the highest industry standards globally.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mb-20">

            {[
              { name: "API", logo: "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740729/garett-mizunaka-xFjti9rYILo-unsplash_rbtvoe.jpg", size: "normal" },
              { name: "SAE", logo: "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740729/setengah-limasore-Suz290ywLYU-unsplash_mdeise.jpg", size: "large" },
              { name: "ISO 9001", logo: "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740719/setengah-limasore-jlbbm_IerPE-unsplash_bgzbyc.jpg", size: "normal" },
              { name: "ISO 14001", logo: "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740705/georg-eiermann-n9j3wbSJzNM-unsplash_nx6ytg.jpg", size: "tall" },
              { name: "OEM", logo: "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740704/lucas-larsson-41M7Xr6cEks-unsplash_absmd9.jpg", size: "normal" },
              { name: "JASO", logo: "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740703/robert-laursoo-my6Q5k_WmoI-unsplash_hynhjx.jpg", size: "wide" },
            ].map((cert, i) => (
              <div 
                key={i} 
                className={`
                  ${cert.size === 'large' ? 'col-span-2 row-span-2' : ''}
                  ${cert.size === 'tall' ? 'row-span-2' : ''}
                  ${cert.size === 'wide' ? 'col-span-2' : ''}
                  group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#ed1616] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500
                `}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ed1616]/0 to-[#ed1616]/0 group-hover:from-[#ed1616]/10 group-hover:to-transparent transition-all duration-500" />
                <div className="relative p-8 h-full flex flex-col items-center justify-center space-y-4">
                  <img src={cert.logo} alt={cert.name} className="h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <p className="text-center text-sm font-semibold text-gray-700 group-hover:text-[#ed1616] transition-colors">{cert.name}</p>
                </div>
              </div>
            ))}

          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-black text-white rounded-3xl p-10 md:p-16">
            <div className="max-w-xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Coolvetica', sans-serif" }}>
                Verified Performance
              </h3>
              <p className="text-white/75 font-normal" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)", fontWeight: "300" }}>
                Backed by global standards. Discover the formulations trusted worldwide.
              </p>
            </div>
            <button className="px-12 py-5 bg-[#ed1616] text-white font-semibold rounded-full hover:bg-white hover:text-[#ed1616] hover:shadow-2xl transition-all duration-300 whitespace-nowrap" style={{ fontSize: "0.9rem", fontWeight: "600", letterSpacing: "0.3px" }}>
              Explore Products →
            </button>
          </div>

        </div>
      </section>

      {/* =========================
          SECTION 5: Products
      ========================= */}
      <section className="bg-gray-50 overflow-hidden relative">
        
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-gradient-to-l from-[#ed1616]/5 to-transparent blur-3xl" />
        
        <div className="max-w-[1600px] mx-auto px-6 py-32 md:py-48 relative">

          <div className="max-w-3xl mb-24 md:mb-36">
            <p className="uppercase tracking-tight text-[#ed1616] font-semibold mb-6 transform -rotate-2 inline-block" style={{ fontSize: "0.7rem", fontWeight: "600" }}>
              Product Portfolio
            </p>
            <h2 className="text-black leading-[1.05] mb-8" style={{ fontSize: "clamp(3.5rem, 5vw, 4.5rem)", fontFamily: "'Coolvetica', sans-serif" }}>
              Select the
              <span className="block text-[#ed1616] font-medium mt-2 transform rotate-1">
                Perfect
              </span>
              <span className="block text-gray-500 text-4xl md:text-6xl mt-3 font-light" style={{ fontSize: "clamp(2.5rem, 3.5vw, 3.5rem)" }}>
                Lubricant
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl border-l-4 border-[#ed1616] pl-6 font-normal" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)", fontWeight: "300" }}>
              Tailored for specific applications—choose based on viscosity, load, and operating conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6 md:gap-8">

            {[
              {
                name: "HendFlix 5W-30",
                type: "Synthetic",
                viscosity: "5W-30",
                image: "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740704/lucas-larsson-41M7Xr6cEks-unsplash_absmd9.jpg",
                span: "md:col-span-5"
              },
              {
                name: "HendFlix 10W-40",
                type: "Semi-Synthetic",
                viscosity: "10W-40",
                image: "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740720/andreas-brun-Rm5_uSGkRmY-unsplash_ohshi3.jpg",
                span: "md:col-span-7"
              },
              {
                name: "HendFlix HD",
                type: "Heavy-Duty",
                viscosity: "15W-40",
                image: "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740705/georg-eiermann-n9j3wbSJzNM-unsplash_nx6ytg.jpg",
                span: "md:col-span-4"
              },
              {
                name: "Industrial Gear",
                type: "Machines",
                viscosity: "ISO VG 220",
                image: "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740704/robert-laursoo-my6Q5k_WmoI-unsplash_1_dygcq7.jpg",
                span: "md:col-span-4"
              },
              {
                name: "Hydraulic Oil",
                type: "Systems",
                viscosity: "ISO VG 46",
                image: "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740710/jan-kopriva-AVlOmTRe9mY-unsplash_fslqvv.jpg",
                span: "md:col-span-4"
              },
              {
                name: "Grease EP2",
                type: "Multi-Purpose",
                viscosity: "NLGI 2",
                image: "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740719/setengah-limasore-jlbbm_IerPE-unsplash_bgzbyc.jpg",
                span: "md:col-span-6"
              },
            ].map((product, i) => (
              <div
                key={i}
                className={`${product.span} group relative bg-white rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-[#ed1616]/20 hover:-translate-y-4 hover:rotate-1`}
              >
                <div className="overflow-hidden h-64 md:h-80">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <span className="inline-block mb-3 px-4 py-1 text-xs bg-[#ed1616] rounded-full font-semibold">
                    {product.viscosity}
                  </span>
                  <h3 className="mb-2" style={{ fontSize: "1.125rem", fontFamily: "'Coolvetica', sans-serif" }}>{product.name}</h3>
                  <p className="text-sm text-gray-300 uppercase tracking-wider font-normal">{product.type}</p>
                </div>
              </div>
            ))}

          </div>

          <div className="mt-24 md:mt-36 max-w-2xl ml-auto text-right">
            <p className="text-gray-600 mb-8 font-normal" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)", fontWeight: "300" }}>
              Each lubricant tested to deliver peak performance.
            </p>
            <button className="px-16 py-6 bg-black text-white font-semibold rounded-full hover:bg-[#ed1616] hover:shadow-2xl hover:shadow-[#ed1616]/30 transition-all duration-300 transform hover:scale-105" style={{ fontSize: "0.9rem", fontWeight: "600", letterSpacing: "0.3px" }}>
              View Full Catalog
            </button>
          </div>
          
        </div>
      </section>

      {/* =========================
          SECTION 6: Testimonials
      ========================= */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-6 py-32 md:py-48">

          <div className="max-w-4xl mx-auto text-center mb-24 md:mb-36 transform -rotate-1">
            <p className="uppercase tracking-tight text-[#ed1616] font-semibold mb-6" style={{ fontSize: "0.7rem", fontWeight: "600" }}>
              Proven in Action
            </p>
            <h2 className="text-black leading-[1.05] mb-8" style={{ fontSize: "clamp(3.5rem, 5vw, 4.5rem)", fontFamily: "'Coolvetica', sans-serif" }}>
              Trusted by
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ed1616] to-[#ff4444] mt-2">
                Professionals
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto font-normal" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)", fontWeight: "300" }}>
              Used daily across automotive, industrial, and heavy-duty applications.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">

            <div className="col-span-12 lg:col-span-8 relative rounded-3xl overflow-hidden shadow-2xl group transform hover:scale-[1.02] transition-all duration-700">
              <img
                src="https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767742222/photo-1556838656-af51dadc2c93_iorhzq.avif"
                alt="Fleet engines"
                className="w-full h-[500px] md:h-[700px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <span className="inline-block mb-4 px-5 py-2 bg-[#ed1616] rounded-full text-sm font-semibold">
                  Fleet Management
                </span>
                <h3 className="text-4xl md:text-6xl font-bold leading-tight mb-4" style={{ fontFamily: "'Coolvetica', sans-serif" }}>
                  35% Less
                  <span className="block text-[#ed1616] font-medium">Engine Wear</span>
                </h3>
                <p className="text-lg md:text-xl text-gray-300 font-normal">120 trucks · 12 months</p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 md:gap-6">

              <div className="relative rounded-2xl overflow-hidden shadow-xl group transform hover:-rotate-2 transition-all duration-500">
                <img
                  src="https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767742229/premium_photo-1663047014497-34b57567f0c9_shiygh.avif"
                  alt="Industrial"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Coolvetica', sans-serif" }}>Industrial</h4>
                  <p className="text-sm text-gray-300 font-normal">+20% maintenance cycles</p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl group transform hover:rotate-2 transition-all duration-500">
                <img
                  src="https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767742209/photo-1609872209699-3e55dc7d90b9_ltg0jj.avif"
                  alt="Automotive"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Coolvetica', sans-serif" }}>Automotive</h4>
                  <p className="text-sm text-gray-300 font-normal">Higher satisfaction</p>
                </div>
              </div>

            </div>

          </div>

          <div className="mt-24 md:mt-36 grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-12 md:p-16 transform rotate-1">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: "'Coolvetica', sans-serif" }}>
                Measurable Results
              </h3>
              <p className="text-white/75 font-normal" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)", fontWeight: "300" }}>
                Ready to achieve similar outcomes?
              </p>
            </div>
            <div className="flex justify-end">
              <button className="px-12 py-5 bg-[#ed1616] text-white font-semibold rounded-full hover:bg-white hover:text-black hover:shadow-2xl transition-all duration-300" style={{ fontSize: "0.9rem", fontWeight: "600", letterSpacing: "0.3px" }}>
                Discover How →
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* =========================
          SECTION 7: Distributor
      ========================= */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden relative">
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ed1616] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ed1616] rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-[1600px] mx-auto px-6 py-32 md:py-48 relative">

          <div className="grid lg:grid-cols-12 gap-12 md:gap-20 items-center">

            <div className="lg:col-span-7 space-y-10">
              <div className="transform -rotate-2">
                <p className="uppercase tracking-tight text-[#ed1616] font-semibold mb-6 inline-block border-b-2 border-[#ed1616] pb-2" style={{ fontSize: "0.7rem", fontWeight: "600" }}>
                  Join Our Network
                </p>
              </div>

              <h2 className="leading-[1.05]" style={{ fontSize: "clamp(3.5rem, 5vw, 4.5rem)", fontFamily: "'Coolvetica', sans-serif" }}>
                Become a
                <span className="block text-[#ed1616] font-medium mt-2">
                  Distributor
                </span>
              </h2>

              <p className="text-white/75 leading-relaxed max-w-2xl border-l-4 border-[#ed1616] pl-6 font-normal" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)", fontWeight: "300" }}>
                Partner with us for world-class lubrication solutions, dedicated support, and exclusive pricing.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-8">
                {[
                  { icon: <ShieldCheck className="w-6 h-6" />, text: "Technical Support" },
                  { icon: <Gauge className="w-6 h-6" />, text: "Exclusive Pricing" },
                  { icon: <Target className="w-6 h-6" />, text: "Marketing Assistance" },
                  { icon: <Zap className="w-6 h-6" />, text: "Full Catalog Access" },
                ].map((benefit, i) => (
                  <div key={i} className={`flex items-center gap-4 group p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-[#ed1616]/50 transition-all duration-500 ${i % 2 === 0 ? 'transform -rotate-1' : 'transform rotate-1'}`}>
                    <span className="text-[#ed1616] group-hover:scale-125 transition-transform duration-300">
                      {benefit.icon}
                    </span>
                    <span className="font-semibold text-lg">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-5 pt-8">
                <button className="px-12 py-5 bg-[#ed1616] text-white font-semibold rounded-full hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-[#ed1616]/50 transition-all duration-300 transform hover:scale-105" style={{ fontSize: "0.9rem", fontWeight: "600", letterSpacing: "0.3px" }}>
                  Become a Distributor
                </button>
                <button className="px-12 py-5 bg-transparent border-2 border-white/30 font-semibold rounded-full hover:border-[#ed1616] hover:bg-[#ed1616]/10 transition-all duration-300" style={{ fontSize: "0.9rem", fontWeight: "600", letterSpacing: "0.3px" }}>
                  Contact Sales
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative transform lg:translate-y-12">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group transform rotate-2 hover:rotate-0 transition-all duration-700">
                <img
                  src="https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767742410/premium_photo-1661768507909-f961fcff0d45_ti1apl.avif"
                  alt="Distributor network"
                  className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                  <p className="text-lg font-semibold leading-relaxed">
                    Trusted partners worldwide expanding HendFlix reach.
                  </p>
                </div>
              </div>
              
              <div className="absolute -top-8 -right-8 bg-[#ed1616] text-white p-6 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-all duration-500">
                <p className="text-4xl font-bold">50+</p>
                <p className="text-sm font-semibold">Countries</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}

export default Home