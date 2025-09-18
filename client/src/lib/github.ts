import { useQuery } from "@tanstack/react-query";

export interface GitHubStats {
  stars: number;
  forks: number;
}

export interface CommunityStats {
  count: number;
}

export function useGitHubStats(owner: string, repo: string) {
  return useQuery<GitHubStats>({
    queryKey: ["/api/github/stats", owner, repo],
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
}

export function useCommunityPacksCount() {
  return useQuery<CommunityStats>({
    queryKey: ["/api/community/packs/count"],
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 2,
  });
}
