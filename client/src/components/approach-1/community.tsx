import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function Community() {
  const communityPacks = [
    {
      name: "python-best-practices",
      author: "@pythonista",
      description: "Production-ready Python rules with type hints, testing, and documentation standards.",
      installs: "234"
    },
    {
      name: "react-component-guide",
      author: "@react-expert",
      description: "Modern React patterns with hooks, TypeScript, and component architecture guidelines.",
      installs: "189"
    },
    {
      name: "devops-essentials",
      author: "@devops-ninja",
      description: "Infrastructure as code, CI/CD pipelines, and deployment best practices.",
      installs: "156"
    }
  ];

  return (
    <section id="community" className="py-16" data-testid="section-community">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-testid="text-community-title">
            Community Pack Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-community-description">
            Discover, share, and contribute rule packs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {communityPacks.map((pack, index) => (
            <Card key={pack.name} className="hover:shadow-lg transition-shadow" data-testid={`card-pack-${pack.name}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">{pack.name}</h3>
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">{pack.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>by {pack.author}</span>
                  <span data-testid={`text-installs-${pack.name}`}>{pack.installs} installs</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="secondary" 
            className="mr-4"
            data-testid="button-browse-packs"
          >
            Browse All Packs
          </Button>
          <Button 
            data-testid="button-contribute-pack"
          >
            Contribute a Pack
          </Button>
        </div>
      </div>
    </section>
  );
}
