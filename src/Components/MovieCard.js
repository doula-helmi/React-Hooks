import Rating from "@mui/material/Rating";
export const MovieCard = ({ title, description, rating, posterURL }) => {
  return (
    <>
      <div className="movie-card">
        <img className="movie-header bladeRunner2049" src={posterURL} alt={title}/>
        <div className="movie-content">
          <div className="movie-content-header">
            <h3 className="movie-title">{title}</h3>
          </div>
          <div className="movie-info">
            <div className="info-section">
              <p>{description}</p>
            </div>
            <div className="info-section">
              <span>
                <Rating
                  name="disabled"
                  precision={0.5}
                  value={rating}
                  disabled
                />
              </span>
              <p>{rating}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
