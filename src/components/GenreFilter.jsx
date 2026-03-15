export default function GenreFilter({ genres, selectedGenre, onSelectGenre }) {
  return (
    <div className="genre-filter">
        <label htmlFor="genre-select">Filter by Genre:</label>
        <select
            id="genre-select"
            value={selectedGenre}
            onChange={(e) => onSelectGenre(e.target.value)}
        >
            <option value="all">All Genres</option>
            {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                    {genre.name}
                </option>   
            ))}
        </select>
    </div>
  );
}