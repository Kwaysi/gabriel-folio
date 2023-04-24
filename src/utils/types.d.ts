export type TProjects = {
	id: string;
	name: string;
	tag: string;
	cover: string;
	year: string;
	description: string;
	export: () => void;
};

export type TExperience = {
	id: string;
	company: string;
	location: string;
	title: string;
	year: string;
	export: () => void;
};

export type TAffiliations = {
	id: string;
	name: string;
	title: string;
	year: string;
	export: () => void;
};

export type TArchive = {
	image: string;
	class: string;
	export: () => void;
};

export type TProjectData = {
	id: string;
	cover: string;
	background: string;
	project_data: string;
	export: () => void;
};
