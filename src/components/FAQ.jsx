import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  { q: 'Is it safe?', a: 'Yes. LunaEase uses controlled heat and gentle vibration designed for comfort. Materials are skin-friendly and the device includes automatic shut-off for safety.' },
  { q: 'How long does shipping take?', a: 'Orders ship within 24–48 hours. Delivery across South Africa typically takes 2–4 business days.' },
  { q: 'How does the device work?', a: 'Simply strap the belt around your lower abdomen, choose your preferred heat level and vibration mode. The combination relaxes muscles and eases cramps within minutes.' },
  { q: 'Is there a warranty?', a: 'Absolutely. Every LunaEase comes with a 12-month warranty and our 30-Day Relief Guarantee.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-rose-900 text-center">Frequently Asked Questions</motion.h2>

        <div className="mt-8 divide-y divide-rose-100 rounded-2xl border border-rose-100 bg-rose-50/40">
          {faqs.map((item, i) => (
            <div key={i} className="p-5">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left flex items-center justify-between">
                <span className="font-semibold text-rose-900">{item.q}</span>
                <span className="text-rose-700">{open === i ? '-' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-rose-800/80 mt-2 text-sm">
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
