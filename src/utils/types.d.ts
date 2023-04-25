import { Record } from "pocketbase";

export interface TProjects extends Record {
	name: string;
	tag: string;
	cover: string;
	year: string;
	description: string;
	case_study: TCaseStudy;
}

export interface TExperience extends Record {
	company: string;
	location: string;
	title: string;
	year: string;
}

export interface TAffiliations extends Record {
	id: string;
	name: string;
	title: string;
	year: string;
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
	content: string;
	title: string;
}
