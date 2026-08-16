import { Outlet } from 'react-router-dom'
import Sidebar from '../components/common/Sidebar'
import { DOCTOR_NAV } from '../constants/navigation'

export default function DoctorLayout() {
  return (
    <div className="dash-shell">
      <Sidebar items={DOCTOR_NAV} />
      <main className="dash-main">
        <Outlet />
      </main>
    </div>
  )
}
