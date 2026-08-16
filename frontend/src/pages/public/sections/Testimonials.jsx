import SectionHeading from '../../../components/common/SectionHeading'
import Reveal from '../../../components/common/Reveal'
import TestimonialCard from '../../../components/cards/TestimonialCard'

const TESTIMONIALS = [
  { quote: 'Healix made it easier to understand my symptoms and find the right specialist.', name: 'Demo Patient', role: 'Patient Portal', avatarGradient: 'linear-gradient(135deg,#3FC7D9,#0E6E66)' },
  { quote: 'The appointment recommendations made scheduling much easier.', name: 'Demo Patient', role: 'Patient Portal', avatarGradient: 'linear-gradient(135deg,#8B7CF6,#3FC7D9)' },
  { quote: 'The AI summary gave me a clear overview before the consultation.', name: 'Demo Physician', role: 'Doctor Portal', avatarGradient: 'linear-gradient(135deg,#22B573,#0E6E66)' },
]

export default function Testimonials() {
  return (
    <section className="section" style={{ background: 'var(--bg-teal)' }}>
      <div className="wrap">
        <SectionHeading eyebrow="Feedback" title="What people are saying" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5.5">
          {TESTIMONIALS.map((t, i) => <TestimonialCard key={t.name + i} {...t} delay={i * 0.1} />)}
        </div>
        <Reveal className="text-center text-xs mt-6.5" style={{ color: 'var(--ink-faint)', fontFamily: 'var(--ff-mono)' }}>
          Illustrative demo content for prototype purposes
        </Reveal>
      </div>
    </section>
  )
}
