import SectionHeading from '../../../components/common/SectionHeading'
import Reveal from '../../../components/common/Reveal'
import Button from '../../../components/buttons/Button'

const PIPELINE = ['Data', 'Training', 'Evaluation', 'Model Registry', 'Deployment', 'Monitoring', 'Drift Detection', 'Retraining']
const HIGHLIGHTED = new Set(['Model Registry', 'Retraining'])
const TAGS = ['Dataset versioning', 'Experiment tracking', 'Model versioning', 'Performance monitoring', 'Data drift', 'Bias monitoring', 'Retraining triggers']

export default function MLOps() {
  return (
    <section className="section mlops-section" id="mlops">
      <div className="wrap">
        <SectionHeading dark eyebrow="AI Infrastructure" title="AI that gets monitored, not just deployed" description="Every model moves through the same disciplined lifecycle — from raw data to a continuously watched production system." />
        <Reveal className="relative z-10 flex flex-col md:flex-row flex-wrap justify-center items-start md:items-center gap-2.5 md:gap-0 mb-9 max-w-xs md:max-w-none mx-auto">
          {PIPELINE.map((p, i) => (
            <div className="flex items-center" key={p}>
              <span className={`mn-pill ${HIGHLIGHTED.has(p) ? 'hi' : ''}`}>{p}</span>
              {i < PIPELINE.length - 1 && (
                <span className="px-2.5" style={{ color: 'rgba(255,255,255,0.35)' }}>→</span>
              )}
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.1} className="relative z-10 flex flex-wrap gap-2.5 justify-center max-w-[720px] mx-auto mb-9">
          {TAGS.map((t) => (
            <span key={t} className="text-[12.5px] border rounded-lg px-3.5 py-1.5" style={{ fontFamily: 'var(--ff-mono)', color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.15)' }}>
              {t}
            </span>
          ))}
        </Reveal>
        <Reveal delay={0.2} className="relative z-10 text-center">
          <Button variant="outlineLight">Explore AI Infrastructure</Button>
        </Reveal>
      </div>
    </section>
  )
}
