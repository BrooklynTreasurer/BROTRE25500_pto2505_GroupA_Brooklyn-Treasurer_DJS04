import PodcastCard from "./PodcastCard.jsx";

/**
 * Renders a responsive grid of podcast cards.
 * @param {Object} props - Component props.
 * @param {Object[]} props.podcasts - List of podcasts.
 * @returns {JSX.Element}
 */
export default function PodcastGrid({ podcasts }) {
  return (
    <div className="podcast-grid">
      {podcasts.map(podcast => (
        <PodcastCard key={podcast.id} podcast={podcast} />
      ))}
    </div>
  );
}
