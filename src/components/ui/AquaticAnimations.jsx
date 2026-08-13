export function Fish({ className = '', color = 'rgba(255,255,255,0.25)', size = 48 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size * 0.6}
      viewBox="0 0 80 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M56 24c0-11 7-18 14-20-3 5-3 13 0 20-7-2-14 9-14 20-5-2-10-3-16-3H12l8-8-8-8h28c6 0 11-1 16-3z"
        fill={color}
      />
      <circle cx="66" cy="22" r="2.5" fill={color} />
    </svg>
  )
}

export function Bubbles({ count = 8 }) {
  const bubbles = Array.from({ length: count }, (_, i) => {
    const size = 8 + Math.random() * 28
    const left = Math.random() * 100
    const duration = 4 + Math.random() * 6
    const delay = Math.random() * 5
    return (
      <span
        key={i}
        className="bubble"
        style={{
          width: size,
          height: size,
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
    )
  })
  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{bubbles}</div>
}

export function BubbleStream({ count = 80, width = '10%' }) {
  const bubbles = Array.from({ length: count }, (_, i) => {
    const size = 6 + Math.random() * 16
    const drift = (Math.random() - 0.5) * 40
    const duration = 2 + Math.random() * 2.5
    const delay = Math.random() * 3
    return (
      <span
        key={i}
        className="bubble-stream"
        style={{
          width: size,
          height: size,
          left: `${5 + Math.random() * 90}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          '--drift': `${drift}px`,
        }}
      />
    )
  })

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-y-0 right-0" style={{ width }}>
        {bubbles}
      </div>
    </div>
  )
}
