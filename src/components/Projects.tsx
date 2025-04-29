import React, { useState } from 'react';
import { ExternalLink, Github as GitHub } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and checkout process.",
      image: "https://images.pexels.com/photos/4440555/pexels-photo-4440555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Redux", "Tailwind CSS", "Node.js"],
      liveUrl: "https://e-commerce-five-beta-13.vercel.app/",
      githubUrl: "https://github.com/Youssefsayedd/GP-frontend",
      category: "web"
    },
    {
      id: 2,
      title: "Weather Forecast App",
      description: "Real-time weather application that provides current conditions and forecasts based on location.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "API Integration", "CSS", "JavaScript"],
      liveUrl: "https://weathe-frorecast-versel-kwfq.vercel.app/",
      githubUrl: "https://github.com/Youssefsayedd/weathe-frorecast-versel",
      category: "web"
    },
    {
      id: 3,
      title: "Next.js User Dashboard",
      description: "A modern admin dashboard built with Next.js featuring user management, analytics, and responsive design.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
      liveUrl: "https://dahboard-ht2nl8u8u-youssefs-projects-891eef67.vercel.app/",
      githubUrl: "https://github.com/Youssefsayedd/NextDashboard.git",
      category: "web"
    },
    {
      id: 4,
      title: "Website UI",
      description: "A clean and intuitive UI design for a Weather application with focus on user experience.",
      image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Figma", "Adobe XD", "UI/UX"],
      liveUrl: "https://www.figma.com/design/v1z7PKd4NYmdhjdyTYMUCr/Weather?node-id=0-1&t=ctUFQotl82h9I4QE-1",
      githubUrl: "https://www.figma.com/design/v1z7PKd4NYmdhjdyTYMUCr/Weather?node-id=0-1&t=ctUFQotl82h9I4QE-1",
      category: "design"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Take a look at some of my recent work and personal projects.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-md ${activeFilter === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('web')}
              className={`px-4 py-2 rounded-md ${activeFilter === 'web' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
            >
              Web Development
            </button>
            <button
              onClick={() => setActiveFilter('design')}
              className={`px-4 py-2 rounded-md ${activeFilter === 'design' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
            >
              UI/UX Design
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full flex justify-between items-center">
                    <div className="flex space-x-3">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                          aria-label="View live site"
                        >
                          <ExternalLink size={20} className="text-white" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                          aria-label="View GitHub repository"
                        >
                          <GitHub size={20} className="text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;