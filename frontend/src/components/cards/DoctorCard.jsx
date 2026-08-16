import Reveal from '../common/Reveal'
import Button from '../buttons/Button'

// "Smart Appointment" recommended-doctor card.
export default function DoctorCard() {
  return (
    <Reveal delay={0.1} className="doctor-card">
      <div className="flex gap-4 items-center mb-5.5">
        <div className="dc-avatar" style={{ background: 'linear-gradient(135deg,#3FC7D9,#0E6E66)' }} />
        <div>
          <div className="font-bold text-[19px]" style={{ fontFamily: 'var(--ff-display)' }}>Dr. Priya Sharma</div>
          <div className="text-[13.5px] font-semibold" style={{ color: 'var(--teal)' }}>Cardiology</div>
          <div className="flex gap-3.5 mt-1 text-[12.5px]" style={{ color: 'var(--ink-soft)' }}>
            <span>★ 4.9</span><span>12 yrs experience</span>
          </div>
        </div>
        <div className="match-badge ml-auto">
          <div className="text-[18px] font-bold" style={{ fontFamily: 'var(--ff-display)', color: 'var(--teal-dark)' }}>94%</div>
          <div className="text-[9.5px] uppercase tracking-wide" style={{ fontFamily: 'var(--ff-mono)', color: 'var(--ink-faint)' }}>AI Match</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3.5 mb-5.5">
        <div className="dc-stat">
          <div className="text-[11.5px] mb-1" style={{ color: 'var(--ink-soft)' }}>Next Available</div>
          <div className="text-[16.5px] font-bold" style={{ fontFamily: 'var(--ff-display)', color: 'var(--navy)' }}>Today · 4:30 PM</div>
        </div>
        <div className="dc-stat">
          <div className="text-[11.5px] mb-1" style={{ color: 'var(--ink-soft)' }}>Predicted Wait</div>
          <div className="text-[16.5px] font-bold" style={{ fontFamily: 'var(--ff-display)', color: 'var(--green)' }}>14 min</div>
        </div>
      </div>
      <Button variant="primary" className="w-full">Book Appointment →</Button>
    </Reveal>
  )
}
