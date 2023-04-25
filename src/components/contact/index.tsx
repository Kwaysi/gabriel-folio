import Image from "next/image";
import line from "../../assets/line.svg";
import btncircle from "../../assets/btn-circle.svg";

export function Contact() {
	return (
		<div className="flex justify-center flex-col text-center items-center space-y-14 py-16" id="contact">
			<div className="space-y-4">
				<p className="text-grey">I’m currently open to new roles and opportunities</p>
				<h2 className="walsh text-4xl">
					Let’s work together on
					<br />
					your project
				</h2>
			</div>

			<Image src={line} alt="line" className="mx-au" />
			<div className="relative cursor-pointer">
				<Image src={btncircle} alt="button" />
				<p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Let&apos;s talk</p>
			</div>
		</div>
	);
}
