// دبدوب بسيط SVG. holdHeart = true يخليه ماسك قلب
export default function Teddy({ size = 120, holdHeart = false, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 120 120" role="img" aria-label="دبدوب">
      <circle cx="30" cy="28" r="14" fill="#c9a98a" /><circle cx="90" cy="28" r="14" fill="#c9a98a" />
      <circle cx="30" cy="28" r="7" fill="#f3c9d5" /><circle cx="90" cy="28" r="7" fill="#f3c9d5" />
      <ellipse cx="60" cy="92" rx="30" ry="24" fill="#d8b896" />
      <circle cx="60" cy="52" r="32" fill="#d8b896" />
      <ellipse cx="60" cy="64" rx="14" ry="11" fill="#f6e3d0" />
      <circle cx="48" cy="46" r="3.5" fill="#4a3358" /><circle cx="72" cy="46" r="3.5" fill="#4a3358" />
      <ellipse cx="60" cy="60" rx="4.5" ry="3.2" fill="#4a3358" />
      <path d="M54 68 Q60 73 66 68" stroke="#4a3358" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="40" cy="58" r="5" fill="#f5a9c0" opacity=".6" /><circle cx="80" cy="58" r="5" fill="#f5a9c0" opacity=".6" />
      {holdHeart && <path d="M60 112 C36 96 40 82 50 82 C55 82 58 85 60 88 C62 85 65 82 70 82 C80 82 84 96 60 112Z" fill="#b57edc" />}
    </svg>
  )
}
