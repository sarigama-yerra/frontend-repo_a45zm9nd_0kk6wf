import { useState } from 'react'
import { motion } from 'framer-motion'

// Representative product images (can be replaced with your official photos)
const productImages = [
  'https://images.unsplash.com/photo-1600436136995-0a5b0c7fef13?q=80&w=1600&auto=format&fit=crop', // heating pad close-up
  'https://images.unsplash.com/photo-1614314107768-6018061c8842?q=80&w=1600&auto=format&fit=crop', // wearable belt flatlay
  'https://images.unsplash.com/photo-1601588462310-8a0b2456b680?q=80&w=1600&auto=format&fit=crop', // fabric + controls detail
]

export default function Product() {
  const [active, setActive] = useState(0)

  return (
    <section id="product" className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* Gallery */}
        <div>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="aspect-[4/3] bg-rose-50 rounded-3xl overflow-hidden border border-rose-100 shadow-lg"
          >
            <img
              src={productImages[active]}
              alt={`LunaEase Heating & Massage Belt image ${active + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {productImages.map((src, i) => (
              <button
                key={src}
                onClick={() => setActive(i)}
                className={`aspect-[4/3] rounded-2xl overflow-hidden border transition-all ${
                  i === active ? 'border-rose-400 ring-2 ring-rose-300' : 'border-rose-100 hover:border-rose-300'
                }`}
                aria-label={`View product image ${i + 1}`}
              >
                <img src={src} alt="LunaEase belt thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-rose-900">LunaEase Heating & Massage Belt</motion.h2>
          <p className="mt-3 text-rose-800/80">Experience soothing heat and gentle vibration designed to calm cramps, relax muscles, and restore comfort within minutes — at home, at work, or on the go.</p>

          <ul className="mt-6 space-y-3 text-rose-900/90">
            <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-rose-400" /> 3 heat levels and 4 vibration modes</li>
            <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-rose-400" /> Soft, skin-safe fabric with ergonomic fit</li>
            <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-rose-400" /> USB-C rechargeable, long-lasting battery</li>
            <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-rose-400" /> Lightweight and discreet under clothing</li>
          </ul>

          <div className="mt-8 p-5 rounded-2xl bg-rose-50 border border-rose-100">
            <div className="flex items-end gap-3">
              <span className="text-rose-700/70 line-through">R1,499</span>
              <span className="text-4xl font-extrabold text-rose-900">R999</span>
            </div>
            <p className="text-rose-800/80 mt-1">30-Day Relief Guarantee • Safe Checkout</p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a href="#checkout" className="inline-flex items-center justify-center rounded-full bg-rose-600 text-white px-6 py-4 text-base md:text-lg font-semibold shadow-lg shadow-rose-400/30 hover:bg-rose-700 transition-colors grow sm:grow-0">
                Buy Now – R999
              </a>
              <a href="#faq" className="inline-flex items-center justify-center rounded-full border-2 border-rose-300 text-rose-700 px-6 py-4 text-base md:text-lg font-semibold hover:bg-rose-100 transition-colors">
                Ask a Question
              </a>
            </div>
            <div className="mt-4 text-xs text-rose-700/70">Ships nationwide • Free returns within 30 days if you don’t feel relief</div>
          </div>
        </div>
      </div>
    </section>
  )
}
