import { Outlet } from 'react-router-dom'
import Sidebar from '../components/common/Sidebar'
import { PATIENT_NAV } from '../constants/navigation'

export default function PatientLayout() {
  return (
    <div className="dash-shell">
      <Sidebar items={PATIENT_NAV} />
      <main className="dash-main">
        <Outlet />
      </main>
    </div>
  )
}
