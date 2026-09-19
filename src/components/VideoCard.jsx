function VideoCard({ tutorial }) {
  return (
    <div className="card">

      <img src={tutorial.image} alt={tutorial.title} />

      <h3>{tutorial.title}</h3>

      <p>{tutorial.description}</p>

      <hr />

      <div className="card-info">
        <span>⭐ {tutorial.rating}</span>
        <span>{tutorial.author}</span>
      </div>

    </div>
  );
}

export default VideoCard;