const TABS = [
  { key: 'your', label: 'Your' },
  { key: 'all', label: 'All' },
  { key: 'blocked', label: 'Blocked' },
]

export default function TabBar({ active, onChange }) {
  return (
    <div style={{
      display: 'flex',
      gap: 2,
      background: 'rgba(255,255,255,0.05)',
      borderRadius: 10,
      padding: 4,
      width: 'fit-content',
      marginBottom: 22,
    }}>
      {TABS.map(tab => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          style={{
            padding: '7px 20px',
            borderRadius: 8,
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: 14,
            fontWeight: active === tab.key ? 600 : 400,
            background: active === tab.key ? '#e8572a' : 'transparent',
            color: active === tab.key ? '#fff' : 'rgba(255,255,255,0.4)',
            transition: 'all 0.18s ease',
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
