import { motion } from 'framer-motion'

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-rose-900">Special Launch Offer</motion.h2>
        <p className="text-rose-800/80 mt-2">Get fast, soothing relief today.</p>

        <div className="mt-8 grid md:grid-cols-[1fr_auto_1fr] items-center gap-6">
          <div className="hidden md:block h-px bg-rose-200" />
          <div className="rounded-3xl border border-rose-100 bg-rose-50/40 p-8">
            <div className="text-sm text-rose-700/70 line-through">Compare at: R1,499</div>
            <div className="text-5xl font-extrabold text-rose-900">R999</div>
            <p className="text-rose-800/80 mt-2">Heating & Massage Belt + Charging Cable</p>
            <a href="#checkout" className="mt-6 inline-flex items-center justify-center rounded-full bg-rose-600 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-rose-400/30 hover:bg-rose-700 transition-colors w-full md:w-auto">
              Get Relief Today
            </a>
          </div>
          <div className="hidden md:block h-px bg-rose-200" />
        </div>
      </div>
    </section>
  )
}
