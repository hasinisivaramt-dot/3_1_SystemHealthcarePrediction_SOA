import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Button from '../../../components/buttons/Button'
import ConfidenceRing from '../../../components/charts/ConfidenceRing'

const float = {
  animate: { y: [0, -10, 0] },
  transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
}

export default function Hero() {
  const particlesRef = useRef(null)

  useEffect(() => {
    const wrap = particlesRef.current
    if (!wrap || wrap.childElementCount) return
    for (let i = 0; i < 14; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      const s = 4 + Math.random() * 8
      p.style.width = `${s}px`
      p.style.height = `${s}px`
      p.style.left = `${Math.random() * 100}%`
      p.style.top = `${Math.random() * 90}%`
      p.style.opacity = 0.35 + Math.random() * 0.4
      p.animate(
        [{ transform: 'translate(0,0)' }, { transform: 'translate(10px,-26px)' }, { transform: 'translate(0,0)' }],
        { duration: 9000 + Math.random() * 8000, iterations: Infinity, easing: 'ease-in-out', delay: Math.random() * 6000 }
      )
      wrap.appendChild(p)
    }
  }, [])

  return (
    <section className="hero" id="home">
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-0" />
      <div className="wrap relative z-10 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <div>
          <motion.div className="hero-badge mb-6.5" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="dot" /> AI-driven healthcare, human-centered care
          </motion.div>
          <motion.h1
            className="mb-5.5"
            style={{ fontSize: 'clamp(38px,5vw,60px)' }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }}
          >
            Smarter healthcare,<br /><span className="accent">better tomorrow.</span>
          </motion.h1>
          <motion.p
            className="text-lg leading-relaxed max-w-[520px] mb-8.5"
            style={{ color: 'var(--ink-soft)' }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }}
          >
            Healix combines clinical AI, intelligent recommendations, and seamless appointment management to make
            healthcare more personalized, accessible, and efficient.
          </motion.p>
          <motion.div
            className="flex gap-3.5 flex-wrap mb-11"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }}
          >
            <Button variant="primary">Analyze My Symptoms</Button>
            <Button variant="ghost">Book Appointment</Button>
          </motion.div>
          <motion.div
            className="flex items-center gap-3.5 text-[13.5px]"
            style={{ color: 'var(--ink-faint)' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.32 }}
          >
            <div className="avatars flex">
              <span style={{ background: 'linear-gradient(135deg,#3FC7D9,#0E6E66)' }} />
              <span style={{ background: 'linear-gradient(135deg,#8B7CF6,#3FC7D9)' }} />
              <span style={{ background: 'linear-gradient(135deg,#22B573,#0E6E66)' }} />
              <span style={{ background: 'linear-gradient(135deg,#0E6E66,#0B2545)' }} />
            </div>
            Trusted by 500+ doctors across 100+ demo healthcare providers
          </motion.div>
        </div>

        <motion.div
          className="relative h-[420px] lg:h-[520px] hidden sm:block"
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="hv-core">
            <div className="hv-scan" />
            <svg className="absolute left-[6%] right-[6%] bottom-[14%] h-[46px] opacity-85" viewBox="0 0 300 46" preserveAspectRatio="none">
              <polyline points="0,23 40,23 55,8 68,38 82,23 300,23" fill="none" stroke="rgba(111,227,216,0.55)" strokeWidth="2" />
            </svg>
          </div>

          <motion.div className="float-card" style={{ top: '2%', left: '-4%', width: 200 }} animate={float.animate} transition={{ ...float.transition, delay: 0.2 }}>
            <div className="fc-label">AI Health Analysis</div>
            <div className="text-[13px] font-semibold" style={{ color: 'var(--navy)' }}>Analyzing symptoms…</div>
            <div className="flex items-center gap-1.5 text-[12.5px] mt-1.5" style={{ color: 'var(--ink-soft)' }}>
              <span className="fc-check"><Check size={9} color="#fff" strokeWidth={3} /></span> Symptoms identified
            </div>
            <div className="flex items-center gap-1.5 text-[12.5px] mt-1" style={{ color: 'var(--ink-soft)' }}>
              <span className="fc-check"><Check size={9} color="#fff" strokeWidth={3} /></span> Patterns analyzed
            </div>
            <div className="flex items-center gap-1.5 text-[12.5px] mt-1" style={{ color: 'var(--ink-soft)' }}>
              <span className="fc-pending" /> Generating recommendations
            </div>
          </motion.div>

          <motion.div className="float-card text-center" style={{ bottom: '16%', left: '-6%', width: 150 }} animate={float.animate} transition={{ ...float.transition, delay: 1.4 }}>
            <div className="fc-label">Preliminary Risk</div>
            <div className="flex justify-center my-1"><ConfidenceRing percent={78} size={74} strokeWidth={7} label="" /></div>
            <span className="text-[11.5px] font-semibold px-2.5 py-0.5 rounded-full inline-block" style={{ color: '#B8860B', background: '#FFF6E0' }}>Moderate</span>
          </motion.div>

          <motion.div className="float-card" style={{ top: '8%', right: '-6%', width: 196 }} animate={float.animate} transition={{ ...float.transition, delay: 0.8 }}>
            <div className="fc-label">Smart Appointment</div>
            <div className="text-xs font-semibold" style={{ color: 'var(--green)' }}>Best match found</div>
            <div className="text-[13.5px] font-semibold mt-1">Recommended Doctor</div>
            <div className="text-[11px] font-medium" style={{ fontFamily: 'var(--ff-mono)', color: 'var(--green)' }}>94% AI Match</div>
            <div className="flex justify-between mt-2 pt-2 border-t text-xs" style={{ borderColor: 'var(--line-soft)', color: 'var(--ink-soft)' }}>
              Predicted wait <b style={{ fontFamily: 'var(--ff-mono)', color: 'var(--navy)' }}>14 min</b>
            </div>
          </motion.div>

          <motion.div className="float-card" style={{ bottom: '2%', right: '-2%', width: 170 }} animate={float.animate} transition={{ ...float.transition, delay: 2 }}>
            <div className="fc-label">Live Queue</div>
            <div className="text-2xl font-bold" style={{ fontFamily: 'var(--ff-display)', color: 'var(--teal-dark)' }}>#3</div>
            <div className="text-xs" style={{ color: 'var(--ink-soft)' }}>in line · ~14 min</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
