import { Link } from "react-router-dom"
import { Droplet, ShieldCheck, Gauge, ArrowRight, Zap, Target, Flame, Users, Award, MapPin } from "lucide-react"
import HomeHero from "../Components/HomeHero"

const Home = () => {
  return (
    <main className="bg-black text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <HomeHero />

      {/* =========================
          SECTION 2: About Hendflix
      ========================= */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#ed1616]/10 via-[#ed1616]/5 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-gray-100 to-transparent blur-2xl" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 py-24 md:py-32">

          <div className="max-w-2xl mb-20 md:mb-32 text-left">
            <p className="uppercase tracking-tight text-[#ed1616] font-semibold mb-4" style={{ fontSize: "0.7rem", fontWeight: "600" }}>
              Who We Are
            </p>

            <h2 className="text-black leading-[1.1] mb-6" style={{ fontSize: "clamp(3.5rem, 5vw, 4.5rem)", fontFamily: "'Coolvetica', sans-serif" }}>
              Hendflix
              <span className="block text-[#ed1616] font-medium">
                Limited
              </span>
              <span className="block text-gray-500 mt-3 font-light" style={{ fontSize: "clamp(2.5rem, 3.5vw, 3.5rem)" }}>
                Trusted Texaco Supplier
              </span>
            </h2>

            <p className="text-gray-600 leading-relaxed font-normal" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)", fontWeight: "300" }}>
              A trusted engine oil and lubricants supply company committed to delivering high-quality Texaco products that keep engines running smoothly, efficiently, and reliably across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">

            <div className="col-span-12 md:col-span-7 row-span-2 bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-14 relative overflow-hidden group">
              <span className="text-6xl font-bold text-[#ed1616]/30 mb-6 block">01</span>
              <h3 className="mb-6" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontFamily: "'Coolvetica', sans-serif" }}>
                Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-xl font-normal" style={{ fontSize: "0.875rem", fontWeight: "300" }}>
                To supply high-quality engine oils that protect engines, improve performance, and help our customers reduce maintenance costs while driving with confidence.
              </p>
              <Link to="/about" className="mt-8 flex items-center gap-2 text-[#ed1616] font-medium" style={{ fontSize: "0.9rem", fontWeight: "500", letterSpacing: "0.3px" }}>
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="col-span-6 md:col-span-5 bg-white border rounded-2xl p-6 md:p-8">
              <span className="text-gray-400 font-medium" style={{ fontSize: "0.875rem", fontWeight: "300" }}>02</span>
              <h3 className="text-black mt-4 mb-3" style={{ fontSize: "1.125rem", fontFamily: "'Coolvetica', sans-serif" }}>
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed font-normal" style={{ fontSize: "0.875rem", fontWeight: "300" }}>
                To become a leading and trusted engine oil supply brand in Nigeria, recognized for quality products, integrity, and excellent customer service.
              </p>
            </div>

            <div className="col-span-6 md:col-span-5 row-span-2 bg-gradient-to-b from-[#ed1616] to-[#c01212] rounded-2xl p-6 md:p-10">
              <span className="text-white/70 font-medium" style={{ fontSize: "0.875rem", fontWeight: "300" }}>03</span>
              <h3 className="mt-6 mb-4" style={{ fontSize: "1.125rem", fontFamily: "'Coolvetica', sans-serif" }}>
                Our Values - TRICE
              </h3>
              <p className="text-white/90 font-normal leading-relaxed" style={{ fontSize: "0.875rem", fontWeight: "300" }}>
                Teamwork, Respect, Integrity, Commitment, Excellence - these core values guide everything we do.
              </p>
            </div>

            <div className="col-span-12 md:col-span-7 bg-gray-50 rounded-2xl p-8 md:p-10">
              <span className="text-gray-400 font-medium" style={{ fontSize: "0.875rem", fontWeight: "300" }}>04</span>
              <h3 className="text-black mt-4 mb-4" style={{ fontSize: "1.125rem", fontFamily: "'Coolvetica', sans-serif" }}>
                Why Choose Hendflix
              </h3>
              <p className="text-gray-600 font-normal leading-relaxed max-w-2xl" style={{ fontSize: "0.875rem", fontWeight: "300" }}>
                Trusted supplier of original Texaco motor oil with competitive pricing, bulk and retail availability, and strong customer support.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          SECTION 3: Our Services
      ========================= */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#ed1616]/5 via-transparent to-transparent" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 80%)' }} />
        
        <div className="max-w-[1600px] mx-auto px-6 py-32 md:py-48">

          <div className="max-w-3xl mb-20 md:mb-32">
            <p className="uppercase tracking-tight text-[#ed1616] font-semibold mb-6" style={{ fontSize: "0.7rem", fontWeight: "600" }}>
              What We Do
            </p>

            <h2 className="leading-[1.1] mb-8" style={{ fontSize: "clamp(3.5rem, 5vw, 4.5rem)", fontFamily: "'Coolvetica', sans-serif" }}>
              Texaco
              <span className="block text-gray-500 mt-2">
                Engine Oil
              </span>
              <span className="block text-[#ed1616] mt-2">
                Solutions
              </span>
            </h2>

            <p className="text-white/75 leading-relaxed border-l-4 border-[#ed1616] pl-6 font-normal" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)", fontWeight: "300" }}>
              We provide dependable engine oil solutions through retail and bulk supply of Texaco motor oil for various applications across Nigeria.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">

            <div className="space-y-8 lg:-mt-20">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-12 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                <Droplet className="w-10 h-10 text-[#ed1616] mb-6" />
                <h3 className="mb-5" style={{ fontSize: "1.125rem", fontFamily: "'Coolvetica', sans-serif" }}>
                  Premium Texaco Products
                </h3>
                <p className="text-white/75 leading-relaxed font-normal" style={{ fontSize: "0.875rem", fontWeight: "300" }}>
                  Original, premium-grade engine oils that meet global standards and support long-term engine health.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#ed1616]/20 to-transparent border border-[#ed1616]/30 rounded-2xl p-8 md:p-10 hover:from-[#ed1616]/30 transition-all duration-500">
                <h4 className="font-semibold text-white mb-4 text-xl flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#ed1616] rounded-full" />
                  Expert Guidance
                </h4>
                <p className="text-white/75 leading-relaxed font-normal" style={{ fontSize: "0.875rem", fontWeight: "300" }}>
                  Support and guidance to help customers choose the right oil for their engine type.
                </p>
              </div>
            </div>

            <div className="space-y-8 lg:mt-20">
              <div className="bg-gradient-to-br from-[#ed1616]/20 to-transparent border border-[#ed1616]/30 rounded-2xl p-8 md:p-10 hover:from-[#ed1616]/30 transition-all duration-500">
                <h4 className="font-semibold text-white mb-4 text-xl flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#ed1616] rounded-full" />
                  Flexible Supply
                </h4>
                <p className="text-white/75 leading-relaxed font-normal" style={{ fontSize: "0.875rem", fontWeight: "300" }}>
                  Retail and wholesale supply with flexible order quantities and delivery options available.
                </p>
              </div>

              <div className="bg-white text-black rounded-3xl p-10 md:p-12 hover:shadow-2xl hover:shadow-[#ed1616]/30 transition-all duration-500">
                <Flame className="w-10 h-10 text-[#ed1616] mb-6" />
                <h4 className="font-semibold mb-4" style={{ fontSize: "1.125rem", fontFamily: "'Coolvetica', sans-serif" }}>
                  Quality Assurance
                </h4>
                <p className="text-gray-600 leading-relaxed font-normal" style={{ fontSize: "0.875rem", fontWeight: "300" }}>
                  Our products are carefully sourced to ensure authenticity, quality, and consistency.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          SECTION 4: Who We Serve
      ========================= */}
      <section className="bg-white relative overflow-hidden">
        
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#ed1616]/5 rounded-full blur-3xl" />
        
        <div className="max-w-[1600px] mx-auto px-6 py-32 md:py-48 relative">

          <div className="max-w-4xl mx-auto text-center mb-24 md:mb-36">
            <p className="uppercase tracking-tight text-[#ed1616] font-semibold mb-6 inline-block border-b-2 border-[#ed1616] pb-2" style={{ fontSize: "0.7rem", fontWeight: "600" }}>
              Our Customers
            </p>
            <h2 className="text-black leading-[1.1] mb-8" style={{ fontSize: "clamp(3.5rem, 5vw, 4.5rem)", fontFamily: "'Coolvetica', sans-serif" }}>
              Who We
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ed1616] to-[#ff4444] mt-2">
                Serve
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto font-normal" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)", fontWeight: "300" }}>
              Providing quality Texaco engine oils to a diverse range of customers across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-20">

            {[
              { name: "Private Car Owners", icon: <Users className="w-8 h-8" /> },
              { name: "Commercial Drivers", icon: <MapPin className="w-8 h-8" /> },
              { name: "Transport Companies", icon: <Target className="w-8 h-8" /> },
              { name: "Service Centers", icon: <ShieldCheck className="w-8 h-8" /> },
              { name: "Industrial Users", icon: <Gauge className="w-8 h-8" /> },
            ].map((customer, i) => (
              <div 
                key={i} 
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#ed1616] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-8 flex flex-col items-center justify-center text-center"
              >
                <div className="text-[#ed1616] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {customer.icon}
                </div>
                <p className="text-center text-sm font-semibold text-gray-700 group-hover:text-[#ed1616] transition-colors">{customer.name}</p>
              </div>
            ))}

          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-black text-white rounded-3xl p-10 md:p-16">
            <div className="max-w-xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Coolvetica', sans-serif" }}>
                Nationwide Coverage
              </h3>
              <p className="text-white/75 font-normal" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)", fontWeight: "300" }}>
                Serving customers across Nigeria with reliable Texaco engine oil solutions.
              </p>
            </div>
            <Link to="/contact" className="px-12 py-5 bg-[#ed1616] text-white font-semibold rounded-full hover:bg-white hover:text-[#ed1616] hover:shadow-2xl transition-all duration-300 whitespace-nowrap" style={{ fontSize: "0.9rem", fontWeight: "600", letterSpacing: "0.3px" }}>
              Contact Us →
            </Link>
          </div>

        </div>
      </section>

      {/* =========================
          SECTION 5: Our Products
      ========================= */}
      <section className="bg-gray-50 overflow-hidden relative">
        
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-gradient-to-l from-[#ed1616]/5 to-transparent blur-3xl" />
        
        <div className="max-w-[1600px] mx-auto px-6 py-32 md:py-48 relative">

          <div className="max-w-3xl mb-24 md:mb-36">
            <p className="uppercase tracking-tight text-[#ed1616] font-semibold mb-6 transform -rotate-2 inline-block" style={{ fontSize: "0.7rem", fontWeight: "600" }}>
              Texaco Products
            </p>
            <h2 className="text-black leading-[1.05] mb-8" style={{ fontSize: "clamp(3.5rem, 5vw, 4.5rem)", fontFamily: "'Coolvetica', sans-serif" }}>
              Premium
              <span className="block text-[#ed1616] font-medium mt-2 transform rotate-1">
                Engine Oils
              </span>
              <span className="block text-gray-500 text-4xl md:text-6xl mt-3 font-light" style={{ fontSize: "clamp(2.5rem, 3.5vw, 3.5rem)" }}>
                & Lubricants
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl border-l-4 border-[#ed1616] pl-6 font-normal" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)", fontWeight: "300" }}>
              We supply a range of Texaco motor oils and lubricants, suitable for petrol and diesel engines, light-duty and heavy-duty vehicles, and industrial equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6 md:gap-8">

            {[
              
             
             
              {
                name: "Texaco HDAX",
                type: "Hydraulic Systems",
                viscosity: "ISO VG 32-68",
                image: "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767972157/photo-1766933181278-16bf0bb27e13_pexks6.avif",
                span: "md:col-span-4"
              },
              {
                name: "Texaco Starplex",
                type: "Multi-Purpose Grease",
                viscosity: "NLGI 1-2",
                image: "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767972203/photo-1746014995879-4176a09069e7_ypinqb.avif",
                span: "md:col-span-4"
              },
              {
                name: "Texaco Delo",
                type: "Diesel Engines",
                viscosity: "15W-40",
                image: "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767785591/q14_d9tmfm.jpg",
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
              Each Texaco product is designed to reduce engine wear, improve fuel efficiency, and extend engine lifespan.
            </p>
            <Link to="/products" className="px-16 py-6 bg-black text-white font-semibold rounded-full hover:bg-[#ed1616] hover:shadow-2xl hover:shadow-[#ed1616]/30 transition-all duration-300 transform hover:scale-105" style={{ fontSize: "0.9rem", fontWeight: "600", letterSpacing: "0.3px" }}>
              View Full Catalog
            </Link>
          </div>
          
        </div>
      </section>

      {/* =========================
          SECTION 6: Founder Profile
      ========================= */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-6 py-32 md:py-48">

          <div className="max-w-4xl mx-auto text-center mb-24 md:mb-36 transform -rotate-1">
            <p className="uppercase tracking-tight text-[#ed1616] font-semibold mb-6" style={{ fontSize: "0.7rem", fontWeight: "600" }}>
              Leadership
            </p>
            <h2 className="text-black leading-[1.05] mb-8" style={{ fontSize: "clamp(3.5rem, 5vw, 4.5rem)", fontFamily: "'Coolvetica', sans-serif" }}>
              Meet Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ed1616] to-[#ff4444] mt-2">
                Founder
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto font-normal" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)", fontWeight: "300" }}>
              Led by a passionate expert committed to quality automotive care and sustainable business growth.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">

            <div className="col-span-12 lg:col-span-8 relative rounded-3xl overflow-hidden shadow-2xl group transform hover:scale-[1.02] transition-all duration-700">
              <img
                src="https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767961922/fff23d66-ca4e-41c9-aacf-1e385853d38f.png"
                alt="Henry Emeh"
                className="w-full h-[500px] md:h-[700px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <span className="inline-block mb-4 px-5 py-2 bg-[#ed1616] rounded-full text-sm font-semibold">
                  Founder & Managing Director
                </span>
                <h3 className="text-4xl md:text-6xl font-bold leading-tight mb-4" style={{ fontFamily: "'Coolvetica', sans-serif" }}>
                  Henry
                  <span className="block text-[#ed1616] font-medium">Emeh</span>
                </h3>
                <p className="text-lg md:text-xl text-gray-300 font-normal">Quality Automotive Care Expert</p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 md:gap-6">

              <div className="relative rounded-2xl overflow-hidden shadow-xl group transform hover:-rotate-2 transition-all duration-500">
                <div className="bg-gradient-to-br from-[#ed1616] to-[#c01212] p-8 h-full">
                  <h4 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Coolvetica', sans-serif" }}>Founder's Approach</h4>
                  <p className="text-white/90 font-normal italic">"I believe that engine performance starts with the right oil. When quality comes first, reliability follows."</p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl group transform hover:rotate-2 transition-all duration-500">
                <div className="bg-gray-50 p-8 h-full">
                  <h4 className="text-2xl font-bold mb-4 text-black" style={{ fontFamily: "'Coolvetica', sans-serif" }}>Responsibilities</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#ed1616] mt-1">•</span>
                      <span>Strategic planning and business growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ed1616] mt-1">•</span>
                      <span>Product sourcing and quality control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ed1616] mt-1">•</span>
                      <span>Customer relationship management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ed1616] mt-1">•</span>
                      <span>Brand development and operations</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

          </div>

          <div className="mt-24 md:mt-36 grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-12 md:p-16 transform rotate-1">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: "'Coolvetica', sans-serif" }}>
                Quality Commitment
              </h3>
              <p className="text-white/75 font-normal" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)", fontWeight: "300" }}>
                Under Henry's leadership, Hendflix Limited has grown with a focus on quality, customer trust, and long-term value.
              </p>
            </div>
            <div className="flex justify-end">
              <Link to="/about" className="px-12 py-5 bg-[#ed1616] text-white font-semibold rounded-full hover:bg-white hover:text-black hover:shadow-2xl transition-all duration-300" style={{ fontSize: "0.9rem", fontWeight: "600", letterSpacing: "0.3px" }}>
                Learn More →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =========================
          SECTION 7: Contact
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
                  Get In Touch
                </p>
              </div>

              <h2 className="leading-[1.05]" style={{ fontSize: "clamp(3.5rem, 5vw, 4.5rem)", fontFamily: "'Coolvetica', sans-serif" }}>
                Contact
                <span className="block text-[#ed1616] font-medium mt-2">
                  Hendflix Limited
                </span>
              </h2>

              <p className="text-white/75 leading-relaxed max-w-2xl border-l-4 border-[#ed1616] pl-6 font-normal" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)", fontWeight: "300" }}>
                Reach out to us for premium Texaco engine oils and lubricants. We're here to help you choose the right products for your needs.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-8">
                {[
                  { icon: <ShieldCheck className="w-6 h-6" />, text: "Product Expertise" },
                  { icon: <Gauge className="w-6 h-6" />, text: "Competitive Pricing" },
                  { icon: <Target className="w-6 h-6" />, text: "Bulk Supply" },
                  { icon: <Zap className="w-6 h-6" />, text: "Fast Delivery" },
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
                <Link to="/contact" className="px-12 py-5 bg-[#ed1616] text-white font-semibold rounded-full hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-[#ed1616]/50 transition-all duration-300 transform hover:scale-105" style={{ fontSize: "0.9rem", fontWeight: "600", letterSpacing: "0.3px" }}>
                  Contact Us
                </Link>
                <Link to="/products" className="px-12 py-5 bg-transparent border-2 border-white/30 font-semibold rounded-full hover:border-[#ed1616] hover:bg-[#ed1616]/10 transition-all duration-300" style={{ fontSize: "0.9rem", fontWeight: "600", letterSpacing: "0.3px" }}>
                  View Products
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative transform lg:translate-y-12">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group transform rotate-2 hover:rotate-0 transition-all duration-700">
                <img
                  src="https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767742410/premium_photo-1661768507909-f961fcff0d45_ti1apl.avif"
                  alt="Hendflix Limited office"
                  className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                  <p className="text-lg font-semibold leading-relaxed">
                    Serving customers across Nigeria with quality Texaco products.
                  </p>
                </div>
              </div>
              
              <div className="absolute -top-8 -right-8 bg-[#ed1616] text-white p-6 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-all duration-500">
                <p className="text-4xl font-bold">100%</p>
                <p className="text-sm font-semibold">Original</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}

export default Home