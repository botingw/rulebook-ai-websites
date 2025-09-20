import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold" data-testid="text-logo">
              Rulebook-AI
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild data-testid="button-nav-docs">
              <a href="https://github.com/botingw/rulebook-ai#readme" target="_blank" rel="noopener noreferrer">
                Docs
              </a>
            </Button>
            <Button variant="ghost" asChild data-testid="button-nav-community">
              <a href="https://github.com/botingw/community-index" target="_blank" rel="noopener noreferrer">
                Community
              </a>
            </Button>
            <Button variant="ghost" asChild data-testid="button-nav-github">
              <a href="https://github.com/botingw/rulebook-ai" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}