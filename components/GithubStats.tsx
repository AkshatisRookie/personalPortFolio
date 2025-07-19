'use client';
import React, { useEffect, useState } from 'react';

interface Repo {
  name: string;
  url: string;
}

const GithubStats: React.FC = () => {
  const [repoCount, setRepoCount] = useState<number | null>(null);
  const [pinnedRepos, setPinnedRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch('https://api.github.com/users/AkshatisRookie'),
          fetch('https://api.github.com/users/AkshatisRookie/repos?sort=updated&per_page=3'),
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('GitHub API error');
        }

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        setRepoCount(userData.public_repos);
        if (Array.isArray(reposData)) {
          setPinnedRepos(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            reposData.map((repo: any) => ({
              name: repo?.name,
              url: repo?.html_url,
            }))
          );
        }
      } catch {
        setError('Failed to fetch GitHub stats');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) return <div>Loading GitHub stats...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <>
      <h3 className="text-xl font-semibold mb-4">GitHub Stats (Live)</h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Public Repositories</span>
          <span className="font-semibold">{repoCount ?? '-'}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <span>Recent Repositories</span>
          <span className="flex flex-wrap gap-x-2 font-medium">
            {pinnedRepos.length > 0 ? (
              pinnedRepos.map((repo, idx) => (
                <a
                  key={repo.url}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-600"
                >
                  {repo.name}
                  {idx < pinnedRepos.length - 1 ? ',' : ''}
                </a>
              ))
            ) : (
              <span>-</span>
            )}
          </span>
        </div>
      </div>
    </>
  );
};

export default GithubStats;
