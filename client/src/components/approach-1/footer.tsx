import { Badge } from "@/components/ui/badge";
import { Book, Github, Twitter } from "lucide-react";
import { SiDiscord } from "react-icons/si";

export default function Footer() {
  const productLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#" },
    { name: "Changelog", href: "https://github.com/rulebook-ai/rulebook-ai/releases" },
    { name: "Roadmap", href: "https://github.com/rulebook-ai/rulebook-ai/projects" }
  ];

  const resourceLinks = [
    { name: "Documentation", href: "https://github.com/rulebook-ai/rulebook-ai#readme" },
    { name: "Community Packs", href: "#community" },
    { name: "Examples", href: "https://github.com/rulebook-ai/rulebook-ai/tree/main/examples" },
    { name: "Support", href: "https://github.com/rulebook-ai/rulebook-ai/issues" }
  ];

  const socialLinks = [
    { 
      name: "GitHub", 
      href: "https://github.com/rulebook-ai/rulebook-ai", 
      icon: Github 
    },
    { 
      name: "Twitter", 
      href: "https://twitter.com/rulebook_ai", 
      icon: Twitter 
    },
    { 
      name: "Discord", 
      href: "https://discord.gg/rulebook-ai", 
      icon: SiDiscord 
    }
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-muted border-t border-border py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Book className="text-primary text-2xl" />
              <span className="font-bold text-xl">Rulebook-AI</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md" data-testid="text-footer-description">
              The composable rule management system for AI coding assistants. 
              Build better AI workflows with community-driven best practices.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`link-social-${link.name.toLowerCase()}`}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              {productLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('#') ? (
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="hover:text-foreground transition-colors"
                      data-testid={`link-product-${link.name.toLowerCase()}`}
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a 
                      href={link.href} 
                      className="hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-product-${link.name.toLowerCase()}`}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('#') ? (
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="hover:text-foreground transition-colors"
                      data-testid={`link-resource-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a 
                      href={link.href} 
                      className="hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-resource-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm" data-testid="text-copyright">
            © 2024 Rulebook-AI. Open source under MIT license.
          </p>
          <div className="mt-4 sm:mt-0">
            <Badge variant="secondary" className="text-xs" data-testid="badge-approach">
              Approach 1: Clean Developer Focus
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
}
