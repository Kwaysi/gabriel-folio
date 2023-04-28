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
					<Image
						src={close}
						alt="close"
						onClick={() => setOpen(false)}
						className="cursor-pointer"
					/>
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
							<MenuItem url={"/work"} isActive={pathname.includes("work")} setOpen={setOpen}>
								work
							</MenuItem>
							<MenuItem url={"/archive"} isActive={pathname === "/archive"} setOpen={setOpen}>
								Archive
							</MenuItem>
							<MenuItem
								url={"mailto:inyamahgabrielimoh@gmail.com"}
								isActive={pathname.includes("#contact")}
								setOpen={setOpen}
							>
								Contact
							</MenuItem>
							<MenuItem
								url={
									"https://docs.google.com/document/d/1IuT7Am90GWjLfVGDiZkjn70wWHEnLY0nkEpzKVstxxg/edit?usp=sharing"
								}
								isActive={pathname.includes("#contact")}
								setOpen={setOpen}
							>
								Resume
							</MenuItem>
						</ul>
					</div>
					<div className="w-full flex items-center justify-center absolute bottom-12 ">
						<ul className="flex space-x-10 sm-links">
							<a
								href="https://www.linkedin.com/in/gabriel-inyamah/"
								rel="noreferrer noopener"
								target="_blank"
							>
								<li>Linkedin</li>
							</a>
							<a href="https://dribbble.com/Inyamah" target="_blank">
								<li>Dribbble</li>
							</a>
							<a href="https://medium.com/@inyamah" target="_blank">
								<li>Medium</li>
							</a>
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
		<div>
			<Link href={url}>
				<li
					onClick={() => setOpen(false)}
					className={`${isActive ? "text-white line-through" : ""}`}
				>
					{children}
				</li>
			</Link>
		</div>
	);
};
