
function TutorialCard({ tutorial }) {
  return (
    <div className="card">
      <img
        className="card-image"
        src={tutorial.image}
        alt={tutorial.title}
      />

      <div className="card-info">
        <h3>{tutorial.title}</h3>
        <p>{tutorial.description}</p>

        <div className="card-bottom">
          <span>{tutorial.author}</span>
          <span className="rating">★★★★★</span>
        </div>
      </div>
    </div>
  );
}

export default TutorialCard;
