import { useState, useEffect } from "react";

import { fetchPodcasts } from "./api/fetchPodcast.js";
import Header from "./components/Header.jsx";
import PodcastGrid from "./components/PodcastGrid.jsx";
import loadingCat from "./assets/loading-cat.mp4";
import SearchBar from "./components/SearchBar.jsx";
import GenreFilter from "./components/GenreFilter.jsx";
import { GenreService } from "./utils/genreService.js";

/**
 * Main application component.
 * @returns {JSX.Element}
 */
function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("all");

  const genres = GenreService.getAll();
  const filteredPodcasts =
    selectedGenre === "all"
      ? podcasts
      : podcasts.filter(
          (podcast) =>
            Array.isArray(podcast.genres) &&
            podcast.genres.includes(Number(selectedGenre))
        );

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

      {!loading && !error && <PodcastGrid podcasts={filteredPodcasts} />}
    </>
  );
}

export default App;
