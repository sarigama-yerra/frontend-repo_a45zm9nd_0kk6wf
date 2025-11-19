import { motion } from 'framer-motion'

export default function Guarantee() {
  return (
    <section className="bg-rose-50 py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-bold text-rose-900">30-Day Relief Guarantee</motion.h3>
        <p className="mt-3 text-rose-800/80">Try LunaEase for 30 days. If you don’t feel relief, we’ll make it right.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
          <span className="inline-flex items-center rounded-full border border-rose-200 bg-white px-4 py-2 text-rose-700">Secure Payments</span>
          <span className="inline-flex items-center rounded-full border border-rose-200 bg-white px-4 py-2 text-rose-700">Money-Back Guarantee</span>
          <span className="inline-flex items-center rounded-full border border-rose-200 bg-white px-4 py-2 text-rose-700">Fast Shipping</span>
        </div>
      </div>
    </section>
  )
}
