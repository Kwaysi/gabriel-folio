import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Layout } from "@/components/layout";
import { Projects } from "@/components/projects";
import { pocketbase } from "@/utils/pocketbase";
import { GetStaticProps } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type HomeProps = {
	projects: any;
};

export default function Home({ projects }: HomeProps) {
	return (
		<Layout>
			<main className="max-w-6xl mx-auto">
				<Hero />
				<Projects projects={projects} />
				<Contact />
			</main>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const data = await pocketbase.collection("projects").getList(1, 5, {
		filter: "featured = true",
	});

	return {
		props: {
			projects: data.items.map((r) => r.export()),
		},
		revalidate: 60 * 60, // 24 hours
	};
};
