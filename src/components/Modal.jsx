import { motion, AnimatePresence } from 'framer-motion'

export default function Modal({ open, onClose, title, children, footer }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4">
          <motion.div initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 16, opacity: 0 }} className="w-full max-w-lg card">
            <div className="p-4 border-b border-black/10 flex items-center justify-between">
              <h3 className="font-semibold" style={{ color: '#236DCF' }}>{title}</h3>
              <button className="btn btn-ghost" onClick={onClose}>Close</button>
            </div>
            <div className="p-4">{children}</div>
            {footer && <div className="p-4 border-t border-black/10">{footer}</div>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
