import { useState, useEffect } from "react";

import { fetchPodcasts } from "./api/fetchPodcast.js";
import Header from "./components/Header.jsx";
import PodcastGrid from "./components/PodcastGrid.jsx";
import loadingCat from "./assets/loading-cat.mp4";
import SearchBar from "./components/SearchBar.jsx";
import GenreFilter from "./components/GenreFilter.jsx";
import SortSelect from "./components/SortSelect.jsx";
import { GenreService } from "./utils/genreService.js";
import { SORT_OPTIONS } from "./context/PodcastContext.jsx";

/**
 * Main application component.
 * @returns {JSX.Element}
 */
function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [sortKey, setSortKey] = useState("date-desc");

  const genres = GenreService.getAll();
  const filteredPodcasts =
    selectedGenre === "all"
      ? podcasts
      : podcasts.filter(
          (podcast) =>
            Array.isArray(podcast.genres) &&
            podcast.genres.includes(Number(selectedGenre))
        );
  const sortedPodcasts = [...filteredPodcasts];

  switch (sortKey) {
    case "title-asc":
      sortedPodcasts.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "title-desc":
      sortedPodcasts.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "date-asc":
      sortedPodcasts.sort((a, b) => new Date(a.updated) - new Date(b.updated));
      break;
    case "date-desc":
    default:
      sortedPodcasts.sort((a, b) => new Date(b.updated) - new Date(a.updated));
      break;
  }

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchPodcasts();
        setPodcasts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <>
      <Header />
      <SearchBar searchTerm={""} onSearch={() => {}} />
      <GenreFilter
        genres={genres}
        selectedGenre={selectedGenre}
        onSelectGenre={setSelectedGenre}
      />
      <SortSelect
        options={SORT_OPTIONS}
        selectedSort={sortKey}
        onSelectSort={setSortKey}
      />

      {loading && (
        <div className="loader-container">
          <video
            src={loadingCat}
            autoPlay
            loop
            muted
            className="loader-video"
          />
        </div>
      )}

      {error && <p>Error: {error.message}</p>}

      {!loading && !error && <PodcastGrid podcasts={sortedPodcasts} />}
    </>
  );
}

export default App;
