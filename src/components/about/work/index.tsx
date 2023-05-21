import { TProjects } from "@/utils/types";
import { WorkItem } from "./work-item";

type TWorkProps = {
	works: TProjects[];
};

export function Works({ works }: TWorkProps) {
	return (
		<div className="md:grid md:grid-cols-5 px-6 md:px-0">
			<div className="col-span-2 py-6">
				<h3 className="text-grey text-2xl uppercase">02. Some of my work</h3>
			</div>

			<div className="col-span-3 divide-y divide-[#3d3d3d]">
				{works.map((item) => (
					<WorkItem key={item.id} project={item} />
				))}
			</div>
		</div>
	);
}
