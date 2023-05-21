import { TProjects } from "@/utils/types";
import { ProjectCard } from "./projectCard";

type ProjectProps = {
	projects: TProjects[];
};

export function Projects({ projects }: ProjectProps) {
	return (
		<div className="px-6 md:px-0 py-16 divide-y divide-[#3D3D3D]">
			{projects.map((project: any, index) => (
				<ProjectCard project={project} key={project.id} index={index} />
			))}
		</div>
	);
}
