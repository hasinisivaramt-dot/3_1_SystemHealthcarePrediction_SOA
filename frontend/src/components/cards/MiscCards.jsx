import Reveal from '../common/Reveal'

export function StepItem({ num, title, description, delay = 0, showConnector = true }) {
  return (
    <Reveal delay={delay} className="relative text-center px-3.5">
      {showConnector && (
        <div
          className="hidden md:block absolute top-[29px] h-0.5 z-0"
          style={{
            left: 'calc(50% + 30px)', right: 'calc(-50% + 30px)',
            background: 'repeating-linear-gradient(90deg, var(--line) 0 6px, transparent 6px 12px)',
          }}
        />
      )}
      <div className="step-num relative z-10">{num}</div>
      <h4 className="text-[15.5px] mb-1.5">{title}</h4>
      <p className="text-[13px] max-w-[170px] mx-auto" style={{ color: 'var(--ink-soft)' }}>{description}</p>
    </Reveal>
  )
}

export function SecurityItem({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-3.5 py-3.5 border-b" style={{ borderColor: 'var(--line-soft)' }}>
      <div className="sec-icon"><Icon size={18} stroke="var(--teal)" /></div>
      <span className="text-[14.5px] font-semibold" style={{ color: 'var(--navy)' }}>{label}</span>
    </div>
  )
}

export function WhyCard({ tag, description, delay = 0 }) {
  return (
    <Reveal delay={delay} className="why-card">
      <div className="wc-tag">{tag}</div>
      <p>{description}</p>
    </Reveal>
  )
}

export function TrustStat({ target, suffix, label, note, Counter, delay = 0 }) {
  return (
    <Reveal delay={delay} className="text-center">
      <Counter target={target} suffix={suffix} />
      <div className="text-[13px] mt-1.5" style={{ color: 'var(--ink-soft)' }}>{label}</div>
      <span className="block text-[10px] uppercase tracking-wide mt-1" style={{ fontFamily: 'var(--ff-mono)', color: 'var(--ink-faint)' }}>{note}</span>
    </Reveal>
  )
}
