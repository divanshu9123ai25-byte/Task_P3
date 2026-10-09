
import FeaturedCard from "./FeaturedCard";

function Featured() {
  const articles = [
    {
      id: 1,
      title: "Personal Website",
      description: "A personal website showcasing my profile, skills, and projects.",
      image: "/assets/gallery14.jpg",
      author: "Tanisha",
    },
    {
      id: 2,
      title: "Welcome Email Project",
      description: "A web application with a subscription form and email functionality.",
      image: "/assets/gallery13.jpg",
      author: "Parth Garg",
    },
    {
      id: 3,
      title: "DEV@Deakin Website",
      description: "A responsive website featuring articles, tutorials, and navigation.",
      image: "/assets/gallery12.jpg",
      author: "Anjali",
    },
  ];

  return (
    <section className="articles" id="projects">
      <h2>Featured Articles</h2>

      <div className="card-container">
        {articles.map((article) => (
          <FeaturedCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}

export default Featured;
