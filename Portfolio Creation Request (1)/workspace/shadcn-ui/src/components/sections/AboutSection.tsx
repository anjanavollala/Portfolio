import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-2/5 space-y-8">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 opacity-75 blur"></div>
              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                {/* Placeholder for profile image - replace with your actual image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-blue-600/30">AV</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Machine Learning</Badge>
              <Badge variant="outline">Python</Badge>
              <Badge variant="outline">JavaScript</Badge>
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">Deep Learning</Badge>
              <Badge variant="outline">Web Development</Badge>
              <Badge variant="outline">Data Analysis</Badge>
              <Badge variant="outline">Image Processing</Badge>
              <Badge variant="outline">PHP</Badge>
              <Badge variant="outline">AWS</Badge>
              <Badge variant="outline">GCP</Badge>
              <Badge variant="outline">Cloud Computing</Badge>
              <Badge variant="outline">Jenkins</Badge>
            </div>
          </div>

          <div className="w-full md:w-3/5 space-y-6">
            <div>
              <h2 className="text-3xl font-bold">About Me</h2>
              <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            </div>

            <p className="text-lg text-muted-foreground">
              I am a passionate software engineer with expertise in machine learning, AI, and web development. My journey in technology has been driven by a desire to build solutions that make a meaningful impact.
            </p>

            <p className="text-lg text-muted-foreground">
              With a strong foundation in computer science and a keen interest in artificial intelligence, I've worked on various projects ranging from disease prediction systems and brain tumor detection to e-commerce platforms and stock recording systems.
            </p>

            <p className="text-lg text-muted-foreground">
              I thrive in collaborative environments where I can apply my technical skills and creativity to solve complex problems. My goal is to continue growing as a developer while contributing to projects that drive innovation and positive change.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    Computer Science, with specialization in Artificial Intelligence and Machine Learning
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Interests</h3>
                  <p className="text-muted-foreground">
                    Software Development Engineer | Full-Stack Development with Generative AI, Web Development, Cloud Computing
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};