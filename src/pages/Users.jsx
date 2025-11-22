import { Table } from '../components/Tables'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
  { key: 'club', label: 'Club' },
  { key: 'status', label: 'Status' },
]

const data = Array.from({ length: 8 }, (_, i) => ({
  name: `User ${i+1}`,
  role: i%3===0 ? 'Superadmin' : i%2===0 ? 'Owner' : 'Manager',
  club: i%2===0 ? 'City FC' : 'North Courts',
  status: i%2===0 ? <span className="badge badge-blue">Active</span> : <span className="badge badge-accent">Pending</span>,
}))

export default function Users() {
  return (
    <div className="space-y-6">
      <div className="card p-4">
        <div className="flex items-center gap-3">
          <input className="input" placeholder="Search users"/>
          <button className="btn btn-primary">Filter</button>
        </div>
      </div>
      <Table columns={columns} data={data} />

      <div className="card p-4">
        <p className="font-semibold mb-2">Clubs</p>
        <div className="grid md:grid-cols-3 gap-3">
          {[1,2,3].map(i => (
            <div key={i} className="bg-white/80 rounded-xl p-4">
              <p className="font-semibold">Club {i}</p>
              <p className="text-sm text-[color:var(--color-neutral)]">Owner: User {i}</p>
              <div className="mt-2 flex gap-2">
                <button className="btn btn-primary">Verify</button>
                <button className="btn btn-accent">Deactivate</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
