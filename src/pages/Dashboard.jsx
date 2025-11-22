import HeroSpline from '../components/HeroSpline'
import StatsCards from '../components/StatsCards'
import MiniCalendar from '../components/MiniCalendar'
import NotificationsPanel from '../components/NotificationsPanel'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <HeroSpline />
      <StatsCards />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2 space-y-4">
          <div className="card p-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold">Upcoming Matches</p>
              <button className="btn btn-primary">View All</button>
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="p-4 rounded-xl bg-white/80 flex items-center justify-between">
                  <div>
                    <p className="font-medium">Court {i}</p>
                    <p className="text-sm text-[color:var(--color-neutral)]">Today • {4+i}:00 PM</p>
                  </div>
                  <span className="badge badge-blue">Confirmed</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <MiniCalendar />
          <NotificationsPanel />
        </div>
      </div>
    </div>
  )
}
