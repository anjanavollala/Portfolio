import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  image?: string;
}

export const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Disease Prediction using ML",
      description: "A machine learning system that predicts diseases based on symptoms using Python and various ML algorithms.",
      tags: ["Python", "Machine Learning", "Healthcare", "Data Science"],
      githubUrl: "https://github.com/anjanavollala/Disease-Prediction-using-ML",
    },
    {
      title: "Brain Tumor Detection using Deep Learning",
      description: "A deep learning solution for detecting and classifying brain tumors from medical images.",
      tags: ["Deep Learning", "Python", "Computer Vision", "Healthcare"],
      githubUrl: "https://github.com/anjanavollala/Brain-Tumor-Detection-using-DeepLearning",
    },
    {
      title: "Advanced Image Retrieval System",
      description: "An image retrieval system that uses advanced computer vision techniques to find similar images.",
      tags: ["Python", "Computer Vision", "Image Processing", "AI"],
      githubUrl: "https://github.com/anjanavollala/Advanced-image-retrieval-system",
    },
    {
      title: "E-commerce Website",
      description: "A responsive e-commerce website frontend built using HTML, CSS, and JavaScript.",
      tags: ["HTML", "CSS", "JavaScript", "E-commerce", "Frontend"],
      githubUrl: "https://github.com/anjanavollala/E-commerce-website-using-HTML-CSS-JS-Frontend",
    },
    {
      title: "Neural Networks",
      description: "Implementation and experimentation with various neural network architectures.",
      tags: ["Jupyter Notebook", "Neural Networks", "Python", "Deep Learning"],
      githubUrl: "https://github.com/anjanavollala/Neural-Networks",
    },
    {
      title: "USPS Dataset Classification",
      description: "Classification of USPS dataset images using K-Nearest Neighbor algorithm.",
      tags: ["Jupyter Notebook", "Machine Learning", "Classification", "Data Science"],
      githubUrl: "https://github.com/anjanavollala/USPS-Dataset-Classification-using-K-Neighbor-classifier",
    },
    {
      title: "Smart Health Hub",
      description: "A healthcare management system built with PHP for managing patient records and appointments.",
      tags: ["PHP", "Healthcare", "Database", "Web Development"],
      githubUrl: "https://github.com/anjanavollala/SmartHealthHub1",
    },
    {
      title: "Two-Phase Commit Protocol",
      description: "A simulation of the Two-Phase Commit Protocol for distributed database transactions.",
      tags: ["Python", "Distributed Systems", "Database", "Concurrency"],
      githubUrl: "https://github.com/anjanavollala/Two-Phase-Commit-Protocol-Simulation",
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore a selection of my projects showcasing my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="h-48 bg-muted flex items-center justify-center">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600/30">{project.title.substring(0, 2)}</span>
                  </div>
                )}
              </div>
              <CardContent className="flex-grow pt-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">{tag}</Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline">+{project.tags.length - 3}</Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="border-t bg-muted/50 flex justify-between">
                <Button variant="ghost" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                </Button>
                {project.demoUrl && (
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/anjanavollala?tab=repositories" target="_blank" rel="noopener noreferrer">
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};