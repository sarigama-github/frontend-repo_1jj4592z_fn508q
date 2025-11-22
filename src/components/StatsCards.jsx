import { motion } from 'framer-motion'
import { CalendarDays, Users, DollarSign, AlarmClock } from 'lucide-react'

const cards = [
  { label: 'Bookings Today', value: '42', icon: CalendarDays },
  { label: 'Upcoming Matches', value: '18', icon: AlarmClock },
  { label: 'Revenue This Month', value: '$24,380', icon: DollarSign },
  { label: 'New Users', value: '126', icon: Users },
]

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map(({ label, value, icon: Icon }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="card p-5 relative overflow-hidden"
        >
          <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-[color:var(--color-brand)]/10"/>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-[color:var(--color-neutral)]">{label}</p>
              <p className="text-3xl font-bold mt-1" style={{ color: '#236DCF' }}>{value}</p>
            </div>
            <div className="w-10 h-10 rounded-xl grid place-items-center" style={{ background: '#236DCF20' }}>
              <Icon className="w-5 h-5" style={{ color: '#236DCF' }}/>
            </div>
          </div>
          {label === 'Bookings Today' && (
            <div className="mt-3 text-xs font-medium text-[color:var(--color-accent)]">+12% vs yesterday</div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
