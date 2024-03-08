import './SpinnerLoader.css'
import SkillList from './SkillList';
import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { firestoreDb } from '../firebase/client';

const SkillsContainer = () => {

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        getDocs(collection(firestoreDb, 'skills')).then((response) => {
            const skills = response.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            setSkills(skills);
        });
    }, []);

    return (
        <div className="container mx-auto pb-8 text-neutral-600">
            <h2 className="text-4xl pt-16 text-center md:text-6xl font-normal">Habilidades</h2>
            <hr className="mx-auto mb-0 mt-12 h-2 w-24 bg-[color:var(--main-color)]" />
            <div className="p-8 flex flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap justify-between items-center m-0">
                <div className="px-8 m-12 mx-auto lg:w-2/5">
                    {skills.length > 0 ?
                        <SkillList skills={skills} /> :
                        <div className='text-center p-20'>
                            <span className="loader"></span>
                        </div>
                    }

                </div>
                <img className="mx-auto w-9/12 lg:w-2/5" src="../images/pictures/Developer.png" alt="" />
            </div>
        </div>
    )
}

export default SkillsContainer;