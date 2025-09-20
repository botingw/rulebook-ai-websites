import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Layers, Shield } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Cross-Platform Compatibility",
      description: "One framework, all AI assistants",
      details: "Works with Cursor, Windsurf, Cline, RooCode, GitHub Copilot, Warp, and more. No switching costs between tools."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Composable Packs",
      description: "Mix and match rule sets for different workflows",
      details: "Combine rule packs for different scenarios. Frontend development, backend APIs, testing workflows - all composable."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Community Ecosystem",
      description: "Discover and share proven AI workflows",
      details: "Join a growing community of developers sharing battle-tested AI workflows and best practices."
    }
  ];

  return (
    <section className="py-16" data-testid="section-features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Features
          </Badge>
          <h2 className="text-3xl font-bold mb-4" data-testid="text-features-title">
            Why Choose Rulebook-AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-features-description">
            The only cross-platform framework for composable AI rule management with zero config conflicts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`card-feature-${index}`}>
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-6 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`text-feature-description-${index}`}>
                  {feature.description}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-feature-details-${index}`}>
                  {feature.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}