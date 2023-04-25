import { Record } from "pocketbase";

export interface TProjects extends Record {
	name: string;
	tag: string;
	cover: string;
	year: string;
	description: string;
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
}

export interface TProjectData extends Record {
	id: string;
	cover: string;
	background: string;
	project_data: string;
}
