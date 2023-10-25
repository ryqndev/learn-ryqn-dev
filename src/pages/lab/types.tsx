export interface Workspace extends Folder {}

export interface File {
    name: string;
    type: string;
    content: string;
}

export interface Folder {
    name: string;
    contents: (File | Folder)[];
}

// export interface FolderWithContent extends Folder {
//     content: "string";
// }
// export interface FolderWithContent {
//     name: string;
//     contents: (File | FolderWithContent)[];
// }
