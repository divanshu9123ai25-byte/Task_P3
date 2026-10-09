
function FeaturedCard({ article }) {
  return (
    <div className="card">
      <img
        className="card-image"
        src={article.image}
        alt={article.title}
      />

      <div className="card-info">
        <h3>{article.title}</h3>
        <p>{article.description}</p>

        <div className="card-bottom">
          <span>{article.author}</span>
          <span className="rating">★★★★★</span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
