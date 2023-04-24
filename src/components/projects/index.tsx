import { TProjects } from "@/utils/types";
import { ProjectCard } from "./projectCard";

type ProjectProps = {
	projects: TProjects[];
};

export function Projects({ projects }: ProjectProps) {
	return (
		<div className="space-y-20 py-16">
			{projects.map((project: any,index) => (
				<ProjectCard project={project} key={project.id} index={index} />
			))}
		</div>
	);
}
