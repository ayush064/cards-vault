import { useState, useEffect, useRef, useCallback } from 'react'
import { getCards } from '../utils/api'

// pulled this out into a hook to keep App.jsx clean
// handles all the fetching + pagination logic
export function useCards(activeTab, searchQuery, cardType) {
  const [cards, setCards] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [error, setError] = useState(null)
  const observerRef = useRef(null)

  // reset everything when filters change
  useEffect(() => {
    setCards([])
    setPage(1)
    setHasMore(true)
    setError(null)
  }, [activeTab, searchQuery, cardType])

  useEffect(() => {
    if (!hasMore) return

    setLoading(true)

    getCards({
      pageNum: page,
      limit: 10,
      activeTab,
      query: searchQuery,
      type: cardType,
    })
      .then(res => {
        setCards(prev => {
          const updated = page === 1 ? res.data : [...prev, ...res.data]
          // check if we've loaded everything
          setHasMore(updated.length < res.total)
          return updated
        })
        setLoading(false)
      })
      .catch(err => {
        // TODO: show a proper error toast here
        console.error('failed to fetch cards:', err)
        setError('Something went wrong. Please try again.')
        setLoading(false)
      })
  }, [page, activeTab, searchQuery, cardType])

  // infinite scroll - watch the last card element
  // went with IntersectionObserver instead of scroll event, performs better
  const lastCardRef = useCallback(
    node => {
      if (loading) return
      if (observerRef.current) observerRef.current.disconnect()

      observerRef.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPage(prev => prev + 1)
        }
      })

      if (node) observerRef.current.observe(node)
    },
    [loading, hasMore]
  )

  return { cards, loading, hasMore, error, lastCardRef }
}
