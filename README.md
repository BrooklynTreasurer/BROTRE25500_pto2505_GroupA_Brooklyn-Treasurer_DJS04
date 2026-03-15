# DJS04: React seach filter and Pagnation

## Author
Developed by Brooklyn Treasurer

## Project Overview
The DJS04 React Podcast Landing Page is a podcast discovery interface built with React and Vite.

It fetches podcast data from:

https://podcast-api.netlify.app/

and renders a responsive grid of podcast cards with filtering, sorting, and pagination controls.

## Current Features
- Fetches podcast data on initial page load using the Fetch API
- Shows a loading state (video loader) while data is being fetched
- Shows an error message when fetching fails
- Renders podcast cards in a responsive grid
- Formats each podcast's updated date for display
- Maps genre IDs to readable genre names
- Genre filter with a custom dropdown UI
- Sort dropdown (title/date, ascending/descending)
- Pagination controls with Prev/Next and page buttons
- Light/Dark theme toggle persisted in localStorage

## Component Structure
- `App.jsx`:
  - Fetches data
  - Manages UI state (`loading`, `error`, `selectedGenre`, `sortKey`, `currentPage`)
  - Applies genre filtering, sorting, and pagination
- `Header.jsx`: app title and theme toggle
- `SearchBar.jsx`: search input UI (currently scaffolded, not yet wired to filtering logic)
- `GenreFilter.jsx`: custom dropdown for genre selection
- `SortSelect.jsx`: sort selection control
- `Pagnation.jsx`: pagination controls
- `PodcastGrid.jsx`: grid layout for cards
- `PodcastCard.jsx`: individual podcast card

## Utility Modules
- `fetchPodcast.js`: API request and in-memory caching
- `genreService.js`: genre ID/name mapping utilities
- `formatDate.js`: date formatting utility

## State and Rendering Flow
1. `App` fetches podcast data in `useEffect`.
2. Data is filtered by selected genre.
3. Filtered data is sorted by selected sort option.
4. Sorted data is sliced by current page and page size.
5. `PodcastGrid` renders the paged results.

Conditional rendering is used for:
- Loading state
- Error state
- Loaded podcast grid state

## Responsive Design
- Uses CSS Grid for card layout
- Uses component-specific CSS modules for controls (`SearchBar`, `GenreFilter`, `SortSelect`, `Pagnation`)
- Adapts for mobile and desktop layouts

## Scripts
- `npm run dev`: start development server
- `npm run build`: create production build
- `npm run preview`: preview production build locally
- `npm run lint`: run lint checks

## Setup
1. Install dependencies:
   - `npm install`
2. Start the app:
   - `npm run dev`
