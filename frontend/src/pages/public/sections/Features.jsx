import { Activity, Stethoscope, CalendarCheck2, FileText, ShieldCheck, LineChart } from 'lucide-react'
import SectionHeading from '../../../components/common/SectionHeading'
import FeatureCard from '../../../components/cards/FeatureCard'

const FEATURES = [
  { num: '01', icon: Activity, title: 'AI Risk Prediction', description: 'AI models analyze symptoms and health factors to provide preliminary disease-risk insights.' },
  { num: '02', icon: Stethoscope, title: 'Smart Specialty Recommendation', description: 'Semantic AI identifies relevant medical specialties based on patient context.' },
  { num: '03', icon: CalendarCheck2, title: 'Intelligent Appointments', description: 'Find suitable doctors, recommended time slots and predicted waiting times.' },
  { num: '04', icon: FileText, title: 'AI Doctor Summary', description: 'Give doctors a concise pre-consultation summary of patient symptoms and relevant history.' },
  { num: '05', icon: ShieldCheck, title: 'Secure & Private', description: 'Role-based access, secure APIs, audit logs and protected health information.' },
  { num: '06', icon: LineChart, title: 'Continuous AI Monitoring', description: 'Monitor model performance, drift, bias, latency and reliability after deployment.' },
]

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="wrap">
        <SectionHeading
          eyebrow="Platform"
          title="Healthcare, reimagined around you"
          description="Every part of the journey — from first symptom to follow-up care — connected by clinical AI and clear, explainable recommendations."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5.5">
          {FEATURES.map((f, i) => <FeatureCard key={f.num} {...f} delay={(i % 3) * 0.08} />)}
        </div>
      </div>
    </section>
  )
}
