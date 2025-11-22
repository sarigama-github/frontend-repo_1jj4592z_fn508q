import Spline from '@splinetool/react-spline'

export default function HeroSpline() {
  return (
    <div className="relative w-full h-[320px] md:h-[400px] rounded-2xl overflow-hidden border border-white/10">
      <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--color-dark)]/80 via-transparent to-transparent"/>
    </div>
  )
}
