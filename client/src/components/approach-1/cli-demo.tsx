import { Card, CardContent } from "@/components/ui/card";
import { SyntaxHighlight } from "@/components/ui/syntax-highlight";

export default function CliDemo() {
  const cliCommands = `$ pip install rulebook-ai
$ rulebook-ai packs add python-best-practices
$ rulebook-ai project sync --assistant cursor
✓ Rules synchronized to .cursor/rules/
✓ Memory files created in memory/
✓ Project ready for AI assistance`;

  return (
    <section className="py-16 bg-muted" data-testid="section-cli-demo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-testid="text-cli-demo-title">
            Get Started in 30 Seconds
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-cli-demo-description">
            Simple commands to manage your AI assistant rules
          </p>
        </div>
        
        <Card className="shadow-lg border border-border overflow-hidden">
          <div className="bg-secondary px-4 py-3 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="ml-4 text-sm text-muted-foreground font-mono">Terminal</div>
          </div>
          <CardContent className="p-6">
            <SyntaxHighlight 
              code={cliCommands} 
              language="bash"
              data-testid="cli-commands"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
