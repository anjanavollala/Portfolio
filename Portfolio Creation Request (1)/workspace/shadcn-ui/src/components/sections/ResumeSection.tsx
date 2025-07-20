import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ResumeSection = () => {
  return (
    <section id="resume" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold">Resume</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            Download my resume to learn more about my skills, education, and experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">My Resume</h3>
                    <p className="text-muted-foreground">Complete overview of my qualifications</p>
                  </div>
                </div>
                
                <Button asChild size="lg" className="w-full md:w-auto">
                  <a href="/AnjanaVollalaResume.pdf" target="_blank" rel="noopener noreferrer" download>
                    Download Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};