import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, dark = false }) {
  return (
    <Reveal className="section-head">
      {eyebrow && <span className={`eyebrow ${dark ? 'on-dark' : ''}`}>{eyebrow}</span>}
      <h2 style={{ marginTop: 14, color: dark ? '#fff' : undefined }}>{title}</h2>
      {description && (
        <p style={{ color: dark ? 'rgba(255,255,255,0.65)' : undefined }}>{description}</p>
      )}
    </Reveal>
  )
}
