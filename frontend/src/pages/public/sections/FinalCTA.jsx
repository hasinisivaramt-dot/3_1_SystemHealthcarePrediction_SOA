import Reveal from '../../../components/common/Reveal'
import Button from '../../../components/buttons/Button'

export default function FinalCTA() {
  return (
    <section className="section" style={{ paddingBottom: 120 }}>
      <div className="wrap">
        <Reveal className="final-cta">
          <h2 className="text-white mb-4 relative z-10" style={{ fontSize: 'clamp(28px,3.6vw,42px)' }}>
            Take control of your healthcare journey
          </h2>
          <p className="relative z-10 max-w-[520px] mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.75)', fontSize: 16.5 }}>
            Experience a smarter way to understand your health, find the right care and manage your appointments.
          </p>
          <div className="relative z-10 flex gap-3.5 justify-center flex-wrap">
            <Button variant="lightSolid">Get Started</Button>
            <Button variant="outlineLight">Book Appointment</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
