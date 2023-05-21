import { TAffiliations } from "@/utils/types";
import { AffiliationItem } from "./affiliation-item";

type TExperienceProps = {
	affiliation: TAffiliations[];
};

export function Affiliations({ affiliation }: TExperienceProps) {
	return (
		<div className="md:grid md:grid-cols-5 px-6 md:px-0">
			<div className="col-span-2 py-6">
				<h3 className="text-grey text-2xl uppercase">03. Affiliations</h3>
			</div>
			<div className="col-span-3 divide-y divide-[#3d3d3d]">
				{affiliation.map((item) => (
					<AffiliationItem key={item.id} affiliation={item} />
				))}
			</div>
		</div>
	);
}
