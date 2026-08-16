import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import Button from '../buttons/Button'
import MobileMenu from './MobileMenu'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Patients', href: '#portals' },
  { label: 'For Doctors', href: '#doctor-experience' },
  { label: 'About', href: '#why' },
  { label: 'Contact', href: '#footer' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      let current = LINKS[0].href
      for (const link of LINKS) {
        const el = document.querySelector(link.href)
        if (el && window.scrollY >= el.offsetTop - 140) current = link.href
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className="fixed top-[18px] left-0 right-0 z-[1000] flex justify-center">
        <div className={`navbar-inner ${scrolled ? 'scrolled' : ''}`}>
          <Link to="/" className="logo">
            <span className="logo-mark" />
            Healix
          </Link>

          <div className="nav-links hidden lg:flex items-center gap-0.5">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className={active === l.href ? 'active' : ''}>
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <Link to="/login" className="hidden lg:inline-block text-[14.5px] font-semibold text-[color:var(--navy)] px-3.5 py-2.5">
              Log in
            </Link>
            <Button variant="primary" className="!py-2.5 !px-5 !text-sm hidden sm:inline-flex">
              Get Started
            </Button>
            <button
              className="lg:hidden flex items-center justify-center w-[38px] h-[38px]"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={20} color="#0B2545" />
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={LINKS} />
    </>
  )
}
