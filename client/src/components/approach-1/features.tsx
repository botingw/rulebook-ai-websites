import { Card, CardContent } from "@/components/ui/card";
import { MousePointer, Terminal, Code, Wind, Puzzle, Users, Brain, RefreshCw } from "lucide-react";

export default function Features() {
  const assistants = [
    {
      icon: MousePointer,
      name: "Cursor",
      description: "Multi-file rules in .cursor/"
    },
    {
      icon: Terminal,
      name: "CLINE",
      description: "CLI-based rule management"
    },
    {
      icon: Code,
      name: "RooCode",
      description: "Mode-specific rule contexts"
    },
    {
      icon: Wind,
      name: "Windsurf",
      description: "Advanced surfing assistance"
    }
  ];

  const keyFeatures = [
    {
      icon: Puzzle,
      title: "Composable Pack System",
      description: "Mix and match rule packs for different project types. Python, React, DevOps - combine as needed."
    },
    {
      icon: Users,
      title: "Community Ecosystem",
      description: "Discover and share rule packs with the developer community. Learn from best practices."
    },
    {
      icon: Brain,
      title: "Persistent Memory",
      description: "Project context stored in memory/ directory. AI remembers your coding patterns and preferences."
    },
    {
      icon: RefreshCw,
      title: "Explicit Sync Control",
      description: "Rules are applied only when you run sync. No surprises, complete control over your AI context."
    }
  ];

  const projectStructure = `📁 my-project/
  📁 .rulebook-ai/
    📁 packs/
    📄 selection.json
  📁 memory/
    📄 project-context.md
  📁 tools/
    📄 custom-scripts.py
  📁 .cursor/
    📁 rules/`;

  return (
    <>
      {/* Supported Assistants */}
      <section id="features" className="py-16" data-testid="section-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-cross-platform-title">
              Cross-Platform Compatibility
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-cross-platform-description">
              One rule format, multiple AI assistants
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {assistants.map((assistant, index) => (
              <Card key={assistant.name} className="text-center hover:shadow-lg transition-shadow" data-testid={`card-assistant-${assistant.name.toLowerCase()}`}>
                <CardContent className="p-6">
                  <assistant.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <h3 className="font-semibold mb-2">{assistant.name}</h3>
                  <p className="text-sm text-muted-foreground">{assistant.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-muted" data-testid="section-key-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" data-testid="text-complex-projects-title">
                Built for Complex Projects
              </h2>
              <div className="space-y-6">
                {keyFeatures.map((feature, index) => (
                  <div key={feature.title} className="flex items-start space-x-4" data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="bg-accent rounded-lg p-2 mt-1">
                      <feature.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="border border-border" data-testid="card-project-structure">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Project Structure</h3>
                <pre className="code-block text-sm text-muted-foreground whitespace-pre-wrap">
                  {projectStructure}
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
