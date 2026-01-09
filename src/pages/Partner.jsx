import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircle,
  TrendingUp,
  Users,
  Headphones,
  Award,
  DollarSign,
  Package,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

const tiers = [
  {
    level: '',
    title: 'Authorized Retailer',
    highlight: false,
    desc: 'Local retailers and workshops expanding their lubricant portfolio with Texaco products.',
    perks: [
      'Territorial authorization',
      'Standard wholesale pricing',
      'Marketing starter kit',
      'Technical support access',
      'Product training sessions'
    ],
    req: [ 'Storage capability', 'Sales team']
  },
  {
    level: '',
    title: 'Premium Distributor',
    highlight: true,
    desc: 'Established distributors scaling aggressively across Nigerian regions.',
    perks: [
      '15% preferred pricing',
      'Dedicated account manager',
      'Co-branded campaigns',
      'Priority inventory',
      'Exclusive territory rights'
    ],
    req: [ 'Multi-location ops', 'team experience']
  },
  {
    level: '',
    title: 'Strategic Alliance',
    highlight: false,
    desc: 'National leaders and enterprise distributors with nationwide reach.',
    perks: [
      '20% premium pricing',
      'Custom product programs',
      'Executive planning sessions',
      'National distribution rights',
      'First access to new products'
    ],
    req: [ 'National reach', 'Proven scale']
  }
]

const benefits = [
  { icon: Package, title: 'Original Texaco Products', text: 'Guaranteed authentic, premium-grade engine oils that meet global standards.' },
  { icon: TrendingUp, title: 'Growing Market', text: 'Tap into Nigeria\'s expanding automotive and industrial sectors.' },
  { icon: DollarSign, title: 'Competitive Margins', text: 'Volume-based incentives and sustainable profit structures.' },
  { icon: Award, title: 'Brand Authority', text: 'Partner with a trusted Texaco supplier recognized for quality.' },
  { icon: Headphones, title: 'Technical Support', text: 'Expert guidance to help customers choose the right oil for their engines.' },
  { icon: Users, title: 'Long-Term Alliance', text: 'We grow with our partners based on TRICE values: Teamwork, Respect, Integrity, Commitment, Excellence.' }
]

