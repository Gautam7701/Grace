import { useEffect, useState } from 'react'

const memories = Array.from({ length: 6 }, () => '/assets/grace-01.jpeg')
const thoughts = [
  'Today seems like a good day for something unexpected.', 'Congratulations, you found another button.',
  'That was completely unnecessary. But fun.', 'You’re still exploring. Respect.',
  'Okay, that’s enough internet for now 😂', 'Small things can make a regular day better.',
  'This website is very pleased you clicked that.', 'A tiny reminder: good surprises are allowed.'
]

function Sparkles() { return <div className="sparkles" aria-hidden="true"><i>✦</i><i>✧</i><i>✦</i><i>✧</i></div> }

export default function App() {
  const [opened, setOpened] = useState(false)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [thought, setThought] = useState('Tap the button when you need a tiny thought.')
  const [game, setGame] = useState('')
  const [answer, setAnswer] = useState<'yes' | 'no' | null>(null)
  const [finished, setFinished] = useState(false)

  useEffect(() => { const close = (e: KeyboardEvent) => e.key === 'Escape' && setLightbox(null); addEventListener('keydown', close); return () => removeEventListener('keydown', close) }, [])
  const replay = () => { setFinished(false); setOpened(false); setThought('Tap the button when you need a tiny thought.'); setGame(''); setAnswer(null); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  if (!opened) return <main className="opening"><Sparkles /><p className="eyebrow">a tiny corner of the internet</p><h1>Hey, John Grace<br/>Oluchi <span>👋</span></h1><p>I made something for you.</p><button className="primary" onClick={() => setOpened(true)}>Okay, show me <span>👀</span></button><small>made with a little extra thought</small></main>

  return <main>
    <section className="hero section"><Sparkles /><div className="hero-orb orb-one"/><div className="hero-orb orb-two"/><p className="eyebrow">this is for you</p><h1>Welcome,<br/><em>Grace</em> <span>✨</span></h1><p className="lede">This little corner of the internet was made just for you.</p><a className="explore" href="#little">Explore <b>↓</b></a></section>

    <section className="section little" id="little"><p className="eyebrow">a little something</p><div className="split"><h2>No big reason.<br/><em>No special occasion.</em></h2><div className="note-stack"><article>No pressure to be impressed <span>☺</span></article><article>I just thought it would be fun <span>✦</span></article><article>To make you something <span>♡</span></article></div></div></section>

    <section className="section gallery-section"><div className="section-title"><div><p className="eyebrow">your corner</p><h2>A few good frames.</h2></div><p className="subtle">A little collection<br/>just for you.</p></div><div className="gallery">{memories.map((src, i) => <button className={`photo photo-${i + 1}`} onClick={() => setLightbox(i)} key={i} aria-label={`Open Grace’s photo ${i + 1}`}><img src={src} alt={`Grace smiling, photo ${i + 1}`}/><span className="photo-plus"><b>＋</b></span></button>)}</div><p className="caption">A small photo collection, with a little extra thought.</p></section>

    <section className="section noticed"><p className="eyebrow">things i noticed</p><h2>The little details <span>👀</span></h2><div className="notice-grid"><article>Always has something going on <b>✦</b></article><article>Church days: Tuesday, Wednesday & Sunday <b>⛪</b></article><article>Apparently prefers videos over pictures <b>😄</b></article><article>November birthday <b>🎂</b></article></div></section>

    <section className="section compliment"><Sparkles/><div className="compliment-photo"><img src="/assets/grace-01.jpeg" alt="Grace smiling"/></div><div><p className="eyebrow">just saying</p><h2>Okay, I have to<br/>say this… <span>👀</span></h2><p className="compliment-copy">You’re genuinely so pretty, Grace.<br/>And there’s something really nice about the way you carry yourself.</p><p className="small-line">So yes… I had to put a little effort into making this for you. 😊</p></div></section>

    <section className="section game"><p className="eyebrow">a brief intermission</p><h2>Okay, one tiny game…</h2><p className="subtle">Pick a button. They are all extremely trustworthy.</p><div className="game-buttons"><button onClick={() => setGame('Correct choice. You have excellent button instincts. ✨')}>Tap this</button><button onClick={() => setGame('You were warned. Luckily, nothing happened. 😌')}>Definitely don’t tap this</button><button onClick={() => setGame('Aha! The mysterious option wins again. 🎉')}>Okay… maybe this one</button></div><p className="game-result" aria-live="polite">{game}</p></section>

    <section className="section random"><div><p className="eyebrow">for absolutely no reason</p><h2>Random thought<br/><em>generator</em></h2></div><div className="thought-box"><p aria-live="polite">“{thought}”</p><button className="primary" onClick={() => setThought(thoughts[Math.floor(Math.random() * thoughts.length)])}>Give me one <span>→</span></button></div></section>

    <section className="section quiz"><p className="eyebrow">quick check</p><h2>How well do you know<br/>this website?</h2><article><p>Is this a serious, formal website?</p><div><button onClick={() => setAnswer('no')} className={answer === 'no' ? 'right' : ''}>Absolutely not</button><button onClick={() => setAnswer('yes')} className={answer === 'yes' ? 'wrong' : ''}>Very serious</button></div>{answer && <small>{answer === 'no' ? 'Correct. This website takes fun very seriously. ✦' : 'Not quite — but thank you for your confidence. 😄'}</small>}</article></section>

    <footer className="final section"><Sparkles/><p className="eyebrow">the end, nearly</p><h2>And that’s it. <span>😄</span></h2><p>Just a little something I made for you.<br/>Hope it made you smile.</p><div className="signature">— Gautam</div><button className="primary" onClick={() => { setFinished(true); setTimeout(() => document.getElementById('surprise')?.scrollIntoView({ behavior: 'smooth' }), 50) }}>One last thing <span>→</span></button></footer>
    {finished && <section className="surprise" id="surprise"><div className="confetti" aria-hidden="true">✦ ✦ ● ✧ ● ✦ ✧ ●</div><p className="eyebrow">achievement unlocked</p><h2>Okay, you’re officially done<br/>exploring. <span>😂</span></h2><button onClick={replay}>Replay ↺</button></section>}
    {lightbox !== null && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}><div onClick={e => e.stopPropagation()}><button onClick={() => setLightbox(null)} aria-label="Close">×</button><img src="/assets/grace-01.jpeg" alt="Grace smiling"/></div></div>}
  </main>
}
