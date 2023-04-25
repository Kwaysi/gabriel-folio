import Image from "next/image";
import menu from "../../assets/menu.svg";
import { Menu } from "./menu";
import { useState } from "react";
import Link from "next/link";

export function Header() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<header className="w-full flex justify-between px-16 py-6 text-white fixed bg-black z-10">
				<Link href={"/"}>
					<h1 className="text-2xl">INYAMAH</h1>
				</Link>
				<div className="cursor-pointer">
					<Image src={menu} alt="menu" onClick={() => setOpen(true)} />
				</div>
			</header>
			<Menu open={open} setOpen={setOpen} />
		</>
	);
}
