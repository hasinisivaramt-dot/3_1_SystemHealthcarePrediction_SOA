import Reveal from '../../../components/common/Reveal'
import DoctorCard from '../../../components/cards/DoctorCard'

export default function SmartAppointment() {
  return (
    <section className="section" style={{ background: 'var(--bg-teal)' }}>
      <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="eyebrow">Scheduling</span>
          <h2 className="my-3.5" style={{ fontSize: 'clamp(26px,3.2vw,36px)' }}>Find the right care at the right time</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
            Healix ranks available doctors by specialty match, real-time availability and predicted waiting time —
            then recommends the single best slot.
          </p>
          <div className="text-[13px] mt-4 pt-4 border-t" style={{ color: 'var(--ink-faint)', borderColor: 'var(--line-soft)' }}>
            Recommended based on specialty match, availability and predicted waiting time.
          </div>
        </Reveal>
        <DoctorCard />
      </div>
    </section>
  )
}
