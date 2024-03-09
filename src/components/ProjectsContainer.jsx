import './SpinnerLoader.css';
import ProjectsList from './ProjectsList';
import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { firestoreDb } from '../firebase/client';

const ProjectsContainer = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getDocs(collection(firestoreDb, 'projects')).then((response) => {
            const projects = response.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            setProjects(projects);
        });
    }, []);

    return (
        <div className="container mx-auto text-neutral-600">
            <h2 className="text-4xl pt-16 text-center md:text-6xl font-normal">Proyectos</h2>
            <hr className="mx-auto mb-0 mt-12 h-2 w-24 bg-[color:var(--main-color)]" />
            {projects.length > 0 ?
                <div>
                    <ProjectsList projects={projects} />
                </div>
                :
                <div className='text-center p-20'>
                    <span className="loader"></span>
                </div>
            }
        </div>
    )
}

export default ProjectsContainer;