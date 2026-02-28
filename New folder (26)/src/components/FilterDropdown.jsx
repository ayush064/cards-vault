import { useState, useRef, useEffect } from 'react'

const TYPE_OPTIONS = [
  { value: '', label: 'All types' },
  { value: 'burner', label: 'Burner' },
  { value: 'subscription', label: 'Subscription' },
]

export default function FilterDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // close when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const selected = TYPE_OPTIONS.find(o => o.value === value)

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(prev => !prev)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '9px 16px',
          borderRadius: 9,
          border: '1px solid rgba(255,255,255,0.1)',
          background: value ? 'rgba(232, 87, 42, 0.18)' : 'rgba(255,255,255,0.05)',
          color: value ? '#f0845c' : 'rgba(255,255,255,0.6)',
          cursor: 'pointer',
          fontSize: 13,
          fontWeight: 500,
          fontFamily: 'inherit',
          transition: 'all 0.15s',
        }}
      >
        {/* filter icon */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
        {selected?.label || 'Filter'}
        <svg
          width="11" height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.15s' }}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 6px)',
          left: 0,
          zIndex: 50,
          background: '#1a1f35',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 10,
          overflow: 'hidden',
          minWidth: 170,
          boxShadow: '0 16px 48px rgba(0,0,0,0.45)',
        }}>
          <div style={{ padding: '7px 12px 4px', fontSize: 10, opacity: 0.35, textTransform: 'uppercase', letterSpacing: 1 }}>
            Card Type
          </div>
          {TYPE_OPTIONS.map(opt => (
            <div
              key={opt.value}
              onClick={() => { onChange(opt.value); setOpen(false) }}
              style={{
                padding: '9px 14px',
                cursor: 'pointer',
                fontSize: 13,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: value === opt.value ? '#f0845c' : 'rgba(255,255,255,0.7)',
                background: value === opt.value ? 'rgba(232,87,42,0.12)' : 'transparent',
                transition: 'background 0.12s',
              }}
              onMouseEnter={e => { if (value !== opt.value) e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={e => { if (value !== opt.value) e.currentTarget.style.background = 'transparent' }}
            >
              {value === opt.value && (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              )}
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
