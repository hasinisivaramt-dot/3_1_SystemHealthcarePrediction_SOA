import SectionHeading from '../../../components/common/SectionHeading'
import { WhyCard } from '../../../components/cards/MiscCards'

const REASONS = [
  { tag: 'Personalized', description: 'Healthcare recommendations based on patient context.' },
  { tag: 'Explainable', description: 'Understand what influences AI-generated insights.' },
  { tag: 'Connected', description: 'Patients, doctors, appointments and records in one workflow.' },
  { tag: 'Continuously Improving', description: 'Models are monitored and improved using MLOps.' },
]

export default function WhyHealix() {
  return (
    <section className="section" id="why">
      <div className="wrap">
        <SectionHeading eyebrow="Why Healix" title="Built around four principles" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REASONS.map((r, i) => <WhyCard key={r.tag} {...r} delay={i * 0.08} />)}
        </div>
      </div>
    </section>
  )
}
