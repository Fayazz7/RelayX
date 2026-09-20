import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export function PrimaryLink({ children, to }: { children: ReactNode; to: string }) {
  return <Link className="loof-button" to={to}>{children}</Link>
}

export function BackToTopButton() {
  return <button className="loof-back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} type="button" aria-label="Back to top">↑</button>
}

export function LoofFooter({ launchVariant = false }: { launchVariant?: boolean }) {
  if (launchVariant) {
    return <footer className="loof-launch-footer"><strong>Loof</strong><span>Useful knowledge. Real connections.</span></footer>
  }

  return <footer className="loof-footer"><p>Crafted with <span aria-label="love">♥</span> in Kochi, India</p></footer>
}
