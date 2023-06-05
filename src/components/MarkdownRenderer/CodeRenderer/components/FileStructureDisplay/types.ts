export interface File {
	name: string;
	type: string;
}

export interface Folder {
	name: string;
	contents: (File | Folder)[];
}
