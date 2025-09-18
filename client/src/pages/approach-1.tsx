import { Helmet } from "react-helmet-async";
import Navigation from "@/components/approach-1/navigation";
import Hero from "@/components/approach-1/hero";
import CliDemo from "@/components/approach-1/cli-demo";
import Features from "@/components/approach-1/features";
import Community from "@/components/approach-1/community";
import GettingStarted from "@/components/approach-1/getting-started";
import Footer from "@/components/approach-1/footer";

export default function Approach1() {
  return (
    <>
      <Helmet>
        <title>Rulebook-AI - Approach 1 | Composable AI Assistant Rules</title>
        <meta 
          name="description" 
          content="Manage composable rule packs for AI coding assistants. Cross-platform compatibility for Cursor, CLINE, RooCode, and Windsurf." 
        />
        <meta property="og:title" content="Rulebook-AI | Composable AI Assistant Rules" />
        <meta 
          property="og:description" 
          content="Build consistent AI workflows with community-shared templates and best practices across multiple coding assistants." 
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rulebook-AI | Composable AI Assistant Rules" />
        <meta 
          name="twitter:description" 
          content="Manage modular rule packs across Cursor, CLINE, RooCode, and Windsurf." 
        />
      </Helmet>
      
      <div className="bg-background text-foreground">
        <Navigation />
        <Hero />
        <CliDemo />
        <Features />
        <Community />
        <GettingStarted />
        <Footer />
      </div>
    </>
  );
}
