import SectionHeading from '../../../components/common/SectionHeading'
import PortalCard from '../../../components/cards/PortalCard'

const PORTALS = [
  {
    variant: 'patient', tag: 'Patient Portal', title: 'Personal & friendly',
    items: ['Analyze symptoms', 'AI health insights', 'Find doctors', 'Book appointments', 'Track live queue', 'Manage health records'],
    ctaLabel: 'Explore Patient Portal',
  },
  {
    variant: 'doctor', tag: 'Doctor Portal', title: 'Professional & dense',
    items: ['Manage appointments', 'Patient queue', 'AI summaries', 'Medical history', 'Reports', 'Prescriptions'],
    ctaLabel: 'Explore Doctor Portal',
  },
  {
    variant: 'admin', tag: 'Admin Portal', title: 'Analytical & operational',
    items: ['Manage patients', 'Manage doctors', 'Hospitals & specialties', 'Appointments', 'Platform analytics', 'AI monitoring'],
    ctaLabel: 'Explore Admin Portal',
  },
]

export default function Portals() {
  return (
    <section className="section" id="portals" style={{ background: 'var(--bg-blue)' }}>
      <div className="wrap">
        <SectionHeading eyebrow="Access" title="One platform, three experiences" description="Patients, doctors and administrators each get a purpose-built portal on a shared design system." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5.5">
          {PORTALS.map((p, i) => <PortalCard key={p.tag} {...p} delay={i * 0.1} />)}
        </div>
      </div>
    </section>
  )
}
