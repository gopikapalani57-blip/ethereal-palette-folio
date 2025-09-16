import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Full Stack Developer', 'Creative Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    const text = roles[currentIndex];
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayText, currentIndex, roles]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating animate-delay-100"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl floating-delayed animate-delay-300"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl floating animate-delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-on-scroll">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Gopika</span>
          </h1>
          
          <div className="h-20 flex items-center justify-center mb-8">
            <h2 className="text-2xl md:text-4xl font-medium text-muted-foreground">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            I'm a passionate full-stack developer and creative problem solver, 
            always excited to explore new technologies and build meaningful solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={scrollToAbout}
              className="btn-hero"
            >
              <span>View My Work</span>
            </button>
            
            <a
              href="mailto:gopikapalani57@gmail.com"
              className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="p-2 text-primary hover:text-secondary transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;