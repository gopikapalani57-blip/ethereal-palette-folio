import { useState } from 'react';
import { Mail, Send, Github, MapPin, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card-strong p-8 animate-on-scroll">
              <h3 className="text-2xl font-bold gradient-text mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a chat about technology and development.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 glass-card rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a 
                      href="mailto:gopikapalani57@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      gopikapalani57@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 glass-card rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Github className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">GitHub</h4>
                    <a 
                      href="https://github.com/gopikapalani57-blip"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      gopikapalani57-blip
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 glass-card rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">
                      Old Katpadi, Vellore - 07
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll animate-delay-200">
            <form onSubmit={handleSubmit} className="glass-card-strong p-8 space-y-6">
              <h3 className="text-2xl font-bold gradient-text mb-6">Send a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-input resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-hero disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CheckCircle className="text-green-500" size={24} />
              <span className="font-semibold">Quick Response</span>
            </div>
            <p className="text-sm text-muted-foreground">
              I typically respond to emails within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;