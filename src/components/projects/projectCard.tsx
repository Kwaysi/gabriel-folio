import { TProjects } from "@/utils/types";
import { getFileURL } from "@/utils/helpers";
import Image from "next/image";

type ProjectProps = {
	project: TProjects;
	index: number;
};

export function ProjectCard({ project, index }: ProjectProps) {
	return (
		<div
			className={`flex max-w-3xl mx-auto ${index % 2 === 1 ? "flex-row-reverse" : ""} items-center`}
		>
			<div className={`space-y-8 ${index % 2 === 1 ? "ml-10" : "mr-10"}`}>
				<div className="space-y-2">
					<h1 className="walsh text-xl">{project.name}</h1>
					<p className="text-grey">{project.description}</p>
				</div>
				<span className="block">{project.tag}</span>
			</div>
			<Image
				src={getFileURL(project, project.cover)}
				alt=""
				width={342}
				height={100}
				className="aspect-video object-cover "
			/>
		</div>
	);
}
