import SkillList from '../SkillList/SkillList';
import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { firestoreDb } from '../../firebase/client';

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
        <section id="skills" className="backgrou">
            <div className="container mx-auto text-neutral-600">
                <h2 className="pt-16 text-center text-6xl font-normal">Habilidades</h2>
                <hr className="mx-auto mb-0 mt-12 h-2 w-24 bg-[color:var(--main-color)]" />
                <div className=" flex justify-between items-center m-0">
                    <div className="m-12">
                        <SkillList skills={skills} />
                    </div>

                    <img className="w-1/2" src="../images/pictures/Developer.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default SkillsContainer;