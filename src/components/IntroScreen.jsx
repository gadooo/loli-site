import Teddy from './Teddy.jsx'

export default function IntroScreen({ onOpen, leaving }) {
  return (
    <main className={`intro ${leaving ? 'is-leaving' : ''}`}>
      <Teddy size={150} className="teddy-sway" />
      <h1 className="title">لولي حبيبتي ❤️</h1>
      <p className="sub">عندي ليك حاجة من قلبي...</p>
      <button className="cta" onClick={onOpen} aria-label="افتحي الرسالة">
        اضغطي هنا يا لولي 💜
      </button>
    </main>
  )
}
