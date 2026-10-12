import { useEffect, useState } from 'react'
import { SONG } from '../data/loveMessage.js'

// الصوت نفسه موجود في App (audioRef) عشان يبدأ مع أول ضغطة
export default function MusicPlayer({ audioRef, playing, setPlaying }) {
  const [open, setOpen] = useState(false)
  const [vol, setVol] = useState(0.35)
  const [prog, setProg] = useState(0)

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    a.volume = vol
    const t = () => a.duration && setProg(a.currentTime / a.duration)
    a.addEventListener('timeupdate', t)
    return () => a.removeEventListener('timeupdate', t)
  }, [audioRef, vol])

  const toggle = () => {
    const a = audioRef.current
    if (!a) return
    if (a.paused) a.play().then(() => setPlaying(true)).catch(() => {})
    else { a.pause(); setPlaying(false) }
  }

  return (
    <div className="music">
      <button className={`music-btn ${playing ? 'on' : ''}`} onClick={() => setOpen(!open)}
        aria-label="مشغل الأغنية" aria-expanded={open}>🎵</button>
      {open && (
        <div className="music-panel" role="group" aria-label="مشغل الأغنية">
          <strong>{SONG.title}</strong>
          <div className="row">
            <button onClick={toggle} aria-label={playing ? 'إيقاف مؤقت' : 'تشغيل'}>{playing ? '⏸' : '▶'}</button>
            <input type="range" min="0" max="1" step="0.05" value={vol}
              onChange={(e) => setVol(+e.target.value)} aria-label="مستوى الصوت" />
          </div>
          <div className="bar" aria-hidden="true"><i style={{ width: `${prog * 100}%` }} /></div>
        </div>
      )}
    </div>
  )
}
