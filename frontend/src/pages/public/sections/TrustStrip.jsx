import AnimatedCounter from '../../../components/charts/AnimatedCounter'
import { TrustStat } from '../../../components/cards/MiscCards'

const STATS = [
  { target: 20000, suffix: '+', label: 'Patient profiles', note: 'Demo platform data' },
  { target: 500, suffix: '+', label: 'Doctors', note: 'Demo platform data' },
  { target: 100, suffix: '+', label: 'Healthcare providers', note: 'Demo platform data' },
  { target: 92, suffix: '%', label: 'Example model evaluation score', note: 'Illustrative, not clinical' },
]

export default function TrustStrip() {
  return (
    <section className="py-14 border-y" style={{ borderColor: 'var(--line-soft)', background: 'var(--bg-blue)' }}>
      <div className="wrap grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-5 text-center">
        {STATS.map((s, i) => (
          <TrustStat key={s.label} {...s} Counter={AnimatedCounter} delay={i * 0.08} />
        ))}
      </div>
    </section>
  )
}
