import React from 'react'

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
                HendFlix Lubricants
              </h1>
              <p className="text-xl lg:text-2xl text-white/75 leading-relaxed max-w-2xl"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Precision Engineering, Maximum Performance
              </p>
              <p className="text-base lg:text-lg text-white/65 leading-relaxed max-w-xl pt-2"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Power your engines, optimize machinery, and achieve peak industrial performance. 
                HendFlix delivers premium lubricants engineered for reliability, longevity, and efficiency.
              </p>
              <div className="pt-6">
                <button className="px-9 py-3.5 bg-white text-[#c91a1a] font-medium rounded-md hover:bg-gray-50 transition-all duration-300"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', letterSpacing: '0.3px' }}>
                  Learn About Our Mission
                </button>
              </div>
            </div>

            {/* Hero Image - Offset positioning */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl transform lg:translate-y-8">
                <img
                  src="https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767740720/andreas-brun-Rm5_uSGkRmY-unsplash_ohshi3.jpg"
                  alt="Industrial Lubricant Application"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Brand Story - Asymmetric Grid */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* Story Text - 5 columns */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs uppercase tracking-[0.15em] text-[#c91a1a] mb-3"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                Heritage
              </p>
              <h2 className="text-[2.75rem] lg:text-[3.25rem] leading-[1.15] tracking-tight"
                  style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                Our Story
              </h2>
              <p className="text-base text-gray-600 leading-[1.75]"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                HendFlix was founded with a single purpose: to provide lubricants that deliver performance, longevity, and sustainability. Over the years, our research, innovation, and commitment to quality have positioned us as a trusted brand in automotive, industrial, and heavy-duty applications worldwide.
              </p>
            </div>

            {/* Story Image - 7 columns */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767741261/kaleidico-HixzNprXdb4-unsplash_uxwdlt.jpg"
                  alt="Research & Innovation"
                  className="w-full h-[480px] object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Core Values - Irregular Grid */}
      <section className="bg-gray-50 py-28 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">

          <div className="mb-20">
            <p className="text-xs uppercase tracking-[0.15em] text-[#c91a1a] mb-3"
               style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Our Foundation
            </p>
            <h2 className="text-[2.75rem] lg:text-[3.25rem] leading-[1.15] tracking-tight max-w-2xl"
                style={{ fontFamily: 'Coolvetica, sans-serif' }}>
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            
            {/* First value - spans 5 columns */}
            <div className="md:col-span-5 bg-white p-10 rounded-lg shadow-sm hover:shadow-md transition-all duration-500">
              <h3 className="text-xl mb-3 tracking-tight"
                  style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                Innovation
              </h3>
              <p className="text-sm text-gray-600 leading-[1.7]"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Continuous improvement in formulas, technology, and processes to stay ahead in performance and sustainability.
              </p>
            </div>

            {/* Second value - spans 4 columns */}
            <div className="md:col-span-4 bg-white p-10 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 md:translate-y-6">
              <h3 className="text-xl mb-3 tracking-tight"
                  style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                Reliability
              </h3>
              <p className="text-sm text-gray-600 leading-[1.7]"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Delivering products that protect engines and machinery under the harshest conditions.
              </p>
            </div>

            {/* Third value - spans 3 columns */}
            <div className="md:col-span-3 bg-white p-10 rounded-lg shadow-sm hover:shadow-md transition-all duration-500">
              <h3 className="text-xl mb-3 tracking-tight"
                  style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                Integrity
              </h3>
              <p className="text-sm text-gray-600 leading-[1.7]"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Transparent practices, ethical business, and uncompromising quality standards.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Team Section - Asymmetric Layout */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">

          <div className="mb-20 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.15em] text-[#c91a1a] mb-3"
               style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Expertise
            </p>
            <h2 className="text-[2.75rem] lg:text-[3.25rem] leading-[1.15] tracking-tight"
                style={{ fontFamily: 'Coolvetica, sans-serif' }}>
              Team of Engineers & Specialists
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-12 gap-6">
            
            {/* Team member cards with varying column spans */}
            {[
              { span: 'md:col-span-3', offset: '' },
              { span: 'md:col-span-4', offset: 'md:translate-y-8' },
              { span: 'md:col-span-3', offset: '' },
              { span: 'md:col-span-2', offset: 'md:translate-y-12' }
            ].map((config, i) => (
              <div key={i} className={`${config.span} ${config.offset} bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500`}>
                <div className="relative overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767741676/photo-1599566150163-29194dcaad36_htxa8s.avif"
                    alt={`Team Member ${i + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base mb-1 tracking-tight"
                      style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                    Member Name
                  </h3>
                  <p className="text-xs text-gray-500"
                     style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                    Role / Expertise
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Timeline - Offset Layout */}
      <section className="bg-gray-50 py-28 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">

          <div className="mb-20 text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.15em] text-[#c91a1a] mb-3"
               style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Evolution
            </p>
            <h2 className="text-[2.75rem] lg:text-[3.25rem] leading-[1.15] tracking-tight"
                style={{ fontFamily: 'Coolvetica, sans-serif' }}>
              Journey Through Excellence
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l border-gray-200 ml-8">
              {[
                { year: "2010", title: "Company Founded", desc: "HendFlix starts its journey with a focus on premium automotive lubricants." },
                { year: "2015", title: "Industrial Expansion", desc: "We expand into industrial and heavy-duty lubricant markets." },
                { year: "2020", title: "Global Certifications", desc: "Achieved ISO, API, and SAE certifications across product lines." },
                { year: "2025", title: "Innovation Labs", desc: "Established R&D labs to pioneer sustainable lubrication solutions." },
              ].map((item, i) => (
                <div key={i} className={`mb-16 ml-8 relative ${i % 2 === 0 ? 'lg:ml-12' : 'lg:ml-8'}`}>
                  <div className="absolute -left-[2.15rem] top-1.5 w-2.5 h-2.5 bg-[#c91a1a] rounded-full" />
                  <p className="text-xs text-gray-400 mb-1"
                     style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
                    {item.year}
                  </p>
                  <h3 className="text-xl mb-2 tracking-tight"
                      style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-[1.7] max-w-md"
                     style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section - Centered but Refined */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-3xl mx-auto px-8 text-center space-y-8">
          <h2 className="text-[2.75rem] lg:text-[3.25rem] leading-[1.15] tracking-tight"
              style={{ fontFamily: 'Coolvetica, sans-serif' }}>
            Join Our Journey
          </h2>
          <p className="text-base text-gray-600 leading-[1.75] max-w-2xl mx-auto"
             style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
            Whether you are a partner, distributor, or industry professional, HendFlix invites you to be part of our story.
          </p>
          <div className="pt-4">
            <button className="px-10 py-3.5 bg-[#c91a1a] text-white font-medium rounded-md hover:bg-[#b01818] transition-all duration-300"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', letterSpacing: '0.3px' }}>
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About