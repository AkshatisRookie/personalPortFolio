'use client'
import React, { useEffect, useState } from "react"

// This component fetches and displays real-time GitHub stats for AkshatisRookie
// For interviewers: Demonstrates API integration and dynamic data rendering
const GithubStats: React.FC = () => {
  const [repoCount, setRepoCount] = useState<number | null>(null)
  const [pinnedRepos, setPinnedRepos] = useState<Array<{ name: string; url: string }>>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Fetch public repository count
    fetch("https://api.github.com/users/AkshatisRookie")
      .then((res) => res.json())
      .then((data) => setRepoCount(data.public_repos))
      .catch(() => setError("Failed to fetch repo count"))

    // Fetch 3 most recently updated repos
    fetch("https://api.github.com/users/AkshatisRookie/repos?sort=updated&per_page=3")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPinnedRepos(
            data.map((repo: any) => ({ name: repo.name, url: repo.html_url }))
          )
        }
      })
      .catch(() => setError("Failed to fetch repos"))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading GitHub stats...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <>
      <h3 className="text-xl font-semibold mb-4">GitHub Stats (Live)</h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Public Repositories</span>
          <span className="font-semibold">{repoCount !== null ? repoCount : "-"}</span>
        </div>
        <div className="flex justify-between">
          <span>Recent Repositories</span>
          <span>
            {pinnedRepos.length > 0 ? (
              pinnedRepos.map((repo, idx) => (
                <a
                  key={repo.url}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline mx-1"
                >
                  {repo.name}
                  {idx < pinnedRepos.length - 1 ? "," : ""}
                </a>
              ))
            ) : (
              <span>-</span>
            )}
          </span>
        </div>
      </div>
    </>
  )
}

export default GithubStats 