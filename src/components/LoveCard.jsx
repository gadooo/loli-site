import { useState, useCallback } from 'react'
import Teddy from './Teddy.jsx'
import Typewriter from './Typewriter.jsx'
import PromiseSection from './PromiseSection.jsx'
import { PAGES, LAST_WORDS, NAMES } from '../data/loveMessage.js'

export default function LoveCard() {
  const [page, setPage] = useState(0)
  const [done, setDone] = useState(false) // خلصت كتابة الصفحة الحالية؟
  const onDone = useCallback(() => setDone(true), [])
  const last = page === PAGES.length - 1
  const [finished, setFinished] = useState(false)

  const next = () => {
    if (last) { setFinished(true); return }
    setDone(false); setPage(page + 1)
  }

  return (
    <>
      <article className="card" aria-live="polite">
        <span className="corner flower tl">🌷</span><span className="corner flower tr">🌸</span>
        <Teddy size={64} className="corner teddy-corner" />
        <h1 className="title sm">{NAMES.her} حبيبتي ❤️</h1>
        <Typewriter key={page} text={PAGES[page]} onDone={onDone} />
        {done && !finished && (
          <button className="cta small" onClick={next}>
            {last ? 'آخر حاجة يا لولي 💜' : 'كمّلي يا لولي 💜'}
          </button>
        )}
        {finished && (
          <div className="last">
            <h2>{LAST_WORDS.title}</h2>
            <p className="msg">{LAST_WORDS.body}</p>
          </div>
        )}
      </article>
      {finished && (
        <>
          <PromiseSection />
          <footer className="ending">
            <Teddy size={110} holdHeart className="teddy-sway" />
            <p>إنتِ ما مجرد شخص بحبو...</p>
            <p>إنتِ الشخص العايز أكون معاه نسخة أحسن من نفسي.</p>
            <p className="big">بحبك يا لولي ❤️</p>
            <p>— {NAMES.him}</p>
          </footer>
        </>
      )}
    </>
  )
}
