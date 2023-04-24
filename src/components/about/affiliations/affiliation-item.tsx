import { TAffiliations } from "@/utils/types";

type TAffiliationItemProps = {
	affiliation: TAffiliations;
};

export function AffiliationItem({ affiliation }: TAffiliationItemProps) {
	return (
		<div className="py-6 flex justify-between items-center">
			<div className="space-y-2">
				<p className="text-grey text-xs">{affiliation.name}</p>
				<p className="text-lg walsh">{affiliation.title}</p>
			</div>
			<div className="text-grey">{affiliation.year}</div>
		</div>
	);
}
