import React, {useEffect, useState} from 'react';
import"./Projects.css";
import fetchProjectData, {Project} from "./ProjectsData.ts";
import Card from "./cards/Card.tsx"

function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data: Project[] = await fetchProjectData();
            setProjects(data);
        }

        fetchData();
    }, []);

    return (
        <div className='projects'>
            {/*projects.map((project, index) => (
                <Card
                    key={index}
                    title={project.title}
                    body={project.body}
                    photo={project.photo}
                />
            ))*/}
        </div>
    );
}
export default Projects;