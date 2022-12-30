export interface IArticleMetaData {
    author: string[];
    link: string[];
    title: string;
    summary: string;
    tags: string[];
    date: {
        updated: string;
        uploaded: string;
    }
};
export interface IArticle extends IArticleMetaData {
    content: string;
};
