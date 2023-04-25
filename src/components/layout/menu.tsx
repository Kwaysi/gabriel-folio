import Image from "next/image";
import close from "../../assets/close.svg";
import { useRouter } from "next/router";
import Link from "next/link";

type MenuProps = {
	open: boolean;
	setOpen: (value: boolean) => void;
};

export function Menu({ open, setOpen }: MenuProps) {
	const { pathname } = useRouter();

	return (
		<div
			className={`w-screen overflow-hidden fixed bg-black space-y-6 ${
				open ? "h-screen" : "h-0"
			} z-20`}
		>
			<div className="relative h-screen">
				<div className="flex justify-between px-16 py-6">
					<h1 className="text-2xl">INYAMAH</h1>
					<Image src={close} alt="close" onClick={() => setOpen(false)} className="cursor-pointer" />
				</div>

				<div className="p-6 text-grey">
					<div className="text-4xl menu-item">
						<ul className="space-y-6 w-full">
							<MenuItem url={"/"} isActive={pathname === "/"} setOpen={setOpen}>
								Home
							</MenuItem>
							<MenuItem url={"/about"} isActive={pathname === "/about"} setOpen={setOpen}>
								about
							</MenuItem>
							<MenuItem url={"/work"} isActive={pathname === "/work"} setOpen={setOpen}>
								work
							</MenuItem>
							<MenuItem url={"/archive"} isActive={pathname === "/archive"} setOpen={setOpen}>
								Archive
							</MenuItem>
							<MenuItem url={"#contact"} isActive={pathname.includes("#contact")} setOpen={setOpen}>
								Contact
							</MenuItem>
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

type MenuItemProps = {
	url: string;
	isActive: boolean;
	setOpen: (value: boolean) => void;
	children: React.ReactNode;
};

const MenuItem = ({ url, isActive, setOpen, children }: MenuItemProps) => {
	return (
		<Link href={url}>
			<li onClick={() => setOpen(false)} className={`${isActive ? "text-white line-through" : ""}`}>
				{children}
			</li>
		</Link>
	);
};