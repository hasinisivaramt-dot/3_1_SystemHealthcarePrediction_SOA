import Reveal from '../../../components/common/Reveal'
import Button from '../../../components/buttons/Button'
import AISummaryCard from '../../../components/ai/AISummaryCard'

export default function DoctorExperience() {
  return (
    <section className="section" id="doctor-experience">
      <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <AISummaryCard />
        <Reveal delay={0.1}>
          <span className="eyebrow">For Clinicians</span>
          <h2 className="my-3.5" style={{ fontSize: 'clamp(26px,3.2vw,36px)' }}>
            Give doctors better context before every consultation
          </h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--ink-soft)' }}>
            Every appointment arrives with a structured, AI-organized summary — primary symptoms, duration,
            relevant history, preliminary risk and previous reports — so consultations start informed.
          </p>
          <p className="text-[13px] mb-6.5" style={{ color: 'var(--ink-faint)' }}>
            AI assists clinicians by organizing information. Final clinical decisions remain with healthcare
            professionals.
          </p>
          <Button variant="ghost">Explore Doctor Portal →</Button>
        </Reveal>
      </div>
    </section>
  )
}
