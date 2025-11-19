import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#benefits', label: 'Benefits' },
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
  ]
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-extrabold text-rose-900 text-xl">LunaEase</a>
        <nav className="hidden md:flex items-center gap-6 text-rose-800/80">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-rose-900">{l.label}</a>
          ))}
          <a href="#pricing" className="inline-flex items-center rounded-full bg-rose-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-rose-700">Buy – R999</a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          <Menu className="w-6 h-6 text-rose-900" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-rose-100 bg-white">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-rose-800" onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-rose-600 text-white px-4 py-3 text-sm font-semibold shadow">Buy – R999</a>
          </div>
        </div>
      )}
    </header>
  )
}
