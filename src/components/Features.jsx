import { motion } from 'framer-motion'
import { Gauge, Waves, Battery, Feather, Shirt } from 'lucide-react'

const features = [
  { icon: Gauge, title: 'Adjustable heat levels', desc: 'Choose the warmth that soothes you best.' },
  { icon: Waves, title: 'Adjustable vibration modes', desc: 'Pick the massage pattern your body loves.' },
  { icon: Battery, title: 'Long battery life', desc: 'Enjoy hours of relief on a single charge.' },
  { icon: Feather, title: 'Soft ergonomic design', desc: 'Comfortably hugs your body and moves with you.' },
  { icon: Shirt, title: 'Lightweight + discreet', desc: 'Slim profile that’s easy to wear under clothing.' },
]

export default function Features() {
  return (
    <section id="features" className="bg-rose-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-rose-900 text-center">Product Features</motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div key={title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: idx * 0.06 }} className="p-6 bg-white rounded-2xl border border-rose-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-rose-900">{title}</h3>
              <p className="text-rose-800/70 text-sm mt-1">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
