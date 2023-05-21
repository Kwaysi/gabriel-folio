import { Layout } from "@/components/layout";
import { pocketbase } from "@/utils/pocketbase";
import { GetStaticProps } from "next";
import { TAffiliations, TExperience, TProjects, TSections } from "@/utils/types";
import { Experience } from "@/components/about/experience";
import { Affiliations } from "@/components/about/affiliations";
import { Works } from "@/components/about/work";
import Image from "next/image";
import { getFileURL } from "@/utils/helpers";

type HomeProps = {
	about: TSections[];
	moreAbout: TSections[];
	projects: TProjects[];
	experience: TExperience[];
	affiliations: TAffiliations[];
};

export default function Home({ projects, experience, affiliations, about, moreAbout }: HomeProps) {
	return (
		<Layout>
			<main className="max-w-6xl mx-auto p-1">
				<div className="md:flex justify-between items-center space-x-6 relative">
					<div
						className="space-y-4 w-full md:w-[652px] hero"
						dangerouslySetInnerHTML={{ __html: about[0].content }}
					/>
					<div>
						<Image
							src={getFileURL(about[0], about[0].image)}
							alt="hero"
							width={500}
							height={500}
							className="aspect-square object-cover w-full"
						/>
					</div>
				</div>

				<div className="px-6 md:px-0 flex flex-col-reverse md:flex-row justify-between items-center space-y-10 md:space-y-0 md:space-x-6 relative more-about">
					<div>
						<Image
							src={getFileURL(moreAbout[0], moreAbout[0].image)}
							alt="hero"
							width={500}
							height={500}
							className="aspect-square object-cover"
						/>
					</div>
					<div
						className="space-y-4 w-full md:w-[652px] font-medium"
						dangerouslySetInnerHTML={{ __html: moreAbout[0].content }}
					/>
				</div>

				<div className="py-16 space-y-16">
					<Experience experience={experience} />
					<Works works={projects} />
					<Affiliations affiliation={affiliations} />
				</div>
			</main>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const [projects, experience, affiliations, about, moreAbout] = await Promise.all([
		pocketbase.collection("projects").getList<TProjects>(1, 25, {}),
		pocketbase.collection("experience").getList<TExperience>(1, 25, {}),
		pocketbase.collection("affiliations").getList<TAffiliations>(1, 25, {}),
		pocketbase.collection("sections").getList<TSections>(1, 1, {
			filter: "name = 'about'",
		}),
		pocketbase.collection("sections").getList<TSections>(1, 1, {
			filter: "name = 'more-about'",
			$autoCancel: false,
		}),
	]);

	return {
		props: {
			about: about.items.map((r) => r.export()),
			projects: projects.items.map((r) => r.export()),
			moreAbout: moreAbout.items.map((r) => r.export()),
			experience: experience.items.map((r) => r.export()),
			affiliations: affiliations.items.map((r) => r.export()),
		},
		revalidate: 60 * 60, // 24 hours
	};
};
