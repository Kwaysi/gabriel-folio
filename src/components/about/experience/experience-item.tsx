import { TExperience } from "@/utils/types";

type TExperienceProps = {
	experience: TExperience;
};

export function ExperienceItem({ experience }: TExperienceProps) {
	return (
		<div className="py-6 flex justify-between items-center">
			<div className="space-y-2">
				<p className="text-xs space-x-2">
					<span>{experience.company}</span>
					<span className="text-[#3d3d3d]">|</span>
					<span className="text-grey">{experience.location}</span>
				</p>
				<p className="text-lg walsh">{experience.title}</p>
			</div>
			<div className="text-grey text-xs">{experience.year}</div>
		</div>
	);
}
