import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// The signature "AI you can understand" ring — used both as a hero
// floating-card preview and, larger, inside the Explainable AI panel.
export default function ConfidenceRing({ percent = 78, size = 110, label = 'Moderate', strokeWidth = 9 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const r = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * r

  return (
    <div ref={ref} className="xai-ring" style={{ width: size, height: size, position: 'relative' }}>
      <svg viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6FE3D8" />
            <stop offset="100%" stopColor="#8B7CF6" />
          </linearGradient>
        </defs>
        <circle className="bg" cx={size / 2} cy={size / 2} r={r} strokeWidth={strokeWidth} />
        <motion.circle
          className="fg"
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: inView ? circumference - (circumference * percent) / 100 : circumference }}
          transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
        />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'var(--ff-display)', fontWeight: 700, fontSize: size * 0.24 }}>{percent}%</span>
        <span style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.6)', marginTop: 1 }}>{label}</span>
      </div>
    </div>
  )
}
