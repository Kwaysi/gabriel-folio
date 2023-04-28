export function Footer() {
	return (
		<>
			<div className="px-44 space-y-10 py-16">
				<div className="flex justify-between text-white text-opacity-60">
					<div>
						<p>
							Contact Me -
							<a href="mailto:inyamahgabrielimoh@gmail.com" className="underline">
							inyamahgabrielimoh@gmail.com
							</a>
						</p>
					</div>
					<div>
						<ul className="flex space-x-10 sm-links">
							<a href="https://www.linkedin.com/in/gabriel-inyamah/" target="_blank">
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
				<hr className="border border-[#3D3D3D] w-full border-b-transparent" />
				<div className="text-center">
					<p>Copyright © 2023</p>
				</div>
			</div>
		</>
	);
}
