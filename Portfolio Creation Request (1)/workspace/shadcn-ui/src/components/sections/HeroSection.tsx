import { ArrowDownIcon, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="flex flex-col items-start space-y-6 max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium">
            Software Development Engineer | Full-Stack Development with Generative AI
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Anjana Vollala</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl">
            I create impactful applications with a focus on machine learning and AI solutions.
            Passionate about building innovative software that solves real-world problems.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          
          <div className="flex items-center space-x-4 pt-4">
            <a 
              href="https://github.com/anjanavollala" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/anjana-vollala" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:contact@anjanavollala.com" 
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-background border shadow-sm">
          <ArrowDownIcon className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};