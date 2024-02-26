import Skills from "../Skills";

const SkillList = ({ skills }) => {
    return (
        <div className="grid grid-cols-3 gap-6">
            {skills.map((skill) => (
                <Skills key={skill.id} {...skill} />
            ))}
        </div>
    )
}

export default SkillList;