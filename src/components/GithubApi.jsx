import React, { useState, useEffect } from 'react'
import '../github-users.json'

const GithubApi = () => {
  const [repos, setRepos] = useState([])
  // const [filteredRepos, setFilteredRepos] = useState([])
  const [search, setSearch] = useState('')

  console.log('Renderizou')

  // 'https://api.github.com/users/hudsonviana/repos'
  useEffect(() => {
    const controller = new AbortController()
    fetch('../src/github-users.json', { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => err)

    return () => controller.abort()
  }, [])

  // Não deve ser criado um state derivado. Basta que a variável derivada seja declarada detro do componente, e não em um state, tampouco é preciso invocar o state derivado em um useEffect.
  const filteredRepos = search.length > 0 ? repos.filter((repo) => repo.name.includes(search)) : []

  // useEffect(() => {
  //   setFilteredRepos(repos.filter((repo) => repo.name.includes(search)))
  // }, [search])

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Buscar"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />

      {search.length > 0 ? (
        <ul>
          {filteredRepos.map((repo) => (
            <li key={repo.name}>{repo.name}</li>
          ))}
        </ul>
      ) : (
        <ul>
          {repos.map((repo) => (
            <li key={repo.name}>{repo.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default GithubApi
