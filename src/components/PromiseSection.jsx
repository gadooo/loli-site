import { PROMISES, PROMISE_END } from '../data/loveMessage.js'

export default function PromiseSection() {
  return (
    <section className="promise" aria-labelledby="promise-title">
      <h2 id="promise-title" className="title sm">وعد مني ليك ❤️</h2>
      <ul>
        {PROMISES.map((p, i) => (
          <li key={p} style={{ animationDelay: `${0.5 + i * 0.9}s` }}>🌸 {p}</li>
        ))}
      </ul>
      <p className="promise-end" style={{ animationDelay: `${0.5 + PROMISES.length * 0.9 + 0.4}s` }}>{PROMISE_END}</p>
    </section>
  )
}
