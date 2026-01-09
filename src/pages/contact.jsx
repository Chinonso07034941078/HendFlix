import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create email body with form data
    const emailBody = `
Full Name: ${formData.fullName}
Email: ${formData.email}
Company: ${formData.company}

Message:
 ${formData.message}

---
This is a contact inquiry from the HendFlix website.
    `.trim()
    
    // Create mailto link
    const mailtoLink = `mailto:info@hendflix.com?subject=Contact Inquiry from ${formData.fullName}&body=${encodeURIComponent(emailBody)}`
    
    // Open email client
    window.location.href = mailtoLink
  }

  return (
    <div className="bg-white text-black" style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {/* =========================
          HERO
      ========================= */}
      <section className="relative bg-black text-white py-40 overflow-hidden">
        {/* Ambient accents */}
        <div className="absolute inset-0">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#ed1616]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-[#ed1616]/60 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center space-y-8">
          <span className="inline-block px-6 py-2 uppercase tracking-tight font-semibold bg-[#ed1616]/10 border border-[#ed1616]/20 rounded-full" style={{ fontSize: "0.625rem", fontWeight: "600" }}>
            Get In Touch
          </span>
          <h1 className="leading-[1.1]" style={{ fontSize: "clamp(3.5rem, 5vw, 4.5rem)", fontFamily: "'Coolvetica', sans-serif" }}>
            Let's Talk Performance
          </h1>
          <p className="font-light text-white/80 max-w-3xl mx-auto leading-relaxed" style={{ fontSize: "1.3rem", fontWeight: "300" }}>
            Whether you're an individual vehicle owner, commercial driver, fleet operator, or workshop,
            our team is ready to support your engine oil needs.
          </p>
        </div>
      </section>

      {/* =========================
          CONTACT SECTION
      ========================= */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-12 gap-16">

        {/* CONTACT INFO */}
        <div className="lg:col-span-5 space-y-10">
          <div>
            <h2 className="mb-4" style={{ fontSize: "1.125rem", fontFamily: "'Coolvetica', sans-serif" }}>
              HendFlix Limited
            </h2>
            <p className="font-light text-gray-600 leading-relaxed max-w-md" style={{ fontSize: "1rem", fontWeight: "300" }}>
              HendFlix Limited is a trusted engine oil and lubricants supply company committed to delivering 
              high-quality products that keep engines running smoothly, efficiently, and reliably.
            </p>
          </div>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#ed1616]/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#ed1616]" />
              </div>
              <div>
                <h4 className="font-semibold" style={{ fontSize: "1rem" }}>Phone</h4>
                <p className="text-gray-600 font-light" style={{ fontSize: "0.875rem", fontWeight: "300" }}>+234 816 500 9559</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#ed1616]/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#ed1616]" />
              </div>
              <div>
                <h4 className="font-semibold" style={{ fontSize: "1rem" }}>Email</h4>
                <p className="text-gray-600 font-light" style={{ fontSize: "0.875rem", fontWeight: "300" }}>info@hendflix.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#ed1616]/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#ed1616]" />
              </div>
              <div>
                <h4 className="font-semibold" style={{ fontSize: "1rem" }}>Location</h4>
                <p className="text-gray-600 font-light leading-relaxed" style={{ fontSize: "0.875rem", fontWeight: "300" }}>
                  Houston, Texas<br />
                  Nigeria Operations Nationwide
                </p>
              </div>
            </div>
          </div>

          {/* Brand Statement */}
          <div className="pt-10 border-t border-gray-200">
            <p className="text-gray-700 font-medium leading-relaxed" style={{ fontSize: "1rem" }}>
              We specialize in the supply and distribution of Texaco motor oil, serving individual vehicle owners, 
              commercial drivers, fleet operators, workshops, and businesses across Nigeria.
            </p>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="lg:col-span-7">
          <div className="bg-gray-50 rounded-3xl shadow-xl p-10 lg:p-14">

            <h3 className="mb-8" style={{ fontSize: "1.125rem", fontFamily: "'Coolvetica', sans-serif" }}>
              Send Us a Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-[#ed1616] focus:ring-2 focus:ring-[#ed1616]/20 outline-none transition"
                  style={{ fontSize: "1rem" }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-[#ed1616] focus:ring-2 focus:ring-[#ed1616]/20 outline-none transition"
                  style={{ fontSize: "1rem" }}
                />
              </div>

              <input
                type="text"
                name="company"
                placeholder="Company (Optional)"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-[#ed1616] focus:ring-2 focus:ring-[#ed1616]/20 outline-none transition"
                style={{ fontSize: "1rem" }}
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Tell us about your needs..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-[#ed1616] focus:ring-2 focus:ring-[#ed1616]/20 outline-none transition resize-none"
                style={{ fontSize: "1rem" }}
              />

              <button
                type="submit"
                className="inline-flex items-center gap-3 px-10 py-4 bg-[#ed1616] text-white font-semibold rounded-full hover:bg-[#d01414] hover:shadow-xl hover:shadow-[#ed1616]/20 transition-all"
                style={{ fontSize: "0.9rem", fontWeight: "500", letterSpacing: "0.3px" }}
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* =========================
          WHO WE SERVE
      ========================= */}
    <section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="mb-10 text-center" style={{ fontSize: "2rem", fontFamily: "'Coolvetica', sans-serif" }}>Who We Serve</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        'Private car owners',
        'Commercial and professional drivers',
        'Transport and logistics companies',
        'Workshops and service centers',
        'Businesses using generators and machinery'
      ].map((item, i) => (
        <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-500">
          <h3 className="mb-2" style={{ fontSize: "1.125rem", fontFamily: "'Coolvetica', sans-serif" }}>
            {item}
          </h3>
          <p className="text-gray-600" style={{ fontSize: "0.875rem", fontWeight: "300" }}>
            Quality Texaco motor oils and lubricants tailored for your specific needs.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* =========================
    MAP / VISUAL FOOTER
========================= */}
<section className="relative bg-black text-white py-32 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[2px] bg-gradient-to-r from-transparent via-[#ed1616]/40 to-transparent" />
  </div>

  <div className="relative max-w-4xl mx-auto text-center px-6 space-y-6">
    <h2 style={{ fontSize: "1.125rem", fontFamily: "'Coolvetica', sans-serif" }}>
      Quality Starts With a Conversation
    </h2>
    <p className="text-white/80 font-light" style={{ fontSize: "1.3rem", fontWeight: "300" }}>
      Let's find the right engine oil solution for your vehicles and machinery.
    </p>
  </div>
</section>

    </div>
  )
}

export default Contact