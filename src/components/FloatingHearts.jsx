import { useMemo } from 'react'

// قلوب/ورود/لمعات خلفية. غيّر count لتقليل أو زيادة العدد
const ITEMS = ['💜', '🤍', '💗', '🌸', '🌷', '✨', '🌸']
const rnd = (a, b) => a + Math.random() * (b - a)

export default function FloatingHearts({ count = 16, burst = false }) {
  const items = useMemo(
    () => Array.from({ length: count }, (_, i) => ({
      ch: ITEMS[i % ITEMS.length], left: rnd(0, 100), size: rnd(12, 26),
      dur: rnd(11, 22), delay: -rnd(0, 20), drift: rnd(-40, 40),
      falling: i % 3 === 0,
    })), [count])
  return (
    <div className="fx" aria-hidden="true">
      {items.map((o, i) => (
        <span key={i} className={o.falling ? 'fall' : 'rise'}
          style={{ left: `${o.left}%`, fontSize: o.size, animationDuration: `${o.dur}s`, animationDelay: `${o.delay}s`, '--drift': `${o.drift}px` }}>
          {o.ch}
        </span>
      ))}
      {burst && Array.from({ length: 18 }, (_, i) => (
        <span key={`b${i}`} className="burst" style={{ '--a': `${(i / 18) * 360}deg`, '--d': `${rnd(90, 190)}px` }}>
          {i % 2 ? '💜' : '🌸'}
        </span>
      ))}
    </div>
  )
}
