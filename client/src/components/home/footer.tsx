import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4" data-testid="text-footer-logo">
              Rulebook-AI
            </h3>
            <p className="text-sm text-muted-foreground mb-4" data-testid="text-footer-description">
              Cross-platform AI context management for developers. Consistent workflows across all your coding assistants.
            </p>
            <Button variant="ghost" size="sm" asChild data-testid="button-footer-github">
              <a href="https://github.com/botingw/rulebook-ai" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-product-title">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/botingw/rulebook-ai#features" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-features">
                  Features
                </a>
              </li>
              <li>
                <a href="https://github.com/botingw/rulebook-ai#installation" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-installation">
                  Installation
                </a>
              </li>
              <li>
                <a href="https://github.com/botingw/rulebook-ai#supported-assistants" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-supported">
                  Supported Assistants
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-community-title">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/botingw/community-index" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-packs">
                  Community Packs
                </a>
              </li>
              <li>
                <a href="https://github.com/botingw/community-index#contributing" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-contribute">
                  Contribute
                </a>
              </li>
              <li>
                <a href="https://github.com/botingw/rulebook-ai/discussions" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-discussions">
                  Discussions
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-resources-title">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/botingw/rulebook-ai#readme" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-docs">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://github.com/botingw/rulebook-ai/issues" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-issues">
                  Issues
                </a>
              </li>
              <li>
                <a href="https://github.com/botingw/rulebook-ai/releases" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-releases">
                  Releases
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
            © 2025 Rulebook-AI. Open source under MIT License.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a href="https://github.com/botingw/rulebook-ai/blob/main/LICENSE" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-license">
              License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}