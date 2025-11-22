import { useMemo } from 'react'

export default function MiniCalendar() {
  const days = useMemo(() => {
    const arr = []
    const now = new Date()
    for (let i = 0; i < 7; i++) {
      const d = new Date(now)
      d.setDate(now.getDate() + i)
      arr.push({
        key: d.toDateString(),
        day: d.toLocaleDateString(undefined, { weekday: 'short' }),
        date: d.getDate(),
        active: i === 0,
      })
    }
    return arr
  }, [])

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="font-semibold">Next 7 Days</p>
        <span className="text-xs text-[color:var(--color-neutral)]">Mini Calendar</span>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map((d) => (
          <div key={d.key} className={`p-3 rounded-xl text-center transition-all ${d.active ? 'bg-[color:var(--color-brand)] text-white' : 'bg-white/70 hover:bg-white'}`}>
            <div className="text-xs opacity-80">{d.day}</div>
            <div className="text-lg font-bold">{d.date}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
