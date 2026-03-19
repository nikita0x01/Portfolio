import { SITE_CONFIG } from "../config"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 border-t border-white/10 bg-bg/80 backdrop-blur-md">
      <div className="section py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
        <div>
          © {year} {SITE_CONFIG.name}. All rights reserved.
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-gray-500">Carefully Engineered.</span>
        </div>
      </div>
    </footer>
  )
}
