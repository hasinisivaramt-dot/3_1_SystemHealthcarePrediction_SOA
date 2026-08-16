import Reveal from '../common/Reveal'
import ConfidenceRing from '../charts/ConfidenceRing'
import ShapBar from '../charts/ShapBar'

const FACTORS = [
  { label: 'Frequent urination', weight: 92, value: '0.92' },
  { label: 'Excessive thirst', weight: 74, value: '0.74' },
  { label: 'Fatigue', weight: 55, value: '0.55' },
  { label: 'Medical history', weight: 34, value: '0.34' },
]

// The platform's signature moment: explains *why* behind an AI risk score
// instead of presenting a black-box number.
export default function ExplainableAIPanel() {
  return (
    <Reveal className="xai-panel grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
      <div className="relative z-10">
        <span className="eyebrow on-dark">Explainability</span>
        <h3 className="text-white mt-3.5 mb-4" style={{ fontSize: 'clamp(24px,2.6vw,32px)' }}>
          AI you can understand
        </h3>
        <p className="mb-3.5 text-[15.5px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
          Healix explains the factors influencing an AI-generated risk assessment instead of presenting a
          black-box result — so patients and clinicians see the "why," not just the number.
        </p>
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
          A SHAP-style breakdown surfaces the contributing signals behind every preliminary assessment.
        </p>
        <div className="text-xs mt-4.5 pt-3.5 border-t" style={{ color: 'rgba(255,255,255,0.55)', borderColor: 'rgba(255,255,255,0.15)' }}>
          This is a preliminary, AI-assisted risk estimate — not a diagnosis. Healix does not replace
          professional medical advice or clinical diagnosis.
        </div>
      </div>

      <div className="xai-card">
        <div className="flex justify-between items-start mb-5">
          <span className="text-[11px] uppercase tracking-wide" style={{ fontFamily: 'var(--ff-mono)', color: 'rgba(255,255,255,0.55)' }}>
            Preliminary Disease Risk
          </span>
        </div>
        <div className="flex items-center gap-5.5 mb-6">
          <ConfidenceRing percent={78} label="Moderate" size={110} />
          <div className="text-[13.5px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            <b className="block text-white text-[15px] mb-1" style={{ fontFamily: 'var(--ff-display)' }}>
              Top contributing factors
            </b>
            Ranked by relative influence on this preliminary estimate.
          </div>
        </div>
        <div className="flex flex-col gap-3.5">
          {FACTORS.map((f, i) => (
            <ShapBar key={f.label} {...f} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </Reveal>
  )
}
