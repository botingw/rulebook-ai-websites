import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Book, Github, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <Link href="/approach-selection">
              <div className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity">
                <Book className="text-primary text-2xl" />
                <span className="font-bold text-xl">Rulebook-AI</span>
                <Badge variant="secondary" className="text-xs">
                  Approach 1
                </Badge>
              </div>
            </Link>
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-features"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('getting-started')}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-getting-started"
              >
                Getting Started
              </button>
              <button 
                onClick={() => scrollToSection('community')}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-community"
              >
                Community
              </button>
              <a 
                href="https://github.com/rulebook-ai/rulebook-ai" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="nav-docs"
              >
                Docs
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/rulebook-ai/rulebook-ai" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-github"
            >
              <Github className="text-xl" />
            </a>
            <Button 
              className="hidden sm:block"
              onClick={() => scrollToSection('getting-started')}
              data-testid="button-get-started-nav"
            >
              Get Started
            </Button>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('features')}
                className="block text-muted-foreground hover:text-foreground transition-colors w-full text-left py-2"
                data-testid="mobile-nav-features"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('getting-started')}
                className="block text-muted-foreground hover:text-foreground transition-colors w-full text-left py-2"
                data-testid="mobile-nav-getting-started"
              >
                Getting Started
              </button>
              <button 
                onClick={() => scrollToSection('community')}
                className="block text-muted-foreground hover:text-foreground transition-colors w-full text-left py-2"
                data-testid="mobile-nav-community"
              >
                Community
              </button>
              <a 
                href="https://github.com/rulebook-ai/rulebook-ai" 
                className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="mobile-nav-docs"
              >
                Docs
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
