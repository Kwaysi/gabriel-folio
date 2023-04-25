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
						<ul className="flex space-x-10">
							<li>Linkedin</li>
							<li>Dribble</li>
							<li>Medium</li>
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
