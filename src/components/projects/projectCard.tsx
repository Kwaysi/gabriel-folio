import { TProjects } from "@/utils/types";
import { getFileURL } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";

type ProjectProps = {
	project: TProjects;
	index: number;
};

export function ProjectCard({ project, index }: ProjectProps) {
	const comp = (
		<div
			className={`space-y-10 md:space-x-0 md:flex ${index % 2 === 1 ? "flex-row-reverse" : ""} items-center`}
		>
			<div className={`space-y-8 ${index % 2 === 1 ? "md:ml-10" : "md:mr-10"}`}>
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
				className="aspect-video object-cover"
			/>
		</div>
	);

	if (project.case_study)
		return (
			<div className="max-w-3xl mx-auto py-10">
				<Link href={`/work/${project.slug}`}>{comp}</Link>
			</div>
		);
	return comp;
}
