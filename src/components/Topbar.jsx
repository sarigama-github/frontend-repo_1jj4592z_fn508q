import { Search, Plus, Sparkles } from 'lucide-react'

export default function Topbar({ title, cta, onCta }) {
  return (
    <header className="sticky top-0 z-30 bg-[color:var(--color-dark)]/70 backdrop-blur border-b border-white/10">
      <div className="px-6 py-4 flex items-center gap-4">
        <h1 className="text-xl font-semibold flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[color:var(--color-accent)]"/>
          {title}
        </h1>
        <div className="ml-auto flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
            <Search className="w-4 h-4 text-white/60"/>
            <input className="bg-transparent outline-none placeholder:text-white/40 text-sm" placeholder="Search bookings, users, venues"/>
          </div>
          {cta && <button onClick={onCta} className="btn btn-accent">{cta}</button>}
          <div className="w-9 h-9 rounded-xl bg-white/10 grid place-items-center border border-white/10">
            <Plus className="w-5 h-5"/>
          </div>
        </div>
      </div>
    </header>
  )
}
