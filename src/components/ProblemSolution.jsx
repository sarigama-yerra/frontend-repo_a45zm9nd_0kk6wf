import { motion } from 'framer-motion'

export default function ProblemSolution() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-rose-900 text-center">
          Cramps shouldn’t control your day
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="p-6 rounded-2xl bg-rose-50 border border-rose-100">
            <h3 className="text-xl font-semibold text-rose-900">The Problem</h3>
            <p className="text-rose-800/80 mt-2">Period cramps can feel intense, exhausting and disruptive. Painkillers can take long to work or upset your stomach, leaving you uncomfortable when you need to be at your best.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="p-6 rounded-2xl bg-white border border-rose-100">
            <h3 className="text-xl font-semibold text-rose-900">The LunaEase Solution</h3>
            <p className="text-rose-800/80 mt-2">Our Menstrual Pain Relief Heating & Massage Belt combines therapeutic heat with gentle vibration to relax muscles, improve blood flow and relieve cramps—so you can move, work and rest comfortably.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
