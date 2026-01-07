import React from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  return (
    <div className="bg-white text-black font-montserrat">

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
          <span className="inline-block px-6 py-2 text-[0.7rem] tracking-[0.3em] uppercase font-semibold bg-[#ed1616]/10 border border-[#ed1616]/20 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-[4rem] font-coolvetica leading-[1.1]">
            Let's Talk Performance
          </h1>
          <p className="text-[1.3rem] font-light text-white/80 max-w-3xl mx-auto leading-relaxed">
            Whether you're an industrial partner, distributor, or automotive professional,
            our team is ready to support your performance goals.
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
            <h2 className="text-[1.125rem] font-coolvetica mb-4">
              HendFlix Headquarters
            </h2>
            <p className="text-[1rem] font-light text-gray-600 leading-relaxed max-w-md">
              Reach out to our team for technical support, partnerships,
              distribution opportunities, or product inquiries.
            </p>
          </div>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#ed1616]/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#ed1616]" />
              </div>
              <div>
                <h4 className="font-semibold text-[1rem]">Phone</h4>
                <p className="text-gray-600 text-[0.875rem] font-light">+1 (234) 567-890</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#ed1616]/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#ed1616]" />
              </div>
              <div>
                <h4 className="font-semibold text-[1rem]">Email</h4>
                <p className="text-gray-600 text-[0.875rem] font-light">info@hendflix.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#ed1616]/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#ed1616]" />
              </div>
              <div>
                <h4 className="font-semibold text-[1rem]">Location</h4>
                <p className="text-gray-600 text-[0.875rem] font-light leading-relaxed">
                  123 Industrial Blvd, Suite 100<br />
                  Houston, TX 77001, USA
                </p>
              </div>
            </div>
          </div>

          {/* Brand Statement */}
          <div className="pt-10 border-t border-gray-200">
            <p className="text-gray-700 font-medium text-[1rem] leading-relaxed">
              HendFlix lubricants are engineered for industries where
              reliability is not optional — it's critical.
            </p>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="lg:col-span-7">
          <div className="bg-gray-50 rounded-3xl shadow-xl p-10 lg:p-14">

            <h3 className="text-[1.125rem] font-coolvetica mb-8">
              Send Us a Message
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-[#ed1616] focus:ring-2 focus:ring-[#ed1616]/20 outline-none transition text-[1rem]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-[#ed1616] focus:ring-2 focus:ring-[#ed1616]/20 outline-none transition text-[1rem]"
                />
              </div>

              <input
                type="text"
                placeholder="Company (Optional)"
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-[#ed1616] focus:ring-2 focus:ring-[#ed1616]/20 outline-none transition text-[1rem]"
              />

              <textarea
                rows="6"
                placeholder="Tell us about your needs..."
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-[#ed1616] focus:ring-2 focus:ring-[#ed1616]/20 outline-none transition resize-none text-[1rem]"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-3 px-10 py-4 bg-[#ed1616] text-white font-semibold rounded-full hover:bg-[#d01414] hover:shadow-xl hover:shadow-[#ed1616]/20 transition-all text-[0.9rem] tracking-[0.3px]"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
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
          <h2 className="text-[1.125rem] font-coolvetica">
            Precision Starts With a Conversation
          </h2>
          <p className="text-white/80 text-[1.3rem] font-light">
            Let's engineer the right solution for your engines and machinery.
          </p>
        </div>
      </section>

    </div>
  )
}

export default Contact