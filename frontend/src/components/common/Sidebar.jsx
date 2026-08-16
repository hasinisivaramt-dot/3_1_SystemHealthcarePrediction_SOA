import { NavLink } from 'react-router-dom'
import * as Icons from 'lucide-react'

export default function Sidebar({ items, brand = 'Healix' }) {
  return (
    <aside className="dash-sidebar">
      <div className="logo mb-7 px-1">
        <span className="logo-mark" />
        {brand}
      </div>
      <nav className="flex flex-col">
        {items.map((item) => {
          const Icon = Icons[item.icon] || Icons.Circle
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path.split('/').length === 2}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <Icon size={17} />
              {item.label}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}
