import { ExternalLink, Github, Code, Database, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Alumni Management System',
      description: 'A comprehensive web application designed to efficiently manage and store alumni data for a college. Features include student profiles, contact management, and event coordination.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Database'],
      category: 'Web Application',
      icon: <Database className="w-8 h-8" />,
      status: 'Completed',
      gradient: 'from-primary to-accent'
    },
    {
      title: 'Food Delivery App',
      description: 'Full-stack food delivery application with modern UI, real-time order tracking, and comprehensive admin panel. Built with responsive design and seamless user experience.',
      tech: ['Bootstrap', 'jQuery', 'MongoDB', 'Node.js', 'Express.js'],
      category: 'Full Stack',
      icon: <Code className="w-8 h-8" />,
      status: 'Completed',
      gradient: 'from-secondary to-primary'
    },
    {
      title: 'Car Sales Prediction',
      description: 'An intelligent machine learning model developed in Python to predict car sales trends using real datasets. Implements advanced algorithms for accurate forecasting.',
      tech: ['Python', 'Machine Learning', 'Data Analysis'],
      category: 'AI/ML',
      icon: <Brain className="w-8 h-8" />,
      status: 'Ongoing',
      gradient: 'from-accent to-secondary'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in web development and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`project-card animate-on-scroll animate-delay-${(index + 1) * 200}`}
            >
              {/* Project Header */}
              <div className="flex items-center justify-between mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}>
                  {project.icon}
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary/70 font-medium mb-3">{project.category}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Actions */}
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary-foreground hover:bg-primary rounded-lg transition-all duration-300 flex-1 justify-center">
                    <Github size={16} />
                    Code
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-secondary hover:text-secondary-foreground hover:bg-secondary rounded-lg transition-all duration-300 flex-1 justify-center">
                    <ExternalLink size={16} />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card-strong p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">Want to see more?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for more projects and contributions
            </p>
            <a
              href="https://github.com/gopikapalani57-blip"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-flex items-center gap-2"
            >
              <Github size={20} />
              <span>View GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;