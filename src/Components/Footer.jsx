import { Link } from 'react-router-dom'
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram
} from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About Us', path: '/about' },
    { id: 'products', label: 'Texaco Products', path: '/shop' },
    { id: 'partner', label: 'Become a Distributor', path: '/partner' },
    { id: 'contacts', label: 'Contact Us', path: '/contact' }
  ]

  const productCategories = [
    { label: 'Texaco Havoline', path: '/shop?category=havoline' },
    { label: 'Texaco Ursa', path: '/shop?category=ursa' },
    { label: 'Texaco Delo', path: '/shop?category=delo' },
    { label: 'Texaco Meropa', path: '/shop?category=meropa' },
    { label: 'Texaco HDAX', path: '/shop?category=hdax' }
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/17v1yxgv5N/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/hendflix_global_resources?igsh=MXh3dTJtcXI0Y2U5MQ==', label: 'Instagram' }
  ]

  return (
    <>
      {/* Typography Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600&display=swap');
        
        @font-face {
          font-family: 'Coolvetica';
          src: url('https://example.com/fonts/coolvetica.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        
        .footer-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .footer-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          font-weight: 300;
          line-height: 1.7;
        }
        
        .footer-link {
          position: relative;
          display: inline-block;
          transition: all 0.3s ease;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          font-weight: 300;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #c91a1a;
          transition: width 0.3s ease;
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .footer-link:hover {
          color: #c91a1a;
        }

        .social-link {
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background-color: #c91a1a;
          border-color: #c91a1a;
          transform: translateY(-3px);
        }
      `}</style>

      <footer className="bg-black text-white">
        
        {/* Main Footer Content */}
        <div className="relative">
          
          {/* Subtle Background Gradient */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[#c91a1a] rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-[1400px] mx-auto px-8 lg:px-16 py-20 lg:py-28">
            
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">

              {/* Brand Section - 5 columns */}
            <div className="lg:col-span-5 space-y-8">


<Link
  to="/"
  className="inline-block group"
>
  <div
    className="
      inline-flex items-center justify-center
      bg-white rounded-t-4xl
      overflow-hidden
      transition-all duration-300 ease-out
      group-hover:shadow-lg
    "
  >
    <img
      src="https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767712723/IMG_3474_t0afzp.png"
      alt="HendFlix Limited"
      className="
        h-20 w-40
        object-contain
        scale-[3.2]
        transition-transform duration-300
        group-hover:scale-[3.4]
      "
    />
  </div>
</Link>





                <p className="footer-text text-gray-400 leading-relaxed max-w-md">
                  Hendflix Limited is a trusted engine oil and lubricants supply company committed to delivering 
                  high-quality Texaco products that keep engines running smoothly, efficiently, and reliably across Nigeria.
                </p>

                {/* Contact Information */}
                <div className="space-y-4 pt-4">
                  <a href="tel:+2348165009559" className="flex items-center gap-3 text-gray-400 hover:text-[#c91a1a] transition-colors group">
                    <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#c91a1a]/10 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="footer-text">+234 816 500 9559</span>
                  </a>

                  <a href="mailto:Hendflixx@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-[#c91a1a] transition-colors group">
                    <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#c91a1a]/10 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="footer-text">Hendflixx@gmail.com</span>
                  </a>

                  <div className="flex items-start gap-3 text-gray-400">
                    <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="footer-text">
                      Lagos, Nigeria<br />
                      Serving customers nationwide
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation Links - 7 columns split into two sections */}
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-12 lg:gap-16">
                
                {/* Quick Links */}
                <div>
                  <h3 className="footer-label text-[#c91a1a] mb-6">Quick Links</h3>
                  <ul className="space-y-3.5">
                    {quickLinks.map(link => (
                      <li key={link.id}>
                        <Link to={link.path} className="footer-link text-gray-400">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Texaco Products */}
                <div>
                  <h3 className="footer-label text-[#c91a1a] mb-6">Texaco Products</h3>
                  <ul className="space-y-3.5">
                    {productCategories.map((item, i) => (
                      <li key={i}>
                        <Link to={item.path} className="footer-link text-gray-400">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-8">
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Copyright */}
              <p className="footer-text text-gray-500 text-center md:text-left">
                © {currentYear} HendFlix Limited. All rights reserved.
              </p>

              {/* Social Links */}
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

              {/* Legal Links */}
              <div className="flex gap-8">
                <Link to="/privacy" className="footer-text text-gray-500 hover:text-[#c91a1a] transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="footer-text text-gray-500 hover:text-[#c91a1a] transition-colors">
                  Terms of Service
                </Link>
              </div>

            </div>

          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer