import { Mail, MapPin, Github } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="slide-in-left">
            <div className="relative">
              <div className="glass-card-strong p-8 text-center">
                <div className="relative inline-block">
                  <img
                    src={profilePhoto}
                    alt="Gopika - Full Stack Developer"
                    className="w-80 h-80 object-cover rounded-2xl mx-auto shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full floating animate-delay-100"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full floating animate-delay-300"></div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="slide-in-right space-y-8">
            <div className="glass-card-strong p-8">
              <h3 className="text-3xl font-bold mb-6 gradient-text">Gopika Palani</h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm a passionate full-stack developer and creative problem solver, 
                always excited to explore new technologies and build meaningful solutions. 
                With a strong foundation in modern web development, I love turning ideas 
                into beautiful, functional applications.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 glass-card rounded-lg hover:scale-105 transition-transform duration-300">
                  <Mail className="text-primary" size={24} />
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:gopikapalani57@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      gopikapalani57@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 glass-card rounded-lg hover:scale-105 transition-transform duration-300">
                  <Github className="text-primary" size={24} />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a 
                      href="https://github.com/gopikapalani57-blip"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      gopikapalani57-blip
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 glass-card rounded-lg hover:scale-105 transition-transform duration-300">
                  <MapPin className="text-primary" size={24} />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">
                      29, Kottaiamman Koil Street,<br />
                      Old Katpadi, Vellore - 07
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

export default About;