function ArticleCard({ project }) {
return ( <div className="project"> <img src={project.image} alt={project.title} />

  <h3>{project.title}</h3>

  <p>{project.description}</p>

  <a href="#contact">View Project</a>
</div>

);
}

export default ArticleCard;
