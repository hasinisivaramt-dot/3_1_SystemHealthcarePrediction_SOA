import { Lock, Users2, ShieldCheck, FileClock, KeySquare, Box, Bug } from 'lucide-react'
import Reveal from '../../../components/common/Reveal'
import { SecurityItem } from '../../../components/cards/MiscCards'

const ITEMS = [
  { icon: Lock, label: 'JWT Authentication' },
  { icon: Users2, label: 'Role-Based Access Control' },
  { icon: ShieldCheck, label: 'Secure APIs' },
  { icon: FileClock, label: 'Audit Logging' },
  { icon: KeySquare, label: 'Secrets Management' },
  { icon: Box, label: 'Container Security' },
  { icon: Bug, label: 'Vulnerability Scanning' },
]

export default function Security() {
  return (
    <section className="section" id="security" style={{ background: 'linear-gradient(180deg, #fff, var(--bg-blue) 60%, #fff)' }}>
      <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="eyebrow">Security</span>
          <h2 className="my-3.5" style={{ fontSize: 'clamp(26px,3.2vw,36px)' }}>
            Healthcare data deserves more than ordinary security
          </h2>
          <div className="flex flex-col">
            {ITEMS.map((it) => <SecurityItem key={it.label} {...it} />)}
          </div>
          <p className="text-[13.5px] mt-2" style={{ color: 'var(--ink-faint)' }}>
            Built with DevSecOps principles from development to deployment.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="sec-visual">
          <div className="lock-ring" />
          <div className="lock-ring r2" />
          <div className="center-badge">
            <Lock size={34} stroke="#fff" />
          </div>
          <div className="absolute bottom-7 left-7 right-7 text-center text-[12.5px]" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--ff-mono)' }}>
            ENCRYPTED · AUDITED · ROLE-SCOPED
          </div>
        </Reveal>
      </div>
    </section>
  )
}
