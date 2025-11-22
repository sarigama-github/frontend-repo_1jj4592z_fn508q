import { useState } from 'react'
import { motion } from 'framer-motion'
import { Table } from '../components/Tables'

const venues = Array.from({ length: 6 }, (_, i) => ({
  id: i+1,
  name: `Arena ${i+1}`,
  status: i % 2 === 0 ? 'Open' : 'Closed',
  price: 50 + i * 10,
}))

export default function Venues() {
  const [activeTab, setActiveTab] = useState('my')

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <button onClick={() => setActiveTab('my')} className={`btn ${activeTab==='my' ? 'btn-primary' : 'btn-ghost'}`}>My Venues</button>
        <button onClick={() => setActiveTab('pricing')} className={`btn ${activeTab==='pricing' ? 'btn-primary' : 'btn-ghost'}`}>Packages & Pricing</button>
        <button onClick={() => setActiveTab('availability')} className={`btn ${activeTab==='availability' ? 'btn-primary' : 'btn-ghost'}`}>Availability / Schedule</button>
      </div>

      {activeTab === 'my' && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {venues.map(v => (
            <motion.div key={v.id} whileHover={{ y: -2 }} className="card overflow-hidden">
              <div className="h-36 bg-gradient-to-tr from-[color:var(--color-brand)] to-[#3a85ff]"/>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{v.name}</p>
                  <span className={`badge ${v.status==='Open' ? 'badge-blue' : 'badge-neutral'}`}>{v.status}</span>
                </div>
                <p className="text-sm text-[color:var(--color-neutral)] mt-1">Capacity: 120 • Indoor</p>
                <div className="mt-3 flex items-center gap-2">
                  <button className="btn btn-primary">Manage</button>
                  <button className="btn btn-accent">New Booking</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {activeTab === 'pricing' && (
        <div className="card p-4 space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            {[1,2,3].map(i => (
              <div key={i} className="bg-white/80 rounded-xl p-4">
                <p className="font-semibold mb-2">Package {i}</p>
                <label className="text-sm text-[color:var(--color-neutral)]">Name</label>
                <input className="input mt-1" defaultValue={`Standard ${i}`}/>
                <label className="text-sm text-[color:var(--color-neutral)] mt-3 block">Price per hour</label>
                <input type="range" min="20" max="150" defaultValue={50 + i*10} className="w-full"/>
                <div className="mt-2 font-semibold" style={{ color: '#236DCF' }}>$ {50 + i*10}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <button className="btn btn-accent">Save Changes</button>
          </div>
        </div>
      )}

      {activeTab === 'availability' && (
        <div className="card p-4">
          <p className="font-semibold mb-3">Availability / Schedule</p>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 7 }, (_, d) => (
              <div key={d} className="bg-white/80 rounded-xl p-3 space-y-2">
                <p className="text-sm text-[color:var(--color-neutral)]">{['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][d]}</p>
                {Array.from({ length: 6 }, (_, i) => (
                  <button key={i} className={`w-full py-1.5 rounded-lg text-sm ${i%3===0 ? 'bg-[#FF813920] text-[#9A3C10]' : 'bg-[#236DCF10] text-[#1b4ea0] hover:bg-[#236DCF18]'}`}>{8+i}:00</button>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-3 text-sm text-[color:var(--color-neutral)]">Drag to mark open/closed slots. Changes auto-save.</div>
        </div>
      )}
    </div>
  )
}
