import { Record } from "pocketbase";

export interface TProjects extends Record {
	tag: string;
	name: string;
	slug: string;
	year: string;
	cover: string;
	description: string;
	case_study: TCaseStudy;
}

export interface TExperience extends Record {
	year: string;
	title: string;
	company: string;
	location: string;
}

export interface TAffiliations extends Record {
	id: string;
	name: string;
	year: string;
	title: string;
}

export interface TArchive extends Record {
	image: string;
	class: string;
	landscape: boolean;
}

export interface TProjectData extends Record {
	id: string;
	cover: string;
	background: string;
	project_data: string;
}

export interface TCaseStudy extends Record {
	role: string;
	cover: string;
	content: string;
	duration: string;
	industry: string;
	background: string;
}

export interface TSections extends Record {
	name: string;
	image: string;
	title: string;
	content: string;
}
