import SectionHeading from '../../../components/common/SectionHeading'
import { StepItem } from '../../../components/cards/MiscCards'

const STEPS = [
  { num: '01', title: 'Share Symptoms', description: 'Describe how you feel in plain language.' },
  { num: '02', title: 'AI Health Analysis', description: 'Clinical NLP extracts symptoms and context.' },
  { num: '03', title: 'Get Recommendations', description: 'Preliminary risk and specialty insight.' },
  { num: '04', title: 'Smart Appointment', description: 'Matched doctor, slot and wait time.' },
  { num: '05', title: 'Consult & Follow Up', description: 'Care continues after the visit.' },
]

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works" style={{ background: 'var(--bg-blue)' }}>
      <div className="wrap">
        <SectionHeading eyebrow="Process" title="How Healix works" description="Five steps carry every patient from a symptom description to a confirmed, well-matched appointment." />
        <div className="grid grid-cols-1 md:grid-cols-5">
          {STEPS.map((s, i) => (
            <StepItem key={s.num} {...s} delay={i * 0.1} showConnector={i < STEPS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
