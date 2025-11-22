import { Routes, Route, NavLink } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import Venues from './pages/Venues'
import Bookings from './pages/Bookings'
import Users from './pages/Users'
import Settings from './pages/Settings'

function Layout({ children, title, cta }) {
  return (
    <div className="min-h-screen bg-[color:var(--color-dark)]">
      <div className="fixed inset-0 -z-0 pointer-events-none bg-[radial-gradient(600px_circle_at_10%_10%,rgba(35,109,207,0.15),transparent),radial-gradient(800px_circle_at_80%_30%,rgba(255,129,57,0.08),transparent)]" />
      <Sidebar />
      <main className="ml-72">
        <Topbar title={title} cta={cta} />
        <div className="px-6 py-6 space-y-6">
          {children}
        </div>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout title="Dashboard"><Dashboard /></Layout>} />
      <Route path="/venues" element={<Layout title="Venue Management" cta="Add Venue"><Venues /></Layout>} />
      <Route path="/bookings" element={<Layout title="Booking Management"><Bookings /></Layout>} />
      <Route path="/payments" element={<Layout title="Payments"><Bookings /></Layout>} />
      <Route path="/users" element={<Layout title="User & Club Management (Superadmin)"><Users /></Layout>} />
      <Route path="/settings" element={<Layout title="Settings"><Settings /></Layout>} />
    </Routes>
  )
}
