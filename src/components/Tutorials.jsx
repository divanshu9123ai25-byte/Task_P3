
import TutorialCard from "./TutorialCard";

function Tutorials() {
  const tutorials = [
    {
      id: 1,
      title: "React Basics",
      description: "Learn the basics of building user interfaces with React.",
      image: "/assets/gallery11.jpg",
      author: "Divanshu Mittal",
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      description: "Understand JavaScript functions, arrays, and objects.",
      image: "/assets/gallery10.jpg",
      author: "Rahul Kumar",
    },
    {
      id: 3,
      title: "Responsive Web Design",
      description: "Learn how to create websites for different screen sizes.",
      image: "/assets/gallery9.jpg",
      author: "Shivam Thakur",
    },
  ];

  return (
    <section className="tutorials" id="tutorials">
      <h2>Featured Tutorials</h2>

      <div className="card-container">
        {tutorials.map((tutorial) => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>
    </section>
  );
}

export default Tutorials;