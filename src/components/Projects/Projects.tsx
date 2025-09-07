import React, { useEffect, useState } from 'react';
import './Projects.css';
import fetchProjectData, { Project } from './ProjectsData';
import Card from './cards/Card';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation();

    useEffect(() => {
        async function fetchData() {
            const data: Project[] = await fetchProjectData();
            setProjects(data);
            setLoading(false);
        }

        void fetchData();
    }, []);

    return (
        <section className='projects text-center' id='projects'>
        <div className='container'>
        <div className='fw-bold fs-1 pb-2'>{t('project.title')}</div>
            {loading ? (
                <div className='d-flex justify-content-center py-5'>
                    <FontAwesomeIcon icon={faSpinner} spin size="3x" data-testid="spinner" />
                </div>
            ) : (
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
            )}
        </div>
        </section>
    );
};
export default Projects;

