import { motion } from 'framer-motion'

export function Table({ columns = [], data = [] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <table className="w-full">
        <thead className="bg-white/5 text-white/70 text-sm">
          <tr>
            {columns.map((c) => (
              <th key={c.key} className="text-left px-4 py-3 font-medium">{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-[color:var(--color-dark)]/40">
          {data.map((row, i) => (
            <motion.tr key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border-t border-white/5">
              {columns.map((c) => (
                <td key={c.key} className="px-4 py-3 text-sm text-white/90">{row[c.key]}</td>
              ))}
            </motion.tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="px-4 py-10 text-center text-white/60">No data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
