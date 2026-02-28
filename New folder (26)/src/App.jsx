import { useState, useEffect } from 'react'
import TabBar from './components/TabBar'
import FilterDropdown from './components/FilterDropdown'
import CardItem from './components/CardItem'
import { useCards } from './hooks/useCards'

export default function App() {
  const [activeTab, setActiveTab] = useState('your')
  const [searchInput, setSearchInput] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [cardType, setCardType] = useState('')

  // debounce search input so we dont fire on every keystroke
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchInput)
    }, 350)
    return () => clearTimeout(timer)
  }, [searchInput])

  const { cards, loading, hasMore, error, lastCardRef } = useCards(activeTab, searchQuery, cardType)

  return (
    <div style={{ minHeight: '100vh', background: '#0d1117', color: '#e6edf3', fontFamily: "'Poppins', sans-serif" }}>

      {/* header */}
      <div style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '16px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        background: '#0d1117',
        zIndex: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            background: 'linear-gradient(135deg, #e8572a, #f0a500)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="5" width="20" height="14" rx="3" stroke="white" strokeWidth="1.8" />
              <rect x="2" y="10" width="20" height="2.5" fill="white" />
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: 18 }}>Aspire</span>
        </div>
        <div style={{ fontSize: 12, opacity: 0.3 }}>User #1</div>
      </div>

      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '28px 20px' }}>

        <div style={{ marginBottom: 26 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 4, letterSpacing: '-0.3px' }}>Cards</h1>
          <p style={{ fontSize: 13, opacity: 0.35 }}>View and manage your team's cards</p>
        </div>

        {/* tabs */}
        <TabBar active={activeTab} onChange={setActiveTab} />

        {/* search + filter row */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 24, flexWrap: 'wrap', alignItems: 'center' }}>
          {/* search */}
          <div style={{ position: 'relative', flex: 1, maxWidth: 320 }}>
            <svg
              style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', opacity: 0.3 }}
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search cards..."
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              style={{
                width: '100%',
                padding: '9px 14px 9px 36px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 9,
                color: '#e6edf3',
                fontSize: 13,
                outline: 'none',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <FilterDropdown value={cardType} onChange={setCardType} />

          {/* clear filter button */}
          {cardType && (
            <button
              onClick={() => setCardType('')}
              style={{
                padding: '7px 12px',
                borderRadius: 8,
                border: '1px solid rgba(255,100,100,0.25)',
                background: 'rgba(255,100,100,0.08)',
                color: '#ff9090',
                fontSize: 12,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              ✕ Clear
            </button>
          )}
        </div>

        {/* error state */}
        {error && (
          <div style={{ padding: '14px 18px', background: 'rgba(255,100,100,0.1)', borderRadius: 10, color: '#ff9090', fontSize: 13, marginBottom: 20 }}>
            {error}
          </div>
        )}

        {/* card grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(295px, 1fr))',
          gap: 18,
        }}>
          {cards.map((card, i) => (
            <div
              key={card.id}
              ref={i === cards.length - 1 ? lastCardRef : null}
              style={{ animation: 'fadeUp 0.3s ease both', animationDelay: `${(i % 10) * 40}ms` }}
            >
              <CardItem card={card} />
            </div>
          ))}
        </div>

        {/* empty state */}
        {!loading && cards.length === 0 && !error && (
          <div style={{ textAlign: 'center', padding: '70px 0', opacity: 0.3 }}>
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ marginBottom: 14 }}>
              <rect x="2" y="5" width="20" height="14" rx="3" />
              <path d="M2 10h20" />
            </svg>
            <div style={{ fontSize: 15, fontWeight: 500 }}>No cards found</div>
            <div style={{ fontSize: 13, marginTop: 5 }}>Try a different filter or search term</div>
          </div>
        )}

        {/* loading spinner */}
        {loading && (
          <div style={{ textAlign: 'center', padding: '36px 0' }}>
            <div style={{
              width: 26,
              height: 26,
              borderRadius: '50%',
              border: '2px solid rgba(232,87,42,0.2)',
              borderTop: '2px solid #e8572a',
              animation: 'spin 0.65s linear infinite',
              margin: '0 auto',
            }} />
          </div>
        )}

        {/* end of list */}
        {!hasMore && cards.length > 0 && (
          <div style={{ textAlign: 'center', padding: '20px 0', opacity: 0.2, fontSize: 12 }}>
            {cards.length} cards loaded
          </div>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input::placeholder { color: rgba(255,255,255,0.25); }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 3px; }
      `}</style>
    </div>
  )
}
