import Image from "next/image";
import arrow from "../assets/arrow.svg";

export function Hero() {
	return (
		<div className="flex h-screen justify-between items-center space-x-6 relative">
			<div className="space-y-4 w-[652px]">
				<span className="text-grey text-xl">Hi, I&apos;m Gabriel Inyamah</span>
				<p className="walsh font-medium text-[40px] leading-[1.2]">
					I&apos;m currently working as a Senior Product Designer at Enyata, Formerly at Prunedge.
					<br /> <br />I create accessible, user-centred experiences that simplify user needs &
					business processes.
				</p>
			</div>
			<div>
				<Image
					src="/inyamah.jpeg"
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
