import { motion } from 'framer-motion'
import Reveal from '../common/Reveal'
import Button from '../buttons/Button'

export default function PortalCard({ variant, tag, title, items, ctaLabel, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <motion.div className={`portal-card ${variant}`} whileHover={{ y: -6, boxShadow: 'var(--shadow-2)' }} transition={{ duration: 0.35 }}>
        <div className="pc-tag text-[11px] uppercase tracking-wide opacity-70 mb-3.5" style={{ fontFamily: 'var(--ff-mono)' }}>{tag}</div>
        <h3 className="text-[22px] mb-4" style={{ color: variant === 'admin' ? '#fff' : undefined }}>{title}</h3>
        <ul className="mb-6.5">
          {items.map((it) => <li key={it}>{it}</li>)}
        </ul>
        <Button variant={variant === 'admin' ? 'outlineLight' : 'ghost'} className="w-full">{ctaLabel}</Button>
      </motion.div>
    </Reveal>
  )
}
