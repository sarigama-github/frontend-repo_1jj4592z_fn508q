import { useState } from 'react'
import Calendar from '../components/Calendar'
import Modal from '../components/Modal'

export default function Bookings() {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-6">
      <Calendar />

      <div className="grid md:grid-cols-2 gap-4">
        <div className="card p-4">
          <div className="flex items-center justify-between">
            <p className="font-semibold">Booking Requests</p>
            <span className="badge badge-accent">3 Pending</span>
          </div>
          <div className="mt-3 space-y-2">
            {[1,2,3].map(i => (
              <div key={i} className="p-3 rounded-xl bg-white/80 flex items-center justify-between">
                <div>
                  <p className="font-medium">Court {i} • Today • {6+i}:00 PM</p>
                  <p className="text-sm text-[color:var(--color-neutral)]">John Doe</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="btn btn-primary">Approve</button>
                  <button className="btn btn-accent">Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-4">
          <div className="flex items-center justify-between">
            <p className="font-semibold">Payments</p>
            <button onClick={() => setOpen(true)} className="btn btn-primary">Invoice Preview</button>
          </div>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-white/70">
                  <th className="py-2">Invoice</th>
                  <th className="py-2">Amount</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Payout</th>
                </tr>
              </thead>
              <tbody>
                {[1,2,3,4].map(i => (
                  <tr key={i} className="border-t border-white/10">
                    <td className="py-2">#INV-20{i}</td>
                    <td className="py-2">$ {100 + i*20}</td>
                    <td className="py-2"><span className={`${i%2===0 ? 'badge badge-blue' : 'badge badge-accent'}`}>{i%2===0?'Paid':'Pending'}</span></td>
                    <td className="py-2">{i%2===0?'Completed':'Scheduled'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Invoice Preview" footer={<div className="flex justify-end gap-2"><button className="btn btn-ghost" onClick={()=>setOpen(false)}>Close</button><button className="btn btn-accent">Send Payment Link</button></div>}>
        <div className="bg-white/80 p-4 rounded-xl">
          <p className="font-semibold mb-1" style={{ color: '#236DCF' }}>SportVenue Invoice</p>
          <p className="text-sm text-[color:var(--color-neutral)] mb-3">#INV-2041 • John Doe • Today</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span>Court 1 • 2h</span><span>$120.00</span></div>
            <div className="flex justify-between"><span>Tax</span><span>$9.60</span></div>
            <div className="divider"/>
            <div className="flex justify-between font-semibold"><span>Total</span><span>$129.60</span></div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
