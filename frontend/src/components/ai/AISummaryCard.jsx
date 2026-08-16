import Reveal from '../common/Reveal'

const FIELDS = [
  ['PATIENT', 'John Doe'],
  ['SYMPTOMS', 'Fatigue, excessive thirst, frequent urination'],
  ['DURATION', '3 weeks'],
  ['HISTORY', 'Family history reported'],
  ['PRELIM. RISK', 'Moderate', true],
  ['SPECIALTY', 'Endocrinology'],
]

// AI Pre-Consultation Summary — clearly labelled as AI-generated decision
// support; the doctor remains responsible for the clinical decision.
export default function AISummaryCard() {
  return (
    <Reveal className="summary-card">
      <div className="sc-head" style={{ background: 'var(--navy)', color: '#fff', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span className="font-semibold text-sm">AI Pre-Consultation Summary</span>
        <span className="text-[11px] px-2.5 py-1 rounded-full" style={{ fontFamily: 'var(--ff-mono)', background: 'rgba(255,255,255,0.14)' }}>
          AI-generated
        </span>
      </div>
      <div className="px-6.5 py-6">
        {FIELDS.map(([k, v, risk]) => (
          <div className="sc-field" key={k}>
            <span className="sc-k">{k}</span>
            <span className={risk ? 'sc-v risk-tag' : 'sc-v'}>{v}</span>
          </div>
        ))}
      </div>
      <div className="text-center text-xs py-3.5" style={{ background: 'var(--bg-blue)', color: 'var(--ink-soft)' }}>
        Decision support only — the doctor remains responsible for clinical decisions.
      </div>
    </Reveal>
  )
}
