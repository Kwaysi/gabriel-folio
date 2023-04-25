import Image from "next/image";
import arrow from "../assets/arrow.svg";
import { TSections } from "@/utils/types";
import { getFileURL } from "@/utils/helpers";

type HeroProps = {
	data: TSections;
};

export function Hero({ data }: HeroProps) {
	return (
		<div className="flex h-screen justify-between items-center space-x-6 relative">
			<div className="space-y-4 w-[652px] hero" dangerouslySetInnerHTML={{ __html: data.content }} />
			<div>
				<Image
					src={getFileURL(data, data.image)}
					alt="hero"
					width={500}
					height={500}
					className="aspect-square object-cover"
				/>
			</div>
			<Image src={arrow} alt="arrow" className="absolute bottom-16 left-1/2 -translate-x-1/2" />
		</div>
	);
}
