import Image from "next/image";
import menu from "../assets/menu.svg";
import { Menu } from "./menu";
import { useState } from "react";

export function Header() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<header className="w-full flex justify-between px-16 py-6 text-white fixed bg-black z-10">
				<h1 className="text-2xl">INYAMAH</h1>
				<div>
					<Image src={menu} alt="menu" onClick={() => setOpen(true)} />
				</div>
			</header>
			<Menu open={open} setOpen={setOpen} />
		</>
	);
}