const Partner = () => {
  const [data, setData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    businessType: '',
    currentBrands: '',
    message: ''
  })

  const onChange = e =>
    setData({ ...data, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create email body with form data
    const emailBody = `
Name: ${data.name}
Company: ${data.company}
Email: ${data.email}
Phone: ${data.phone}
Location: ${data.location}
Business Type: ${data.businessType}
Current Brands: ${data.currentBrands}

Message:
 ${data.message}

---
This is a partnership application from the HendFlix Limited website.
    `.trim()
    
    // Create mailto link
    const mailtoLink = `mailto:info@hendflix.com?subject=Partnership Application from ${data.name} - ${data.company}&body=${encodeURIComponent(emailBody)}`
    
    // Open email client
    window.location.href = mailtoLink
  }

  return (
    <div className="bg-white text-black">
      {/* Font imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600&display=swap');
        @font-face {
          font-family: 'Coolvetica';
          src: url('/fonts/coolvetica.woff2') format('woff2'),
               url('/fonts/coolvetica.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>

      {/* ================= HERO ================= */}
      <section className="relative bg-black text-white py-44">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#ed1616]/10 blur-[140px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="inline-block mb-8 px-6 py-2 font-montserrat text-[0.7rem] tracking-tight uppercase border border-[#ed1616]/40 rounded-full text-[#ed1616] font-semibold">
            Texaco Partnership Program
          </span>

          <h1 className="font-coolvetica text-[4rem] leading-[1.1] max-w-4xl">
            Become a HendFlix<br />
            <span className="text-white/50">Texaco Distributor</span>
          </h1>

          <p className="mt-8 font-montserrat text-[1.3rem] font-light text-white/70 max-w-3xl">
            Join Nigeria's trusted Texaco engine oil supplier. HendFlix Limited partnerships are
            designed for businesses serious about quality, integrity, and growth.
          </p>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-coolvetica text-[4rem] mb-16">
            Why Partners Choose HendFlix
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {benefits.map((b, i) => (
              <div key={i} className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#ed1616]/10 flex items-center justify-center">
                  <b.icon className="text-[#ed1616]" />
                </div>
                <h3 className="font-coolvetica text-[1.125rem]">{b.title}</h3>
                <p className="font-montserrat text-[0.95rem] font-light text-gray-600 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHO WE SERVE ================= */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-coolvetica text-[4rem] mb-16">Who We Serve Together</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Private Car Owners', desc: 'Quality-conscious vehicle owners seeking reliable engine protection' },
              { title: 'Commercial Drivers', desc: 'Professional drivers who depend on engine reliability for daily operations' },
              { title: 'Transport Companies', desc: 'Fleet operators managing multiple vehicles across Nigeria' },
              { title: 'Service Centers', desc: 'Workshops and service centers providing professional maintenance' },
              { title: 'Industrial Users', desc: 'Businesses using generators and heavy machinery' },
              { title: 'Agricultural Sector', desc: 'Farms and agricultural operations with equipment needs' }
            ].map((customer, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#ed1616] transition-all duration-300">
                <h3 className="font-coolvetica text-[1.125rem] mb-3">{customer.title}</h3>
                <p className="font-montserrat text-[0.95rem] font-light text-gray-600">{customer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TIERS ================= */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-coolvetica text-[4rem] mb-20">Partnership Levels</h2>

          <div className="grid lg:grid-cols-3 gap-10">
            {tiers.map((t, i) => (
              <div
                key={i}
                className={`relative p-10 rounded-3xl ${
                  t.highlight
                    ? 'bg-[#ed1616] text-white scale-105 shadow-2xl'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <p className={`font-montserrat text-[0.7rem] tracking-tight uppercase font-semibold ${t.highlight ? 'text-white/70' : 'text-gray-500'}`}>
                  {t.level}
                </p>
                <h3 className="font-coolvetica text-[1.125rem] mt-2">{t.title}</h3>
                <p className={`mt-4 font-montserrat text-[0.875rem] font-light ${t.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                  {t.desc}
                </p>

                {/* <ul className="mt-8 space-y-3">
                  {t.perks.map((p, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle className={`${t.highlight ? 'text-white' : 'text-[#ed1616]'}`} />
                      <span className="font-montserrat text-[0.95rem] font-light">{p}</span>
                    </li>
                  ))}
                </ul> */}

                <div className="mt-10 pt-6 border-t border-white/20">
                  {t.req.map((r, idx) => (
                    <p key={idx} className="font-montserrat text-[0.875rem] font-light">• {r}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APPLICATION ================= */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-coolvetica text-[4rem] mb-12">
            Apply for Partnership
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="name"
                placeholder="Full Name"
                onChange={onChange}
                className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:border-[#ed1616] focus:ring-2 focus:ring-[#ed1616]/20 outline-none font-montserrat text-[0.95rem]"
              />
              <input
                name="company"
                placeholder="Company Name"
                onChange={onChange}
                className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:border-[#ed1616] focus:ring-2 focus:ring-[#ed1616]/20 outline-none font-montserrat text-[0.95rem]"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                onChange={onChange}
                className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:border-[#ed1616] focus:ring-2 focus:ring-[#ed1616]/20 outline-none font-montserrat text-[0.95rem]"
              />
              <input
                name="phone"
                placeholder="Phone Number"
                onChange={onChange}
                className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:border-[#ed1616] focus:ring-2 focus:ring-[#ed1616]/20 outline-none font-montserrat text-[0.95rem]"
              />
            </div>

            <input
              name="location"
              placeholder="Business Location (City, State)"
              onChange={onChange}
              className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:border-[#ed1616] focus:ring-2 focus:ring-[#ed1616]/20 outline-none font-montserrat text-[0.95rem]"
            />

            <select
              name="businessType"
              onChange={onChange}
              className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:border-[#ed1616] focus:ring-2 focus:ring-[#ed1616]/20 outline-none font-montserrat text-[0.95rem]"
            >
              <option value="">Select Business Type</option>
              <option value="retail">Retail Shop</option>
              <option value="workshop">Service Workshop</option>
              <option value="distributor">Distributor</option>
              <option value="fleet">Fleet Operator</option>
              <option value="industrial">Industrial User</option>
              <option value="other">Other</option>
            </select>

            <input
              name="currentBrands"
              placeholder="Current Brands You Carry (if any)"
              onChange={onChange}
              className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:border-[#ed1616] focus:ring-2 focus:ring-[#ed1616]/20 outline-none font-montserrat text-[0.95rem]"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Tell us about your business and why you want to partner with HendFlix Limited..."
              onChange={onChange}
              className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:border-[#ed1616] focus:ring-2 focus:ring-[#ed1616]/20 outline-none font-montserrat text-[0.95rem] font-light"
            />

            <button type="submit" className="w-full py-4 bg-[#ed1616] text-white font-montserrat text-[0.9rem] font-semibold tracking-[0.3px] rounded-full hover:bg-[#d01414] transition">
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* ================= CONTACT STRIP ================= */}
      <section className="bg-black text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="font-coolvetica text-[2.5rem] mb-4">Ready to Partner with HendFlix?</h3>
            <p className="font-montserrat text-[1.125rem] font-light text-white/70 max-w-3xl mx-auto">
              Join our network of trusted Texaco distributors across Nigeria. Together, we'll deliver quality engine oils that protect engines and improve performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <Phone className="mx-auto mb-4 text-[#ed1616]" />
              <p className="font-montserrat text-[0.95rem] font-light">+234 816 500 9559</p>
            </div>
            <div>
              <Mail className="mx-auto mb-4 text-[#ed1616]" />
              <p className="font-montserrat text-[0.95rem] font-light">Hendflixx@gmail.com</p>
            </div>
            <div>
              <MapPin className="mx-auto mb-4 text-[#ed1616]" />
              <p className="font-montserrat text-[0.95rem] font-light">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Partner