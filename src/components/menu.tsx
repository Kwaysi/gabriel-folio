import Image from "next/image";
import close from "../assets/close.svg";

type MenuProps = {
	open: boolean;
	setOpen: (value: boolean) => void;
};

export function Menu({ open, setOpen }: MenuProps) {
	return (
		<div
			className={`w-screen overflow-hidden fixed bg-black space-y-6 ${open ? "h-screen" : "h-0"} z-20`}
		>
			<div className="relative h-screen">
				<div className="flex justify-between px-16 py-6">
					<h1 className="text-2xl">INYAMAH</h1>
					<Image src={close} alt="close" onClick={() => setOpen(false)} />
				</div>

				<div className="p-6 text-grey">
					<div className="text-4xl menu-item">
						<ul className="space-y-6 w-full">
							<li>Home</li>
							<li>About</li>
							<li>Work</li>
							<li>Archive</li>
							<li>Contact</li>
							<li>Resume</li>
						</ul>
					</div>
					<div className="w-full flex items-center justify-center absolute bottom-12 ">
						<ul className="flex space-x-10">
							<li>Linkedin</li>
							<li>Dribble</li>
							<li>Medium</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
