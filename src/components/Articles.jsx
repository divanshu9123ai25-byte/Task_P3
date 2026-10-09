import ArticleCard from './ArticleCard';

const projects = [
{
image: '/assets/project1.jpg',
title: 'Student Management System',
description:
'A responsive website created to showcase my skills, projects, achievements, and interests in web development and programming.',
},
{
image: '/assets/project2.jpg',
title: 'Personal Website',
description:
'A modern and user-friendly website designed to highlight my technical skills, creative projects, and experience in technology.',
},
];

function Articles() {
return ( <section id="work" className="section"> <h2>My Projects</h2>


  <div className="projects">
    {projects.map((project) => (
      <ArticleCard
        key={project.title}
        project={project}
      />
    ))}
  </div>
</section>

);
}

export default Articles;
