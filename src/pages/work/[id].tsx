import { Layout } from "@/components/layout";
import { getFileURL, getRole } from "@/utils/helpers";
import { pocketbase } from "@/utils/pocketbase";
import { TProjects } from "@/utils/types";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

type CaseStudyProps = {
	project: TProjects;
};

export default function CaseStudy({ project }: CaseStudyProps) {
	return (
		<Layout showTitle={false}>
			<div
				className="w-screen h-screen relative flex justify-center items-center bg-cover"
				style={{
					backgroundImage: `url("${getFileURL(
						project.case_study,
						project.case_study.background
					)}")`,
				}}
			>
				<div className="flex capitalize items-center space-x-2 absolute top-32 justify-start max-w-6xl w-full">
					<p>Home</p>
					<p>|</p>
					<p>{project.name}</p>
				</div>
				<div className="space-y-2 relative -top-28 text-center max-w-lg">
					<div className="bg-white bg-opacity-10 rounded-full px-4 py-2 w-min mx-auto">
						{project.year}
					</div>
					<h1 className="text-5xl font-bold">{project.name}</h1>
					<p>{project.description}</p>
				</div>
				<div className="absolute bottom-0 md:w-1/2 aspect-video  w-full">
					<Image
						alt=""
						src={getFileURL(project.case_study, project.case_study.cover)}
						fill
						className="object-cover px-6 md:px-0"
					/>
				</div>
			</div>
			<div className="space-y-16">
				<div className="mt-36 md:flex justify-between max-w-3xl mx-auto px-6 md:px-0 space-y-6 md:space-y-0">
					<div className="space-y-3">
						{project.case_study.role && (
							<>
								<p className="text-xs text-grey">Role</p>
								{getRole(project.case_study.role).map((r) => (
									<span key={r}>{r}</span>
								))}
							</>
						)}
					</div>
					<div className="flex space-x-12">
						<div className="space-y-3">
							<p className="text-xs text-grey">Duration</p>
							<p>{project.case_study.duration}</p>
						</div>
						<div className="space-y-3">
							<p className="text-xs text-grey">Industry</p>
							<p>{project.case_study.industry}</p>
						</div>
					</div>
				</div>
				<div
					className="proj-content"
					dangerouslySetInnerHTML={{
						__html: project?.case_study?.content ?? "",
					}}
				></div>
			</div>
		</Layout>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const id = (params?.id ?? "") as string;

	const {
		expand: { case_study },
		...data
	} = await pocketbase.collection("projects").getOne<TProjects>(id, {
		expand: "case_study",
	});

	return {
		props: {
			// @ts-ignore
			project: { ...data, case_study: case_study.export() },
		},
		revalidate: 60 * 60, // 24 hours
	};
};
