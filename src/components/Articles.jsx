import ArticleCard from "./ArticleCard";

const articles = [
  {
    id: 1,
    title: "Getting Started with React",
    description: "React basics",
    author: "Divanshu Mittal",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500",
  },
  {
    id: 2,
    title: "Learn NodeJS",
    description: "NodeJS basics",
    author: "Divanshu Mittal",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500",
  },
  {
    id: 3,
    title: "React Hooks",
    description: "Learn React Hooks",
    author: "Divanshu Mittal",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
  },
];

function Articles() {
  return (
    <section className="articles">

      <h2>Featured Articles</h2>

      <div className="article-list">

        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
          />
        ))}

      </div>

      <button className="see-button">
        See all articles
      </button>

    </section>
  );
}

export default Articles;