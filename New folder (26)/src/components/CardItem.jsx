import { useState } from 'react'

// not the cleanest way to generate a fake card number but it works
function getFakeCardNumber(id) {
  return '•••• ' + String(id * 1234 + 1000).slice(-4)
}

function SpendBar({ spent, available }) {
  const total = spent + available
  const pct = total > 0 ? (spent / total) * 100 : 0
  const isHigh = pct > 75

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, opacity: 0.65, marginBottom: 5 }}>
        <span>Spent: SGD {spent.toLocaleString()}</span>
        <span>Left: SGD {available.toLocaleString()}</span>
      </div>
      <div style={{ height: 3, background: 'rgba(255,255,255,0.12)', borderRadius: 4 }}>
        <div
          style={{
            height: '100%',
            width: `${pct}%`,
            borderRadius: 4,
            background: isHigh ? '#ff6b6b' : '#52d9a0',
            transition: 'width 0.4s ease',
          }}
        />
      </div>
    </div>
  )
}

export default function CardItem({ card }) {
  const [hovered, setHovered] = useState(false)
  const isBurner = card.card_type === 'burner'

  // different gradient per card type
  const gradientStyle = isBurner
    ? { background: 'linear-gradient(140deg, #1c1c2e 0%, #c0392b 100%)' }
    : { background: 'linear-gradient(140deg, #0f2027 0%, #1a6b8a 100%)' }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...gradientStyle,
        borderRadius: 18,
        padding: '22px 24px',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 195,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: hovered
          ? '0 20px 45px rgba(0,0,0,0.4)'
          : '0 6px 24px rgba(0,0,0,0.25)',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'transform 0.22s ease, box-shadow 0.22s ease',
        cursor: 'default',
      }}
    >
      {/* bg circle decorations */}
      <div style={{ position: 'absolute', top: -25, right: -25, width: 110, height: 110, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
      <div style={{ position: 'absolute', bottom: -35, right: 30, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.03)' }} />

      {/* top section */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 17, letterSpacing: 0.2 }}>{card.name}</div>
            <div style={{ fontSize: 12, opacity: 0.55, marginTop: 3 }}>{card.budget_name}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'flex-end' }}>
            <span style={{
              background: 'rgba(255,255,255,0.13)',
              borderRadius: 20,
              padding: '3px 10px',
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: 0.8,
              textTransform: 'uppercase',
            }}>
              {card.card_type}
            </span>
            <span style={{
              background: card.status === 'active' ? 'rgba(82, 217, 160, 0.18)' : 'rgba(255,107,107,0.18)',
              color: card.status === 'active' ? '#52d9a0' : '#ff9090',
              borderRadius: 20,
              padding: '2px 8px',
              fontSize: 10,
              fontWeight: 600,
              textTransform: 'uppercase',
            }}>
              {card.status}
            </span>
          </div>
        </div>

        {/* chip svg */}
        <div style={{ marginTop: 18, marginBottom: 14 }}>
          <svg width="38" height="28" viewBox="0 0 40 30">
            <rect x="0" y="0" width="40" height="30" rx="5" fill="rgba(255,215,0,0.25)" stroke="rgba(255,215,0,0.45)" strokeWidth="1" />
            <rect x="13" y="0" width="1" height="30" fill="rgba(255,215,0,0.35)" />
            <rect x="27" y="0" width="1" height="30" fill="rgba(255,215,0,0.35)" />
            <rect x="0" y="10" width="40" height="1" fill="rgba(255,215,0,0.35)" />
            <rect x="0" y="20" width="40" height="1" fill="rgba(255,215,0,0.35)" />
          </svg>
        </div>
      </div>

      {/* bottom section */}
      <div>
        <SpendBar spent={card.spent.value} available={card.available_to_spend.value} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
          {isBurner ? (
            <div style={{ fontSize: 12 }}>
              <span style={{ opacity: 0.45, marginRight: 5, letterSpacing: 0.5 }}>EXPIRES</span>
              <span style={{ fontWeight: 600 }}>{card.expiry}</span>
            </div>
          ) : (
            <div style={{ fontSize: 12 }}>
              <span style={{ opacity: 0.45, marginRight: 5, letterSpacing: 0.5 }}>LIMIT</span>
              <span style={{ fontWeight: 600 }}>SGD {card.limit.toLocaleString()}</span>
            </div>
          )}
          <div style={{ fontSize: 12, opacity: 0.3, letterSpacing: 2 }}>
            {getFakeCardNumber(card.id)}
          </div>
        </div>
      </div>
    </div>
  )
}
