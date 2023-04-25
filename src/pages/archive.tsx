/* eslint-disable @next/next/no-img-element */
import { Layout } from "@/components/layout";
import { getFileURL } from "@/utils/helpers";
import { pocketbase } from "@/utils/pocketbase";
import { TArchive } from "@/utils/types";
import { GetStaticProps } from "next";

type ArchiveProps = {
	archive: TArchive[];
};

export default function Archive({ archive }: ArchiveProps) {
	return (
		<Layout>
			<main className="max-w-6xl mx-auto p-1 space-y-10">
				<div className="max-w-3xl text-lg text-center mx-auto">
					Lorem ipsum dolor sit amet consectetur. Quis nisi malesuada commodo tristique in diam. Dui
					tempus varius nibh sapien ut praesent non lacus porta.
				</div>
				<div className="bg-[#121212] rounded-xl wrapper p-10">
					{archive.map((item) => (
						<div key={item.id} className={`${item.landscape ? "landscaped" : ""} rounded-lg overflow-hidden`}>
							<img
								alt={item.image}
								src={getFileURL(item, item.image)}
								className="w-full h-full object-cover"
							/>
						</div>
					))}
				</div>
			</main>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const archive = await pocketbase.collection("archive").getList<TArchive>(1, 50, {});

	return {
		props: {
			archive: archive.items.map((r) => r.export()),
		},
		revalidate: 60 * 60, // 24 hours
	};
};
