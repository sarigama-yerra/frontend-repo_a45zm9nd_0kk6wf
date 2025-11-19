import { Check, Flame, Heart, Battery, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  { icon: Flame, title: 'Instant Pain Relief', desc: 'Targeted heat and massage calm cramps fast.' },
  { icon: Heart, title: 'Soothing Heat Therapy', desc: 'Comforting warmth eases tension and discomfort.' },
  { icon: Check, title: 'Deep Massage Vibration', desc: 'Gentle pulses relax muscles and improve circulation.' },
  { icon: Battery, title: 'Portable & Rechargeable', desc: 'All-day relief on the go with long battery life.' },
  { icon: Shield, title: 'Safe & Gentle on Skin', desc: 'Soft materials and smart temperature control.' },
]

export default function Benefits() {
  return (
    <section id="benefits" className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-rose-900 text-center"
        >
          Why Women Love LunaEase
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="p-6 rounded-2xl border border-rose-100 bg-rose-50/40">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
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
