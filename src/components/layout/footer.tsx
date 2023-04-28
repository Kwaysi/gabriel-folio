export function Footer() {
	return (
		<>
			<div className="px-44 space-y-10 py-16">
				<div className="flex justify-between text-white text-opacity-60">
					<div>
						<p>
							Contact Me -
							<a href="mailto:hello@inyamah.me" className="underline">
								hello@inyamah.com
							</a>
						</p>
					</div>
					<div>
						<ul className="flex space-x-10 sm-links">
							<a href="https://www.linkedin.com/in/gabriel-inyamah/">
								<li>Linkedin</li>
							</a>
							<a href="https://dribbble.com/Inyamah">
								<li>Dribble</li>
							</a>
							<a href="https://medium.com/@inyamah">
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
