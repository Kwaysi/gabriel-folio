import Image from "next/image";
import arrow from "../assets/arrow.svg";
import { TSections } from "@/utils/types";
import { getFileURL } from "@/utils/helpers";

type HeroProps = {
	data: TSections;
};

export function Hero({ data }: HeroProps) {
	return (
		<div className="md:flex h-screen justify-between items-center space-x-6 relative space-y-10 md:space-y-0">
			<div className="space-y-4 md:w-[652px] hero px-10 md:px-0 mt-24 md:mt-0" dangerouslySetInnerHTML={{ __html: data.content }} />
			<div>
				<Image
					src={getFileURL(data, data.image)}
					alt="hero"
					width={500}
					height={500}
					className="w-full aspect-square object-cover"
				/>
			</div>
			<Image src={arrow} alt="arrow" className="absolute bottom-16 left-1/2 -translate-x-1/2" />
		</div>
	);
}
