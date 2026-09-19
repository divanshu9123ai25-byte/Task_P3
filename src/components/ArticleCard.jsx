function ArticleCard({ article }) {
  return (
    <div className="article-card">

      <img src={article.image} alt={article.title} />

      <h3>{article.title}</h3>

      <p>{article.description}</p>

      <hr />

      <div className="article-info">
        <span>⭐ 5</span>
        <span>{article.author}</span>
      </div>

    </div>
  );
}

export default ArticleCard;