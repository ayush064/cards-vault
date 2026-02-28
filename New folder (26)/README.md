# Aspire Cards

A card listing app built with React + Vite.

## Running locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`

## Deploy to Vercel

Push to GitHub, then connect the repo on vercel.com. It'll auto-detect Vite and deploy.

Or from terminal:
```bash
npx vercel
```

## What's in here

```
src/
├── components/
│   ├── CardItem.jsx       # the card UI component
│   ├── FilterDropdown.jsx # type filter dropdown
│   └── TabBar.jsx         # your / all / blocked tabs
├── hooks/
│   └── useCards.js        # fetching + pagination logic
├── utils/
│   └── api.js             # mock API with 20 records
└── App.jsx
```

## How it works

Started by building the card component since that was the main visual piece. Then wired up the mock API to return paginated data (10 per page) with the same shape a real API would use, so replacing it later should be straightforward.

For infinite scroll I went with `IntersectionObserver` on the last card element rather than attaching a scroll listener — performs a lot better especially with a large list.

Search is debounced (350ms) so it doesn't fire a request on every single keystroke.

The `useCards` hook pulls out all the fetching and pagination logic so `App.jsx` stays focused on layout and UI state.

## Features

- **Your / All / Blocked tabs** — Your filters by owner_id (currently hardcoded as user 1)
- **Burner cards** show expiry date, **subscription cards** show spend limit
- **Infinite scroll** — loads 10 at a time, fetches more as you scroll
- **Search** by card name with debounce
- **Filter** by card type (burner / subscription)
- Spend progress bar turns red when over 75% spent

## Notes

- `LOGGED_IN_USER` in `api.js` is hardcoded to `1` for now — would come from auth context in a real app
- Error handling is basic at the moment, would add proper toast notifications given more time
- Mobile layout works okay but could use some polish
