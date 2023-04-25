import { TProjects } from "@/utils/types";

type TWorkItemProps = {
	project: TProjects;
};

export function WorkItem({ project }: TWorkItemProps) {
	return (
		<div className="py-6 flex justify-between items-center">
			<div className="space-y-2">
				<p className="text-grey text-xs">{project.tag}</p>
				<p className="text-lg walsh">{project.name}</p>
			</div>
			<div className="text-grey text-xs">{project.year}</div>
		</div>
	);
}
