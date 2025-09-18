import type { Express } from "express";
import { createServer, type Server } from "http";
import { githubService } from "./services/github";

export async function registerRoutes(app: Express): Promise<Server> {
  // GitHub repository stats endpoint
  app.get("/api/github/stats/:owner/:repo", async (req, res) => {
    try {
      const { owner, repo } = req.params;
      
      if (!owner || !repo) {
        return res.status(400).json({ 
          message: "Owner and repository name are required" 
        });
      }

      const stats = await githubService.getRepositoryStats(owner, repo);
      
      if (!stats) {
        return res.status(404).json({ 
          message: "Repository not found or GitHub API unavailable" 
        });
      }

      res.json(stats);
    } catch (error) {
      console.error("Error fetching GitHub stats:", error);
      res.status(500).json({ 
        message: "Failed to fetch repository statistics" 
      });
    }
  });

  // Community packs count endpoint
  app.get("/api/community/packs/count", async (req, res) => {
    try {
      const count = await githubService.getCommunityPacksCount();
      res.json({ count });
    } catch (error) {
      console.error("Error fetching community packs count:", error);
      res.status(500).json({ 
        message: "Failed to fetch community packs count" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
