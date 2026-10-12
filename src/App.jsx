import { useRef, useState } from 'react'
import FloatingHearts from './components/FloatingHearts.jsx'
import IntroScreen from './components/IntroScreen.jsx'
import LoveCard from './components/LoveCard.jsx'
import MusicPlayer from './components/MusicPlayer.jsx'
import { SONG } from './data/loveMessage.js'

export default function App() {
  const audioRef = useRef(null)
  const [stage, setStage] = useState('intro') // intro -> leaving -> card
  const [playing, setPlaying] = useState(false)

  // الموسيقى تبدأ من الضغطة الأولى (المتصفح بيسمح لأنها تفاعل من المستخدم)
  const open = () => {
    setStage('leaving')
    const a = audioRef.current
    if (a) { a.volume = 0.35; a.play().then(() => setPlaying(true)).catch(() => {}) }
    setTimeout(() => setStage('card'), 1400)
  }

  return (
    <div className="app">
      <audio ref={audioRef} src={SONG.src} loop preload="auto" />
      <FloatingHearts burst={stage === 'leaving'} />
      <MusicPlayer audioRef={audioRef} playing={playing} setPlaying={setPlaying} />
      {stage !== 'card'
        ? <IntroScreen onOpen={open} leaving={stage === 'leaving'} />
        : <div className="stage"><LoveCard /></div>}
    </div>
  )
}
