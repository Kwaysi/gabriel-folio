import { Layout } from "@/components/layout";
import { Projects } from "@/components/projects";
import { getFileURL } from "@/utils/helpers";
import { pocketbase } from "@/utils/pocketbase";
import { TProjects, TSections } from "@/utils/types";
import { GetStaticProps } from "next";
import Image from "next/image";

type WorkProps = {
	projects: TProjects[];
	hero: TSections[];
};

export default function Work({ projects, hero }: WorkProps) {
	return (
		<Layout>
			<main className="max-w-6xl mx-auto p-1">
				<div className="flex justify-between items-center space-x-6 relative">
					<div
						className="space-y-4 w-[652px] hero"
						dangerouslySetInnerHTML={{ __html: hero[0].content }}
					/>
					<div>
						<Image
							src={getFileURL(hero[0], hero[0].image)}
							alt="hero"
							width={500}
							height={500}
							className="aspect-square object-cover"
						/>
					</div>
				</div>
			</main>
			<Projects projects={projects} />
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const [data, hero] = await Promise.all([
		pocketbase.collection("projects").getList<TProjects>(1, 5, {
			filter: "featured = true",
		}),
		pocketbase.collection("sections").getList<TSections>(1, 1, {
			filter: "name = 'work'",
		}),
	]);

	return {
		props: {
			hero: hero.items.map((r) => r.export()),
			projects: data.items.map((r) => r.export()),
		},
		revalidate: 60 * 60, // 24 hours
	};
};
