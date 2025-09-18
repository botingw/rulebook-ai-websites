interface GitHubRepoResponse {
  stargazers_count: number;
  forks_count: number;
  name: string;
  full_name: string;
}

export class GitHubService {
  private baseUrl = 'https://api.github.com';

  async getRepositoryStats(owner: string, repo: string): Promise<{ stars: number; forks: number } | null> {
    try {
      const response = await fetch(`${this.baseUrl}/repos/${owner}/${repo}`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Rulebook-AI-Landing-Page'
        }
      });

      if (!response.ok) {
        console.error(`GitHub API error: ${response.status} ${response.statusText}`);
        return null;
      }

      const data: GitHubRepoResponse = await response.json();
      
      return {
        stars: data.stargazers_count,
        forks: data.forks_count
      };
    } catch (error) {
      console.error('Error fetching GitHub repository stats:', error);
      return null;
    }
  }

  async getCommunityPacksCount(): Promise<number> {
    // This would typically query a community index API
    // For now, return a reasonable default
    return 45;
  }
}

export const githubService = new GitHubService();
