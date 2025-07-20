import {
  BrainCircuit,
  Code2,
  Database,
  FileCode,
  Globe,
  LayoutDashboard,
  LineChart,
  Server
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

export const SkillsSection = () => {
  const skillCategories: Skill[] = [
    {
      category: "Machine Learning",
      icon: <BrainCircuit className="h-6 w-6" />,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Neural Networks", "Deep Learning", "Computer Vision"]
    },
    {
      category: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["Python", "JavaScript", "TypeScript", "PHP", "Java", "HTML/CSS"]
    },
    {
      category: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React", "Vue.js", "Node.js", "Express", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Data Science",
      icon: <LineChart className="h-6 w-6" />,
      skills: ["Pandas", "NumPy", "Data Visualization", "Statistical Analysis", "Feature Engineering"]
    },
    {
      category: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["SQL", "MongoDB", "PostgreSQL", "Firebase", "Redis"]
    },
    {
      category: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: ["RESTful APIs", "GraphQL", "Authentication", "Microservices", "Server Management"]
    },
    {
      category: "Tools & DevOps",
      icon: <LayoutDashboard className="h-6 w-6" />,
      skills: ["Git", "Docker", "CI/CD", "AWS", "Jira", "Agile Methodologies"]
    },
    {
      category: "Software Engineering",
      icon: <FileCode className="h-6 w-6" />,
      skills: ["OOP", "Design Patterns", "System Architecture", "Testing", "Code Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold">My Skillset</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            I've developed a diverse range of technical skills throughout my career. Here's an overview of my expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((skillCategory, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    {skillCategory.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skillCategory.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                      <span className="text-muted-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};