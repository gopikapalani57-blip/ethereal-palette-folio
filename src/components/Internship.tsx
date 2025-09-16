import { Building, Calendar, Award, Code } from 'lucide-react';

const Internship = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>
          
          {/* Internship Card */}
          <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
            
            <div className="glass-card-strong p-8 ml-8 md:ml-16 animate-on-scroll">
              {/* Company Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-white">
                  <Building size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold gradient-text mb-2">Joy Innovations</h3>
                  <p className="text-xl font-semibold text-primary mb-1">Full Stack Developer Intern</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    <span>Internship Period</span>
                  </div>
                </div>
                <div className="p-2 bg-highlight/20 rounded-lg">
                  <Award className="text-primary" size={20} />
                </div>
              </div>

              {/* Experience Description */}
              <div className="space-y-4 mb-6">
                <p className="text-muted-foreground leading-relaxed">
                  During my internship at Joy Innovations, I gained hands-on experience in full-stack 
                  development, working on real-world projects and contributing to the development team's success.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary flex items-center gap-2">
                      <Code size={18} />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        Built responsive web features using modern frameworks
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        Developed and integrated APIs for seamless data flow
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        Worked on both frontend and backend development
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        Collaborated with team members on project planning
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-secondary flex items-center gap-2">
                      <Award size={18} />
                      Skills Developed
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Team Collaboration',
                        'Code Review',
                        'Project Management',
                        'Problem Solving',
                        'API Development',
                        'Testing & Debugging'
                      ].map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="glass-card p-4 border-l-4 border-primary">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Award className="text-primary" size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary">Successful Completion</h5>
                    <p className="text-sm text-muted-foreground">
                      Successfully completed the internship program and gained valuable industry experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;