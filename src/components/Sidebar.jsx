import { NavLink } from 'react-router-dom'
import { Home, CalendarDays, Building2, CreditCard, Users, Settings, Bell } from 'lucide-react'

const nav = [
  { to: '/', label: 'Dashboard', icon: Home },
  { to: '/venues', label: 'Venues', icon: Building2 },
  { to: '/bookings', label: 'Bookings', icon: CalendarDays },
  { to: '/payments', label: 'Payments', icon: CreditCard },
  { to: '/users', label: 'Users', icon: Users },
  { to: '/settings', label: 'Settings', icon: Settings },
]

export default function Sidebar() {
  return (
    <aside className="h-screen w-72 bg-[color:var(--color-dark)]/95 border-r border-white/10 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--color-dark)]/70 fixed left-0 top-0 z-40">
      <div className="h-20 flex items-center gap-3 px-6 border-b border-white/10">
        <div className="w-10 h-10 rounded-xl bg-[color:var(--color-brand)] grid place-items-center font-bold">SV</div>
        <div>
          <p className="font-semibold">SportVenue</p>
          <p className="text-xs text-white/60">Admin Console</p>
        </div>
        <div className="ml-auto">
          <button className="btn btn-ghost"><Bell className="w-5 h-5"/></button>
        </div>
      </div>
      <nav className="p-3 space-y-1">
        {nav.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-xl transition-all ${isActive ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5'}`}
            end={to==='/'}
          >
            <Icon className="w-5 h-5"/>
            <span className="font-medium">{label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="card-dark p-4">
          <p className="text-sm text-white/70 mb-3">Plan: Pro</p>
          <button className="btn btn-accent w-full">Upgrade</button>
        </div>
      </div>
    </aside>
  )
}
