import { useRouter } from "next/router";
import { useRef } from "react";

export function PageTitle() {
	const { pathname } = useRouter();
	const { current: title } = useRef(pathname.replace("/", ""));

	return (
		<div className="space-y-10 max-w-6xl mx-auto mt-36 mb-10">
			<div className="flex capitalize items-center space-x-2">
				<p className="text-white text-opacity-30">Home</p>
				<p className="text-white text-opacity-10">|</p>
				<p>{title}</p>
			</div>
			<div>
				<h3 className="uppercase text-2xl text-grey text-center">{title}</h3>
			</div>
		</div>
	);
}
