import { ClipboardList, MessageSquareText, Activity, Sparkles, Stethoscope, UserRound, CalendarCheck, ArrowRight } from 'lucide-react'
import Reveal from '../common/Reveal'

const NODES = [
  { label: 'Symptoms', icon: ClipboardList },
  { label: 'Clinical NLP', icon: MessageSquareText },
  { label: 'Risk Prediction', icon: Activity },
  { label: 'Explainable AI', icon: Sparkles },
  { label: 'Specialty', icon: Stethoscope },
  { label: 'Doctor', icon: UserRound },
  { label: 'Appointment', icon: CalendarCheck },
]

export default function AIPipelineFlow() {
  return (
    <Reveal className="flex items-center justify-center flex-wrap bg-white border rounded-[26px] p-8 md:p-10 mb-5 shadow-sm" style={{ borderColor: 'var(--line)' }}>
      {NODES.map((n, i) => (
        <div className="flex items-center" key={n.label}>
          <div className="pflow-node flex flex-col items-center gap-2 px-4.5 py-2 min-w-[104px]">
            <div className="pnode-dot">
              <n.icon size={22} stroke="var(--teal)" />
            </div>
            <span className="text-[12.5px] font-semibold text-center" style={{ color: 'var(--navy)' }}>{n.label}</span>
          </div>
          {i < NODES.length - 1 && (
            <ArrowRight size={18} className="mx-1 flex-shrink-0 rotate-90 md:rotate-0" style={{ color: 'var(--ink-faint)' }} />
          )}
        </div>
      ))}
    </Reveal>
  )
}
