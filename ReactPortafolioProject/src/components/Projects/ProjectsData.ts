import axios from 'axios';
import * as fs from 'fs';
import Projects from "./Projects.tsx";

export interface Project {
    title: string,
    body: string,
    photo: string
}
async function getReadmeContent(repository: string): Promise<string> {
    const url = `https://api.github.com/repos/SETA1609/${repository}/readme`;

    try {
        const response = await axios.get(url);
        const readmeData = response.data;
        const readmeContent = Buffer.from(readmeData.content, 'base64').toString('utf-8');
        return readmeContent;
    } catch (error) {
        console.error(`Error fetching README for ${repository}: ${error.message}`);
        return '';
    }
}

async function fetchProjectData(): Promise<Project[]>  {
    const projects: Project[] = [
        {
            title: "Lotto-3000",
            body: await getReadmeContent("LottoAufgabe"),
            photo: ""
        },
        {
            title: "Shee.app",
            body: await getReadmeContent("vag"),
            photo: ""
        },
        {
            title: "AW-Endprojeckt",
            body: await getReadmeContent("End-Projekt-AW"),
            photo: ""
        },
        {
            title: "Transilvania",
            body: await getReadmeContent("transilvania"),
            photo: ""
        }
    ];
}
export default fetchProjectData;