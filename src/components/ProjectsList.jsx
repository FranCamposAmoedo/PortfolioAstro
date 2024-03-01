import Projs from "./Projs";

const ProjectsList = ({ projects }) => {
    return (
        <div className="flex flex-col">
            {projects.map((project) => (
                <Projs key={project.id} {...project} />
            ))}
        </div>
    )
}

export default ProjectsList;