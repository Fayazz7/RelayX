import { useState } from 'react'
import { BackToTopButton, LoofFooter, PrimaryLink } from '../components/loof/LoofChrome'
import { Seo } from '../components/seo/Seo'

const categories = [
  ['LOCAL KNOWLEDGE', 'Information that becomes valuable because someone knows the place, situation, or people involved.', ['A reliable local service provider', "A useful place that's difficult to discover", 'Local accommodation information', 'Knowing who to contact for a specific need']],
  ['TRUSTED CONNECTIONS', 'The right person can make a difficult search feel simple.', ['A trusted contact', 'A useful introduction', 'Someone who can help']],
  ['USEFUL RECOMMENDATIONS', 'Experience and context can be more useful than a list of results.', ['A recommendation you can act on', 'A verified local opinion', 'A better option']],
  ['HARD-TO-FIND INFORMATION', 'Some answers are difficult to discover unless you know who to ask.', ['A specific opportunity', 'A hard-to-find detail', 'A useful next step']],
] as const

function LaunchingSoonPage() {
  const [openCategory, setOpenCategory] = useState<string>(categories[0][0])

  return <main className="loof-page loof-launching">
    <Seo
      description="Loof is a marketplace for useful local knowledge, connections, recommendations, and opportunities. Discover what people know or sell what you know."
      ogDescription="A marketplace for useful local knowledge, connections, recommendations, and opportunities."
      title="Loof — Discover and Sell Useful Local Knowledge"
      url="https://loofmarket.com/"
    />
    <header className="loof-launch-header"><span>Loof</span></header>
    <div className="loof-launch-content">
      <section className="loof-launch-hero"><span className="loof-eyebrow">COMING SOON</span><h1>Useful things are everywhere.<span>So are the people who need them.</span></h1><p>A marketplace for useful local knowledge, trusted connections, recommendations, and hard-to-find information.</p><PrimaryLink to="/how-loof-works">Discover How Loof Works →</PrimaryLink></section>
      <section className="loof-intro-split"><h2>Not everything useful can be Googled.</h2><div><p>Sometimes the answer is a person.<br />A recommendation.<br />A trusted contact.<br />A local connection.<br />Or simply knowing who to ask.</p><p className="loof-emphasis">Loof helps people discover and exchange that kind of knowledge.</p></div></section>
      <section className="loof-category-list" aria-label="What Loof contains">{categories.map(([name, description, examples]) => { const isOpen = openCategory === name; return <div className={`loof-category ${isOpen ? 'is-open' : ''}`} key={name}><button aria-expanded={isOpen} className="loof-category-trigger" onClick={() => setOpenCategory(isOpen ? '' : name)} type="button"><span>{name}</span><img alt="" src="/loof-chevron.svg" /></button>{isOpen && <div className="loof-category-body"><p className="loof-emphasis">{description}</p><ul>{examples.map((example) => <li key={example}>{example}</li>)}</ul></div>}</div>})}</section>
      <section className="loof-launch-card"><h2>Something useful is coming.</h2><p>Loof is being built to make useful knowledge easier to discover, share, and exchange.</p><PrimaryLink to="/how-loof-works">Explore Loof →</PrimaryLink></section>
    </div>
    <LoofFooter launchVariant /><BackToTopButton />
  </main>
}

export default LaunchingSoonPage
