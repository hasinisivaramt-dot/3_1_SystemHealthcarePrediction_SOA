import { Link } from 'react-router-dom'

const COLS = [
  {
    title: 'Quick Links',
    links: [
      ['Home', '#home'], ['Services', '#features'], ['How It Works', '#how-it-works'],
      ['About', '#why'], ['Contact', '#footer'],
    ],
  },
  {
    title: 'For Patients',
    links: [
      ['Analyze Symptoms', '#'], ['Book Appointment', '#'], ['Health Records', '#'],
      ['Patient Portal', '/patient'], ['Support', '#'],
    ],
  },
  {
    title: 'Platform',
    links: [
      ['Security', '#security'], ['AI & MLOps', '#mlops'], ['Privacy', '#'],
      ['Terms', '#'], ['Documentation', '#'],
    ],
  },
]

export default function Footer() {
  return (
    <footer className="app-footer" id="footer">
      <div className="wrap">
        <div className="grid grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 pb-14 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div>
            <Link to="/" className="logo"><span className="logo-mark" />Healix</Link>
            <p className="mt-3.5 text-[13.5px] max-w-[220px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              AI-Powered. Patient-Focused.
            </p>
          </div>
          {COLS.map((col) => (
            <div className="footer-col" key={col.title}>
              <h5>{col.title}</h5>
              {col.links.map(([label, href]) => (
                <a key={label} href={href}>{label}</a>
              ))}
            </div>
          ))}
        </div>

        <p className="text-center text-xs mt-7 pb-7 max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Healix provides AI-assisted health insights and does not replace professional medical advice or clinical diagnosis.
        </p>

        <div className="flex justify-between items-center flex-wrap gap-3 py-6 text-[12.5px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
          <span>© 2026 Healix. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
