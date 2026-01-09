import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'products', label: 'Texaco Products', path: '/shop' },
    { id: 'partner', label: 'Partner', path: '/partner' },
    { id: 'contacts', label: 'Contact', path: '/contact' }
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        @font-face {
          font-family: 'Coolvetica';
          src: url('/fonts/coolvetica.woff2') format('woff2'),
               url('/fonts/coolvetica.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }
        
        /* Scoped navbar styles to prevent affecting page content */
        .navbar-container {
          font-family: 'Montserrat', sans-serif;
        }
        
        .navbar-link {
          position: relative;
          transition: color 0.3s ease;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.3px;
        }

        .navbar-link::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 0;
          height: 2px;
          background: #ed1616;
          transition: width 0.3s ease;
        }

        .navbar-link:hover::after,
        .navbar-link-active::after {
          width: 100%;
        }

        .navbar-link-active {
          color: #ed1616;
          font-weight: 600;
        }
        
        .mobile-nav-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          font-weight: 300;
        }
        
        .mobile-nav-link-active {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.3px;
        }
        
        .mobile-logo {
          font-family: 'Coolvetica', sans-serif;
          font-size: 1.125rem;
        }
      `}</style>

      {/* DESKTOP NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 hidden md:block
          ${isScrolled ? 'shadow-lg backdrop-blur bg-white/95' : 'bg-white'}
        navbar-container`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            <Link to="/" className="-my-12">
              <img
                src="https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767712723/IMG_3474_t0afzp.png"
                className="h-52 w-auto object-contain"
                alt="HendFlix Limited"
              />
            </Link>

            <ul className="flex items-center space-x-12">
              {navItems.map(item => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`navbar-link ${
                      location.pathname === item.path
                        ? 'navbar-link-active'
                        : 'text-gray-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* MOBILE TOP BAR */}
      <div className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between px-6 h-20 bg-white shadow navbar-container">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767712723/IMG_3474_t0afzp.png"
            alt="HendFlix Limited"
            className="h-24 w-auto object-contain transform scale-[2.4] origin-left pointer-events-none"
          />
        </Link>

        <button onClick={() => setIsMobileOpen(true)} className="p-2 rounded-md hover:bg-gray-100 transition-colors">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* MOBILE SLIDE-IN NAVBAR */}
      <div
        className={`fixed inset-0 z-50 bg-white transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] navbar-container
          ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header with Logo and Close Button */}
        <div className="flex items-center justify-between px-6 pt-8 pb-6 border-b border-gray-100">
          <div className="mobile-logo">
            <img
              src="https://res.cloudinary.com/dnvgl9k4i/image/upload/v1767712723/IMG_3474_t0afzp.png"
              alt="HendFlix Limited"
              className="h-24 w-auto object-contain transform scale-[2.4] origin-left pointer-events-none"
            />
          </div>
          <button
            onClick={() => setIsMobileOpen(false)}
            className="p-3 -mr-3 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-gray-900" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="px-6 py-10 space-y-4">
          {navItems.map(item => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setIsMobileOpen(false)}
              className={`block px-4 py-4 rounded-lg transition
                ${
                  location.pathname === item.path
                    ? 'bg-red-50 text-red-600 mobile-nav-link-active'
                    : 'text-gray-900 hover:bg-gray-50 mobile-nav-link'
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* SPACER */}
      <div className="h-20 md:h-24" />
    </>
  )
}

export default Navbar