import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const skills = [
    { name: 'HTML & CSS', level: 95, category: 'Frontend' },
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'Bootstrap', level: 85, category: 'Frontend' },
    { name: 'jQuery', level: 80, category: 'Frontend' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Express.js', level: 80, category: 'Backend' },
    { name: 'MongoDB', level: 85, category: 'Database' },
    { name: 'Python', level: 75, category: 'Programming' },
    { name: 'Machine Learning', level: 60, category: 'AI/ML' },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <div 
              key={category}
              className={`glass-card-strong p-6 animate-on-scroll animate-delay-${(categoryIndex + 1) * 100}`}
            >
              <h3 className="text-xl font-bold mb-6 text-center gradient-text">
                {category}
              </h3>
              
              <div className="space-y-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: isInView ? `${(categoryIndex * 3 + index) * 0.2}s` : 'unset'
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fun Stats */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '3+', label: 'Projects Completed' },
              { number: '9+', label: 'Technologies' },
              { number: '1', label: 'Internship' },
              { number: '100%', label: 'Passion' }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className={`glass-card p-6 text-center scale-in animate-delay-${(index + 1) * 100}`}
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;