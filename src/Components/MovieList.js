import { MovieCard } from "./MovieCard";
export const MovieList = ({ list, searchString, rateValue }) => {
  return (
    <div className="movielist">
      {list
        .filter(({ rating }) => rating <= rateValue)
        .filter(({ title }) => title.toLowerCase().includes(searchString))
        .map(({ title, description, rating, posterURL }, i) => (
          <MovieCard
            key={i}
            title={title}
            description={description}
            rating={rating}
            posterURL={posterURL}
          />
        ))}
    </div>
  );
};
