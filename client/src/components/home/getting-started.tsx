import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function GettingStarted() {
  const [copied, setCopied] = useState<string | null>(null);

  const installCommands = [
    {
      title: "Install rulebook-ai",
      command: "pip install rulebook-ai",
      description: "Get the CLI tool"
    },
    {
      title: "Add your first pack",
      command: "rulebook-ai packs add basic-workflow",
      description: "Choose from built-in packs"
    },
    {
      title: "Sync to your project",
      command: "rulebook-ai project sync",
      description: "Apply context to all assistants"
    }
  ];

  const copyToClipboard = async (text: string, commandTitle: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(commandTitle);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section id="getting-started" className="py-16 bg-muted/30" data-testid="section-getting-started">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Getting Started
          </Badge>
          <h2 className="text-3xl font-bold mb-4" data-testid="text-getting-started-title">
            Ready in Under 2 Minutes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-getting-started-description">
            Install the CLI, add a pack, and start building with consistent AI context across all your tools.
          </p>
        </div>
        
        <div className="space-y-4">
          {installCommands.map((cmd, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow" data-testid={`card-install-step-${index}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center p-0">
                        {index + 1}
                      </Badge>
                      <h3 className="font-semibold" data-testid={`text-install-title-${index}`}>
                        {cmd.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 ml-12" data-testid={`text-install-description-${index}`}>
                      {cmd.description}
                    </p>
                    <div className="bg-muted rounded-lg p-3 font-mono text-sm ml-12 flex items-center justify-between">
                      <code data-testid={`text-install-command-${index}`}>{cmd.command}</code>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(cmd.command, cmd.title)}
                    className="ml-4"
                    data-testid={`button-copy-${index}`}
                  >
                    {copied === cmd.title ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground mb-4">
            Need help? Check out our documentation or join the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild data-testid="button-view-docs">
              <a href="https://github.com/botingw/rulebook-ai#readme" target="_blank" rel="noopener noreferrer">
                View Documentation
              </a>
            </Button>
            <Button variant="outline" asChild data-testid="button-join-community">
              <a href="https://github.com/botingw/rulebook-ai/discussions" target="_blank" rel="noopener noreferrer">
                Join Community
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}