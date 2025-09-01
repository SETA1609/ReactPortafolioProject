import React, { useEffect, useState } from 'react';
import './Projects.css';
import fetchProjectData, { Project } from './ProjectsData';
import Card from './cards/Card';

function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data: Project[] = await fetchProjectData();
            setProjects(data);
        }

        void fetchData();
    }, []);

    return (
        <div className='projects' id='projects'>
            {projects.map((project, index) => (
                <Card
                    key={index}
                    title={project.title}
                    body={project.body}
                    photo={project.photo}
                />
            ))}
        </div>
    );
}
export default Projects;