import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Book, Github } from "lucide-react";
import { SyntaxHighlight } from "@/components/ui/syntax-highlight";

export default function GettingStarted() {
  const installCommand = `$ pip install rulebook-ai`;
  const sourceInstall = `$ git clone https://github.com/rulebook-ai/rulebook-ai
$ cd rulebook-ai && pip install -e .`;

  const steps = [
    {
      number: 1,
      title: "Install",
      description: "Install the CLI tool via pip or download from GitHub"
    },
    {
      number: 2,
      title: "Add Packs",
      description: "Choose from community packs or create your own rules"
    },
    {
      number: 3,
      title: "Sync & Code",
      description: "Sync rules to your AI assistant and start coding"
    }
  ];

  return (
    <section id="getting-started" className="py-16 bg-secondary" data-testid="section-getting-started">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-testid="text-ready-title">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-ready-description">
            Transform your AI coding workflow in minutes
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center" data-testid={`step-${step.number}`}>
              <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">{step.number}</span>
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        
        <Card className="border border-border" data-testid="card-installation">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4" data-testid="text-quick-installation">
                  Quick Installation
                </h3>
                <div className="bg-muted rounded-lg p-4 mb-4">
                  <SyntaxHighlight 
                    code={installCommand} 
                    language="bash"
                    data-testid="install-command"
                  />
                </div>
                <p className="text-muted-foreground mb-4">Or install from source:</p>
                <div className="bg-muted rounded-lg p-4">
                  <SyntaxHighlight 
                    code={sourceInstall} 
                    language="bash"
                    data-testid="source-install-commands"
                  />
                </div>
              </div>
              <div className="text-center">
                <div className="mb-6">
                  <Github className="w-16 h-16 text-muted-foreground mx-auto" />
                </div>
                <div className="space-y-4">
                  <Button 
                    className="w-full" 
                    size="lg"
                    asChild
                    data-testid="button-download-release"
                  >
                    <a href="https://github.com/rulebook-ai/rulebook-ai/releases" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-5 w-5" />
                      Download Latest Release
                    </a>
                  </Button>
                  <Button 
                    variant="secondary" 
                    className="w-full" 
                    size="lg"
                    asChild
                    data-testid="button-read-docs"
                  >
                    <a href="https://github.com/rulebook-ai/rulebook-ai#readme" target="_blank" rel="noopener noreferrer">
                      <Book className="mr-2 h-5 w-5" />
                      Read Documentation
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
