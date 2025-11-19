import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-rose-50 via-pink-50 to-rose-100" />
      <div className="absolute -top-32 -right-20 w-[500px] h-[500px] rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full bg-violet-200/40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-rose-900"
          >
            Instant Relief From Menstrual Pain
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 md:mt-6 text-lg md:text-xl text-rose-800/80"
          >
            LunaEase provides fast, soothing relief so you can feel comfortable again.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-rose-600 text-white px-6 py-4 text-base md:text-lg font-semibold shadow-lg shadow-rose-400/30 hover:bg-rose-700 transition-colors">
              Buy Now – R999
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full border-2 border-rose-300 text-rose-700 px-6 py-4 text-base md:text-lg font-semibold hover:bg-rose-100 transition-colors">
              Shop Now
            </a>
          </motion.div>

          <div className="mt-6 flex items-center gap-3 text-rose-800/70">
            <span className="inline-flex -space-x-2">
              <img className="w-8 h-8 rounded-full ring-2 ring-rose-100" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=80&auto=format&fit=crop" alt="customer" />
              <img className="w-8 h-8 rounded-full ring-2 ring-rose-100" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=80&auto=format&fit=crop" alt="customer" />
              <img className="w-8 h-8 rounded-full ring-2 ring-rose-100" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=80&auto=format&fit=crop" alt="customer" />
            </span>
            <p className="text-sm">Trusted by thousands of women across South Africa</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1552346988-dc66f2fc2f47?q=80&w=1200&auto=format&fit=crop"
            alt="Relaxed woman using LunaEase"
            className="rounded-3xl shadow-2xl border border-white/80"
          />
          <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md rounded-2xl px-5 py-4 shadow-lg">
            <p className="text-sm font-semibold text-rose-900">Heat + Vibration Therapy</p>
            <p className="text-xs text-rose-800/70">Feel relief in minutes</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
