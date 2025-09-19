import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Upload, Zap, Gift } from "lucide-react";

export default function Community() {
  const communityPacks = [
    {
      name: "pm-workflow-copilot",
      author: "@botingw",
      description: "AI assistant pack that guides you through a lightweight product management workflow from idea to MVP documentation.",
      installs: "89",
      featured: true
    },
    {
      name: "python-best-practices",
      author: "@community",
      description: "Production-ready Python rules with type hints, testing, and documentation standards.",
      installs: "67"
    },
    {
      name: "react-component-guide",
      author: "@community",
      description: "Modern React patterns with hooks, TypeScript, and component architecture guidelines.",
      installs: "45"
    }
  ];

  const contributorBenefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Reach Thousands",
      description: "Get your expertise in front of developers worldwide"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Build Reputation",
      description: "Establish yourself as a thought leader in AI-assisted development"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Give Back",
      description: "Help the community with your proven workflows and best practices"
    }
  ];

  return (
    <section id="community" className="py-16" data-testid="section-community">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-testid="text-community-title">
            Community Pack Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground mb-6" data-testid="text-community-description">
            Discover proven AI workflows, share your expertise, and build the future of AI-assisted development
          </p>
          <Badge variant="secondary" className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            <Upload className="w-4 h-4 mr-2" />
            New packs added weekly
          </Badge>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {communityPacks.map((pack, index) => (
            <Card key={pack.name} className={`hover:shadow-lg transition-shadow ${pack.featured ? 'ring-2 ring-primary/20' : ''}`} data-testid={`card-pack-${pack.name}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{pack.name}</h3>
                    {pack.featured && (
                      <Badge variant="default" className="text-xs">Featured</Badge>
                    )}
                  </div>
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

        {/* Pack Contributor Promotion Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4" data-testid="text-contributor-title">
              Share Your AI Expertise with the World
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contributor-description">
              Turn your proven AI workflows into community packs. Help other developers while building your reputation in the AI-assisted development space.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {contributorBenefits.map((benefit, index) => (
              <div key={index} className="text-center" data-testid={`benefit-${index}`}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 text-primary">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              data-testid="button-publish-pack"
            >
              <Upload className="mr-2 h-5 w-5" />
              Publish Your First Pack
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Free to publish • Attribution included • Community support
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            variant="secondary" 
            className="mr-4"
            asChild
            data-testid="button-browse-packs"
          >
            <a href="https://github.com/botingw/community-index" target="_blank" rel="noopener noreferrer">
              Browse All Packs
            </a>
          </Button>
          <Button 
            asChild
            data-testid="button-contribute-pack"
          >
            <a href="https://github.com/botingw/community-index#contributing" target="_blank" rel="noopener noreferrer">
              Contribute a Pack
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
