import { Outlet } from 'react-router-dom'
import Sidebar from '../components/common/Sidebar'
import { ADMIN_NAV } from '../constants/navigation'

export default function AdminLayout() {
  return (
    <div className="dash-shell">
      <Sidebar items={ADMIN_NAV} />
      <main className="dash-main">
        <Outlet />
      </main>
    </div>
  )
}
