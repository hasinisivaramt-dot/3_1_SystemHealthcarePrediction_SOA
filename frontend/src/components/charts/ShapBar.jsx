import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Single row of a SHAP-style contribution chart: label, animated fill, value.
export default function ShapBar({ label, weight, value, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })

  return (
    <div ref={ref} className="shap-row" style={{ display: 'grid', gridTemplateColumns: '130px 1fr 40px', alignItems: 'center', gap: 10 }}>
      <span>{label}</span>
      <div className="shap-track">
        <motion.div
          className="shap-fill"
          initial={{ width: '0%' }}
          animate={{ width: inView ? `${weight}%` : '0%' }}
          transition={{ duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] }}
        />
      </div>
      <span className="shap-val" style={{ fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'rgba(255,255,255,0.6)', textAlign: 'right' }}>
        {value}
      </span>
    </div>
  )
}
