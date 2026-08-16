import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../buttons/Button'

export default function MobileMenu({ open, onClose, links }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[1100] bg-white flex flex-col p-6"
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <button className="self-end w-[38px] h-[38px]" aria-label="Close menu" onClick={onClose}>
            <X size={22} color="#0B2545" />
          </button>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={onClose}
              className="block py-4 text-[22px] font-semibold border-b"
              style={{ fontFamily: 'var(--ff-display)', borderColor: 'var(--line-soft)' }}
            >
              {l.label}
            </a>
          ))}
          <div className="mt-7 flex flex-col gap-3">
            <Link to="/login" onClick={onClose}>
              <Button variant="ghost" className="w-full">Log in</Button>
            </Link>
            <Button variant="primary" className="w-full">Get Started</Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
