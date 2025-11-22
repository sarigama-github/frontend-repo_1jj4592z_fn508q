import { Bell, AlertTriangle, CheckCircle2 } from 'lucide-react'

const notifications = [
  { type: 'request', title: 'New booking request', desc: 'Court 2 • 7:30 PM • John D.', color: 'brand' },
  { type: 'payment', title: 'Pending payment', desc: '#INV-2041 • $120.00', color: 'accent' },
  { type: 'alert', title: 'Maintenance', desc: 'Court 1 closed tomorrow 2–4 PM', color: 'accent' },
]

export default function NotificationsPanel() {
  return (
    <div className="card p-4">
      <div className="flex items-center gap-2 mb-3">
        <Bell className="w-4 h-4 text-[color:var(--color-brand)]"/>
        <p className="font-semibold">Notifications</p>
      </div>
      <div className="space-y-3">
        {notifications.map((n, idx) => (
          <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/70">
            {n.type === 'alert' ? (
              <AlertTriangle className="w-5 h-5" style={{ color: '#FF8139' }}/>
            ) : n.type === 'payment' ? (
              <AlertTriangle className="w-5 h-5" style={{ color: '#FF8139' }}/>
            ) : (
              <CheckCircle2 className="w-5 h-5" style={{ color: '#236DCF' }}/>
            )}
            <div>
              <p className="font-medium">{n.title}</p>
              <p className="text-sm text-[color:var(--color-neutral)]">{n.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
