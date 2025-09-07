import axios from 'axios';
import lottoImg from '../../assets/projects/lotto.jpg';
import vagImg from '../../assets/projects/vag.jpg';
import finalImg from '../../assets/projects/final-project.jpg';
import portafolioImg from '../../assets/projects/portafolio.jpg';

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
  'https://github.com/SETA1609/ReactPortafolioProject',
];

const repoImages: Record<string, string> = {
  LottoAufgabe: lottoImg,
  vag: vagImg,
  'End-Projekt-AW': finalImg,
  ReactPortafolioProject: portafolioImg
};

interface RepoResponse {
  name: string;
  description: string | null;
}

async function fetchRepo(repoUrl: string): Promise<Project> {
  const path = repoUrl.replace('https://github.com/', '');
  const [, repo] = path.split('/');

  try {
    const { data } = await axios.get<RepoResponse>(`https://api.github.com/repos/${path}`);
    return {
      title: data.name,
      body: data.description ?? 'No description available.',
      photo: repoImages[repo] ?? 'https://via.placeholder.com/300x200',
      link: repoUrl
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Error fetching repository ${repoUrl}: ${message}`);
    return {
      title: repo,
      body: 'Unable to load repository details.',
      photo: repoImages[repo] ?? 'https://via.placeholder.com/300x200',
      link: repoUrl
    };
  }
}

export default async function fetchProjectData(): Promise<Project[]> {
  return Promise.all(repos.map(fetchRepo));
}
