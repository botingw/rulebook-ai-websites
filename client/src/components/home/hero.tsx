import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Github, Sparkles } from "lucide-react";
import { useGitHubStats, useCommunityPacksCount } from "@/lib/github";

export default function Hero() {
  const { data: githubStats, isLoading: githubLoading } = useGitHubStats("botingw", "rulebook-ai");
  const { data: communityStats, isLoading: communityLoading } = useCommunityPacksCount();

  const scrollToGettingStarted = () => {
    const element = document.getElementById('getting-started');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="inline-flex items-center bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Cross-Platform AI Context Management
            </Badge>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
            Consistent AI context across<br/>
            <span className="text-primary">all your coding assistants</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-description">
            Cross-platform rule management for 10 AI assistants including Cursor, Windsurf, Cline, RooCode, and more. 
            Composable packs, zero config conflicts, with a thriving community ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="text-lg font-semibold"
              onClick={scrollToGettingStarted}
              data-testid="button-install-cli"
            >
              <Download className="mr-2 h-5 w-5" />
              Install via CLI
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg font-semibold"
              asChild
              data-testid="button-view-docs"
            >
              <a href="https://github.com/botingw/rulebook-ai" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center text-center">
            <div>
              <div className="text-2xl font-bold text-foreground" data-testid="text-github-stars">
                {githubLoading ? "..." : githubStats?.stars?.toLocaleString() || "350"}
              </div>
              <div className="text-sm text-muted-foreground">GitHub Stars</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground" data-testid="text-github-forks">
                {githubLoading ? "..." : githubStats?.forks?.toLocaleString() || "30"}
              </div>
              <div className="text-sm text-muted-foreground">GitHub Forks</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground" data-testid="text-community-packs">
                {communityLoading ? "..." : communityStats?.count || "15"}
              </div>
              <div className="text-sm text-muted-foreground">Community Packs</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground" data-testid="text-supported-assistants">
                10
              </div>
              <div className="text-sm text-muted-foreground">Supported Assistants</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}