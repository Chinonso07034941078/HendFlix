import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="bg-white text-black font-sans">

      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden text-white">

        {/* Refined Gradient Background */}
        <div className="absolute inset-0 z-0"
             style={{
               background: `
                 radial-gradient(circle at 35% 25%, #e62020 0%, #c91a1a 35%, #0a0a0a 85%),
                 linear-gradient(155deg, rgba(10,10,10,0.8) 0%, rgba(201,26,26,0.6) 100%)
               `
             }}
        />

        {/* Subtle Abstract Elements */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-white/3 rounded-full blur-3xl animate-[pulse_12s_ease-in-out_infinite]" />
        <div className="absolute bottom-32 right-1/3 w-80 h-80 bg-white/4 rounded-full blur-3xl animate-[pulse_15s_ease-in-out_infinite]" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 pt-32 pb-24 lg:pt-40 lg:pb-32">

          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* Text Content - Asymmetric positioning */}
            <div className="lg:col-span-7 space-y-7">
              <h1 className="text-[3.5rem] lg:text-[4.5rem] leading-[1.1] tracking-tight"
                  style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                HendFlix Limited
              </h1>
              <p className="text-[1.25rem] lg:text-[1.5rem] text-white/75 leading-relaxed max-w-2xl"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Trusted Engine Oil & Lubricants Supply
              </p>
              <p className="text-[0.95rem] lg:text-[1.125rem] text-white/65 leading-relaxed max-w-xl pt-2"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                HendFlix Limited is a trusted engine oil and lubricants supply company committed to delivering 
                high-quality products that keep engines running smoothly, efficiently, and reliably. We specialize 
                in the supply and distribution of Texaco motor oil, serving individual vehicle owners, commercial 
                drivers, fleet operators, workshops, and businesses across Nigeria.
              </p>
              <div className="pt-6">
                <Link to="/about" className="px-9 py-3.5 bg-white text-[#c91a1a] rounded-md hover:bg-gray-50 transition-all duration-300 inline-block"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.3px' }}>
                  Learn About Our Mission
                </Link>
              </div>
            </div>

            {/* Hero Image - Offset positioning */}
            <div className="lg:col-span-5 relative bg-amber-50 rounded">
              <div className="relative rounded-lg overflow-hidden shadow-2xl transform lg:translate-y-8">
                <img
                  src="https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767712723/IMG_3474_t0afzp.png"
                  alt="Industrial Lubricant Application"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Who We Are Section */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* Story Text - 5 columns */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-[0.625rem] lg:text-[0.75rem] uppercase tracking-tight text-[#c91a1a] mb-3"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                Who We Are
              </p>
              <h2 className="text-[2.75rem] lg:text-[3.25rem] leading-[1.1] tracking-tight"
                  style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                Quality You Can Trust
              </h2>
              <p className="text-[0.95rem] lg:text-[1.125rem] text-gray-600 leading-[1.75]"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                We understand that engine performance depends greatly on the quality of oil used. That is why 
                our focus is on providing original, premium-grade engine oils that meet global standards and 
                support long-term engine health. Our products are carefully sourced to ensure authenticity, quality, and consistency.
              </p>
            </div>

            {/* Story Image - 7 columns */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767959817/istockphoto-1325588832-612x612_ajw88o.webp"
                  alt="Research & Innovation"
                  className="w-full h-[480px] object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gray-50 py-28 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-[2.75rem] lg:text-[3.25rem] leading-[1.1] tracking-tight"
                  style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                Our Mission
              </h2>
              <p className="text-[0.95rem] lg:text-[1.125rem] text-gray-600 leading-[1.75]"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                To supply high-quality engine oils that protect engines, improve performance, and help our 
                customers reduce maintenance costs while driving with confidence.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-[2.75rem] lg:text-[3.25rem] leading-[1.1] tracking-tight"
                  style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                Our Vision
              </h2>
              <p className="text-[0.95rem] lg:text-[1.125rem] text-gray-600 leading-[1.75]"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                To become a leading and trusted engine oil supply brand in Nigeria, recognized for quality 
                products, integrity, and excellent customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - TRICE */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">

          <div className="mb-20">
            <p className="text-[0.625rem] lg:text-[0.75rem] uppercase tracking-tight text-[#c91a1a] mb-3"
               style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Our Foundation
            </p>
            <h2 className="text-[2.75rem] lg:text-[3.25rem] leading-[1.1] tracking-tight max-w-2xl"
                style={{ fontFamily: 'Coolvetica, sans-serif' }}>
              Our Core Values 
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            
            {/* Teamwork */}
            <div className="md:col-span-5 bg-white p-10 rounded-lg shadow-sm hover:shadow-md transition-all duration-500">
              <h3 className="text-[1.125rem] mb-3 tracking-tight"
                  style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                Teamwork
              </h3>
              <p className="text-[0.875rem] text-gray-600 leading-[1.7]"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                We believe strong collaboration leads to better solutions and consistent service delivery.
              </p>
            </div>

            {/* Respect */}
            <div className="md:col-span-4 bg-white p-10 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 md:translate-y-6">
              <h3 className="text-[1.125rem] mb-3 tracking-tight"
                  style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                Respect
              </h3>
              <p className="text-[0.875rem] text-gray-600 leading-[1.7]"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                We treat our customers, partners, and colleagues with fairness, professionalism, and courtesy.
              </p>
            </div>

            {/* Integrity */}
            <div className="md:col-span-3 bg-white p-10 rounded-lg shadow-sm hover:shadow-md transition-all duration-500">
              <h3 className="text-[1.125rem] mb-3 tracking-tight"
                  style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                Integrity
              </h3>
              <p className="text-[0.875rem] text-gray-600 leading-[1.7]"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                We conduct our business honestly, supplying only original and reliable products.
              </p>
            </div>

            {/* Commitment */}
            <div className="md:col-span-6 bg-white p-10 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 md:translate-y-6">
              <h3 className="text-[1.125rem] mb-3 tracking-tight"
                  style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                Commitment
              </h3>
              <p className="text-[0.875rem] text-gray-600 leading-[1.7]"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                We are dedicated to meeting customer needs and delivering dependable service at all times.
              </p>
            </div>

            {/* Excellence */}
            <div className="md:col-span-6 bg-white p-10 rounded-lg shadow-sm hover:shadow-md transition-all duration-500">
              <h3 className="text-[1.125rem] mb-3 tracking-tight"
                  style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                Excellence
              </h3>
              <p className="text-[0.875rem] text-gray-600 leading-[1.7]"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                We strive for the highest standards in product quality, service, and business operations.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
   <section className="bg-gray-50 py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left side - Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <p className="text-[0.625rem] lg:text-[0.75rem] uppercase tracking-tight text-[#c91a1a] mb-3"
               style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Our Advantage
            </p>
            <h2 className="text-[2.75rem] lg:text-[3.25rem] leading-[1.1] tracking-tight"
                style={{ fontFamily: 'Coolvetica, sans-serif' }}>
              Why Choose Us
            </h2>
            <p className="text-[0.95rem] text-gray-500 mt-6 leading-[1.7]"
               style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
              Built on trust, quality, and unwavering commitment to excellence.
            </p>
          </div>

          {/* Right side - Advantage cards in asymmetric grid */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-12 gap-6">
              
              {/* Card 1 - Larger card */}
              <div className="md:col-span-7 bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#c91a1a]/10 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#c91a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[1.125rem] mb-2 tracking-tight"
                        style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                      Trusted Supplier
                    </h3>
                    <p className="text-[0.875rem] text-gray-600 leading-[1.7]"
                       style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      Official supplier of Texaco motor oil with proven authenticity and reliability
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Smaller card */}
              <div className="md:col-span-5 bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 md:translate-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#c91a1a]/10 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#c91a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[1.125rem] mb-2 tracking-tight"
                        style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                      High Performance
                    </h3>
                    <p className="text-[0.875rem] text-gray-600 leading-[1.7]"
                       style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      Original products engineered for maximum efficiency
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Medium card */}
              <div className="md:col-span-5 bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#c91a1a]/10 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#c91a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[1.125rem] mb-2 tracking-tight"
                        style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                      Competitive Pricing
                    </h3>
                    <p className="text-[0.875rem] text-gray-600 leading-[1.7]"
                       style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      Premium quality without premium costs
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 - Medium card */}
              <div className="md:col-span-7 bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 md:translate-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#c91a1a]/10 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#c91a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[1.125rem] mb-2 tracking-tight"
                        style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                      Flexible Supply
                    </h3>
                    <p className="text-[0.875rem] text-gray-600 leading-[1.7]"
                       style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      Bulk and retail availability to meet diverse operational needs
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 5 - Full width */}
              <div className="md:col-span-12 bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#c91a1a]/10 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#c91a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[1.125rem] mb-2 tracking-tight"
                        style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                      Dedicated Support
                    </h3>
                    <p className="text-[0.875rem] text-gray-600 leading-[1.7] max-w-3xl"
                       style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      Strong customer support and comprehensive after-sales service ensuring your operations run smoothly
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
      {/* Founder Section */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">

          

          <div className="mb-20 max-w-3xl">
            <p className="text-[0.625rem] lg:text-[0.75rem] uppercase tracking-tight text-[#c91a1a] mb-3"
               style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Leadership
            </p>
            <h2 className="text-[2.75rem] lg:text-[3.25rem] leading-[1.1] tracking-tight"
                style={{ fontFamily: 'Coolvetica, sans-serif' }}>
              Founder's Profile
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767961922/fff23d66-ca4e-41c9-aacf-1e385853d38f.png"
                alt="Henry Emeh - Founder & Managing Director"
                className="w-full h-[480px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-[1.125rem] tracking-tight"
                  style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                HENRY EMEH
              </h3>
              <p className="text-[0.95rem] lg:text-[1.125rem] text-[#c91a1a]"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Founder & Managing Director
              </p>
              <p className="text-[0.95rem] lg:text-[1.125rem] text-gray-600 leading-[1.75]"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Henry Emeh is the Founder and Managing Director of HendFlix Limited with a strong passion 
                for quality automotive care and sustainable business growth. With a clear understanding of the 
                challenges vehicle owners face—especially the risks of counterfeit and low-quality engine oils—Henry 
                Emeh established the company to provide reliable access to original, trusted motor oil products that 
                truly protect engines.
              </p>
              <p className="text-[0.95rem] lg:text-[1.125rem] text-gray-600 leading-[1.75]"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Under his leadership, the company has grown with a focus on quality, customer trust, and long-term 
                value. Henry Emeh remains actively involved in the business, overseeing operations, product 
                quality, and customer relationships to ensure the company consistently delivers on its promise.
              </p>
              
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-[1.125rem] tracking-tight mb-4"
                    style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                  Founder's Approach
                </h4>
                <blockquote className="text-[0.95rem] lg:text-[1.125rem] text-gray-700 italic pl-4 border-l-4 border-[#c91a1a]"
                       style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  "I believe that engine performance starts with the right oil. When quality comes first, reliability follows."
                </blockquote>
              </div>
              
              <div className="pt-6">
                <h4 className="text-[1.125rem] tracking-tight mb-4"
                    style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                  Responsibilities
                </h4>
                <ul className="space-y-2">
                  {[
                    'Strategic planning and business growth',
                    'Product sourcing and quality control',
                    'Customer relationship management',
                    'Brand development and operations oversight'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-[#c91a1a] flex-shrink-0 mt-2"></div>
                      <p className="text-[0.95rem] lg:text-[1.125rem] text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
     <section className="bg-gray-50 py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left side - Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <p className="text-[0.625rem] lg:text-[0.75rem] uppercase tracking-tight text-[#c91a1a] mb-3"
               style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Our Clients
            </p>
            <h2 className="text-[2.75rem] lg:text-[3.25rem] leading-[1.1] tracking-tight"
                style={{ fontFamily: 'Coolvetica, sans-serif' }}>
              Who We Serve
            </h2>
            <p className="text-[0.95rem] text-gray-500 mt-6 leading-[1.7]"
               style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
              Trusted by diverse industries for premium lubrication solutions.
            </p>
          </div>

          {/* Right side - Client cards in asymmetric grid */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-12 gap-6">
              
              {/* Card 1 - Private car owners */}
              <div className="md:col-span-5 bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#c91a1a]/10 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#c91a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[1.125rem] mb-2 tracking-tight"
                        style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                      Private Car Owners
                    </h3>
                    <p className="text-[0.875rem] text-gray-600 leading-[1.7]"
                       style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      Premium protection for personal vehicles
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Commercial drivers */}
              <div className="md:col-span-7 bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 md:translate-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#c91a1a]/10 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#c91a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[1.125rem] mb-2 tracking-tight"
                        style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                      Commercial & Professional Drivers
                    </h3>
                    <p className="text-[0.875rem] text-gray-600 leading-[1.7]"
                       style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      Reliable performance for high-mileage operations
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Transport companies */}
              <div className="md:col-span-7 bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#c91a1a]/10 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#c91a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[1.125rem] mb-2 tracking-tight"
                        style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                      Transport & Logistics
                    </h3>
                    <p className="text-[0.875rem] text-gray-600 leading-[1.7]"
                       style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      Fleet solutions for maximum uptime and efficiency
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 - Workshops */}
              <div className="md:col-span-5 bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 md:translate-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#c91a1a]/10 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#c91a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[1.125rem] mb-2 tracking-tight"
                        style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                      Workshops & Service Centers
                    </h3>
                    <p className="text-[0.875rem] text-gray-600 leading-[1.7]"
                       style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      Professional-grade products for expert technicians
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 5 - Businesses */}
              <div className="md:col-span-12 bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#c91a1a]/10 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#c91a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[1.125rem] mb-2 tracking-tight"
                        style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                      Industrial Operations
                    </h3>
                    <p className="text-[0.875rem] text-gray-600 leading-[1.7] max-w-3xl"
                       style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      Businesses using generators and heavy machinery requiring consistent, high-performance lubrication
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
      {/* Products Section */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="mb-20">
            <p className="text-[0.625rem] lg:text-[0.75rem] uppercase tracking-tight text-[#c91a1a] mb-3"
               style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Our Offerings
            </p>
            <h2 className="text-[2.75rem] lg:text-[3.25rem] leading-[1.1] tracking-tight max-w-2xl"
                style={{ fontFamily: 'Coolvetica, sans-serif' }}>
              Our Products
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[0.95rem] lg:text-[1.125rem] text-gray-600 leading-[1.75] mb-8"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                We supply a range of Texaco motor oils and lubricants, suitable for:
              </p>
              <ul className="space-y-4">
                {[
                  'Petrol and diesel engines',
                  'Light-duty and heavy-duty vehicles',
                  'Industrial and power-generating equipment'
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-[#c91a1a]/10 flex-shrink-0 mt-1 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#c91a1a]"></div>
                    </div>
                    <p className="text-[0.95rem] lg:text-[1.125rem] text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="text-[0.95rem] lg:text-[1.125rem] text-gray-600 leading-[1.75] mt-8"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Each product is designed to reduce engine wear, improve fuel efficiency, and extend engine lifespan.
              </p>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767960028/istockphoto-900925152-612x612_hnkjal.webp"
                alt="Texaco Motor Oil Products"
                className="w-full h-[480px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage Section */}
     <section className="bg-gray-50 py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left side - Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <p className="text-[0.625rem] lg:text-[0.75rem] uppercase tracking-tight text-[#c91a1a] mb-3"
               style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Our Services
            </p>
            <h2 className="text-[2.75rem] lg:text-[3.25rem] leading-[1.1] tracking-tight"
                style={{ fontFamily: 'Coolvetica, sans-serif' }}>
              Service Coverage
            </h2>
            <p className="text-[0.95rem] text-gray-500 mt-6 leading-[1.7]"
               style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
              Flexible solutions tailored to your needs.
            </p>
          </div>

          {/* Right side - Service cards in asymmetric grid */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-12 gap-6">
              
              {/* Card 1 - Retail and wholesale */}
              <div className="md:col-span-6 bg-white p-10 rounded-lg shadow-sm hover:shadow-md transition-all duration-500">
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-full bg-[#c91a1a]/10 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#c91a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[1.125rem] mb-2 tracking-tight"
                        style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                      Retail & Wholesale Supply
                    </h3>
                    <p className="text-[0.875rem] text-gray-600 leading-[1.7]"
                       style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      Comprehensive distribution channels serving both individual customers and bulk commercial orders
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Flexible orders */}
              <div className="md:col-span-6 bg-white p-10 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 md:translate-y-8">
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-full bg-[#c91a1a]/10 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#c91a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[1.125rem] mb-2 tracking-tight"
                        style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                      Flexible Order Quantities
                    </h3>
                    <p className="text-[0.875rem] text-gray-600 leading-[1.7]"
                       style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      From single units to large-scale orders, we adapt to your specific volume requirements
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Delivery options (full width) */}
              <div className="md:col-span-12 bg-white p-10 rounded-lg shadow-sm hover:shadow-md transition-all duration-500">
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-full bg-[#c91a1a]/10 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#c91a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[1.125rem] mb-2 tracking-tight"
                        style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                      Delivery Options Available
                    </h3>
                    <p className="text-[0.875rem] text-gray-600 leading-[1.7] max-w-3xl"
                       style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      Reliable logistics support with multiple delivery options to ensure your lubricants arrive on time, wherever you need them
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>

      {/* CTA Section - Centered but Refined */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-3xl mx-auto px-8 text-center space-y-8">
          <h2 className="text-[2.75rem] lg:text-[3.25rem] leading-[1.1] tracking-tight"
              style={{ fontFamily: 'Coolvetica, sans-serif' }}>
            Join Our Journey
          </h2>
          <p className="text-[0.95rem] lg:text-[1.125rem] text-gray-600 leading-[1.75] max-w-2xl mx-auto"
             style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
            Whether you are a partner, distributor, or industry professional, HendFlix invites you to be part of our story.
          </p>
          <div className="pt-4">
            <Link to="/contact" className="px-10 py-3.5 bg-[#c91a1a] text-white rounded-md hover:bg-[#b01818] transition-all duration-300 inline-block"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.3px' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About