import VideoCard from "./VideoCard";

function Videos() {

  const tutorials = [
    {
      id: 1,
      title: "JavaScript Basics",
      description: "Learn JS",
      rating: 5,
      author: "Divanshu",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500"
    },
    {
      id: 2,
      title: "React Router",
      description: "Learn React Router",
      rating: 5,
      author: "John",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500"
    },
    {
      id: 3,
      title: "Express",
      description: "Learn Express",
      rating: 4.9,
      author: "Sarah",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500"
    }
  ];

  return (
    <section className="tutorials">

      <h2>Featured Tutorials</h2>

      <div className="card-container">

        {tutorials.map((tutorial) => (
          <VideoCard
            key={tutorial.id}
            tutorial={tutorial}
          />
        ))}

      </div>

      <button className="see-button">
        See all tutorials
      </button>

    </section>
  );
}

export default Videos;