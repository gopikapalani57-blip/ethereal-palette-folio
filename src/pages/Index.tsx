import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Internship from '@/components/Internship';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <div id="about">
          <About />
        </div>
        
        <div id="skills">
          <Skills />
        </div>
        
        <div id="projects">
          <Projects />
        </div>
        
        <div id="internship">
          <Internship />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Built with ❤️ by Gopika Palani
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:gopikapalani57@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Email
              </a>
              <a
                href="https://github.com/gopikapalani57-blip"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              © 2024 Gopika Palani. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
