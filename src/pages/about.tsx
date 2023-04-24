import { Layout } from "@/components/layout";
import { Contact } from "@/components/contact";
import { pocketbase } from "@/utils/pocketbase";
import { GetStaticProps } from "next";
import { Inter } from "next/font/google";
import { TAffiliations, TExperience, TProjects } from "@/utils/types";
import { Experience } from "@/components/about/experience";
import { Affiliations } from "@/components/about/affiliations";
import { Works } from "@/components/about/work";

const inter = Inter({ subsets: ["latin"] });

type HomeProps = {
	projects: TProjects[];
	experience: TExperience[];
	affiliations: TAffiliations[];
};

export default function Home({ projects, experience, affiliations }: HomeProps) {
	return (
		<Layout>
			<main className="max-w-6xl mx-auto">
				<div className="py-20 space-y-16">
					<Experience experience={experience} />
					<Works works={projects} />
					<Affiliations affiliation={affiliations} />
				</div>
				<Contact />
			</main>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const [projects, experience, affiliations] = await Promise.all([
		pocketbase.collection("projects").getList<TProjects>(1, 25, {}),
		pocketbase.collection("experience").getList<TExperience>(1, 25, {}),
		pocketbase.collection("affiliations").getList<TAffiliations>(1, 25, {}),
	]);

	return {
		props: {
			projects: projects.items.map((r) => r.export()),
			experience: experience.items.map((r) => r.export()),
			affiliations: affiliations.items.map((r) => r.export()),
		},
		revalidate: 60 * 60, // 24 hours
	};
};
