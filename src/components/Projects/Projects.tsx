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
        <div className='projects container' id='projects'>
            <div className='row g-4'>
                {projects.map((project, index) => (
                    <div key={index} className='col-md-6'>
                        <Card
                            title={project.title}
                            body={project.body}
                            photo={project.photo}
                            link={project.link}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Projects;

