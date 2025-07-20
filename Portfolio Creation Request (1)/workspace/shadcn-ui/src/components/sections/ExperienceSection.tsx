import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  skills?: string[];
}

interface ExperienceItem {
  position: string;
  company: string;
  logo?: string;
  period: string;
  location: string;
  remote?: boolean;
  description: string[];
  skills: string[];
}

export const ExperienceSection = () => {
  const education: EducationItem[] = [
    {
      degree: "Master of Science - MS, Computer Science",
      institution: "The University of Texas at Arlington",
      period: "Aug 2023 - May 2025",
      description: "Grade: 3.67/4.0\nActivities and societies: Participant, Hackathons (HackUTA 2025)\nCloud Computing, Data Mining, Machine Learning, Software Engineering (Maintenance, Management, Quality Assurance), Advanced Topics in Software Engineering (Hands-on Project), Web-Data Management, Design and Analysis of Algorithms, Distributed Systems.",
      skills: ["Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "Docker", "Kubernetes", "Jenkins", "Python", "Java", "JavaScript", "React", "Node.js", "MySQL", "PostgreSQL"]
    },
    {
      degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
      institution: "Malla Reddy Institute of Engineering and Technology",
      period: "Jul 2018 - Jun 2022",
      description: "Grade: 7.8/10.0\nRelevant Coursework: Data Structures & Algorithms, C, C++, Java Programming, Artificial Intelligence, Machine Learning, Computer Networks, Database Management Systems, Operating Systems, Cybersecurity, Software Engineering, Cloud Computing, Network Programming, Cryptography & Network Security",
      skills: ["Data Structures & Algorithms", "C++", "Data Structures", "Java", "Python", "SQL", "Object-Oriented Programming (OOP)", "Problem Solving", "Competitive Programming"]
    }
  ];

  const experiences: ExperienceItem[] = [
    {
      position: "Java Intern",
      company: "Wipro",
      period: "Aug 2022 - Apr 2023 · 9 mos",
      location: "Hyderabad, Telangana, India",
      remote: true,
      description: [
        "Conducted thorough code reviews and mentoring sessions, reducing QA phase bugs by 30% and fostering a culture of continuous improvement among junior developers.",
        "Improved overall system efficiency by 20% and lowered error rates by 15% through code optimization and refactoring.",
        "Developed a full-stack web application using Angular, Spring Boot, and MySQL, achieving 95% data consistency and enhanced data integrity.",
        "Boosted page load speed by 30% via lazy loading and effective caching strategies.",
        "Designed and implemented RESTful APIs to enable seamless front-end and back-end communication.",
        "Achieved 90% code coverage through comprehensive unit and integration testing.",
        "Actively contributed to Agile sprint ceremonies, ensuring smooth project execution and on-time delivery."
      ],
      skills: ["Java", "JavaScript", "AngularJS", "SpringBoot", "MySQL", "RestAPIs", "Agile", "Unit Testing", "Cascading Style Sheets (CSS)", "HTML"]
    },
    {
      position: "Full stack Development ADAPT Program",
      company: "Capgemini",
      period: "Feb 2022 - Jul 2022 · 6 mos",
      location: "Hyderabad, Telangana, India",
      remote: true,
      description: [
        "Deployed scalable, performant applications using Angular, Spring Boot, and MySQL on Google Cloud Platform (GCP), reducing load times by 25%.",
        "Built CI/CD pipelines with Docker and Jenkins, accelerating deployment cycles by 20% and improving release stability.",
        "Ensured 90% code reliability via unit testing and maintained a 98% pass rate using integration testing tools such as Postman and Selenium.",
        "Collaborated in Agile sprints simulating real-world client projects, achieving 95% on-time milestone completion."
      ],
      skills: ["AngularJS", "SpringBoot", "MySQL", "Google Cloud Platform (GCP)", "Docker", "Jenkins", "postman", "Selenium Testing", "Agile"]
    },
    {
      position: "Software Engineer Virtual Experience",
      company: "JPMorganChase",
      period: "Nov 2021 - Jan 2022 · 3 mos",
      location: "Hyderabad, Telangana, India",
      remote: true,
      description: [
        "Integrated real-time stock price data feeds, enabling accurate and timely trading analysis.",
        "Designed and optimized data pipelines, improving data processing efficiency by 25% using JPMorgan's internal frameworks.",
        "Developed a user-friendly stock visualization interface, enhancing accessibility for traders.",
        "Reduced data rendering latency by 30%, facilitating faster trader decision-making.",
        "Achieved 95% data accuracy through rigorous testing, debugging, and validation."
      ],
      skills: ["Data Pipelines", "Real Time Data Integration", "Front-End Development", "Testing and Debugging"]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold">Experience & Education</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"></div>
        </div>

        <Tabs defaultValue="experience" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="experience">Work Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          
          <TabsContent value="experience" className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-r"></div>
                <CardContent className="p-6 pl-8">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.position}</h3>
                      <p className="text-muted-foreground font-medium">{exp.company}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                        {exp.remote && <Badge variant="outline" className="text-xs">Remote</Badge>}
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <Badge variant="outline" className="font-medium">
                        {exp.period}
                      </Badge>
                    </div>
                  </div>
                  
                  <ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
                    {exp.description.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="education" className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="relative">
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-r"></div>
                <CardContent className="p-6 pl-8">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <Badge variant="outline" className="font-medium">
                        {edu.period}
                      </Badge>
                    </div>
                  </div>
                  
                  {edu.description && (
                    <div className="text-muted-foreground mb-4">
                      {edu.description.split('\n').map((line, lineIndex) => (
                        <p key={lineIndex} className={lineIndex > 0 ? "mt-2" : ""}>{line}</p>
                      ))}
                    </div>
                  )}
                  
                  {edu.skills && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {edu.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};