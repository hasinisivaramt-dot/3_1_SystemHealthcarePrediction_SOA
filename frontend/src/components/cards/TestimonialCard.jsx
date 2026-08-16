import Reveal from '../common/Reveal'

export default function TestimonialCard({ quote, name, role, avatarGradient, delay = 0 }) {
  return (
    <Reveal delay={delay} className="testi-card">
      <div className="quote-mark">"</div>
      <p className="text-[15px] leading-relaxed mb-4.5" style={{ color: 'var(--navy)' }}>{quote}</p>
      <div className="flex items-center gap-2.5">
        <div className="tp-avatar" style={{ background: avatarGradient }} />
        <div>
          <div className="text-[13.5px] font-semibold">{name}</div>
          <div className="text-xs" style={{ color: 'var(--ink-faint)' }}>{role}</div>
        </div>
      </div>
    </Reveal>
  )
}
