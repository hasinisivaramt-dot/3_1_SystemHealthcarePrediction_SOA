import SectionHeading from '../../../components/common/SectionHeading'
import Reveal from '../../../components/common/Reveal'
import AIPipelineFlow from '../../../components/ai/AIPipelineFlow'

export default function Pipeline() {
  return (
    <section className="section" style={{ background: 'linear-gradient(180deg, var(--bg-teal), #fff)' }}>
      <div className="wrap">
        <SectionHeading eyebrow="Pipeline" title="From symptoms to the right care" />
        <AIPipelineFlow />
        <Reveal className="max-w-[600px] mx-auto text-center text-[15.5px] leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          Healix transforms patient information into meaningful, explainable healthcare recommendations while
          keeping healthcare professionals at the center of decision-making.
        </Reveal>
      </div>
    </section>
  )
}
