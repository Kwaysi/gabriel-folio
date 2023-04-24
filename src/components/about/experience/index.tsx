import { TExperience } from "@/utils/types";
import { ExperienceItem } from "./experience-item";

type TExperienceProps = {
	experience: TExperience[];
};

export function Experience({ experience }: TExperienceProps) {
	return (
		<div className="grid grid-cols-5">
			<div className="col-span-2 py-6">
				<h3 className="text-grey text-2xl uppercase">01. Experience</h3>
			</div>
			<div className="col-span-3 divide-y divide-[#3d3d3d]">
				{experience.map((item) => (
					<ExperienceItem key={item.id} experience={item} />
				))}
			</div>
		</div>
	);
}
