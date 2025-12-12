
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
import projects from '../../data/projectsData.js'






export function Projects() {
  return (
    <section id="projects" className="min-h-screen  relative py-20">
    <div className="container mx-auto px-6 relative">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center font-title">
        Featured Projects
      </h2>
      
      
      <div className="space-y-32">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            state={project.title} // Passing project as state
            className="flex flex-col items-center gap-8 w-full mx-auto"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          </Link>
        ))}
      </div>
    </div>
  </section>
  );
}

export default Projects;