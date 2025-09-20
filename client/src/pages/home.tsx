import { Helmet } from "react-helmet-async";
import Navigation from "@/components/home/navigation";
import Hero from "@/components/home/hero";
import HowItWorks from "@/components/home/how-it-works";
import Features from "@/components/home/features";
import Community from "@/components/home/community";
import GettingStarted from "@/components/home/getting-started";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Rulebook-AI | Cross-Platform AI Context Management for Developers</title>
        <meta 
          name="description" 
          content="Manage consistent AI rules across 10+ coding assistants including Cursor, Windsurf, Cline, RooCode & more. Composable packs, community ecosystem, zero config conflicts." 
        />
        <meta property="og:title" content="Rulebook-AI | Cross-Platform AI Context Management" />
        <meta 
          property="og:description" 
          content="Cross-platform rule management for 10 AI assistants. Composable packs, zero config conflicts, with a thriving community ecosystem." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rulebook-ai.replit.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rulebook-AI | Cross-Platform AI Context Management" />
        <meta 
          name="twitter:description" 
          content="Cross-platform rule management for 10 AI assistants. Composable packs, community ecosystem, zero config conflicts." 
        />
        <meta name="keywords" content="AI coding assistants, Cursor, Windsurf, Cline, RooCode, AI rules, developer tools, AI context management" />
      </Helmet>
      
      <div className="bg-background text-foreground">
        <Navigation />
        <Hero />
        <HowItWorks />
        <Features />
        <Community />
        <GettingStarted />
        <Footer />
      </div>
    </>
  );
}