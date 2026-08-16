import { motion } from 'framer-motion'
import Reveal from '../common/Reveal'

export default function FeatureCard({ num, icon: Icon, title, description, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <motion.div
        className="feature-card"
        whileHover={{ y: -6, boxShadow: 'var(--shadow-2)', borderColor: 'rgba(14,110,102,0.25)' }}
        transition={{ duration: 0.35 }}
      >
        <div className="fnum">{num}</div>
        <div className="ficon"><Icon size={22} stroke="var(--teal)" /></div>
        <h3>{title}</h3>
        <p>{description}</p>
      </motion.div>
    </Reveal>
  )
}
