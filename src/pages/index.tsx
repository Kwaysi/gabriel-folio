import { GetStaticProps } from "next";
import { Hero } from "@/components/hero";
import { Layout } from "@/components/layout";
import { pocketbase } from "@/utils/pocketbase";
import { Projects } from "@/components/projects";
import { TProjects, TSections } from "@/utils/types";

type HomeProps = {
	hero: TSections[];
	projects: TProjects[];
};

export default function Home({ projects, hero }: HomeProps) {
	return (
		<Layout showTitle={false}>
			<main className="max-w-6xl mx-auto p-1">
				<Hero data={hero[0]} />
				<Projects projects={projects} />
			</main>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const [data, hero] = await Promise.all([
		pocketbase.collection("projects").getFullList<TProjects>({
			filter: "featured = true",
		}),
		pocketbase.collection("sections").getList<TSections>(1, 1, {
			filter: "name = 'hero'",
		}),
	]);

	return {
		props: {
			projects: data.map((r) => r.export()),
			hero: hero.items.map((r) => r.export()),
		},
		revalidate: 60 * 60, // 24 hours
	};
};
