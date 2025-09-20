import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Book, Palette, Zap } from "lucide-react";

export default function ApproachSelection() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Book className="text-primary text-3xl" />
            <h1 className="text-3xl font-bold">Rulebook-AI Landing Pages</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from different landing page approaches to see various design and messaging strategies for the same product.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Book className="w-5 h-5 text-primary" />
                  <span>Approach 1</span>
                </CardTitle>
                <Badge variant="default">Ready</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Clean Developer Focus</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Professional, technical presentation following first principles. Emphasizes CLI functionality, cross-platform compatibility, and community ecosystem.
              </p>
              <div className="space-y-2 text-xs text-muted-foreground mb-4">
                <div>• Hero with value proposition</div>
                <div>• Interactive CLI demos</div>
                <div>• GitHub integration</div>
                <div>• Community pack showcase</div>
              </div>
              <Link href="/approach-1">
                <Button className="w-full" data-testid="button-approach-1">
                  View Original Design
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Palette className="w-5 h-5 text-primary" />
                  <span>Approach 2</span>
                </CardTitle>
                <Badge variant="default">Ready</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">With Landing Page Guide</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Same feature specs as Approach 1, but AI also received a comprehensive landing page guide for better structure and messaging.
              </p>
              <div className="space-y-2 text-xs text-muted-foreground mb-4">
                <div>• Hero with clear value proposition</div>
                <div>• Step-by-step how it works</div>
                <div>• Community pack ecosystem</div>
                <div>• Getting started with CLI</div>
              </div>
              <Link href="/approach-2">
                <Button className="w-full" data-testid="button-approach-2">
                  View Approach 2
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="opacity-50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-muted-foreground" />
                  <span>Approach 3</span>
                </CardTitle>
                <Badge variant="secondary">Planned</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Marketing Focused</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Sales-oriented approach with benefits, social proof, and conversion optimization techniques.
              </p>
              <div className="space-y-2 text-xs text-muted-foreground mb-4">
                <div>• Benefit-driven messaging</div>
                <div>• Social proof section</div>
                <div>• Pricing & plans</div>
                <div>• Lead capture forms</div>
              </div>
              <Button disabled className="w-full" data-testid="button-approach-3">
                Planned
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            This multi-approach platform allows comparison testing of different landing page strategies for the same product.
          </p>
        </div>
      </div>
    </div>
  );
}
