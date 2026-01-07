import { Link } from 'react-router-dom'
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight
} from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'products', label: 'Products', path: '/shop' },
    { id: 'partner', label: 'Partner', path: '/partner' },
    { id: 'contacts', label: 'Contacts', path: '/contact' }
  ]

  const productCategories = [
    { label: 'Automotive Oils', path: '/shop?category=automotive' },
    { label: 'Industrial Lubricants', path: '/shop?category=industrial' },
    { label: 'Heavy-Duty Solutions', path: '/shop?category=heavy-duty' },
    { label: 'Hydraulic Fluids', path: '/shop?category=hydraulic' },
    { label: 'Gear Oils', path: '/shop?category=gear' }
  ]

  const resources = [
    { label: 'Technical Data Sheets', path: '/resources/technical' },
    { label: 'Safety Information', path: '/resources/safety' },
    { label: 'Product Catalog', path: '/resources/catalog' },
    { label: 'Certifications', path: '/resources/certifications' },
    { label: 'FAQs', path: '/resources/faqs' }
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' }
  ]

  return (
    <>
      {/* Custom Footer Effects & Typography */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600&display=swap');
        
        @font-face {
          font-family: 'Coolvetica';
          src: url('https://example.com/fonts/coolvetica.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        
        /* Typography Styles */
        .section-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .paragraph-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.6;
        }
        
        .card-title {
          font-family: 'Coolvetica', sans-serif;
          font-size: 1.125rem;
          font-weight: normal;
        }
        
        .card-body {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          font-weight: 300;
        }
        
        .button-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.3px;
        }
        
        .hero-subheading {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.5rem;
          font-weight: 300;
          line-height: 1.1;
        }
        
        .footer-link {
          position: relative;
          display: inline-block;
          transition: all 0.3s ease;
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          font-weight: 300;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #ed1616;
          transition: width 0.3s ease;
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .footer-link:hover {
          color: #ed1616;
          transform: translateX(4px);
        }

        .social-link {
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background-color: #ed1616;
          color: white;
          transform: translateY(-4px);
        }

        .newsletter-input {
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          font-weight: 300;
        }
        
        .newsletter-input:focus {
          border-color: #ed1616;
          outline: none;
          box-shadow: 0 0 0 3px rgba(237, 22, 22, 0.15);
        }
      `}</style>

      <footer className="bg-black text-white">

        {/* Main Footer */}
        <div className="relative overflow-hidden">
          {/* Ambient Background Shapes */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ed1616] rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#ed1616] rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

              {/* Brand */}
              <div className="lg:col-span-4 relative p-8 rounded-xl flex flex-col items-start"
                   style={{
                     background: 'linear-gradient(135deg, rgba(237,22,22,0.2), rgba(0,0,0,0.1))'
                   }}>
                
                {/* Glow behind logo */}
                <div className="absolute -top-8 -left-8 w-36 h-36 bg-[#ed1616] rounded-full blur-3xl opacity-30 pointer-events-none" />
                
                <Link to="/" className="inline-block relative z-10">
                  <img
                    src="https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767712723/IMG_3474_t0afzp.png"
                    alt="HendFlix Limited"
                    className="h-40 w-auto object-contain"
                  />
                </Link>

                <p className="paragraph-text text-gray-100 leading-relaxed max-w-sm mt-4 relative z-10">
                  Engineering excellence in lubrication technology. HendFlix delivers
                  precision-formulated lubricants designed to protect, perform, and
                  extend the life of your equipment.
                </p>

                {/* Contact */}
                <div className="space-y-3 pt-6 relative z-10">
                  <a href="tel:+1234567890" className="flex items-center gap-3 text-gray-200 hover:text-[#ed1616] transition group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ed1616] transition">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="paragraph-text">+1 (234) 567-890</span>
                  </a>

                  <a href="mailto:info@hendflix.com" className="flex items-center gap-3 text-gray-200 hover:text-[#ed1616] transition group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ed1616] transition">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="paragraph-text">info@hendflix.com</span>
                  </a>

                  <div className="flex items-start gap-3 text-gray-200">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="paragraph-text">
                      123 Industrial Blvd, Suite 100<br />
                      Houston, TX 77001, USA
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="lg:col-span-2">
                <h3 className="section-label mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {quickLinks.map(link => (
                    <li key={link.id}>
                      <Link to={link.path} className="footer-link text-gray-400">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Products */}
              <div className="lg:col-span-3">
                <h3 className="section-label mb-6">Products</h3>
                <ul className="space-y-3">
                  {productCategories.map((item, i) => (
                    <li key={i}>
                      <Link to={item.path} className="footer-link text-gray-400">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="lg:col-span-3">
                <h3 className="section-label mb-6">Resources</h3>
                <ul className="space-y-3">
                  {resources.map((item, i) => (
                    <li key={i}>
                      <Link to={item.path} className="footer-link text-gray-400">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-16 pt-12 border-t border-white/10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="hero-subheading mb-3">Stay Updated</h3>
                  <p className="paragraph-text text-gray-400">
                    Subscribe for product updates, technical insights, and industry news.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="newsletter-input flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500"
                  />
                  <button className="px-8 py-3 bg-[#ed1616] rounded-lg flex items-center justify-center gap-2 hover:bg-[#d01414] transition">
                    <span className="button-text">Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/70">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="paragraph-text text-gray-400 text-center md:text-left">
              © {currentYear} HendFlix Limited. All rights reserved.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="social-link w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="flex gap-6">
              <Link to="/privacy" className="paragraph-text text-gray-400 hover:text-[#ed1616] transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="paragraph-text text-gray-400 hover:text-[#ed1616] transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer