import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Package, RefreshCw, Zap } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Install Packs",
      description: "Choose from built-in or community rule collections",
      command: "rulebook-ai packs add basic-workflow"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Sync to Project",
      description: "Apply consistent context to any AI assistant",
      command: "rulebook-ai project sync"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Code with Confidence",
      description: "Your AI understands project context perfectly",
      command: "# Your AI is now context-aware!"
    }
  ];

  return (
    <section className="py-16 bg-muted/30" data-testid="section-how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            How It Works
          </Badge>
          <h2 className="text-3xl font-bold mb-4" data-testid="text-how-it-works-title">
            Three Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-how-it-works-description">
            Get started with rulebook-ai in minutes. No complex configuration, just proven workflows.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow" data-testid={`card-step-${index}`}>
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6 text-primary">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4" data-testid={`text-step-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-6" data-testid={`text-step-description-${index}`}>
                  {step.description}
                </p>
                <div className="bg-muted/50 rounded-lg p-3">
                  <code className="text-sm font-mono text-foreground" data-testid={`text-step-command-${index}`}>
                    {step.command}
                  </code>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}