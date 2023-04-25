import { Layout } from "@/components/layout";
import { Projects } from "@/components/projects";
import { pocketbase } from "@/utils/pocketbase";
import { TProjects } from "@/utils/types";
import { GetStaticProps } from "next";

type HomeProps = {
	projects: any;
};

export default function Home({ projects }: HomeProps) {
	return (
		<Layout>
			<Projects projects={projects} />
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const data = await pocketbase.collection("projects").getList<TProjects>(1, 5, {
		filter: "featured = true",
	});

	return {
		props: {
			projects: data.items.map((r) => r.export()),
		},
		revalidate: 60 * 60, // 24 hours
	};
};
