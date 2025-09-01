import axios from 'axios';

export interface Project {
  title: string;
  body: string;
  photo: string;
  link: string;
}

// Placeholder repository URLs. Replace with your own projects.
const repos = [
  'https://github.com/SETA1609/LottoAufgabe',
  'https://github.com/SETA1609/vag',
  'https://github.com/SETA1609/End-Projekt-AW',
];

interface RepoResponse {
  name: string;
  description: string | null;
  owner?: { avatar_url?: string };
}

async function fetchRepo(repoUrl: string): Promise<Project> {
  const path = repoUrl.replace('https://github.com/', '');
  const [owner, repo] = path.split('/');

  try {
    const { data } = await axios.get<RepoResponse>(`https://api.github.com/repos/${owner}/${repo}`);
    return {
      title: data.name,
      body: data.description ?? 'No description available.',
      photo: data.owner?.avatar_url ?? 'https://via.placeholder.com/300x200',
      link: repoUrl
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Error fetching repository ${repoUrl}: ${message}`);
    return {
      title: repo,
      body: 'Unable to load repository details.',
      photo: 'https://via.placeholder.com/300x200',
      link: repoUrl
    };
  }
}

export default async function fetchProjectData(): Promise<Project[]> {
  return Promise.all(repos.map(fetchRepo));
}
