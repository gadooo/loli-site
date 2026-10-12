import { useEffect, useState } from 'react'

// تأثير الكتابة. الضغط على النص يكمّله فورًا. يحترم prefers-reduced-motion
export default function Typewriter({ text, speed = 26, onDone }) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [n, setN] = useState(reduce ? text.length : 0)
  useEffect(() => {
    if (n >= text.length) { onDone?.(); return }
    const t = setTimeout(() => setN(n + 1), speed)
    return () => clearTimeout(t)
  }, [n, text, speed, onDone])
  return (
    <p className="msg" onClick={() => setN(text.length)} aria-label={text}>
      {text.slice(0, n)}<span className="caret" aria-hidden="true" />
    </p>
  )
}
