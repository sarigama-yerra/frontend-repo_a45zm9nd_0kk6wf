import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Ayanda M.',
    rating: 5,
    quote: 'First month in years without being stuck in bed. The heat + vibration works so fast!'
  },
  {
    name: 'Thandi N.',
    rating: 5,
    quote: 'I was skeptical but wow. Within minutes my cramps eased. I can go to work comfortably again.'
  },
  {
    name: 'Leigh-Ann P.',
    rating: 4,
    quote: 'Love how soft and discreet it is. Battery lasts all day and it looks cute too.'
  }
]

function Stars({ count }) {
  return (
    <div className="flex text-amber-500">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-amber-400" />
      ))}
    </div>
  )
}

export default function SocialProof() {
  return (
    <section className="bg-rose-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-rose-900 text-center">
          Loved by South African Women
        </motion.h2>
        <p className="text-center text-rose-800/70 mt-2">Real stories. Real relief.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.07 }} className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-rose-900">{t.name}</h3>
                <Stars count={t.rating} />
              </div>
              <p className="text-rose-800/80 mt-3">“{t.quote}”</p>
              <div className="mt-4 text-xs text-rose-700/60">Before: painkillers every few hours • After: calm and comfortable</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
