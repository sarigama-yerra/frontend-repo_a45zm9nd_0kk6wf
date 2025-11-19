export default function Footer() {
  return (
    <footer className="bg-rose-50 border-t border-rose-100 py-10 text-center text-rose-800/70">
      <div className="max-w-6xl mx-auto px-6">
        <p>© {new Date().getFullYear()} LunaEase. All rights reserved.</p>
        <div className="mt-3 text-sm">Made with care for women in South Africa.</div>
      </div>
    </footer>
  )
}
