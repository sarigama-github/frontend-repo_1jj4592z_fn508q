import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Calendar({ mode = 'month' }) {
  const [selected, setSelected] = useState(null)
  const days = Array.from({ length: 28 }, (_, i) => i + 1)

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="font-semibold">Interactive Calendar</p>
        <div className="flex items-center gap-2">
          <button className="btn btn-primary text-sm">Month</button>
          <button className="btn btn-ghost text-sm">Week</button>
          <button className="btn btn-ghost text-sm">Day</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map((d) => (
          <motion.button
            key={d}
            onClick={() => setSelected(d)}
            whileHover={{ scale: 1.02 }}
            className="h-24 rounded-xl bg-white/80 hover:bg-white flex items-start p-2 relative"
          >
            <span className="text-xs font-medium text-[color:var(--color-neutral)]">{d}</span>
            {d % 5 === 0 && (
              <span className="absolute bottom-2 right-2 badge badge-blue">2 bookings</span>
            )}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="mt-4 p-4 rounded-xl bg-white/90">
            <p className="font-semibold mb-2" style={{ color: '#236DCF' }}>Day {selected} details</p>
            <div className="space-y-2 text-sm">
              <div className="p-2 rounded-lg bg-[#236DCF10]">5:00 PM • Court 1 • Confirmed</div>
              <div className="p-2 rounded-lg bg-[#FF813920]">7:30 PM • Court 2 • Pending</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
