import { useState,useEffect } from 'react'

import {fetchPodcasts} from './api/fetchPodcast.js';
import Header from "./components/Header.jsx";
import PodcastGrid from "./components/PodcastGrid.jsx";
import loadingCat from "./assets/loading-cat.mp4";

/**
 * Main application component.
 * @returns {JSX.Element}
 */
function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
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

  {loading && 
    <div className="loader-container">
    <video
      src={loadingCat}
      autoPlay
      loop
      muted
      className="loader-video"
    />
  </div>
}

    {error && <p>Error: {error.message}</p>}

    {!loading && !error && (
      <PodcastGrid podcasts={podcasts} />
    )}
  </>
);
}

export default App
