import { useState } from 'react'

function SlideOver({ open, onClose, title, children }) {
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-[color:var(--color-light)] text-[color:var(--color-dark)] shadow-2xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 border-b border-black/10 flex items-center justify-between">
          <h3 className="font-semibold" style={{ color: '#236DCF' }}>{title}</h3>
          <button className="btn btn-ghost" onClick={onClose}>Close</button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

export default function Settings() {
  const [openProfile, setOpenProfile] = useState(false)
  const [openSystem, setOpenSystem] = useState(false)
  const [openRoles, setOpenRoles] = useState(false)

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card p-4">
          <p className="font-semibold mb-2">My Profile</p>
          <p className="text-sm text-[color:var(--color-neutral)] mb-3">Manage your profile, team and preferences.</p>
          <button className="btn btn-primary" onClick={()=>setOpenProfile(true)}>Edit</button>
        </div>
        <div className="card p-4">
          <p className="font-semibold mb-2">System Config</p>
          <p className="text-sm text-[color:var(--color-neutral)] mb-3">Platform parameters (superadmin only).</p>
          <button className="btn btn-primary" onClick={()=>setOpenSystem(true)}>Open</button>
        </div>
        <div className="card p-4">
          <p className="font-semibold mb-2">Roles & Permissions</p>
          <p className="text-sm text-[color:var(--color-neutral)] mb-3">Access control (superadmin only).</p>
          <button className="btn btn-primary" onClick={()=>setOpenRoles(true)}>Manage</button>
        </div>
      </div>

      <SlideOver open={openProfile} onClose={()=>setOpenProfile(false)} title="My Profile">
        <div className="space-y-3">
          <input className="input" placeholder="Full name" defaultValue="Alex Coach"/>
          <input className="input" placeholder="Email" defaultValue="alex@example.com"/>
          <button className="btn btn-accent w-full">Save</button>
        </div>
      </SlideOver>

      <SlideOver open={openSystem} onClose={()=>setOpenSystem(false)} title="System Config (Superadmin)">
        <div className="space-y-3">
          <label className="text-sm">Default currency</label>
          <select className="input"><option>USD</option><option>EUR</option></select>
          <label className="text-sm">Maintenance mode</label>
          <div className="flex items-center gap-2"><input type="checkbox"/> <span>Enable</span></div>
          <button className="btn btn-accent w-full">Apply</button>
        </div>
      </SlideOver>

      <SlideOver open={openRoles} onClose={()=>setOpenRoles(false)} title="Roles & Permissions (Superadmin)">
        <div className="space-y-3">
          <div className="bg-white/80 rounded-xl p-3">
            <p className="font-semibold mb-1">Owner</p>
            <p className="text-sm text-[color:var(--color-neutral)]">Full access to assigned clubs and venues.</p>
          </div>
          <div className="bg-white/80 rounded-xl p-3">
            <p className="font-semibold mb-1">Manager</p>
            <p className="text-sm text-[color:var(--color-neutral)]">Manage bookings, payments and schedules.</p>
          </div>
          <button className="btn btn-accent w-full">Update</button>
        </div>
      </SlideOver>
    </div>
  )
}
